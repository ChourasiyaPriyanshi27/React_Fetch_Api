import "./App.css";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NextCards from "./components/NextCards";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route path="/next/:id" element={<NextCards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
