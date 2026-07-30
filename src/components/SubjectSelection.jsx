import { useMemo, useState } from "react";
import allQuestions from "../data/questions";
import subjects from "../data/subjects";
import Quiz from "./Quiz";

function SubjectSelection() {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [questionCount, setQuestionCount] = useState(10);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizSessionNumber, setQuizSessionNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const selectedSubject = useMemo(() => {
    return subjects.find(
      (subject) => subject.domain === selectedDomain
    );
  }, [selectedDomain]);

  const availableQuestionCount = useMemo(() => {
    return allQuestions.filter((question) => {
      const matchesDomain = question.domain === selectedDomain;

      const matchesDifficulty =
        selectedDifficulty === "All" ||
        question.difficulty === selectedDifficulty;

      return matchesDomain && matchesDifficulty;
    }).length;
  }, [selectedDomain, selectedDifficulty]);

  const startQuiz = () => {
    setErrorMessage("");

    if (!selectedDomain) {
      setErrorMessage("Please select a subject first.");
      return;
    }

    const requestedCount = Number(questionCount);

    if (
      !Number.isInteger(requestedCount) ||
      requestedCount < 1
    ) {
      setErrorMessage(
        "Please enter a valid number of questions."
      );
      return;
    }

    const filteredQuestions = allQuestions.filter((question) => {
      const matchesDomain =
        question.domain === selectedDomain;

      const matchesDifficulty =
        selectedDifficulty === "All" ||
        question.difficulty === selectedDifficulty;

      return matchesDomain && matchesDifficulty;
    });

    if (filteredQuestions.length === 0) {
      setErrorMessage(
        "No questions were found for this selection."
      );
      return;
    }

    const shuffledQuestions = shuffleArray(filteredQuestions);

    const finalQuestionCount = Math.min(
      requestedCount,
      shuffledQuestions.length
    );

    setQuizQuestions(
      shuffledQuestions.slice(0, finalQuestionCount)
    );

    setQuizSessionNumber(
      (previousNumber) => previousNumber + 1
    );

    setQuizStarted(true);
  };

  const exitQuiz = () => {
    setQuizStarted(false);
    setQuizQuestions([]);
  };

  const restartQuiz = () => {
    startQuiz();
  };

  if (quizStarted) {
    return (
      <Quiz
        key={quizSessionNumber}
        questions={quizQuestions}
        subject={selectedSubject}
        onExit={exitQuiz}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.headingArea}>
          <h1 style={styles.title}>Choose Your Quiz</h1>

          <h2 style={styles.arabicTitle}>
            اختر الاختبار
          </h2>

          <p style={styles.description}>
            Select a subject, difficulty level, and number of
            questions.
          </p>

          <p style={styles.arabicDescription}>
            اختر التخصص ومستوى الصعوبة وعدد الأسئلة.
          </p>
        </div>

        <div style={styles.statistics}>
          <div style={styles.statisticCard}>
            <strong style={styles.statisticNumber}>
              {subjects.length}
            </strong>

            <span>Subjects</span>
          </div>

          <div style={styles.statisticCard}>
            <strong style={styles.statisticNumber}>
              {allQuestions.length}
            </strong>

            <span>Total Questions</span>
          </div>
        </div>

        <div style={styles.subjectGrid}>
          {subjects.map((subject) => {
            const actualCount = allQuestions.filter(
              (question) =>
                question.domain === subject.domain
            ).length;

            const isSelected =
              selectedDomain === subject.domain;

            return (
              <button
                key={subject.id}
                type="button"
                style={{
                  ...styles.subjectCard,
                  ...(isSelected
                    ? styles.selectedSubjectCard
                    : {}),
                }}
                onClick={() => {
                  setSelectedDomain(subject.domain);
                  setErrorMessage("");
                }}
              >
                <h3 style={styles.subjectEnglish}>
                  {subject.nameEnglish}
                </h3>

                <p style={styles.subjectArabic}>
                  {subject.nameArabic}
                </p>

                <span style={styles.questionBadge}>
                  {actualCount} Questions
                </span>
              </button>
            );
          })}
        </div>

        <div style={styles.settingsCard}>
          <div style={styles.inputGroup}>
            <label
              htmlFor="difficulty"
              style={styles.label}
            >
              Difficulty
            </label>

            <select
              id="difficulty"
              value={selectedDifficulty}
              style={styles.select}
              onChange={(event) => {
                setSelectedDifficulty(event.target.value);
                setErrorMessage("");
              }}
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label
              htmlFor="questionCount"
              style={styles.label}
            >
              Number of Questions
            </label>

            <input
              id="questionCount"
              type="number"
              min="1"
              max={availableQuestionCount || 100}
              value={questionCount}
              style={styles.input}
              onChange={(event) => {
                setQuestionCount(event.target.value);
                setErrorMessage("");
              }}
            />
          </div>

          {selectedDomain && (
            <p style={styles.availableText}>
              Available questions for this selection:{" "}
              <strong>{availableQuestionCount}</strong>
            </p>
          )}

          {errorMessage && (
            <p style={styles.errorMessage}>
              {errorMessage}
            </p>
          )}

          <button
            type="button"
            style={styles.startButton}
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

function shuffleArray(items) {
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
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "35px 18px",
    background:
      "linear-gradient(135deg, #d7d7d7 0%, #909090 100%)",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  container: {
    width: "100%",
    maxWidth: "1050px",
    margin: "0 auto",
  },

  headingArea: {
    marginBottom: "30px",
    textAlign: "center",
  },

  title: {
    margin: "0 0 7px",
    color: "#171717",
    fontSize: "38px",
  },

  arabicTitle: {
    margin: "0 0 15px",
    color: "#292929",
    direction: "rtl",
  },

  description: {
    margin: "5px 0",
    color: "#3e3e3e",
  },

  arabicDescription: {
    margin: "5px 0",
    color: "#3e3e3e",
    direction: "rtl",
  },

  statistics: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "25px",
  },

  statisticCard: {
    display: "flex",
    flexDirection: "column",
    minWidth: "170px",
    padding: "18px",
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.13)",
  },

  statisticNumber: {
    marginBottom: "5px",
    color: "#222222",
    fontSize: "27px",
  },

  subjectGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "25px",
  },

  subjectCard: {
    minHeight: "175px",
    padding: "22px",
    border: "3px solid transparent",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    color: "#222222",
    cursor: "pointer",
    boxShadow: "0 8px 22px rgba(0, 0, 0, 0.14)",
    transition: "all 0.2s ease",
  },

  selectedSubjectCard: {
    borderColor: "#222222",
    backgroundColor: "#ebebeb",
    transform: "translateY(-3px)",
  },

  subjectEnglish: {
    margin: "0 0 11px",
    fontSize: "20px",
  },

  subjectArabic: {
    margin: "0 0 17px",
    direction: "rtl",
    fontSize: "19px",
    fontWeight: "700",
  },

  questionBadge: {
    display: "inline-block",
    padding: "7px 11px",
    backgroundColor: "#222222",
    color: "#ffffff",
    borderRadius: "20px",
    fontSize: "13px",
  },

  settingsCard: {
    maxWidth: "680px",
    margin: "0 auto",
    padding: "25px",
    backgroundColor: "#ffffff",
    borderRadius: "17px",
    boxShadow: "0 10px 28px rgba(0, 0, 0, 0.16)",
    boxSizing: "border-box",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "17px",
  },

  label: {
    color: "#222222",
    fontWeight: "700",
  },

  select: {
    width: "100%",
    padding: "13px",
    border: "1px solid #bbbbbb",
    borderRadius: "9px",
    backgroundColor: "#ffffff",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  input: {
    width: "100%",
    padding: "13px",
    border: "1px solid #bbbbbb",
    borderRadius: "9px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  availableText: {
    padding: "11px",
    backgroundColor: "#eeeeee",
    borderRadius: "8px",
    textAlign: "center",
  },

  errorMessage: {
    padding: "11px",
    backgroundColor: "#f8d7da",
    color: "#8a1c25",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "700",
  },

  startButton: {
    width: "100%",
    marginTop: "7px",
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#222222",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "17px",
    fontWeight: "700",
  },
};

export default SubjectSelection;