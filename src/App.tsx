import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/Main';
import TestPage from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainLayout/>}/>
        <Route key='test' path='/test' element={<TestPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
