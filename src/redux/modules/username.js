const reducer = (state = 'NewBoi', action) => {
    switch(action.type) {
        case 'SET_USERNAME': {
            return action.username;
        }
        default: {
            return state;
        }
    }
}

export const getUsername = state => state.username;

export default reducer;