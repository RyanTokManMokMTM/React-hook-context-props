import React from 'react'

const ItemField = props =>{
    const onDelete =()=>{
        props.onDelete(props.item.id)
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