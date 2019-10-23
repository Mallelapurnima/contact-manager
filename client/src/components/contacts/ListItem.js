import React from 'react'
function ListItem(props){
    return<li>{props.name} <button className="btn btn-danger"onClick={()=>{
        const confirm=window.confirm("Are You Sure?")
        if(confirm){
            props.handleRemove(props._id)
        }
    }}>remove</button></li>
        
}
export default ListItem