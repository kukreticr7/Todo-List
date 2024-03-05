interface Proptypes {
  className?: string;
  onClick?: () => void;
}

const InfoIcon = ({ className, onClick }: Proptypes) => {
  return (
    <svg
      width="3"
      height="12"
      viewBox="0 0 3 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
      onClick={onClick && onClick}
    >
      <path
        d="M2.63281 3.54688V12H0.375V3.54688H2.63281ZM0.234375 1.34375C0.234375 1.01562 0.348958 0.744792 0.578125 0.53125C0.807292 0.317708 1.11458 0.210938 1.5 0.210938C1.88021 0.210938 2.1849 0.317708 2.41406 0.53125C2.64844 0.744792 2.76562 1.01562 2.76562 1.34375C2.76562 1.67188 2.64844 1.94271 2.41406 2.15625C2.1849 2.36979 1.88021 2.47656 1.5 2.47656C1.11458 2.47656 0.807292 2.36979 0.578125 2.15625C0.348958 1.94271 0.234375 1.67188 0.234375 1.34375Z"
        fill="white"
      />
    </svg>
  );
};

export default InfoIcon;
