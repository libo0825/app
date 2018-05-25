const topCity = (state = [], action) => {
    switch (action.type) {
        case 'getData1':
            return action.data;
            break;
        default:
            return state;
    }
}

export default topCity