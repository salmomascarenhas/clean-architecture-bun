import User from "../../core/user/model/user";
import UserRepository from "../../core/user/service/UserRepository";

export default class UserRepositoryInMemory implements UserRepository {
    private readonly users: User[] = [];
    async getByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) || null;
    }
    async save(user: User): Promise<User> {
        const newUser = { ...user, id: this.users.length + 1 };
        this.users.push(newUser);
        return newUser;
    }
}