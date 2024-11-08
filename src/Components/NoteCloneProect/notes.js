import { useEffect, useState } from "react"

import Note from "./note";
import './note.css'

import {v4 as uuid} from 'uuid';
import CreateNote from "./createNote";

const Notes  = ()=>{

     const [notes,setNotes] = useState(()=>{
         const data = JSON.parse(localStorage.getItem('mydata'))
         return  data  || []
     })

     const [inputText,setInputText] = useState("")

      const TextHandel = (e) =>{
          setInputText(e.target.value)
      }


      const SaveHandler = ()=>{
          setNotes((prevState)=>[
             ...prevState,
             {
                  id : uuid(),
                 text : inputText
             }
          ])

          setInputText('')
      }

//   deleteHandel

 const deleteHandel = (id)=>{
       const FilterNotes = notes.filter((note)=> note.id ==id)
        setNotes(FilterNotes)
 }


  useEffect(()=>{
     localStorage.setItem('mydata', JSON.stringify(notes))
  })


     return(<>
        <div className="notes">
                  {
                    notes.map((item)=>(//fot geting data
                        <Note  id={item.id} text={item.text} 
                         deleteHandel={deleteHandel} 
                         />
                    ))
                  }

            <CreateNote  
            TextHandel={TextHandel} 
            SaveHandler={SaveHandler}
            inputText ={inputText}
            />

                            
        </div>
     </>)
}


export default Notes