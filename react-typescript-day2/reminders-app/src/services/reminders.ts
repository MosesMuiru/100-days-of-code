// this is where will be used to call the list of todos that are tin the backed
import axios from 'axios'
import Reminder from '../models/reminder';

class ReminderServices {
    // 
    http = axios.create({
        baseURL:"https:jsonplaceholder.typicode.com/"
    });

   async getReminder(){
      const response = await  this.http.get<Reminder[]>('/todos')
      return response.data;

    }

    async addReminder(title:string){
        const response = await this.http.post<Reminder>("/todos",{title})
        return response.data
    }

  async removeReminder(id:number){
    const response = await    this.http.delete("/todos" + id)
    return response.data;
    }
}

//export the reminder
export default new ReminderServices;