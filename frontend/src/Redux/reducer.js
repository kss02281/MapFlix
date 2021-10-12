const initState = {
    nation: '',
    nationCode: '',
    showBoolean: false
}

const Reducer = (state = initState, action) => {
    switch(action.type){
        case "SET_NATION":
            return {
                ...state,
                nation: action.nation,
                nationCode: action.nationCode
            }
        case "SWITCH_SHOW":
            return {
                ...state,
                showBoolean: action.showBoolean
            }
        default:
            return state;
    }
}

export default Reducer;