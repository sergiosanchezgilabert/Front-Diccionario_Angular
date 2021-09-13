export interface User{
    username: String,
    password: String
}

export interface UserResponse{
    message: string,
    token: string, 
    userId: number
}