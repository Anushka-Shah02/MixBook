import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Calendar from './components/Calendar';
import menu from './components/Menu';

function App() {
  return (
    <div className="App">
        <Calendar menu={menu} />
        <Main/>
    </div>
  );
}

export default App;
