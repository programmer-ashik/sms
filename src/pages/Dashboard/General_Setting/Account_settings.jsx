import { Form, Formik } from "formik";
import Icon from "../../../shared/Components/Iocn/Icon";
import { Icons } from "../../../shared/constant/icon.constant";
import { InputField } from "../../../shared/Components/Form/InputField";
import { SelectField } from "../../../shared/Components/Form/SelectField";
import {
  currencyOptions,
  timeZoneOptions,
} from "../../../shared/constant/timeZone.constant";
import Button from "../../../shared/Components/Button/Button";
import Account_Info from "../../../components/Dashboard/General_Setting/AccountSettings/Account_Info";
import { useState } from "react";

const Account_settings = () => {
  const [values, setValues] = useState({});
  return (
    <div>
      <div className="w-full rounded-full h-16 gradient_primary flex justify-start items-center gap-4 px-8">
        <Icon icon={Icons.Setting} className="text-3xl text-white" />
        <h1 className=" text-xl font-bold text-white">Account Settings</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mt-8">
        <div className="w-full md:w-[60%]">
          <Formik
            initialValues={{
              email: "",
              password: "",
              timeZone: "",
              currency: "",
              symbol: "$",
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setValues(values);
              setSubmitting(false);
            }}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <InputField
                  label={"UserName*"}
                  name={"email"}
                  placeholder="contact@innovixa.com.bd"
                  className=" mt-4"
                  colors={["gradient_primary"]}
                />
                <InputField
                  label={"Password*"}
                  name={"password"}
                  type="password"
                  placeholder="********"
                  className=" mt-4"
                  colors={["gradient_primary"]}
                />
                <SelectField
                  label={"TimeZone*"}
                  name={"timeZone"}
                  options={timeZoneOptions}
                  colors={["gradient_primary"]}
                  className="mt-4"
                />
                <div className="flex justify-between items-center gap-4">
                  <SelectField
                    label={"Currency*"}
                    name={"currency"}
                    options={currencyOptions}
                    colors={["gradient_primary"]}
                    className="mt-4 w-full md:w-[60%]"
                  />
                  <InputField
                    label={"symbol"}
                    name={"symbol"}
                    type="text"
                    colors={["gradient_primary"]}
                    className="mt-4 w-full md:w-[40%]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    icon={Icons.update}
                    className={
                      "rounded-full gradient_primary text-white mt-4 cursor-pointer"
                    }
                    isSubmitting={isSubmitting}
                  >
                    Update settings
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="w-full md:w-[35%] rounded-md shadow-md">
          <Account_Info values={values} />
        </div>
      </div>
    </div>
  );
};

export default Account_settings;
