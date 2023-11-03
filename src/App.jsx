import "./App.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          onChange={(e) => {
            setSignUpEmail(e.target.value);
          }}
          value={signUpEmail}
          type="text"
          className="email"
        />
        <input
          onChange={(e) => {
            setSignUpPassword(e.target.value);
          }}
          value={signUpPassword}
          type="text"
          className="password"
        />
        <button>Submit</button>
      </form>

      <form action="">
        <h2>Sign In</h2>
        <input
          onChange={(e) => {
            setSignInEmail(e.target.value);
          }}
          value={signInEmail}
          type="text"
          className="email"
        />
        <input
          onChange={(e) => {
            setSignInPassword(e.target.value);
          }}
          value={signInPassword}
          type="text"
          className="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
