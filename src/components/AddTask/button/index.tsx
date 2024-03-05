import Add from "../../../assets/images/add";
import "./styles.css";
interface Proptypes {
  onClick?: () => void;
}
const Button = ({ onClick }: Proptypes) => {
  return (
    <button type="submit" className="add-task-button" onClick={onClick && onClick}>
      <Add />
    </button>
  );
};

export default Button;
