const selectedReducer = (state="",action) => {
    switch(action.type){
        case "assign":
            return action.payload;
        default:
            return state;
    }
}

export default selectedReducer;