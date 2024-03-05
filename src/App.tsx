import { useState,useContext } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/header";
import TaskList from "./components/taskList";
import Popup from "./components/popup";
import { GlobalDispatchContext } from "./store/GlobalContextProvider";

function App() {
  const dispatch = useContext(GlobalDispatchContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const removeTask=()=>{
    dispatch({ type: "REMOVE_TASK", payload: id });
    setId("");
    setShowPopup(!showPopup);
  }

  console.log(title, desc, "setTitle");
  return (
    <>
      <Header />
      <AddTask
        id={id}
        setId={setId}
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
      />
      <TaskList togglePopup={togglePopup} setTitle={setTitle} setDesc={setDesc} setId={setId} />

      {showPopup && <Popup onClick={removeTask} text="Delete this task?" closePopup={togglePopup} />}
    </>
  );
}

export default App;
