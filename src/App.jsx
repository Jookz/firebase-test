import "./App.css";
import "./firebase";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then(({ user }) => {
        const { email, uid } = user;
        // Signed in
        const newUser = { email, uid };

        console.log(newUser, "Sign Up");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then(({ user }) => {
        const { email, uid } = user;
        // Signed in
        const newUser = { email, uid };

        console.log(newUser, "Sign In");

        // console.log(newUser);
        // ...
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
        />
        <input
          onChange={(e) => {
            setSignUpPassword(e.target.value);
          }}
          value={signUpPassword}
          type="text"
        />
        <button>Submit</button>
      </form>

      <form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <input
          onChange={(e) => {
            setSignInEmail(e.target.value);
          }}
          value={signInEmail}
          type="text"
        />
        <input
          onChange={(e) => {
            setSignInPassword(e.target.value);
          }}
          value={signInPassword}
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
