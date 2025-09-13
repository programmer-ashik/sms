import React from "react";
import FormHeader from "../../../shared/Components/Form/FormHeader";
import FileUploadField from "../../../shared/Components/Form/FileUploadField";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { InputField } from "../../../shared/Components/Form/InputField";
import Button from "../../../shared/Components/Button/Button";
import { Icons } from "../../../shared/constant/icon.constant";
import BankList from "../../../components/Dashboard/General_Setting/InstituteProfile/Account_for_fees_invoice/BankList";

const Account_for_fees_Invoice = () => {
  return (
    <div className=" h-full flex flex-col lg:flex-row justify-between py-4 gap-4">
      <div className=" rounded-md shadow-md py-4 w-full lg:w-2/5  flex flex-col justify-start items-center">
        <FormHeader title={"Add New Bank"} />
        <Formik
          initialValues={{
            image: null,
            bankName: "",
            branchName: "",
            accountNumber: "",
            instructions: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, actions, setFieldValue }) => (
            <Form className=" w-full space-y-6 px-4">
              <FileUploadField
                name="image"
                label="Bank Image"
                values={values}
                setFieldValue={setFieldValue}
              />
              <InputField
                label="Bank Name"
                name="bankName"
                placeholder="Your Bank Name"
                className={"w-full mt-8"}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label="Bank/Branch Address"
                name="branchName"
                placeholder="Bank Address"
                className={"w-full mt-8"}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label="Account Number*"
                name="accountNumber"
                placeholder="Bank Account No"
                className={"w-full mt-8"}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label="Instructions"
                name="instructions"
                placeholder="Write Instructions"
                className={"w-full mt-8"}
                color={["bg-gray-500", "bg-gray-500"]}
              />
              <div className="w-full flex justify-center items-center">
                <Button className={"rounded-full btn_primery"} icon={Icons.add}>
                  Add Bank
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-full flex justify-start items-start">
        <BankList />
      </div>
    </div>
  );
};

export default Account_for_fees_Invoice;
