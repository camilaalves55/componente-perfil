import './App.css';
import UserProfile from './components/UserProfile';

function perfil() {
  let name = "Camila";
  let age = "17";
  let email = "mila@gmail";

  return (
    <div className="perfil">
      <UserProfile
        name={name}
        age={age}
        email={email}
      />
    </div>
    
  );
}

export default perfil;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
