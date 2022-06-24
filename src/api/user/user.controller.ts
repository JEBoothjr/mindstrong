import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:api:user:controller');

import { UserModel } from './user.model';

export class UserController {
  async getRecords(start:string, count:number){
    count = count || 1;
    debug(`getUsers(${start}, ${count})`);

    let result;
    if(start){
      result = await UserModel.find({ _id: { $gt: start } }).sort({_id: 1}).limit(count);
    }else{
      result = await UserModel.find({}).sort({_id: 1}).limit(count);
    }
    
    return result;
  }

  async addUsers(users: any[]){
    debug(`addUsers(${users.length})`);
    let result = await UserModel.create(users);

    return result;
  }
}
