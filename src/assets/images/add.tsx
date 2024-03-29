interface Proptypes {
  className?: string;
  onClick?: () => void;
}

const Add = ({ className, onClick }: Proptypes) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
      onClick={onClick && onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5 1C13.5 0.447715 13.0523 0 12.5 0H11.5C10.9477 0 10.5 0.447715 10.5 1V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H1C0.447715 10.5 0 10.9477 0 11.5V12.5C0 13.0523 0.447715 13.5 1 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V23C10.5 23.5523 10.9477 24 11.5 24H12.5C13.0523 24 13.5 23.5523 13.5 23V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H23C23.5523 13.5 24 13.0523 24 12.5V11.5C24 10.9477 23.5523 10.5 23 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V1Z"
        fill="#FF8303"
      />
    </svg>
  );
};

export default Add;
