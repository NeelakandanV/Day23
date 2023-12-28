import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Cards
      subs = "Free"
      price ="0"
      user ="✔️ Single User"
      storage ="✔️ 50GB Storagr"
      public ="✔️ Unlimited Public Projects"
      community ="✔️ Community Access"
      private ="✖️ Unlimited Private Projects"
      support ="✖️ Dedicated Phone Support"
      domain ="✖️ Free Subdomain"
      status ="✖️ Monthly Status Reports"
      />

      <Cards
      subs ="Plus"
      price ="9"
      user ="✔️ 5 Users"
      storage ="✔️ 50GB Storagr"
      public ="✔️ Unlimited Public Projects"
      community ="✔️ Community Access"
      private ="✔️ Unlimited Private Projects"
      support ="✔️ Dedicated Phone Support"
      domain ="✔️ Free Subdomain"
      status ="✖️Monthly Status Reports"
      />

      <Cards
      subs ="Pro"
      price ="49"
      user ="✔️ Unlimited Users"
      storage ="✔️ 50GB Storagr"
      public ="✔️ Unlimited Public Projects"
      community ="✔️ Community Access"
      private ="✔️ Unlimited Private Projects"
      support ="✔️ Dedicated Phone Support"
      domain ="✔️ Free Subdomain"
      status ="✔️ Monthly Status Reports"
      />
    </div>   
  );
}

function Cards(props){
  return(
    <div className="cardComp">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
           <h5>{props.subs}</h5>
           <label><h1>${props.price}/month</h1></label>
           <hr></hr>
        </Card.Title>
        <Card.Text>
           <p>{props.user}</p>
           <p>{props.storage}</p>
           <p>{props.public}</p>
           <p>{props.community}</p>
           <p>{props.private}</p>
           <p>{props.support}</p>
           <p>{props.domain}</p>
           <p>{props.status}</p>
        </Card.Text>
        <Button variant="primary">Subscribe Now</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
