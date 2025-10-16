const initState = {
    themeId: 1,
}

export type ThemeState =  {
    themeId: number
}

export type ChangeThemeState = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeState ): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeState => ({ type: 'SET_THEME_ID', id }) // fix any
