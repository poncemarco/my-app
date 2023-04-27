import './App.css';
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import contacts from './contacts';

function createCard(contact) {
  return <Card
  id={contact.id}
  key={contact.id}
  name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"/>
      {contacts.map(createCard)}
      {/* <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      /> */}
    </div>
  );
}

export default App;
