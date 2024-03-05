import React, { useContext } from "react";
import TaskInput from "./TaskInput";
import Button from "./button";
import "./styles.css";
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../store/GlobalContextProvider";

interface Proptypes {
  id: number;
  title: string;
  setTitle: (val: string) => void;
  desc: string;
  setDesc: (val: string) => void;
  setId: (val: number) => void;
}

const AddTask: React.FC<Proptypes> = ({
  title,
  desc,
  setTitle,
  setDesc,
  id,
  setId,
}: Proptypes) => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const handleClick = () => {
    let taskToEdit;
    if (state) {
      taskToEdit = state.tasks.find((task) => task.id === id);
    }

    if (dispatch) {
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
        setId(0);
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
    } else {
      console.error("Dispatch is undefined. Check your context provider.");
    }
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
