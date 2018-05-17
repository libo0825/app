const car = (state = [], action) => {
    switch (action.type) {
        case 'getData':
            return action.data;
            break; 
        case 'getData2':
            return action.data;
            break;
        default:
            return state;
    }
}

export default car