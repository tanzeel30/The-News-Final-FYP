import { CheckRounded } from '@material-ui/icons';
import React , {useState} from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
 

export default function Signup( ) {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignupHandler = () => {
    if (username && password) {
      fetch("http://localhost:8092/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
    }
  };
    return(
        <div className="Signup">
            <div className="SignupOverlay"/>
            <div className="loginContainer">
        <p className="heading">Signup Now</p>
        <p className="subHeading"> Enter Details</p>
        <Input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
         <Input
          placeholder="ReEnterPassword"
          type="password"
          value={""}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <Button title="Signup" onClick={SignupHandler} />
      </div>

        </div>


    );

    
}