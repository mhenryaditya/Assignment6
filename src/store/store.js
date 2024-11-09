import {createStore} from 'redux'

let search = {
    data: 'spongebob'
}

const changeSearch = (state = search, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                data: action.value
            }
        default:
            return state
    }
}

export default createStore(changeSearch)