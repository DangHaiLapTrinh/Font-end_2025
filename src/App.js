import './App.scss';
import Headers from './components/Headers'
import TableUsers from './components/TableUsers';
function App() {
  return (
    <>
      <div className="container-app">
        <Headers/>
        <TableUsers/>
      </div>
    </>
);
}

export default App;
