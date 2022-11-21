const fetchQuiz = async (id) => {
  const allQuiz = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${id}`
  );

  const allQuizJson = await allQuiz.json();
  const allQuizData = await allQuizJson.data;
  return allQuizData;
  //   return { allQuizData };
};

export default fetchQuiz;
