import React, { useState } from 'react'

// this is to tell the compiler to return a jsx 

function NewReminder():JSX.Element {
    const[title,setTitle] = useState("")

    const submitForm = (e:React.FormEvent)=>{
        e.preventDefault();
        console.log(title);
    }


  return (
    <div>
        <form action="" onSubmit={submitForm}>
            <label htmlFor="title">title</label>
            
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            <button className="btn btn-primary rounded-pill my-3">Add reminder</button>
        </form>
    </div>
  )
}

export default NewReminder