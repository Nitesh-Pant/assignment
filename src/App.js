import Header from './components/Header'
import './App.css';
import SubHeader from './components/SubHeader';
import InventoryCount from './components/InventoryCount';
import AverageMSRP from './components/AverageMSRP';
import History from './components/History';
import RecentData from './components/RecentData';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <RecentData/>
      <InventoryCount />
      <AverageMSRP />
      <History />
    </div>
  );
}

export default App;
