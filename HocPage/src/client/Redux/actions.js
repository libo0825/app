export const currentPage = (cur, size) => {
    cur = Number(cur);
    size: Number(size)
    return {
        type: 'CURRENTPAGE',
        cur,
        size,
    }
}

export const requestPage = (cur) => {
    return {
        type: 'REQUESTPAGE',
        cur,
    }
}

export const receivePage = (total, json) => {
    return {
        type: 'RECEIVEPAGE',
        total,
        json,
    }
}

const arr = [];
for(let i = 0; i < 100; i++){
    arr.push({
        name:"I'm"+i,
        id: i,
    })
}

export const fetchPage = (cur, size) => {
    
    let data = [];
    return (dispatch) => {
        dispatch(requestPage(cur))
        setTimeout(() => {
            data = arr.slice((cur - 1) * size, cur * size);
            dispatch(receivePage(arr.length, data))
        }, 1000)

    }
}