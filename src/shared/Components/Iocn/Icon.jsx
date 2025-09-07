const Icon = ({ icon: IconComponent, className = "", ...attributes }) => {
  return (
    <IconComponent
      className={`h-6 w-6 transition-all duration-200 ease-out origin-top cursor-pointer ${className}`}
      {...attributes}
    />
  );
};

export default Icon;
