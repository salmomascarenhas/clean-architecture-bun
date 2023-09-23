import UseCase from "../../shared/UseCase";
import UserRepository from "./UserRepository";

type UserRegisterInput = {
    name: string;
    email: string;
    password: string;
}

export class UserRegister implements UseCase<UserRegisterInput, void> {
    constructor(private readonly repository: UserRepository) { }

    async execute(input: UserRegisterInput): Promise<void> {
        const { name, email, password } = input;
        const existingUser = await this.repository.getByEmail(email);
        if (existingUser) throw new Error("User already exists");
        await this.repository.save({ name, email, password });
    }
}