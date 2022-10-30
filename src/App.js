import { Route, Routes } from 'react-router-dom';
import Dashboards from './conponents/Layout/Dashboards';
import Layout from './conponents/Layout/Layout';
// import Header from './conponents/Shared';




function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Dashboards />}></Route>
        </Route>
        
      </Routes>
        
    </div>
  );
}

export default App;
