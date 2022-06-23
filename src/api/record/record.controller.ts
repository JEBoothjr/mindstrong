import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:api:record:controller');

import { RecordModel } from './record.model';

export class RecordController {
  async getRecords(start:string, count:number){
    count = count || 1;
    debug(`getRecords(${start}, ${count})`);

    let result;
    if(start){
      result = await RecordModel.find({ _id: { $gt: start } }).sort({_id: 1}).limit(count);
    }else{
      result = await RecordModel.find({}).sort({_id: 1}).limit(count);
    }
    
    return result;
  }

  async addConditions(recordId:string, conditions: string[]){
    debug(`addConditions(${recordId}, ${conditions})`);
    // TODO : Validate recordId...
    // TODO : Validate conditions...
    let result = await RecordModel.findOneAndUpdate({ _id: recordId }, { conditions: conditions });

    return result;
  }

  async addRecords(records: any[]){
    debug(`addRecords(${records.length})`);
    let result = await RecordModel.create(records);

    return result;
  }
}
