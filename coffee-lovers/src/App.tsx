import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageWindow from './components/PageWindow';

function App() {
  return (
    <div className='App'>
        <body className='body'>
        <Header/>
        <PageWindow/>
        <Footer/>
        </body>

      {/* <button onClick={() => {
          alert(`Result from WebAssembly: ${window.myGolangFunction(2, 3)}`);
        }}>
          Click here to invoke WebAssembly
        </button> */}
    </div>
  );
}

export default App;
