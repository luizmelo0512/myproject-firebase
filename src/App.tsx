import { useState, useEffect } from 'react';
import { query, collection, getFirestore, where, getDocs } from "firebase/firestore"
import firebaseDB from './config/firebase';

function App() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");



  async function getLogin() {
    const db = getFirestore(firebaseDB);
    const tb_usuarios = collection(db, "usuarios");
    const result = query(tb_usuarios, where("login", "==", login), where("senha", "==", password));
    const snapshot = await getDocs(result);
    console.log('SNAPSHOT SIZE: ' + snapshot.size);
    if (snapshot.size > 0) {
      snapshot.forEach((doc) => {
        setName(doc.data()['nome']);
        console.log('TESTE');
        console.log(doc.id, " -- ", name);
      });
    } else {
      setName('');
    }

  }

  return (
    <div className="App">
      <h1>Login de Usuario</h1>
      <input type='text' onChange={(event) => setLogin(event.target.value)} />
      <br />
      <input type='password' onChange={(event) => setPassword(event.target.value)} />
      <br />
      <input type='button' onClick={
        getLogin
      } />

      {name != null ? <p>{name}</p> : <br />}
    </div>
  );
}

export default App;
