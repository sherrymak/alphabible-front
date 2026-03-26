const BASE_URL = process.env.REACT_APP_API_URL;

export const getWeekByNumber = async (weekNumber) => {
  const res = await fetch(`${BASE_URL}api/weeks/${weekNumber}`);
  return res.json();
};

export const getChapterById = async (bookOrder, chapterNumber) => {
  const res = await fetch(
    `${BASE_URL}api/biblechapters/${bookOrder}/${chapterNumber}`
  );
  return res.json();
};

export const getNextChapter = async (bookOrder, chapterNumber) => {
  const res = await fetch(
    `${BASE_URL}api/biblechapters/${bookOrder}/${chapterNumber}/next`
  );
  return res.json();
};

export const getPreviousChapter = async (bookOrder, chapterNumber) => {
  const res = await fetch(
    `${BASE_URL}api/biblechapters/${bookOrder}/${chapterNumber}/previous`
  );
  return res.json();
};

