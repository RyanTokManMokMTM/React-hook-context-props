import React,{useState} from 'react'
import AddFrom from './components/AddFrom'
import classes from './App.module.css'

import ItemData from './components/ItemData'


function App() {
  const [list,setList] = useState([])

  const onDelete = (id)=>{
    setList(prevData=>{
      const result = prevData.filter(data => data.id  != id)
      return result
    })
  }

  const onAddData = (data)=>{
    //our data is a object with name and msg
    console.log(data)
    setList(prevData=>{
       return [...prevData,data]
    })
  }

  return (
    <div className={classes.container}>
      <AddFrom onAdd= {onAddData} />
      <ItemData lists = {list} onDelete={onDelete}/>
    </div>
  );
}

export default App;
