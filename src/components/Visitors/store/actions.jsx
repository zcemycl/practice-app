export const reducer = (state,action) => {
    switch (action.type){
        case 'list':
            return {...state,[action.key]:action.value};
        case 'object':
            return {...state,[action.key]:action.value};
        case 'value':
            return {...state,[action.key]:action.value};
        default:
            return state
    }
}