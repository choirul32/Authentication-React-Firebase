import {signup, useAuth} from "./firebase";
import {useRef} from "react";
import { useState } from "react";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSignup(){
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("Error");
    }
    setLoading(false);
  }

  return (
    
    <div className="App">
      <Card>
        <Card.Body>
          <h2>test</h2>
        </Card.Body>
      </Card>
      <div >Current login as : {currentUser?.email}</div>
        <div id='fields'>
          <input ref={emailRef} placeholder="Email"/>
          <input ref={passwordRef} placeholder="Password" type="password"/>
          <button onClick={handleSignup}>Sign up</button>
        </div>
    </div>
  );
}

export default App;
