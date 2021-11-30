import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import ProjectInfo from './Pages/ProjectInfo/ProjectInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/project-info/:id" element={<ProjectInfo></ProjectInfo>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
