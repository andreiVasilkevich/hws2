import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') {
                const sortUp = [...state].sort((a,b) => a.name.localeCompare(b.name))
                return sortUp
            }
            else if(action.payload === 'down') {
                const sortDown = [...state].sort((a,b) => b.name.localeCompare(a.name))
                return sortDown
            }
            else {
                return state
            }

            // need to fix
        }
        case 'check': {
            const check18 = state.filter((el)=> el.age >= action.payload) // need to fix
            return check18
        }
        default:
            return state
    }
}
