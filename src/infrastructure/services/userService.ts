import * as bcrypt from 'bcrypt';
import UserMongModel, { User } from "../../domain/models/User";
import { UserSignUpDto } from "../../application/dtos/UserSignupDto";
import HttpException from '../../application/exception/HttpException';
import { isEmptyObject } from '../utils/util';

export class UserService {


  public async findAllUser(): Promise<User[]> {

    const users: User[] = await UserMongModel.find();
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // const u: User = new User(
    //   "imran younas",
    //   "khan",
    //   "im@gmail.com",
    //   "superPassword"
    // );

    return users;
  }

  public async createUser(userData: UserSignUpDto): Promise<User> {
    if (isEmptyObject(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User | null = await UserMongModel.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createUserData: User = await UserMongModel.create({ ...userData, password: hashedPassword });
    return createUserData;
  }
}
