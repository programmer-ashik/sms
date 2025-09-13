import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProfilePreview } from "../../../components/Dashboard/General_Setting/InstituteProfile/ProfileView";
import { InputField } from "../../../shared/Components/Form/InputField";
import { SelectField } from "../../../shared/Components/Form/SelectField";
import FormHeader from "../../../shared/Components/Form/FormHeader";
import Button from "../../../shared/Components/Button/Button";
import { useState } from "react";
import { Icons } from "../../../shared/constant/icon.constant";

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
const Institute = () => {
  const [values, setValues] = useState([]);
  return (
    <>
      <div className="  w-full">
        <FormHeader title="Update Profile" options={["Required", "Optional"]} />
        <div className="  w-full flex flex-col lg:flex-row justify-between items-start">
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
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log(values);
                setValues(values);
                actions.setSubmitting(false);
              }, 2000);
            }}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form className=" theme-bg theme-text w-full lg:w-3/5">
                {/* Left Side Form */}
                <div className="p-3 rounded-md shadow-sm w-full flex justify-between items-center gap-4">
                  <div className="w-full sm:w-1/2 space-y-6">
                    <div className=" relative flex flex-col gap-1 w-full ">
                      <label className=" absolute -top-3 left-4 font-medium bg-[#EA2264] px-1 rounded-sm text-sm text-white">
                        Institute Logo
                      </label>
                      <div className="theme-border ">
                        <div className=" theme-bg flex flex-col md:flex-row justify-between items-center gap-2 rounded-[20px] py-3 px-4">
                          {values.logo ? (
                            <img
                              src={URL.createObjectURL(values.logo)}
                              alt="logo"
                              className="h-20 w-20 border-2 object-cover rounded-full mb-3"
                            />
                          ) : (
                            <div className="h-20 w-20 rounded-full border-2 text-center py-3">
                              <p className="">Institute Logo</p>
                            </div>
                          )}

                          <input
                            id="logo"
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setFieldValue("logo", e.target.files[0])
                            }
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              document.getElementById("logo").click()
                            }
                            className="p-1 sm:p-2 theme-bg theme-text rounded-[20px] w-[100%] md:w-[30%] lg:w-[60%] border-2 text-sm"
                          >
                            {values.logo ? values.logo.name : "Change Logo"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col justify-start items-start space-y-6">
                      {/* Input Fields */}
                      <InputField
                        label="Institute Name"
                        name="instituteName"
                        placeholder="Enter institute name"
                        className={"w-full"}
                      />
                      <InputField
                        label="Tagline"
                        name="tagline"
                        placeholder="Institute tagline"
                        className={"w-full"}
                      />

                      <InputField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="example@mail.com"
                        className={"w-full"}
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 space-y-6 ">
                    <InputField
                      label="Phone Number"
                      name="phone"
                      placeholder="+880-XXXX-XXX"
                      className={"w-full"}
                    />
                    <InputField
                      label="Website"
                      name="website"
                      placeholder="https://example.com"
                      className={"w-full"}
                    />
                    <InputField
                      label="Address"
                      name="address"
                      placeholder="Enter address"
                      className={"w-full"}
                    />

                    <SelectField
                      label="Country"
                      name="country"
                      options={["Bangladesh", "India", "USA"]}
                    />
                    <div className=" mt-4">
                      <Button
                        isSubmitting={isSubmitting}
                        icon={Icons.add}
                        className={"btn_primery rounded-full"}
                      >
                        Update Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className=" w-full md:w-2/5 flex justify-center items-center shadow-md">
            <ProfilePreview values={values} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Institute;
