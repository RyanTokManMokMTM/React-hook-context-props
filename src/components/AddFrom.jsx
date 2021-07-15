import React,{useEffect,useState} from 'react'
import classes from './AddFrom.module.css'
const AddFrom  = props =>{
    const [name,setName] = useState("")
    const [msg,setMsg] = useState("")
    const onChangeName = (event) =>{
      console.log(event.target.value)
      setName(event.target.value)
    }

    const onChangeText = (event)=>{
        console.log(event.target.value)
      setMsg(event.target.value)
    }

    const onFromSubmit = (event)=>{
      event.preventDefault()
      console.log("submit")
      if(name.trim().length <=0){
        console.log("name is empty")
        return
      }
      else if(msg.trim().length <=0){
        console.log("msg is empty")
        return
      }
      const data = {
        id : Math.random().toString(),
        user:name,
        text:msg
      }

      props.onAdd(data)
      //Update the list
      //reset state to empty
      setName('')
      setMsg('')

    }


    return(
        <form onSubmit ={onFromSubmit} >
            <label htmlFor="name">name</label>
            <input type="text" name="name" className="name" onChange={onChangeName} value={name}/>

              <label htmlFor="message">message</label>
              <input type="text" name="name" className="message" onChange={onChangeText} value={msg}/>

              
              <input type="submit" name="submit" className="add-button" />
        </form>
    )
}

export default AddFrom
