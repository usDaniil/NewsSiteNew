export interface RegisterDto {
    login: string
    email: string
    password: string
}

export interface User {
    "id": number,
        "login": string,
        "email": string,
        "updatedAt": Date
        "createdAt": Date
        "avatarPath": null | string
}
export interface RegisterAnswerDto{
    accessToken: string
    user: User
}