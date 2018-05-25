const city = (state = [], action) => {
    switch (action.type) {
        case 'getData':
            return action.data;
            break;
        default:
            return state;
    }
}

export default city