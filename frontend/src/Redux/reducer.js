const initState = {
    nation: '',
    nationCode: '',
    currentYear: 0,
    currentWeek: 0
}

const Reducer = (state = initState, action) => {
    switch(action.type){
        case "SET_NATION":
            return {
                ...state,
                nation: action.nation,
                nationCode: action.nationCode
            }
        case "SET_WEEK":
            return{
                ...state,
                currentYear: action.year,
                currentWeek: action.week
            }
        
        default:
            return state;
    }
}

export default Reducer;