import './App.css';
import Row from './componentes/Row'
import {categories} from './api'

function App() {

  return (
    <div className="App">
      {/*navbar*/}
      {/*destaque*/}
      {/*em alta*/}
      {categories.map((category)=>{
        return<Row key={category.name} title={category.title} path={category.path}/>
      })}
    </div>
  );
}

export default App;
