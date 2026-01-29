let baseUrl:string = import.meta.env.VITE_API_URL

export const API_ENDPOINTS:any = {
    auth:{
        registerUser: `${baseUrl}/auth/registerUser`,
        login: `${baseUrl}/auth/login`,
        changePassword: `${baseUrl}/auth/changePassword`,
        setUserActive: `${baseUrl}/auth/setUserActive`,
        getAllUsers: `${baseUrl}/auth/getAllUsers`,
        getUserById: `${baseUrl}/auth/getUserById`,
        deleteUser: `${baseUrl}/auth/deleteUser`,
    }
}