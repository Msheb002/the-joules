import { useState } from "react";
import { Link } from "react-router-dom";
import "./games.css";

import engineeringImage from "../assets/Engineering.jpg";
import chemistryImage from "../assets/chemistry.jpg";
import pharmaceuticalsImage from "../assets/pharmaceuticals.jpg";
import surveyingImage from "../assets/surveying.jpg";

import engineeringQuestionsImport from "../data/questions/engineeringQuestions.js";
import chemistryQuestionsImport from "../data/questions/chemistryQuestions.js";
import pharmaceuticalQuestionsImport from "../data/questions/pharmaceuticalQuestions.js";
import surveyingQuestionsImport from "../data/questions/surveyingQuestions.js";

/*
  This helper ensures that each imported question bank
  is converted into a valid array.
*/
const normalizeQuestionBank = (importedBank) => {
  if (Array.isArray(importedBank)) {
    return importedBank;
  }

  if (
    importedBank &&
    Array.isArray(importedBank.default)
  ) {
    return importedBank.default;
  }

  if (
    importedBank &&
    Array.isArray(importedBank.questions)
  ) {
    return importedBank.questions;
  }

  return [];
};

const engineeringQuestions = normalizeQuestionBank(
  engineeringQuestionsImport
);

const chemistryQuestions = normalizeQuestionBank(
  chemistryQuestionsImport
);

const pharmaceuticalQuestions = normalizeQuestionBank(
  pharmaceuticalQuestionsImport
);

const surveyingQuestions = normalizeQuestionBank(
  surveyingQuestionsImport
);

const QUESTION_BANKS = {
  engineering: engineeringQuestions,
  chemistry: chemistryQuestions,
  pharmaceuticals: pharmaceuticalQuestions,
  surveying: surveyingQuestions,
};

const QUESTION_PACKAGES = [10, 20, 40, 60, 80, 100];

const GAMES = [
  {
    id: 1,
    name: "Engineering Questions",
    arabicName: "أسئلة الهندسة",
    image: engineeringImage,
    type: "engineering",
  },
  {
    id: 2,
    name: "Chemistry Questions",
    arabicName: "أسئلة الكيمياء",
    image: chemistryImage,
    type: "chemistry",
  },
  {
    id: 3,
    name: "Pharmaceutical Questions",
    arabicName: "أسئلة الصيدلة",
    image: pharmaceuticalsImage,
    type: "pharmaceuticals",
  },
  {
    id: 4,
    name: "Surveying Questions",
    arabicName: "أسئلة المساحة",
    image: surveyingImage,
    type: "surveying",
  },
  {
    id: 5,
    name: "All Types Questions",
    arabicName: "أسئلة من جميع التخصصات",
    type: "all",
  },
];

function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const [playerName, setPlayerName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const [showPackageSelection, setShowPackageSelection] =
    useState(false);

  const [selectedPackageSize, setSelectedPackageSize] =
    useState(null);

  const [quizStarted, setQuizStarted] = useState(false);
  const [roundQuestions, setRoundQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const shuffleArray = (items) => {
    const shuffledItems = [...items];

    for (
      let currentIndex = shuffledItems.length - 1;
      currentIndex > 0;
      currentIndex -= 1
    ) {
      const randomIndex = Math.floor(
        Math.random() * (currentIndex + 1)
      );

      [
        shuffledItems[currentIndex],
        shuffledItems[randomIndex],
      ] = [
        shuffledItems[randomIndex],
        shuffledItems[currentIndex],
      ];
    }

    return shuffledItems;
  };

  const shuffleQuestionOptions = (question) => {
    if (
      !question ||
      !Array.isArray(question.options) ||
      question.options.length === 0
    ) {
      return question;
    }

    const optionsWithCorrectStatus = question.options.map(
      (option, index) => ({
        ...option,
        isCorrect: index === question.correctAnswer,
      })
    );

    const shuffledOptions = shuffleArray(
      optionsWithCorrectStatus
    );

    const newCorrectAnswerIndex = shuffledOptions.findIndex(
      (option) => option.isCorrect
    );

    return {
      ...question,

      options: shuffledOptions.map(
        ({ isCorrect, ...option }) => option
      ),

      correctAnswer: newCorrectAnswerIndex,
    };
  };

  const getBankForSelectedGame = (gameType) => {
    if (gameType === "all") {
      return [
        ...QUESTION_BANKS.engineering,
        ...QUESTION_BANKS.chemistry,
        ...QUESTION_BANKS.pharmaceuticals,
        ...QUESTION_BANKS.surveying,
      ];
    }

    return QUESTION_BANKS[gameType] || [];
  };

  const getSelectedBankSize = () => {
    if (!selectedGame) {
      return 0;
    }

    return getBankForSelectedGame(selectedGame.type).length;
  };

  const createRandomRound = (gameType, packageSize) => {
    const completeBank =
      getBankForSelectedGame(gameType);

    if (!Array.isArray(completeBank)) {
      throw new Error(
        `The ${gameType} question bank is not valid.`
      );
    }

    if (completeBank.length === 0) {
      throw new Error(
        `No questions were loaded for ${gameType}. Please check the corresponding question file.`
      );
    }

    if (completeBank.length < packageSize) {
      throw new Error(
        `This category contains only ${completeBank.length} questions. Please select a smaller package.`
      );
    }

    const validQuestions = completeBank.filter(
      (question) =>
        question &&
        question.id &&
        Array.isArray(question.options) &&
        question.options.length > 0 &&
        Number.isInteger(question.correctAnswer)
    );

    if (validQuestions.length === 0) {
      throw new Error(
        `Questions were found, but their format is not valid for ${gameType}.`
      );
    }

    if (validQuestions.length < packageSize) {
      throw new Error(
        `Only ${validQuestions.length} valid questions are available in this category.`
      );
    }

    const randomlySelectedQuestions = shuffleArray(
      validQuestions
    ).slice(0, packageSize);

    return randomlySelectedQuestions.map((question) =>
      shuffleQuestionOptions(question)
    );
  };

  const resetQuizData = () => {
    setSelectedPackageSize(null);
    setQuizStarted(false);
    setRoundQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setFinalScore(0);
  };

  const openLoginPopup = (game) => {
    setSelectedGame(game);
    setPlayerName("");
    setPassword("");
    setFormError("");
    setShowPackageSelection(false);

    resetQuizData();
  };

  const closeAllPopups = () => {
    setSelectedGame(null);
    setPlayerName("");
    setPassword("");
    setFormError("");
    setShowPackageSelection(false);

    resetQuizData();
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const trimmedName = playerName.trim();

    const englishNamePattern =
      /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

    if (!trimmedName) {
      setFormError("Please enter your name.");
      return;
    }

    if (!englishNamePattern.test(trimmedName)) {
      setFormError(
        "Please enter your name using English letters only."
      );
      return;
    }

    if (!password.trim()) {
      setFormError("Please enter your password.");
      return;
    }

    if (password.length < 4) {
      setFormError(
        "Password must contain at least 4 characters."
      );
      return;
    }

    const selectedBank =
      getBankForSelectedGame(selectedGame.type);

    if (selectedBank.length === 0) {
      setFormError(
        `No questions were loaded for ${selectedGame.name}.`
      );
      return;
    }

    setPlayerName(trimmedName);
    setFormError("");
    setShowPackageSelection(true);
  };

  const handlePackageSelection = (packageSize) => {
    if (!selectedGame) {
      setFormError("Please select a game category.");
      return;
    }

    try {
      const generatedRound = createRandomRound(
        selectedGame.type,
        packageSize
      );

      setSelectedPackageSize(packageSize);
      setRoundQuestions(generatedRound);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setQuizCompleted(false);
      setFinalScore(0);
      setShowPackageSelection(false);
      setQuizStarted(true);
      setFormError("");
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to start the quiz."
      );
    }
  };

  const returnToLogin = () => {
    setShowPackageSelection(false);
    setFormError("");
  };

  const handleAnswerSelection = (optionIndex) => {
    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (
      selectedAnswers[currentQuestionIndex] === undefined
    ) {
      return;
    }

    if (
      currentQuestionIndex <
      roundQuestions.length - 1
    ) {
      setCurrentQuestionIndex(
        (previousIndex) => previousIndex + 1
      );
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(
        (previousIndex) => previousIndex - 1
      );
    }
  };

  const handleSubmitQuiz = () => {
    if (
      selectedAnswers[currentQuestionIndex] === undefined
    ) {
      return;
    }

    let calculatedScore = 0;

    roundQuestions.forEach(
      (question, questionIndex) => {
        if (
          selectedAnswers[questionIndex] ===
          question.correctAnswer
        ) {
          calculatedScore += 1;
        }
      }
    );

    setFinalScore(calculatedScore);
    setQuizCompleted(true);
  };

  const restartWithNewQuestions = () => {
    if (!selectedGame || !selectedPackageSize) {
      return;
    }

    try {
      const generatedRound = createRandomRound(
        selectedGame.type,
        selectedPackageSize
      );

      setRoundQuestions(generatedRound);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setQuizCompleted(false);
      setFinalScore(0);
      setFormError("");
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to restart the quiz."
      );
    }
  };

  const chooseAnotherPackage = () => {
    setQuizCompleted(false);
    setQuizStarted(false);
    setRoundQuestions([]);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setSelectedPackageSize(null);
    setShowPackageSelection(true);
    setFormError("");
  };

  const currentQuestion =
    roundQuestions[currentQuestionIndex];

  const isLastQuestion =
    currentQuestionIndex ===
    roundQuestions.length - 1;

  const hasSelectedAnswer =
    selectedAnswers[currentQuestionIndex] !== undefined;

  const answeredQuestionsCount =
    Object.keys(selectedAnswers).length;

  const selectedBankSize = getSelectedBankSize();

  return (
    <div className="games-page">
      <Link
        to="/"
        className="games-back-button"
        aria-label="Back to home page"
      >
        ←
      </Link>

      <main className="games-content">
        <h1 className="games-title">
          العاب ومسابقات
        </h1>

        <p className="games-subtitle">
          اختر نوع الأسئلة وابدأ التحدي
        </p>

        <div className="games-grid">
          {GAMES.map((game) => (
            <button
              key={game.id}
              type="button"
              className="game-card"
              onClick={() => openLoginPopup(game)}
            >
              {game.type === "all" ? (
                <div className="all-types-images">
                  <img
                    src={engineeringImage}
                    alt="Engineering"
                  />

                  <img
                    src={chemistryImage}
                    alt="Chemistry"
                  />

                  <img
                    src={pharmaceuticalsImage}
                    alt="Pharmaceutical"
                  />

                  <img
                    src={surveyingImage}
                    alt="Surveying"
                  />
                </div>
              ) : (
                <img
                  src={game.image}
                  alt={game.name}
                  className="game-card-image"
                />
              )}

              <div className="game-card-name">
                <span>{game.name}</span>

                <span
                  className="game-card-arabic-name"
                  dir="rtl"
                >
                  {game.arabicName}
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {selectedGame &&
        !quizStarted &&
        !showPackageSelection && (
          <div
            className="name-modal-overlay"
            onClick={closeAllPopups}
          >
            <div
              className="name-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className="modal-close-button"
                onClick={closeAllPopups}
                aria-label="Close"
              >
                ×
              </button>

              <div className="modal-game-title">
                <span>{selectedGame.name}</span>

                <span dir="rtl">
                  {selectedGame.arabicName}
                </span>
              </div>

              <h2>Player Login</h2>

              <p>
                Enter your name and password before
                choosing your question package.
              </p>

              <form onSubmit={handleLoginSubmit}>
                <label htmlFor="player-name">
                  Player Name
                </label>

                <input
                  id="player-name"
                  type="text"
                  value={playerName}
                  onChange={(event) => {
                    setPlayerName(event.target.value);
                    setFormError("");
                  }}
                  placeholder="Example: Mahmoud"
                  autoFocus
                  autoComplete="name"
                  maxLength={40}
                />

                <label
                  htmlFor="player-password"
                  className="password-label"
                >
                  Password
                </label>

                <input
                  id="player-password"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setFormError("");
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  maxLength={30}
                />

                {formError && (
                  <div className="name-error">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="start-game-button"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        )}

      {selectedGame &&
        showPackageSelection &&
        !quizStarted && (
          <div
            className="package-modal-overlay"
            onClick={closeAllPopups}
          >
            <div
              className="package-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className="modal-close-button"
                onClick={closeAllPopups}
                aria-label="Close"
              >
                ×
              </button>

              <div className="modal-game-title">
                <span>{selectedGame.name}</span>

                <span dir="rtl">
                  {selectedGame.arabicName}
                </span>
              </div>

              <h2>Select Question Package</h2>

              <h3 dir="rtl">
                اختر عدد الأسئلة
              </h3>

              <p>
                Hello {playerName}. Select how many
                questions you want in this round.
              </p>

              <p>
                Available questions:{" "}
                <strong>{selectedBankSize}</strong>
              </p>

              <div className="question-packages-grid">
                {QUESTION_PACKAGES.map(
                  (packageSize) => {
                    const isUnavailable =
                      selectedBankSize < packageSize;

                    return (
                      <button
                        key={packageSize}
                        type="button"
                        className="question-package-button"
                        onClick={() =>
                          handlePackageSelection(
                            packageSize
                          )
                        }
                        disabled={isUnavailable}
                        title={
                          isUnavailable
                            ? `Only ${selectedBankSize} questions are available`
                            : `Start a ${packageSize}-question quiz`
                        }
                      >
                        <span>{packageSize}</span>

                        <small>Questions</small>

                        <small dir="rtl">سؤال</small>
                      </button>
                    );
                  }
                )}
              </div>

              {formError && (
                <div className="name-error">
                  {formError}
                </div>
              )}

              <button
                type="button"
                className="package-back-button"
                onClick={returnToLogin}
              >
                Back to Login
              </button>
            </div>
          </div>
        )}

      {selectedGame &&
        quizStarted &&
        !quizCompleted &&
        currentQuestion && (
          <div className="quiz-modal-overlay">
            <div className="quiz-modal">
              <button
                type="button"
                className="quiz-close-button"
                onClick={closeAllPopups}
                aria-label="Close quiz"
              >
                ×
              </button>

              <div className="quiz-top-section">
                <div>
                  <span className="quiz-category">
                    <span>{selectedGame.name}</span>

                    <span dir="rtl">
                      {selectedGame.arabicName}
                    </span>
                  </span>

                  <h2 className="quiz-player-name">
                    Player: {playerName}
                  </h2>
                </div>

                <div className="quiz-progress-information">
                  <div className="quiz-progress">
                    Question{" "}
                    {currentQuestionIndex + 1} of{" "}
                    {roundQuestions.length}
                  </div>

                  <div className="answered-counter">
                    Answered:{" "}
                    {answeredQuestionsCount}
                  </div>
                </div>
              </div>

              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{
                    width: `${
                      ((currentQuestionIndex + 1) /
                        roundQuestions.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <div className="quiz-question-section">
                <div className="bilingual-question">
                  <h3 className="question-english">
                    {currentQuestion.questionEnglish}
                  </h3>

                  <h3
                    className="question-arabic"
                    dir="rtl"
                  >
                    {currentQuestion.questionArabic}
                  </h3>
                </div>

                <div className="quiz-options">
                  {currentQuestion.options.map(
                    (option, optionIndex) => (
                      <button
                        key={`${currentQuestion.id}-${optionIndex}`}
                        type="button"
                        className={`quiz-option ${
                          selectedAnswers[
                            currentQuestionIndex
                          ] === optionIndex
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleAnswerSelection(
                            optionIndex
                          )
                        }
                      >
                        <span className="option-letter">
                          {String.fromCharCode(
                            65 + optionIndex
                          )}
                        </span>

                        <span className="bilingual-option-text">
                          <span className="option-english">
                            {option.english}
                          </span>

                          <span
                            className="option-arabic"
                            dir="rtl"
                          >
                            {option.arabic}
                          </span>
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="quiz-navigation">
                <button
                  type="button"
                  className="previous-question-button"
                  onClick={handlePreviousQuestion}
                  disabled={
                    currentQuestionIndex === 0
                  }
                >
                  Previous
                </button>

                {!isLastQuestion ? (
                  <button
                    type="button"
                    className="next-question-button"
                    onClick={handleNextQuestion}
                    disabled={!hasSelectedAnswer}
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    type="button"
                    className="submit-quiz-button"
                    onClick={handleSubmitQuiz}
                    disabled={!hasSelectedAnswer}
                  >
                    Submit Answers
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      {selectedGame && quizCompleted && (
        <div className="quiz-modal-overlay">
          <div className="quiz-result-modal">
            <button
              type="button"
              className="quiz-close-button"
              onClick={closeAllPopups}
              aria-label="Close results"
            >
              ×
            </button>

            <div className="result-icon">🏆</div>

            <h2>Quiz Completed</h2>

            <p className="result-player">
              Well done, {playerName}!
            </p>

            <div className="result-score">
              <span>{finalScore}</span>

              <small>
                out of {roundQuestions.length}
              </small>
            </div>

            <p className="result-percentage">
              Score:{" "}
              {roundQuestions.length > 0
                ? Math.round(
                    (finalScore /
                      roundQuestions.length) *
                      100
                  )
                : 0}
              %
            </p>

            {formError && (
              <div className="name-error">
                {formError}
              </div>
            )}

            <div className="result-actions">
              <button
                type="button"
                className="restart-quiz-button"
                onClick={restartWithNewQuestions}
              >
                New Random Round
              </button>

              <button
                type="button"
                className="choose-package-button"
                onClick={chooseAnotherPackage}
              >
                Choose Another Package
              </button>

              <button
                type="button"
                className="return-games-button"
                onClick={closeAllPopups}
              >
                Return to Games
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Games;