import { connection } from 'mongoose';

export class HealthController {
  getStatus(){
    let status;

    switch(connection.readyState){
      case 0:
        status = 'disconnected'; break;
      case 1:
        status = 'connected'; break;
      case 2:
        status = 'connecting'; break;
      case 3:
        status = 'disconnecting'; break;
      default:
        status = 'unknown';
    }
    
    return status;
  }
}
