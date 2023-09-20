import './App.css';
import Page from './components/Page/page'
import Form from './components/Form/form'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/Form" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
