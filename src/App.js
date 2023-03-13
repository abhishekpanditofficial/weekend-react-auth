import './App.css';
import {GoogleAuthProvider,getAuth,signInWithPopup, signOut} from 'firebase/auth'
function App() {


   const loginWithGoogle = () => {
    const  provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth,provider).then((result) => {
      //THis gives a Google access Token
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken;
  
      //Signed-in user info
      const user = result.user
      console.log(token)
      console.log(result)
  
    }).catch((error) => {
      console.log(error)
    })
  } 

  const logOut = () => {
    const auth = getAuth();
    auth.signOut()
  }


  return (
    <div className="App">
      <button onClick={loginWithGoogle} >Login with Google</button>
      <button onClick={logOut} >LogOut</button>
    </div>
  );
}

export default App;
