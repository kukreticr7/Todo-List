interface Proptypes {
  className?: string;
  onClick?: () => void;
}

const Edit = ({ className, onClick }: Proptypes) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
      onClick={onClick && onClick}
    >
      <g clip-path="url(#clip0_3334_249)">
        <path
          d="M2.41675 11.1111V13.3333H4.63897L11.193 6.77926L8.97082 4.55704L2.41675 11.1111ZM12.9116 5.06074C13.1427 4.82963 13.1427 4.4563 12.9116 4.22519L11.5249 2.83852C11.2938 2.60741 10.9205 2.60741 10.6893 2.83852L9.6049 3.92296L11.8271 6.14519L12.9116 5.06074Z"
          fill="#D9D9D9"
        />
      </g>
      <defs>
        <clipPath id="clip0_3334_249">
          <rect
            width="14.2222"
            height="14.2222"
            fill="white"
            transform="translate(0.638916 0.888889)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Edit;
