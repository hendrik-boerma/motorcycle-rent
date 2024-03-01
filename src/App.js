import './App.css';
import Nav from './Components/Nav';
import Routing from './Components/Routing';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Routing />
      </main>
      <Footer />
    </>

  );
}

export default App;
