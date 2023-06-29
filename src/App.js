
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {

  const clei = "cleitin"

  return (
    <div className="App">
      <HelloWord />
      <SayMyName name="'cleito'" />
      <SayMyName name="'cleitosis'" />
      <SayMyName name={clei} />
      <Pessoa nome='cleitone' sobrenome='cleitoseu' idade='999' profissao='semideus' />
    </div>
  );
}

export default App;
