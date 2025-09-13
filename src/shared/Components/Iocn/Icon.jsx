const Icon = ({ icon: IconComponent, className = "", ...attributes }) => {
  return (
    <IconComponent
      className={`transition-all duration-200 ease-out origin-top cursor-pointer ${className}`}
      {...attributes}
    />
  );
};

export default Icon;
