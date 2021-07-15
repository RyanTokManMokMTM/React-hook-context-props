import React ,{useState}from 'react'

const AddItemContent = React.createContext({
    lists:[],
    onAdd:()=>{},
    onDelete:()=>{}
})

export default AddItemContent //this contain a object contain components

export const AdditemProvider = (props) => {
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
        <AddItemContent.Provider value={
            {
                lists:list,
                onAdd:onAddData,
                onDelete:onDelete
            }
        }>
            {props.children}
        </AddItemContent.Provider>
    )
}