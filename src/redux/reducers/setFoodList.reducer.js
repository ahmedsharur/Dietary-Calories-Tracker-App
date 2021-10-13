
const setFoodList = (state = [], action) => {
    if (action.type === 'SET_FOOD'){
        return action.payload;
    }
    return state;
}


export default setFoodList;