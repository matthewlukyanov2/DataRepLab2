import './App.css';
//imported components
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    //composed Content, Footer and Header from components in return block
    <div>
      
      <Content></Content>
      <Footer> </Footer>
      <Header></Header>
    </div>
  );
}

export default App;
