import React,{ useContext} from 'react'
import ItemField from './ItemField'
import classes from './ItemData.module.css'
import AddItemContent from '../components/content/add-item-content'


const ItemData = props=>{
    const ctx = useContext(AddItemContent)
    return(
        <React.Fragment>
            {ctx.lists.map(item=>{
                return <ItemField key = {item.id} className ={classes.item} item ={item}/>
            })}
        </React.Fragment>
    )
}
export default ItemData