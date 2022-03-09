import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Todo from "./todo";
import Accordion from "./components/Accordion";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));