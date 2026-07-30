import { useState } from "react";

function Quiz({ questions, subject, onExit, onRestart }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h2>No questions are available.</h2>

          <button type="button" style={styles.primaryButton} onClick={onExit}>
            Back to Subjects
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (answerIndex) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      return;
    }

    const answerRecord = {
      questionId: currentQuestion.id,
      selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: selectedAnswer === currentQuestion.correctAnswer,
    };

    const updatedAnswers = [...answers, answerRecord];

    setAnswers(updatedAnswers);

    if (currentQuestionIndex === questions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer(null);
  };

  const calculateScore = () => {
    return answers.filter((answer) => answer.isCorrect).length;
  };

  if (quizFinished) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div style={styles.page}>
        <div style={styles.resultCard}>
          <h1 style={styles.resultTitle}>Quiz Completed</h1>

          <h2 style={styles.arabicText}>تم الانتهاء من الاختبار</h2>

          <p style={styles.subjectName}>
            {subject?.nameEnglish || subject?.domain}
          </p>

          <p style={styles.subjectArabic}>
            {subject?.nameArabic}
          </p>

          <div style={styles.scoreCircle}>
            <strong style={styles.scoreNumber}>{percentage}%</strong>
          </div>

          <p style={styles.scoreText}>
            You answered {score} out of {questions.length} questions correctly.
          </p>

          <p style={styles.arabicText}>
            لقد أجبت بشكل صحيح عن {score} من أصل {questions.length} سؤالًا.
          </p>

          <div style={styles.resultButtons}>
            <button
              type="button"
              style={styles.primaryButton}
              onClick={onRestart}
            >
              Restart Quiz
            </button>

            <button
              type="button"
              style={styles.secondaryButton}
              onClick={onExit}
            >
              Choose Another Subject
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div style={styles.page}>
      <div style={styles.quizContainer}>
        <div style={styles.topBar}>
          <div>
            <h2 style={styles.subjectTitle}>
              {subject?.nameEnglish || currentQuestion.domain}
            </h2>

            <p style={styles.subjectArabic}>
              {subject?.nameArabic}
            </p>
          </div>

          <button
            type="button"
            style={styles.exitButton}
            onClick={onExit}
          >
            Exit Quiz
          </button>
        </div>

        <div style={styles.progressInformation}>
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>

          <span>{Math.round(progressPercentage)}%</span>
        </div>

        <div style={styles.progressTrack}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progressPercentage}%`,
            }}
          />
        </div>

        <div style={styles.detailsRow}>
          <span style={styles.detailBadge}>
            {currentQuestion.course}
          </span>

          <span style={styles.detailBadge}>
            {currentQuestion.topic}
          </span>

          <span style={getDifficultyStyle(currentQuestion.difficulty)}>
            {currentQuestion.difficulty}
          </span>
        </div>

        <div style={styles.questionCard}>
          <p style={styles.questionId}>
            {currentQuestion.id}
          </p>

          <h2 style={styles.englishQuestion}>
            {currentQuestion.questionEnglish}
          </h2>

          <h2 style={styles.arabicQuestion}>
            {currentQuestion.questionArabic}
          </h2>

          <div style={styles.optionsContainer}>
            {currentQuestion.options.map((option, optionIndex) => {
              const isSelected = selectedAnswer === optionIndex;

              return (
                <button
                  key={`${currentQuestion.id}-${optionIndex}`}
                  type="button"
                  style={{
                    ...styles.optionButton,
                    ...(isSelected ? styles.selectedOption : {}),
                  }}
                  onClick={() => handleAnswerSelection(optionIndex)}
                >
                  <span style={styles.optionLetter}>
                    {String.fromCharCode(65 + optionIndex)}
                  </span>

                  <span style={styles.optionText}>
                    <span style={styles.englishOption}>
                      {option.english}
                    </span>

                    <span style={styles.arabicOption}>
                      {option.arabic}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            style={{
              ...styles.nextButton,
              ...(selectedAnswer === null
                ? styles.disabledButton
                : {}),
            }}
            disabled={selectedAnswer === null}
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}

function getDifficultyStyle(difficulty) {
  const baseStyle = {
    ...styles.detailBadge,
    fontWeight: "700",
  };

  if (difficulty === "Easy") {
    return {
      ...baseStyle,
      backgroundColor: "#dff5e5",
      color: "#176b35",
    };
  }

  if (difficulty === "Medium") {
    return {
      ...baseStyle,
      backgroundColor: "#fff3cd",
      color: "#7a5b00",
    };
  }

  return {
    ...baseStyle,
    backgroundColor: "#f8d7da",
    color: "#8a1c25",
  };
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px 18px",
    background:
      "linear-gradient(135deg, #d7d7d7 0%, #9d9d9d 100%)",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  quizContainer: {
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: {
    width: "100%",
    maxWidth: "650px",
    margin: "70px auto",
    padding: "35px",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.18)",
    boxSizing: "border-box",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  },

  subjectTitle: {
    margin: "0 0 5px",
    color: "#171717",
  },

  subjectName: {
    margin: "20px 0 5px",
    fontSize: "22px",
    fontWeight: "700",
  },

  subjectArabic: {
    margin: "4px 0",
    direction: "rtl",
    color: "#555555",
  },

  exitButton: {
    padding: "11px 18px",
    border: "none",
    borderRadius: "9px",
    backgroundColor: "#282828",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "700",
  },

  progressInformation: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "7px",
    fontWeight: "700",
    color: "#252525",
  },

  progressTrack: {
    height: "11px",
    marginBottom: "20px",
    overflow: "hidden",
    backgroundColor: "#eeeeee",
    borderRadius: "20px",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#222222",
    borderRadius: "20px",
    transition: "width 0.3s ease",
  },

  detailsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "15px",
  },

  detailBadge: {
    display: "inline-block",
    padding: "7px 11px",
    backgroundColor: "#eeeeee",
    color: "#333333",
    borderRadius: "20px",
    fontSize: "13px",
  },

  questionCard: {
    padding: "28px",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.18)",
    boxSizing: "border-box",
  },

  questionId: {
    margin: "0 0 12px",
    color: "#777777",
    fontSize: "13px",
    fontWeight: "700",
  },

  englishQuestion: {
    margin: "0 0 12px",
    color: "#1e1e1e",
    fontSize: "23px",
    lineHeight: "1.4",
  },

  arabicQuestion: {
    margin: "0 0 25px",
    color: "#333333",
    direction: "rtl",
    textAlign: "right",
    fontSize: "23px",
    lineHeight: "1.7",
  },

  optionsContainer: {
    display: "grid",
    gap: "13px",
  },

  optionButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "15px",
    border: "2px solid #dddddd",
    borderRadius: "12px",
    backgroundColor: "#fafafa",
    color: "#222222",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  selectedOption: {
    borderColor: "#222222",
    backgroundColor: "#e8e8e8",
    transform: "translateY(-1px)",
  },

  optionLetter: {
    display: "flex",
    flexShrink: "0",
    justifyContent: "center",
    alignItems: "center",
    width: "38px",
    height: "38px",
    marginRight: "14px",
    backgroundColor: "#222222",
    color: "#ffffff",
    borderRadius: "50%",
    fontWeight: "700",
  },

  optionText: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    gap: "6px",
  },

  englishOption: {
    fontSize: "16px",
    lineHeight: "1.4",
  },

  arabicOption: {
    direction: "rtl",
    textAlign: "right",
    fontSize: "16px",
    lineHeight: "1.6",
  },

  nextButton: {
    width: "100%",
    marginTop: "23px",
    padding: "15px",
    border: "none",
    borderRadius: "11px",
    backgroundColor: "#222222",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
  },

  disabledButton: {
    backgroundColor: "#999999",
    cursor: "not-allowed",
  },

  resultCard: {
    width: "100%",
    maxWidth: "680px",
    margin: "50px auto",
    padding: "40px 25px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.18)",
    boxSizing: "border-box",
  },

  resultTitle: {
    marginBottom: "7px",
    color: "#1d1d1d",
  },

  arabicText: {
    direction: "rtl",
    color: "#555555",
    lineHeight: "1.7",
  },

  scoreCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "150px",
    margin: "28px auto",
    border: "10px solid #222222",
    borderRadius: "50%",
  },

  scoreNumber: {
    fontSize: "38px",
    color: "#222222",
  },

  scoreText: {
    fontSize: "18px",
    fontWeight: "700",
  },

  resultButtons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginTop: "25px",
  },

  primaryButton: {
    padding: "13px 22px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#222222",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "700",
  },

  secondaryButton: {
    padding: "13px 22px",
    border: "2px solid #222222",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    color: "#222222",
    cursor: "pointer",
    fontWeight: "700",
  },
};

export default Quiz;