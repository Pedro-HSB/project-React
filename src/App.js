
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import List from "./components/List"

function App() {

  const clei = "cleitin"

  return (
    <div className="App">
      <HelloWord />
      <SayMyName name="'cleito'" />
      <SayMyName name="'cleitosis'" />
      <SayMyName name={clei} />
      <Pessoa nome='cleitone' sobrenome='cleitoseu' idade='999' profissao='semideus' />
      <List />
    </div>
  );
}

export default App;
