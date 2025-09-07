import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProfilePreview } from "../../../components/Dashboard/General_Setting/InstituteProfile/ProfileView";

// ✅ Validation schema
const validationSchema = Yup.object({
  instituteName: Yup.string().required("Required"),
  tagline: Yup.string(),
  phone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email"),
  website: Yup.string().url("Invalid URL"),
  address: Yup.string(),
  country: Yup.string().required("Required"),
});

// ✅ Reusable Input component
const InputField = ({ label, name, type = "text", placeholder }) => (
  <div className="flex flex-col gap-1 w-full">
    <label htmlFor={name} className="text-lg font-medium">
      {label}
    </label>
    <div className="theme-border">
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className=" px-2 py-4  rounded w-full theme-bg"
      />
    </div>

    <ErrorMessage
      name={name}
      component="span"
      className="text-red-500 text-xs"
    />
  </div>
);

// ✅ Reusable Select component
const SelectField = ({ label, name, options }) => (
  <div className="flex flex-col gap-1 ">
    <label htmlFor={name} className="text-sm font-medium">
      {label}
    </label>
    <div className="theme-border">
      <Field
        as="select"
        name={name}
        id={name}
        className="p-2 px-2 py-4 rounded theme-bg theme-text w-full"
      >
        <option className="w-full" value="">
          Select {label}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Field>
    </div>

    <ErrorMessage
      name={name}
      component="span"
      className="text-red-500 text-xs"
    />
  </div>
);

const Institute = () => {
  return (
    <Formik
      initialValues={{
        logo: null,
        instituteName: "",
        tagline: "",
        phone: "",
        email: "",
        website: "",
        address: "",
        country: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submitted:", values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 theme-bg theme-text">
          {/* Left Side Form */}
          <div className="w-full">
            <div className="flex flex-col justify-center items-center p-4">
              <h1 className="text-2xl font-semibold">Update Profile</h1>
              <div className="flex justify-center items-center gap-4">
                <div className="w-4 h-1 border-3 border-red-500 rounded-full"></div>
                <div className="w-4 h-1 border-3 theme-bg rounded-full"></div>
              </div>
            </div>
            <div className="p-3 rounded-md shadow-sm w-full flex justify-between items-center gap-4">
              <div className="w-full sm:w-1/2 space-y-3">
                <div className="flex flex-col gap-1 w-full ">
                  <label className="text-lg font-medium">Institute Logo</label>
                  <div className="theme-border">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFieldValue("logo", e.target.files[0])}
                      className="p-2 theme-bg theme-text rounded w-full h-[100px]"
                    />
                  </div>
                </div>
                <div className=" flex flex-col justify-start items-start">
                  {/* Input Fields */}
                  <InputField
                    label="Institute Name"
                    name="instituteName"
                    placeholder="Enter institute name"
                  />
                  <InputField
                    label="Tagline"
                    name="tagline"
                    placeholder="Institute tagline"
                  />

                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              {/* Logo */}
              <div className="w-full sm:w-1/2 space-y-3 ">
                <InputField
                  label="Phone Number"
                  name="phone"
                  placeholder="+880-XXXX-XXX"
                />
                <InputField
                  label="Website"
                  name="website"
                  placeholder="https://example.com"
                />
                <InputField
                  label="Address"
                  name="address"
                  placeholder="Enter address"
                />

                <SelectField
                  label="Country"
                  name="country"
                  options={["Bangladesh", "India", "USA"]}
                />
              </div>
            </div>
            <div className="w-1/2 h-12">
              <button
                type="submit"
                className="
      h-full w-full rounded-md font-medium text-white 
      bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
      dark:from-purple-600 dark:via-blue-500 dark:to-cyan-400
      transition-all duration-300 
      hover:opacity-90 hover:scale-[1.02]
      focus:outline-none focus:ring-2 focus:ring-purple-500
    "
              >
                Update Profile
              </button>
            </div>
          </div>

          {/* Right Side Preview */}
          <div className=" col-span-1 sm:flex justify-center items-start">
            <ProfilePreview values={values} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Institute;
