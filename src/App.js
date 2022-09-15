import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My TaskList App !!!</p>
      </header>

      <div claseName="Card">
        <form>
          <label>
            <p>
              <input type="text" name="name" />{" "}
            </p>
            <button type="Add" name="Addcard"> Add </button>
          </label>
        </form>
      </div>

      <div>
        <p>TaskList</p>

      </div>
    </div>
  );
}

export default App;
