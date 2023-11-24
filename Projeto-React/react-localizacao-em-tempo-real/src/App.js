import logo from './logo.svg';
import './App.css';
import MapaAtual from './Mapa/MapaAtual';
import MapaLongitudeLatitude from './Mapa/MapaLongLate';
import MapaCidade from './Mapa/MapaCidade';
function App() {
  return (
    <div className="App">
      {/* <MapaAtual/> */}
      <MapaCidade/>
    </div>
  );
}
// Exporta o componente 'App' como o componente principal da aplicação.
//Isso da para se usar em sites de lojas fisicas etc...

//Diferenças
//O Google mostra o que ele quer
//Na minha aplicação eu mostro o que eu quiser no mapa
//no linux da para editar o openStreetMap

//Posso por quantos marcadores eu quiser
export default App;
