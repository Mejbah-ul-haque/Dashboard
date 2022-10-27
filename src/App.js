import { Route, Routes } from 'react-router-dom';
import Dashboard from './conponents/Dashboard/Dashboard';
import Sidebar from './conponents/Sidebar';




function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        
      </Routes>
        
    </div>
  );
}

export default App;
