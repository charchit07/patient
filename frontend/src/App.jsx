import "./App.css";
import { Field } from "./Component/Input";
import { Btn } from "./Component/Button";
import TableComponent from "./Component/Table";

function App() {
  return (
    <div className="App">
      <Field />
      <Btn />
      <TableComponent />
    </div>
  );
}

export default App;
