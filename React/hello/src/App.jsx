import Title from './components/Title/Title';
import CardEvento from './components/CardEventos/CardEventos';
import Container from './components/Container/Container';
import Contador from './components/Contador/Contador';
import Rotas from './route';

import './App.css';

function App() {
  return (
    <div className="App">
      <Rotas/>
      {/* <h1>Hello World React</h1>
      <Title nome="Marcelo" sobrenome=" Araújo" />
      <br></br>
      
      <Container>
        <CardEvento titulo="Sql Server" texto="evento de Sql Server" link=" com o evento Sql Server" />
        <CardEvento titulo="React" texto="evento de react" link=" com o evento React" />
        <CardEvento titulo="C#" texto="evento de C#" link=" com o evento C#" />
        <CardEvento titulo="API" texto="evento de API" link=" com o evento API" />
      </Container>

      <Container>
        <Contador></Contador>
      </Container> */}
      </div>
  );
}

export default App;
