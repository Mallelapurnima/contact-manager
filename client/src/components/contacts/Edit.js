import React from 'react'
import ContactForm from './Form';
import axios from '../../config/axios';
export default class ContactEdit extends React.Component{
    constructor(){
        super()
        this.state={
            contact:{}
        }
    }
    handleContactSubmit=(contact)=>{
        
        axios.put(`/contact/${contact.id}`,contact, {headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            console.log(response.data)
        })
        this.props.history.push('/contact')
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/contact/${id}`,{ headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            // console.log(response.data,"data in edit")
            this.setState({contact:response.data})
        })
        
    }
    render(){
        
        return(
            <div>
                <h2>Edit Contact</h2>
            <ContactForm contact={this.state.contact} handleContactSubmit={this.handleContactSubmit}/>
            </div>
        )
    }
}
