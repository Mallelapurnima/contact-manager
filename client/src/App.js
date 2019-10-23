import React from 'react'
import{BrowserRouter,Link,Route} from 'react-router-dom'
import ContactList from './components/contacts/List'
import NewContact from './components/contacts/New'
import ContactShow from './components/contacts/Show'
import ContactEdit from './components/contacts/Edit'



function App() {
  return (
    <BrowserRouter>
    <div>
      <h2>PhoneBook</h2>
      
        <Link to= "/contacts">contacts</Link>
        <Route path='/contacts'component={ContactList}/>
        <Route path='/contacts/New' component={NewContact} />
        <Route path='/contact/edit/:id' component={ContactEdit}/>
        <Route path='/contact/:id' component={ContactShow}/>
 
      
      
    </div>
    </BrowserRouter>
  )
}

export default App
