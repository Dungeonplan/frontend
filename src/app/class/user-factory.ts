import { User } from "./user";

export class UserFactory {
    static empty(): User {
        return new User(-1, '', '', '', '')
    }
    
    static fromObject(rawUser: any): User {
        return new User(rawUser.userid, rawUser.username, rawUser.email, rawUser.locale, rawUser.token, rawUser.role)
    }
}
