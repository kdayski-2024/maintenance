import './App.css';
import BebraIcon from './icons/BebraIcon';
import TelegramIcon from './icons/TelegramIcon';
import TymioIcon from './icons/TymioIcon';
import XIcon from './icons/XIcon';

function App() {
  return (
    <>
      <div className="icon__header-wrapper">
        <TymioIcon />
      </div>
      <div className="app">
        <div className="content">
          <h1>The site is undergoing maintenance.</h1>
        </div>
        <div className="icon-wrapper">
          <BebraIcon />
          <TelegramIcon />
          <XIcon />
        </div>
      </div>
    </>
  );
}

export default App;
