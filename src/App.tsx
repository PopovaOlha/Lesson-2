import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
