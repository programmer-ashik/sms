import { Field, ErrorMessage } from "formik";

export const SelectField = ({
  label,
  name,
  options = [],
  colors = ["bg-primary", "bg-gray-400"], // default colors
  readOnly = false,
  className = "",
  selectClassName = "",
  optionClassName = "",
}) => {
  // Normalize options to objects
  const normalizedOptions = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`absolute -top-2 left-4 z-10 font-medium px-2 rounded-md text-[10px] lg:text-sm ${
            readOnly ? colors[1] : colors[0]
          } text-white`}
        >
          {label}
        </label>
      )}

      <Field
        as="select"
        name={name}
        id={name}
        disabled={readOnly}
        className={`p-2 px-4 py-4 rounded-[20px] theme-bg theme-text w-full border ${selectClassName}`}
      >
        <option value="" disabled>
          Select {label}
        </option>

        {normalizedOptions.map((opt) => (
          <option key={opt.value} value={opt.value} className={optionClassName}>
            {opt.label}
          </option>
        ))}
      </Field>

      <ErrorMessage
        name={name}
        component="span"
        className="text-red-500 text-xs"
      />
    </div>
  );
};
