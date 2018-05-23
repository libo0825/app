import { combineReducers } from 'redux'

const conditions = (state = {
    currentPage: 1,
    pageSize: 10,
    total: 0,
    data: [],
}, action) => {
    switch(action.type) {
    case 'CURRENTPAGE':
        return Object.assign({}, state, {
            currentPage: action.cur,
            pageSize: action.size,
        })
        break;
    case 'REQUESTPAGE' :
        return Object.assign({}, state, {
            currentPage: action.cur,
        })
        break;
    case 'RECEIVEPAGE':
        return Object.assign({}, state, {
            total: action.total,
            data: action.json,
        })
        break;
    default:
        return state;
    }
}

export default combineReducers({
    conditions,
})