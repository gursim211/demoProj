import logo from './logo.svg';
import './App.css';
import MenuBack from './components/menuBack/MenuBack';
import InnerBack from './components/innerBack/InnerBack';

function App() {
  return (
    <>
      <div className="background">
        <div className="menu-background">
          <MenuBack />
          <InnerBack />
        </div>
        </div>
      </>
      );
}

      export default App;
