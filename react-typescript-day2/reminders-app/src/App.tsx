
import { useState,useEffect } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from "./models/reminder";
import ReminderService from "./services/reminders"
import NewReminder from './components/NewReminder';

// array of reminder

const reminder:Reminder[] = [
  {id:1, title:"Reminder 1"}
]

function App() {


  // must initialize or elese this will be either an array or undefined

 const [reminder,setReminder] =  useState<Reminder[]>([])

 useEffect(() => {
  loadReminders()
},[])

 const loadReminders = async () => {
  let reminders = await ReminderService.getReminder();
  setReminder(reminders);
 }

//  a function that remove the function

// function for removing the reminder

const removeReminder = (id:number) => {
  setReminder(reminder.filter(reminderr => reminderr.id !== id))
}


  return (
    <div className="App">
 <NewReminder/>

    <ReminderList items={reminder} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
