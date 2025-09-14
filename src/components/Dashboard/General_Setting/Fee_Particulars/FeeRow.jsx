import { InputField } from "../../../../shared/Components/Form/InputField";

export const FeeRow = ({ field, values }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
    <InputField
      label="Particular Label*"
      name={field.name1}
      className="w-full md:w-2/3"
      placeholder={values[field.name1]}
      color={["bg-purple-700", "bg-gray-500"]}
      readOnly={field.readOnly}
    />
    <InputField
      label="Prefix Amount"
      name={field.name2}
      className="w-full md:w-1/3"
      placeholder={values[field.name2]}
      color={["bg-purple-700", "bg-gray-500"]}
      readOnly={field.readOnly}
    />
  </div>
);
