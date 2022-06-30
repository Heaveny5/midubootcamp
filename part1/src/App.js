
import './App.css';
import Mensaje from './mensajes';

const Description=()=>{
  return <p>esta es la app del curso full stack</p>
}
function App() {

  return (
    <div className="App">
      <Mensaje color='red' message='estamos trabajando'/>
      <Mensaje  color ='green' message='en un curso'/>
      <Mensaje color='yellow' message='de react'/>
      <Description/>
    </div>
  );
}

export default App;
