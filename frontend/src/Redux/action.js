export const setNationInfo = (nation, nationCode) => ({
  type: "SET_NATION",
  nation,
  nationCode,
});

export const setWeek = (year, week) => ({
  type: "SET_WEEK",
  year,
  week,
});
