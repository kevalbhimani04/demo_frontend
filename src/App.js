import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (

    <BrowserRouter>
      <ToastContainer />
      <Navigation />

    </BrowserRouter>
  );
}

export default App;
