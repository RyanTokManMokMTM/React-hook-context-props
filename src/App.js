import React,{useState,useContext} from 'react'
import AddFrom from './components/AddFrom'
import classes from './App.module.css'

import ItemData from './components/ItemData'
import  {AdditemProvider} from './components/content/add-item-content'

function App() {

  return (
    <AdditemProvider>
    <div className={classes.container}>
      <AddFrom />
      <ItemData/>
    </div>
    </AdditemProvider>
  );
}

export default App;
