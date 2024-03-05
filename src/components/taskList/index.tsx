import React, { useState, useContext } from "react";
import InfoIcon from "../../assets/images/infoIcon";
import Edit from "../../assets/images/edit";
import Cross from "../../assets/images/cross";
import CardButton from "./cardButton";
import "./styles.css";
import { GlobalStateContext } from "../../store/GlobalContextProvider";

interface Task {
  id: number;
  title: string;
  desc: string;
}

interface Proptypes {
  setTitle: (val: string) => void;
  setDesc: (val: string) => void;
  setId: (val: number) => void;
  togglePopup: () => void;
}

const TaskList: React.FC<Proptypes> = ({
  setTitle,
  setDesc,
  setId,
  togglePopup,
}: Proptypes) => {
  const state = useContext(GlobalStateContext);
  const [editStates, setEditStates] = useState<boolean[]>(
    state?.tasks?.map(() => false) ?? []
  );

  const handleEditClick = (index: number) => {
    const newEditStates = [...editStates];
    newEditStates[index] = true;
    setEditStates(newEditStates);
  };

  return (
    <div className="tasklist">
      {state?.tasks.length === 0 ? (
        <span className="no-task">No tasks</span>
      ) : (
        <div className="card-grid">
          {state?.tasks?.map((item: Task, key: number) => {
            return (
              <div className="card" key={key}>
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-body">{item.desc}</p>
                </div>
                <div className="card-button">
                  {editStates[key] ? (
                    <>
                      <CardButton
                        className="editButton"
                        onClick={() => {
                          setId(Number(item.id));
                          setTitle(item.title);
                          setDesc(item.desc);
                        }}
                      >
                        <Edit />
                      </CardButton>
                      <CardButton
                        className="editButton"
                        onClick={() => {
                          setId(Number(item.id));
                          togglePopup();
                        }}
                      >
                        <Cross />
                      </CardButton>
                    </>
                  ) : (
                    <CardButton
                      className="infoButton"
                      onClick={() => handleEditClick(key)}
                    >
                      <InfoIcon />
                    </CardButton>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaskList;
