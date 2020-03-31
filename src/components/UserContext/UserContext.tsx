import { createContext } from 'react'

export interface IRetroAppContextProps {
    isAuthorized?: boolean
    isLoading?: boolean
    userId?: string
    retroId?: string
}

const defaultContext: IRetroAppContextProps = {
    isAuthorized: false,
    isLoading: false,
    userId: '',
    retroId: '',
}

const UserContext = createContext(defaultContext)

export default UserContext