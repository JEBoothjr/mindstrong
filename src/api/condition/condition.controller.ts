import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:api:condition:controller');

import { ConditionModel } from './condition.model';

export class ConditionController {
  async getConditions(start:string, count:number){
    count = count || 150;
    debug(`getConditions(${start}, ${count})`);
    
    let result;
    if(start){
      result = await ConditionModel.find({ _id: start}).sort({_id: 1}).limit(count);
    }else{
      result = await ConditionModel.find({}).sort({_id: 1}).limit(count);
    }
    
    return result;
  }

  async addConditions(conditions: any[]){
    debug(`addConditions(${conditions.length})`);
    let result = await ConditionModel.create(conditions);

    return result;
  }
}
