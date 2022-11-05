import { IUser } from "./interfaces/user";

export class UserService {

  users = [
    {
      name: 'Gosho',
      age: 2
    },
    {
      name: 'Pesho',
      age: 28
    }
  ];
  constructor() { }

  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser);
  }



}
