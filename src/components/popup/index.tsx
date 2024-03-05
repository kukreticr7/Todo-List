import "./styles.css";
interface Proptypes {
  text: string;
  closePopup: () => void;
  onClick:() => void;
}

const Popup = ({ text, closePopup,onClick }: Proptypes) => (
  <div className="popup">
    <div className="popup_inner">
      <h1>{text}</h1>
      <div className="popup_button">
        <button onClick={onClick}>Yes</button>
        <button onClick={closePopup}>No</button>
      </div>
    </div>
  </div>
);

export default Popup;
