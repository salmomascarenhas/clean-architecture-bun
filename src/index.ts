import { Elysia } from "elysia";
import UserRepositoryInMemory from "./external/in-memory/UserRepositoryInMemory";
import { UserRegister } from "./core/user/service/UserRegister";
import UserRegisterController from "./adapters/UserRegisterController";

const app = new Elysia();

const userRepository = new UserRepositoryInMemory();
const userRegister = new UserRegister(userRepository);
new UserRegisterController(app, userRegister);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
