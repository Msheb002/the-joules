import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const PLAYERS = ["Hamed", "Adel", "Fahmy", "Naguib"];

const CATEGORIES = [
  { value: "engineering", label: "Engineering / الهندسة" },
  { value: "chemistry", label: "Chemistry / الكيمياء" },
  {
    value: "pharmaceuticals",
    label: "Pharmaceuticals / الصيدلة",
  },
  { value: "surveying", label: "Surveying / المساحة" },
  { value: "all", label: "All Types / جميع التخصصات" },
];

const PACKAGE_SIZES = [10, 20, 40, 60, 80, 100];

const ROOM_SESSION_KEY = "joules-room-test-session";
const COMPETITION_SESSION_KEY = "joules-competition-session";
const COMPETITION_LAUNCH_KEY = "joules-launch-competition";

function readStoredSession(storageKey) {
  try {
    const storedValue = localStorage.getItem(storageKey);

    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error(
      `Unable to read localStorage key ${storageKey}:`,
      error
    );

    return null;
  }
}

function RoomConnectionTest() {
  const navigate = useNavigate();

  const [createPlayer, setCreatePlayer] = useState("Adel");
  const [joinPlayer, setJoinPlayer] = useState("Hamed");
  const [joinRoomCode, setJoinRoomCode] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("engineering");

  const [selectedPackageSize, setSelectedPackageSize] =
    useState(10);

  const [session, setSession] = useState(() =>
    readStoredSession(ROOM_SESSION_KEY)
  );

  const [roomState, setRoomState] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isWatchingRoom, setIsWatchingRoom] = useState(false);

  const [showRoomEntryOptions, setShowRoomEntryOptions] =
    useState(false);

  const redirectStartedRef = useRef(false);
  const previousRoomStatusRef = useRef(null);

  const currentPlayer = useMemo(() => {
    return roomState?.players?.find(
      (player) => player.playerName === session?.playerName
    );
  }, [roomState, session]);

  const isHost =
    Boolean(session) &&
    roomState?.room?.hostPlayer === session?.playerName;

  const roomIsWaiting =
    roomState?.room?.status === "waiting";

  const joinedPlayerCount =
    roomState?.players?.length || 0;

  const minimumPlayersReached =
    joinedPlayerCount >= 2 &&
    joinedPlayerCount <= 4;

  const adelJoined =
    roomState?.players?.some(
      (player) => player.playerName === "Adel"
    ) || false;

  const allJoinedPlayersReady =
    minimumPlayersReached &&
    roomState.players.every(
      (player) =>
        player.isReady &&
        player.selectedCategory &&
        player.packageSize
    );

  const canStartCompetition =
    minimumPlayersReached &&
    adelJoined &&
    allJoinedPlayersReady;

  const saveRoomSession = (newSession) => {
    setSession(newSession);

    localStorage.setItem(
      ROOM_SESSION_KEY,
      JSON.stringify(newSession)
    );
  };

  const clearMessages = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  const getErrorMessage = (
    error,
    fallbackMessage = "An unexpected error occurred."
  ) => {
    if (error?.message) {
      return error.message;
    }

    return fallbackMessage;
  };

  const loadRoomStateForSession = async (
    activeSession,
    showSuccessMessage = false
  ) => {
    if (!activeSession) {
      throw new Error("Create or join a room first.");
    }

    const { data, error } = await supabase.rpc(
      "get_competition_room_state",
      {
        p_room_code: activeSession.roomCode,
        p_player_token: activeSession.playerToken,
      }
    );

    if (error) {
      throw error;
    }

    setRoomState(data);

    if (showSuccessMessage) {
      setSuccessMessage("Room state loaded successfully.");
    }

    return data;
  };

  const prepareCompetitionSession = (
    activeSession,
    latestRoomState
  ) => {
    const activePlayer = latestRoomState?.players?.find(
      (player) =>
        player.playerName === activeSession.playerName
    );

    if (
      !activePlayer?.selectedCategory ||
      !activePlayer?.packageSize
    ) {
      throw new Error(
        "Your room selection is incomplete. Select a category and package before starting."
      );
    }

    const competitionSession = {
      roomCode: activeSession.roomCode,
      roomId: activeSession.roomId,
      playerId: activeSession.playerId,
      playerToken: activeSession.playerToken,
      playerName: activeSession.playerName,
      hostPlayer: latestRoomState.room?.hostPlayer,
      selectedCategory: activePlayer.selectedCategory,
      packageSize: activePlayer.packageSize,
      roomStatus: latestRoomState.room?.status,
    };

    localStorage.setItem(
      COMPETITION_SESSION_KEY,
      JSON.stringify(competitionSession)
    );

    localStorage.setItem(
      COMPETITION_LAUNCH_KEY,
      "true"
    );

    return competitionSession;
  };

  const enterCompetitionQuiz = (latestRoomState = roomState) => {
    if (!session || !latestRoomState) {
      setErrorMessage(
        "The competition session is not available."
      );
      return;
    }

    try {
      prepareCompetitionSession(session, latestRoomState);
      navigate("/games");
    } catch (error) {
      setErrorMessage(
        getErrorMessage(
          error,
          "Unable to open the competition quiz."
        )
      );
    }
  };

  const createRoom = async () => {
    setIsLoading(true);
    clearMessages();
    setRoomState(null);
    redirectStartedRef.current = false;
    previousRoomStatusRef.current = null;

    try {
      const { data, error } = await supabase.rpc(
        "create_competition_room",
        {
          p_host_player: createPlayer,
        }
      );

      if (error) {
        throw error;
      }

      const createdRoom =
        Array.isArray(data) && data.length > 0
          ? data[0]
          : data;

      if (!createdRoom) {
        throw new Error(
          "Supabase did not return the created room."
        );
      }

      const newSession = {
        roomCode: createdRoom.room_code,
        roomId: createdRoom.room_id,
        playerId: createdRoom.player_id,
        playerToken: createdRoom.player_token,
        playerName: createdRoom.player_name,
        roomStatus: createdRoom.room_status,
      };

      saveRoomSession(newSession);
      setShowRoomEntryOptions(false);
      setJoinRoomCode(createdRoom.room_code);

      await loadRoomStateForSession(newSession);

      setSuccessMessage(
        `Room ${createdRoom.room_code} created successfully.`
      );
    } catch (error) {
      console.error("Create room error:", error);

      setErrorMessage(
        getErrorMessage(error, "Unable to create the room.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const joinRoom = async () => {
    const formattedRoomCode =
      joinRoomCode.trim().toUpperCase();

    if (!formattedRoomCode) {
      setErrorMessage("Please enter the room code.");
      return;
    }

    setIsLoading(true);
    clearMessages();
    setRoomState(null);
    redirectStartedRef.current = false;
    previousRoomStatusRef.current = null;

    try {
      const { data, error } = await supabase.rpc(
        "join_competition_room",
        {
          p_room_code: formattedRoomCode,
          p_player: joinPlayer,
        }
      );

      if (error) {
        throw error;
      }

      const joinedRoom =
        Array.isArray(data) && data.length > 0
          ? data[0]
          : data;

      if (!joinedRoom) {
        throw new Error(
          "Supabase did not return the joined room."
        );
      }

      const newSession = {
        roomCode: joinedRoom.room_code,
        roomId: joinedRoom.room_id,
        playerId: joinedRoom.player_id,
        playerToken: joinedRoom.player_token,
        playerName: joinedRoom.player_name,
        roomStatus: joinedRoom.room_status,
      };

      saveRoomSession(newSession);
      setShowRoomEntryOptions(false);

      await loadRoomStateForSession(newSession);

      setSuccessMessage(
        `${joinedRoom.player_name} joined ${joinedRoom.room_code} successfully.`
      );
    } catch (error) {
      console.error("Join room error:", error);

      setErrorMessage(
        getErrorMessage(error, "Unable to join the room.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const refreshRoom = async () => {
    if (!session) {
      setErrorMessage("Create or join a room first.");
      return;
    }

    setIsLoading(true);
    clearMessages();

    try {
      await loadRoomStateForSession(session, true);
    } catch (error) {
      console.error("Refresh room error:", error);

      setErrorMessage(
        getErrorMessage(error, "Unable to refresh the room.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const saveSelection = async () => {
    if (!session) {
      setErrorMessage("Create or join a room first.");
      return;
    }

    setIsLoading(true);
    clearMessages();

    try {
      const { error } = await supabase.rpc(
        "update_player_selection",
        {
          p_room_code: session.roomCode,
          p_player_token: session.playerToken,
          p_category: selectedCategory,
          p_package_size: Number(selectedPackageSize),
        }
      );

      if (error) {
        throw error;
      }

      await loadRoomStateForSession(session);

      setSuccessMessage(
        "Selection saved. Your ready status was reset to No."
      );
    } catch (error) {
      console.error("Save selection error:", error);

      setErrorMessage(
        getErrorMessage(
          error,
          "Unable to save your selection."
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updateReadyStatus = async (isReady) => {
    if (!session) {
      setErrorMessage("Create or join a room first.");
      return;
    }

    setIsLoading(true);
    clearMessages();

    try {
      const { error } = await supabase.rpc(
        "set_player_ready",
        {
          p_room_code: session.roomCode,
          p_player_token: session.playerToken,
          p_is_ready: isReady,
        }
      );

      if (error) {
        throw error;
      }

      await loadRoomStateForSession(session);

      setSuccessMessage(
        isReady
          ? "You are now ready."
          : "You are no longer ready."
      );
    } catch (error) {
      console.error("Ready status error:", error);

      setErrorMessage(
        getErrorMessage(
          error,
          "Unable to update your ready status."
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const startCompetition = async () => {
    if (!session) {
      setErrorMessage("Create or join a room first.");
      return;
    }

    setIsLoading(true);
    clearMessages();

    try {
      const { error } = await supabase.rpc(
        "start_competition",
        {
          p_room_code: session.roomCode,
          p_player_token: session.playerToken,
        }
      );

      if (error) {
        throw error;
      }

      const latestRoomState =
        await loadRoomStateForSession(session);

      setSuccessMessage(
        "Competition started successfully. Opening the quiz..."
      );

      if (!redirectStartedRef.current) {
        redirectStartedRef.current = true;

        window.setTimeout(() => {
          enterCompetitionQuiz(latestRoomState);
        }, 800);
      }
    } catch (error) {
      console.error("Start competition error:", error);

      setErrorMessage(
        getErrorMessage(
          error,
          "Unable to start the competition."
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const leaveRoom = async () => {
    if (!session) {
      return;
    }

    setIsLoading(true);
    clearMessages();

    try {
      const { error } = await supabase.rpc(
        "leave_competition_room",
        {
          p_room_code: session.roomCode,
          p_player_token: session.playerToken,
        }
      );

      if (error) {
        throw error;
      }

      localStorage.removeItem(ROOM_SESSION_KEY);
      localStorage.removeItem(COMPETITION_SESSION_KEY);
    localStorage.removeItem(COMPETITION_LAUNCH_KEY);

      setSession(null);
      setRoomState(null);

      setSuccessMessage("You left the room.");
    } catch (error) {
      console.error("Leave room error:", error);

      setErrorMessage(
        getErrorMessage(error, "Unable to leave the room.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearLocalSession = () => {
    localStorage.removeItem(ROOM_SESSION_KEY);
    localStorage.removeItem(COMPETITION_SESSION_KEY);
    localStorage.removeItem(COMPETITION_LAUNCH_KEY);

    setSession(null);
    setRoomState(null);
    setShowRoomEntryOptions(false);

    redirectStartedRef.current = false;
    previousRoomStatusRef.current = null;

    clearMessages();

    setSuccessMessage("Local room session cleared.");
  };

  const openRoomEntryOptions = () => {
    /*
      This only clears the saved session from this browser.
      It does not remove the player from the existing room
      and does not delete the room from Supabase.
    */
    localStorage.removeItem(ROOM_SESSION_KEY);
    localStorage.removeItem(COMPETITION_SESSION_KEY);
    localStorage.removeItem(COMPETITION_LAUNCH_KEY);

    setSession(null);
    setRoomState(null);
    setShowRoomEntryOptions(true);

    redirectStartedRef.current = false;
    previousRoomStatusRef.current = null;

    clearMessages();

    setSuccessMessage(
      "Choose Create Room or Join Room for this browser."
    );
  };

  useEffect(() => {
    if (!session) {
      setIsWatchingRoom(false);
      return undefined;
    }

    let isMounted = true;
    let isRequestRunning = false;

    const pollRoomState = async () => {
      if (!isMounted || isRequestRunning) {
        return;
      }

      isRequestRunning = true;

      try {
        const latestRoomState =
          await loadRoomStateForSession(session);

        const latestStatus =
          latestRoomState?.room?.status || null;

        const previousStatus =
          previousRoomStatusRef.current;

        /*
          Redirect only when this open room page observes
          an actual transition from waiting to active.

          If the player intentionally opens an already-active
          room from the Games page, keep them here so they can
          review the room and use the Enter Competition Quiz
          button instead of being immediately sent back.
        */
        if (
          previousStatus === "waiting" &&
          latestStatus === "active" &&
          !redirectStartedRef.current
        ) {
          redirectStartedRef.current = true;

          prepareCompetitionSession(
            session,
            latestRoomState
          );

          navigate("/games");
        }

        previousRoomStatusRef.current =
          latestStatus;
      } catch (error) {
        console.error("Room watch error:", error);
      } finally {
        isRequestRunning = false;
      }
    };

    setIsWatchingRoom(true);
    pollRoomState();

    const intervalId = window.setInterval(
      pollRoomState,
      2000
    );

    return () => {
      isMounted = false;
      setIsWatchingRoom(false);
      window.clearInterval(intervalId);
    };
  }, [session, navigate]);

  useEffect(() => {
    if (!currentPlayer) {
      return;
    }

    if (currentPlayer.selectedCategory) {
      setSelectedCategory(
        currentPlayer.selectedCategory
      );
    }

    if (currentPlayer.packageSize) {
      setSelectedPackageSize(
        currentPlayer.packageSize
      );
    }
  }, [currentPlayer]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Competition Room
        </h1>

        <p style={styles.description}>
          Create or join a shared room, select your quiz,
          become ready, and wait for the host to start the
          competition.
        </p>

        {(!session || showRoomEntryOptions) && (
          <>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>
                1. Create Room
              </h2>

              <label
                htmlFor="create-player"
                style={styles.label}
              >
                Host player
              </label>

              <select
                id="create-player"
                value={createPlayer}
                onChange={(event) =>
                  setCreatePlayer(event.target.value)
                }
                style={styles.input}
              >
                {PLAYERS.map((player) => (
                  <option
                    key={player}
                    value={player}
                  >
                    {player}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={createRoom}
                disabled={isLoading}
                style={{
                  ...styles.primaryButton,
                  ...(isLoading
                    ? styles.disabledButton
                    : {}),
                }}
              >
                {isLoading
                  ? "Creating..."
                  : "Create Room"}
              </button>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>
                2. Join Room
              </h2>

              <label
                htmlFor="join-room-code"
                style={styles.label}
              >
                Room code
              </label>

              <input
                id="join-room-code"
                type="text"
                value={joinRoomCode}
                onChange={(event) =>
                  setJoinRoomCode(
                    event.target.value.toUpperCase()
                  )
                }
                placeholder="JOULES-ABC123"
                style={styles.input}
              />

              <label
                htmlFor="join-player"
                style={styles.label}
              >
                Joining player
              </label>

              <select
                id="join-player"
                value={joinPlayer}
                onChange={(event) =>
                  setJoinPlayer(event.target.value)
                }
                style={styles.input}
              >
                {PLAYERS.map((player) => (
                  <option
                    key={player}
                    value={player}
                  >
                    {player}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={joinRoom}
                disabled={isLoading}
                style={{
                  ...styles.primaryButton,
                  ...(isLoading
                    ? styles.disabledButton
                    : {}),
                }}
              >
                {isLoading ? "Joining..." : "Join Room"}
              </button>
            </section>
          </>
        )}

        {errorMessage && (
          <div style={styles.errorBox}>
            <strong>Error:</strong> {errorMessage}
          </div>
        )}

        {successMessage && (
          <div style={styles.successBox}>
            {successMessage}
          </div>
        )}

        {session && (
          <>
            <section style={styles.switchRoomBox}>
              <div>
                <h2 style={styles.sectionTitle}>
                  Saved Room Found
                </h2>

                <p style={styles.switchRoomText}>
                  This browser already has a saved session for
                  <strong> {session.playerName}</strong> in room
                  <strong> {session.roomCode}</strong>.
                </p>
              </div>

              <button
                type="button"
                onClick={openRoomEntryOptions}
                disabled={isLoading}
                style={styles.switchRoomButton}
              >
                Join or Create Another Room
              </button>
            </section>

            <section style={styles.sessionBox}>
              <h2 style={styles.sectionTitle}>
                Current Session
              </h2>

            <div style={styles.sessionDetailsGrid}>
              <p>
                <strong>Room code:</strong>{" "}
                {session.roomCode}
              </p>

              <p>
                <strong>Player:</strong>{" "}
                {session.playerName}
              </p>

              <p>
                <strong>Host:</strong>{" "}
                {roomState?.room?.hostPlayer ||
                  "Loading..."}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {roomState?.room?.status ||
                  session.roomStatus}
              </p>
            </div>

            <p style={styles.privateText}>
              Room updates are checked automatically every
              two seconds.
              {isWatchingRoom
                ? " Live room watch is active."
                : ""}
            </p>

            <div style={styles.buttonRow}>
              <button
                type="button"
                onClick={refreshRoom}
                disabled={isLoading}
                style={styles.secondaryButton}
              >
                Refresh Room
              </button>

              <button
                type="button"
                onClick={leaveRoom}
                disabled={
                  isLoading || !roomIsWaiting
                }
                style={{
                  ...styles.dangerButton,
                  ...(!roomIsWaiting
                    ? styles.disabledButton
                    : {}),
                }}
              >
                Leave Room
              </button>

              <button
                type="button"
                onClick={clearLocalSession}
                disabled={isLoading}
                style={styles.secondaryButton}
              >
                Clear Local Session
              </button>
            </div>
          </section>
          </>
        )}

        {session &&
          roomState &&
          roomIsWaiting && (
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>
                3. Select Your Quiz
              </h2>

              <label
                htmlFor="quiz-category"
                style={styles.label}
              >
                Category
              </label>

              <select
                id="quiz-category"
                value={selectedCategory}
                onChange={(event) =>
                  setSelectedCategory(
                    event.target.value
                  )
                }
                style={styles.input}
              >
                {CATEGORIES.map((category) => (
                  <option
                    key={category.value}
                    value={category.value}
                  >
                    {category.label}
                  </option>
                ))}
              </select>

              <label
                htmlFor="package-size"
                style={styles.label}
              >
                Number of questions
              </label>

              <select
                id="package-size"
                value={selectedPackageSize}
                onChange={(event) =>
                  setSelectedPackageSize(
                    Number(event.target.value)
                  )
                }
                style={styles.input}
              >
                {PACKAGE_SIZES.map((packageSize) => (
                  <option
                    key={packageSize}
                    value={packageSize}
                  >
                    {packageSize} questions
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={saveSelection}
                disabled={isLoading}
                style={{
                  ...styles.primaryButton,
                  ...(isLoading
                    ? styles.disabledButton
                    : {}),
                }}
              >
                Save Selection
              </button>

              <div style={styles.readyArea}>
                <p>
                  <strong>Saved category:</strong>{" "}
                  {currentPlayer?.selectedCategory ||
                    "Not selected"}
                </p>

                <p>
                  <strong>Saved package:</strong>{" "}
                  {currentPlayer?.packageSize
                    ? `${currentPlayer.packageSize} questions`
                    : "Not selected"}
                </p>

                <p>
                  <strong>Ready:</strong>{" "}
                  {currentPlayer?.isReady
                    ? "Yes"
                    : "No"}
                </p>

                <div style={styles.buttonRow}>
                  <button
                    type="button"
                    onClick={() =>
                      updateReadyStatus(true)
                    }
                    disabled={
                      isLoading ||
                      !currentPlayer?.selectedCategory ||
                      !currentPlayer?.packageSize ||
                      currentPlayer?.isReady
                    }
                    style={{
                      ...styles.readyButton,
                      ...(
                        isLoading ||
                        !currentPlayer?.selectedCategory ||
                        !currentPlayer?.packageSize ||
                        currentPlayer?.isReady
                          ? styles.disabledButton
                          : {}
                      ),
                    }}
                  >
                    I Am Ready
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      updateReadyStatus(false)
                    }
                    disabled={
                      isLoading ||
                      !currentPlayer?.isReady
                    }
                    style={{
                      ...styles.secondaryButton,
                      ...(
                        isLoading ||
                        !currentPlayer?.isReady
                          ? styles.disabledButton
                          : {}
                      ),
                    }}
                  >
                    Not Ready
                  </button>
                </div>
              </div>
            </section>
          )}

        {roomState && (
          <section style={styles.roomStateBox}>
            <h2 style={styles.sectionTitle}>
              Room State
            </h2>

            <p>
              <strong>Room:</strong>{" "}
              {roomState.room?.roomCode}
            </p>

            <p>
              <strong>Host:</strong>{" "}
              {roomState.room?.hostPlayer}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {roomState.room?.status}
            </p>

            <h3 style={styles.playersTitle}>
              Players (
              {roomState.players?.length || 0}/4)
            </h3>

            <div style={styles.playersGrid}>
              {roomState.players?.map((player) => (
                <div
                  key={player.id}
                  style={styles.playerCard}
                >
                  <strong style={styles.playerName}>
                    {player.playerName}
                    {player.playerName ===
                    roomState.room?.hostPlayer
                      ? " — Host"
                      : ""}
                  </strong>

                  <span dir="rtl">
                    {player.arabicName}
                  </span>

                  <small>
                    Category:{" "}
                    {player.selectedCategory ||
                      "Not selected"}
                  </small>

                  <small>
                    Package:{" "}
                    {player.packageSize
                      ? `${player.packageSize} questions`
                      : "Not selected"}
                  </small>

                  <span
                    style={{
                      ...styles.statusBadge,
                      ...(player.isReady
                        ? styles.readyStatus
                        : styles.notReadyStatus),
                    }}
                  >
                    {player.isReady
                      ? "Ready"
                      : "Not ready"}
                  </span>
                </div>
              ))}
            </div>

            {isHost && roomIsWaiting && (
              <div style={styles.hostArea}>
                <h3 style={styles.playersTitle}>
                  Host Controls
                </h3>

                <p>
                  Players joined:{" "}
                  <strong>
                    {joinedPlayerCount}/4
                  </strong>
                </p>

                <p>
                  Minimum of two players reached:{" "}
                  <strong>
                    {minimumPlayersReached
                      ? "Yes"
                      : "No"}
                  </strong>
                </p>

                <p>
                  Adel joined as the baseline player:{" "}
                  <strong>
                    {adelJoined
                      ? "Yes"
                      : "No"}
                  </strong>
                </p>

                <p>
                  All joined players ready:{" "}
                  <strong>
                    {allJoinedPlayersReady
                      ? "Yes"
                      : "No"}
                  </strong>
                </p>

                {!adelJoined && (
                  <p style={styles.hostWarning}>
                    Adel must join because his score is
                    the baseline for the competition.
                  </p>
                )}

                <button
                  type="button"
                  onClick={startCompetition}
                  disabled={
                    isLoading ||
                    !canStartCompetition
                  }
                  style={{
                    ...styles.startButton,
                    ...(
                      isLoading ||
                      !canStartCompetition
                        ? styles.disabledButton
                        : {}
                    ),
                  }}
                >
                  Start Competition
                </button>
              </div>
            )}

            {roomState.room?.status ===
              "active" && (
              <div style={styles.activeArea}>
                <p style={styles.activeText}>
                  Competition is active. You will be
                  redirected to the quiz automatically.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    enterCompetitionQuiz(roomState)
                  }
                  style={styles.startButton}
                >
                  Enter Competition Quiz
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "45px 20px",
    background:
      "linear-gradient(135deg, #bfbfbf, #8f8f8f)",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  container: {
    width: "100%",
    maxWidth: "950px",
    margin: "0 auto",
    padding: "30px",
    background: "#1c1c1c",
    color: "#ffffff",
    borderRadius: "22px",
    boxSizing: "border-box",
  },

  title: {
    marginTop: 0,
    color: "#ffd166",
  },

  description: {
    color: "#d3d3d3",
    lineHeight: 1.6,
  },

  section: {
    marginTop: "25px",
    padding: "20px",
    background:
      "rgba(255, 255, 255, 0.06)",
    borderRadius: "15px",
  },

  sectionTitle: {
    marginTop: 0,
    color: "#ffd166",
  },

  label: {
    display: "block",
    margin: "12px 0 7px",
    fontWeight: "700",
  },

  input: {
    width: "100%",
    padding: "13px",
    marginBottom: "13px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  primaryButton: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#ffd166",
    color: "#111111",
    fontSize: "16px",
    fontWeight: "900",
    cursor: "pointer",
  },

  secondaryButton: {
    padding: "12px 17px",
    border: "none",
    borderRadius: "9px",
    background:
      "rgba(255, 255, 255, 0.13)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "700",
  },

  dangerButton: {
    padding: "12px 17px",
    border: "none",
    borderRadius: "9px",
    background:
      "rgba(255, 80, 80, 0.2)",
    color: "#ffaaaa",
    cursor: "pointer",
    fontWeight: "700",
  },

  readyButton: {
    padding: "12px 17px",
    border: "none",
    borderRadius: "9px",
    background: "#68d391",
    color: "#102817",
    cursor: "pointer",
    fontWeight: "900",
  },

  startButton: {
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    background: "#ffd166",
    color: "#111111",
    cursor: "pointer",
    fontWeight: "900",
    fontSize: "17px",
  },

  disabledButton: {
    opacity: 0.4,
    cursor: "not-allowed",
  },

  errorBox: {
    marginTop: "20px",
    padding: "14px",
    borderRadius: "10px",
    background:
      "rgba(255, 80, 80, 0.15)",
    color: "#ff9b9b",
  },

  successBox: {
    marginTop: "20px",
    padding: "14px",
    borderRadius: "10px",
    background:
      "rgba(80, 200, 120, 0.15)",
    color: "#8ce6a9",
  },

  switchRoomBox: {
    marginTop: "25px",
    padding: "20px",
    background:
      "rgba(93, 173, 226, 0.12)",
    border: "1px solid rgba(93, 173, 226, 0.35)",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  },

  switchRoomText: {
    margin: 0,
    color: "#d8ecff",
    lineHeight: 1.6,
  },

  switchRoomButton: {
    padding: "13px 18px",
    border: "none",
    borderRadius: "10px",
    background: "#5dade2",
    color: "#102433",
    cursor: "pointer",
    fontWeight: "900",
  },

  sessionBox: {
    marginTop: "25px",
    padding: "20px",
    background:
      "rgba(255, 209, 102, 0.1)",
    borderRadius: "15px",
  },

  sessionDetailsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "5px 20px",
  },

  privateText: {
    color: "#bdbdbd",
    fontSize: "13px",
  },

  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "18px",
  },

  readyArea: {
    marginTop: "20px",
    padding: "16px",
    background:
      "rgba(255, 255, 255, 0.06)",
    borderRadius: "12px",
  },

  roomStateBox: {
    marginTop: "25px",
    padding: "20px",
    background:
      "rgba(255, 255, 255, 0.06)",
    borderRadius: "15px",
  },

  playersTitle: {
    color: "#ffd166",
  },

  playersGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(185px, 1fr))",
    gap: "12px",
  },

  playerCard: {
    padding: "15px",
    background:
      "rgba(255, 255, 255, 0.08)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  playerName: {
    color: "#ffd166",
  },

  statusBadge: {
    width: "fit-content",
    marginTop: "5px",
    padding: "5px 9px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "900",
  },

  readyStatus: {
    background:
      "rgba(104, 211, 145, 0.18)",
    color: "#8ce6a9",
  },

  notReadyStatus: {
    background:
      "rgba(255, 209, 102, 0.13)",
    color: "#ffd166",
  },

  hostArea: {
    marginTop: "22px",
    padding: "18px",
    background:
      "rgba(255, 209, 102, 0.1)",
    borderRadius: "12px",
  },

  hostWarning: {
    padding: "12px",
    background:
      "rgba(255, 80, 80, 0.14)",
    color: "#ffaaaa",
    borderRadius: "10px",
    fontWeight: "800",
  },

  activeArea: {
    marginTop: "20px",
    padding: "16px",
    background:
      "rgba(104, 211, 145, 0.15)",
    borderRadius: "12px",
  },

  activeText: {
    color: "#8ce6a9",
    fontWeight: "800",
  },
};

export default RoomConnectionTest;