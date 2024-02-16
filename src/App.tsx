import { Route, Routes } from "react-router-dom";
import Memotest from "./Memotest";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Memotest />} />
    </Routes>
  );
}

export default App;
