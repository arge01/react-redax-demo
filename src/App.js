import React           from 'react';
import './App.css';
import Counter         from "./components/Counter";

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
