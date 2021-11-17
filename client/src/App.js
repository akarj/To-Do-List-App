import "./App.scss";
import InputSection from "./Components/InputSection/InputSection";
import ToDoBlock from "./Components/ToDoBlock/ToDoBlock";
import { Data } from "./Dummydata";

function App() {
  // TODO: Functions
  // Funtion to add task in the List
  const addToDoTaskButtonHandler = e => {
    if (e === "") return;
    console.log("button Clicked");
    console.log(e);
  };
  return (
    <div className="App">
      {console.log(Data)}
      <section className="InputSection">
        <InputSection addTaskToList={addToDoTaskButtonHandler} />
      </section>
      <section className="To-Do-Section">
        <ToDoBlock ToDoListData={Data} />
      </section>
    </div>
  );
}

export default App;
