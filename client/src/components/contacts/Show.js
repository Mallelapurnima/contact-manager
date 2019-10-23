import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios';
export default class ContactShow extends React.Component{
    constructor(){
        super()
        this.state={
            contact:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/contact/${id}`,{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            this.setState({contact:response.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
   render(){
       return(
           <div>
               <h2>{this.state.contact.name}-{this.state.contact.email}</h2>
               <Link to={`/contact/edit/${this.state.contact._id}`}>edit</Link>
               
           </div>
 
       )
   }
}
