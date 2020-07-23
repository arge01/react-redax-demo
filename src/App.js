import React           from 'react';
import './App.css';
import Counter         from "./components/Counter";
import IncreaseCounter from "./components/Counter/IncreaseCounter";
import DecreaseCounter from "./components/Counter/DecreaseCounter";
import EmptyCounter    from "./components/Counter/EmptyCounter";

function App() {
  return (
      <main className="main">
          <div className="count">
              <Counter />
          </div>
      </main>
  );
}

export default App;
