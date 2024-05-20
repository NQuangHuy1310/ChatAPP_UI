import { createContext, useContext, useState } from 'react'

export const AuthContect = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContect)
}

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null)

	return <AuthContect.Provider value={{ authUser, setAuthUser }}>{children}</AuthContect.Provider>
}
