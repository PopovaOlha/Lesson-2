import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Task1 from './pages/Task-1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/task1" element={<Task1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
