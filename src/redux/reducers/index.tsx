
import items from './items'

export const rootReducer = items

export type RootState = ReturnType<typeof rootReducer>