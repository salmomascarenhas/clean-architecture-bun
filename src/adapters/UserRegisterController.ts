import Elysia from "elysia";
import { UserRegister } from "../core/user/service/UserRegister";

export default class UserRegisterController {
    constructor(
        readonly server: Elysia,
        readonly useCase: UserRegister ) {
            server.post('users', async ({body}) => {
                const {name, email, password} = body as any;
                await useCase.execute({name, email, password});
                return {
                    status: 201,
                    body: {message: 'User created successfully'}
                };
            });
        }
}