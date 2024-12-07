import Categories from './layouts/Categories';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';

function App() {
  return (
    <div>
      <Navi/>
      <Categories/>
      <Dashboard/>
    </div>
  );
}

export default App;
