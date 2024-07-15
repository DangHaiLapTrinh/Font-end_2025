import "./App.scss";
import Headers from "./components/Headers";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/esm/Container";
function App() {
  return (
    <>
      <div className="container-app">
        <Headers />
        <Container>
          <TableUsers />
        </Container>
      </div>
    </>
  );
}

export default App;
