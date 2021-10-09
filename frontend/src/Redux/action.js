export const setNationInfo = (nation, nationCode) => ({
    type: "SET_NATIONINFO",
    nation,
    nationCode
})

export const switchShow = (showBoolean) => ({
    type: "SWITCH_SHOW",
    showBoolean
})