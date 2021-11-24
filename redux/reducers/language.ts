interface langState {
    langId: number
}

const initialState: langState = {
    langId: 1
}

const language = (state = initialState, action: any) => {
    if (action.type === 'SET_LANG') {
        return {
            ...state,
            langId: action.payload
        }
    }

    return state
}

export default language
