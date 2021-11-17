import "./App.scss";
import InputSection from "./Components/InputSection/InputSection";
import ToDoBlock from "./Components/ToDoBlock/ToDoBlock";

function App() {
  return (
    <div className="App">
      <section className="InputSection">
        <InputSection />
      </section>
      <section className="To-Do-Section">
        <ToDoBlock />
      </section>
    </div>
  );
}

export default App;
