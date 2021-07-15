import React,{useEffect} from 'react'
import ItemField from './ItemField'
import classes from './ItemData.module.css'
const ItemData = props=>{
    return(
        <React.Fragment>
            {props.lists.map(item=>{
                return <ItemField key = {item.id} className ={classes.item} item ={item} onDelete={props.onDelete}/>
            })}
        </React.Fragment>
    )
}
export default ItemData