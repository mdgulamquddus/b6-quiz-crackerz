export const fetchApi = async () => {
  const allCourses = await fetch(
    "https://openapi.programming-hero.com/api/quiz"
  );
  const allCoursesJson = await allCourses.json();
  const allCoursesData = allCoursesJson.data;
  return allCoursesData;
};
