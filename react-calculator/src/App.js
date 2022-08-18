import './App.css';
import LogoScreen from './Components/LogoScreen';
import ButtonGrid from './Layout/ButtonGrid';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <LogoScreen></LogoScreen>
        <ButtonGrid></ButtonGrid>
      </Layout>
    </div>
  );
}

export default App;
