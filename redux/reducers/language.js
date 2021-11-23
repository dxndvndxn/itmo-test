const initialState = {
    langId: 1
}

const language = (state = initialState, action) => {
    if (action.type === 'SET_LANG') {
        return {
            ...state,
            langId: action.payload
        }
    }

    return state
}

export default language
