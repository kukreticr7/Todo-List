import './styles.css'
interface Proptypes {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

const CardButton = ({ children,className,onClick }: Proptypes) => {
  return <button className={`${className} cardButton`} onClick={onClick}>{children}</button>;
};

export default CardButton;
