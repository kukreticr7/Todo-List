import { useState, ChangeEvent } from "react";
import "./styles.css";

interface Proptypes {
  type: string;
  value: string;
  setValue: (val: string) => void;
}

const TaskInput: React.FC<Proptypes> = ({ type, value, setValue }: Proptypes) => {
  const [placeholder, setPlaceholder] = useState('Title');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Title');
  };

  return (
    <>
      {type === "textarea" ? (
        <textarea
          className="task-input"
          spellCheck={false}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            handleInputChange(e);
            adjustTextareaHeight(e.target as HTMLTextAreaElement);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          type="text"
          value={value}
          className="task-input"
          placeholder={placeholder}
          onInput={(e:ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </>
  );
};

export default TaskInput;
