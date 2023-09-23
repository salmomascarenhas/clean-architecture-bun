import User from "../model/user";

export default interface UserRepository {
    getByEmail(email: string): Promise<User | null>
    save(user: User): Promise<User>
}