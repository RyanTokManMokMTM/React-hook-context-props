import React,{ useContext}  from 'react'
import AddItemContent from '../components/content/add-item-content'


const ItemField = props =>{
    const ctx = useContext(AddItemContent)
    /* */
    const onDelete =()=>{
        ctx.onDelete(props.item.id)
    }

    return(
        <React.Fragment>
             <p className={props.className} onClick={onDelete}>
                 {`${props.item.user} : ${props.item.text}`}
             </p>
        </React.Fragment>
       
    )
}

export default  ItemField