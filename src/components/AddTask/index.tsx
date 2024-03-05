import React, { useContext } from "react";
import TaskInput from "./TaskInput";
import Button from "./button";
import "./styles.css";
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../store/GlobalContextProvider";

interface Proptypes {
  id: string;
  title: string;
  setTitle: (val: string) => void;
  desc: string;
  setDesc: (val: string) => void;
  setId: (val: string) => void;
}

const AddTask: React.FC<Proptypes> = ({ title, desc, setTitle, setDesc, id, setId }: Proptypes) => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const handleClick = () => {
    const taskToEdit = state.tasks.find((task) => task.id === id);

    if (taskToEdit) {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          id: id,
          changes: {
            title: title,
            desc: desc,
          },
        },
      });
      setId("");
    } else if (title !== "" && desc !== "") {
      const newTask = {
        id: Date.now(),
        title: title,
        desc: desc,
      };

      dispatch({ type: "ADD_TASK", payload: newTask });
    }
    setTitle("");
    setDesc("");
  };

  return (
    <div className="addTask">
      <div className="addTask__input">
        <TaskInput type="input" value={title} setValue={setTitle} />
        <TaskInput type="textarea" value={desc} setValue={setDesc} />
      </div>

      <Button onClick={handleClick} />
    </div>
  );
};

export default AddTask;
