
import './App.css';

function App() {

  const name = "cleito";

  const url = "https://images.pexels.com/photos/3183649/pexels-photo-3183649.jpeg?auto=compress&cs=tinysrgb&w=400";

  function soma(a , b){
    return a + a + b;
  }

  return (
    <div className="App">
      <h1>Hello Word !!</h1>
      <h3>ola, my friendo {name}</h3>
      <h3>soma : {10 + 20}</h3>
      <h3>soma : {soma(5,10)}</h3>
      <img src={url} />
    </div>
  );
}

export default App;
