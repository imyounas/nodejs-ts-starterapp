import { Router } from "express";
import UsersController from "../controllers/UserController";
import { LoginDto } from "../../application/dtos/LoginDto";
import IRoute from "../../application/interfaces/IRoute";
import { UserSignUpDto } from "../../application/dtos/UserSignupDto";
import dtoValidationMiddleware from "../../application/middlewares/dtoValidationMiddlewares";

class UsersRoute implements IRoute {
  public path = "/users";
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);

    this.router.post(`${this.path}`, dtoValidationMiddleware(UserSignUpDto), this.usersController.createSignedUpUser);

    //this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    //this.router.post(`${this.path}`, validationMiddleware(CreateUserDto), this.usersController.createUser);
    //this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, true), this.usersController.updateUser);
    //this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
