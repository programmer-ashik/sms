import React from "react";
import FormHeader from "../../../shared/Components/Form/FormHeader";
import { Form, Formik } from "formik";
import { InputField } from "../../../shared/Components/Form/InputField";
import Button from "../../../shared/Components/Button/Button";
import { Icons } from "../../../shared/constant/icon.constant";

const Fees_perticulars = () => {
  return (
    <div>
      <FormHeader
        title={"Change Fee Particulars"}
        options={["Editable", "Fixed"]}
        color={["border-purple-500", "border-gray-500"]}
      />
      <Formik
        initialValues={{
          fee_particulars: "",
          monthly_tution: "[MONTHLY TUTION FEE]",
          monthly_tution_fee: "[FIXED]",
          admission: "ADMISSION FEE",
          admission_fee: "0",
          registration: "REGISTRATON FEE",
          registration_fee: "0",
          art_matarial: "ART MATERIAL",
          art_matarial_fee: "0",
          transport: "TRANSPORT",
          transport_fee: "0",
          books: "Books",
          books_fee: "0",
          uniform: "UNIFORM",
          uniform_fee: "0",
          fine: "FINE",
          fine_fee: "0",
          others: "OTHERS",
          others_fee: "0",
          previous_balnce_fee: "[FIXED]",
          previous_balnce: "PREVIOUS BALANCE",
          discount: "DISCOUNT IN FEE [FIXED]",
          discount_in_fee: "[FIXED]",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 200);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className=" w-full px-2 md:px-4 lg:px-12 xl:px-20">
            {/* monthly_tution */}
            <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Fee Particulars for"}
                name={"monthly_tution"}
                className={" w-full md:w-2/3"}
                placeholder={values.monthly_tution}
                readOnly
                color={["bg-purple-500", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"monthly_tution_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.monthly_tution_fee}
                readOnly
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* Admission */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"admission"}
                className={" w-full md:w-2/3"}
                placeholder={values.admission}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"admission_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.admission_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* registrations */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"registration"}
                className={" w-full md:w-2/3"}
                placeholder={values.registration}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"admission_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.registration_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* art_matarial */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"art_matarial"}
                className={" w-full md:w-2/3"}
                placeholder={values.art_matarial}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"art_matarial_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.art_matarial_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* transport */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"transport"}
                className={" w-full md:w-2/3"}
                placeholder={values.transport}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"transport_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.transport_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* books */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"books"}
                className={" w-full md:w-2/3"}
                placeholder={values.books}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"books_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.books_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* uniform */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"uniform"}
                className={" w-full md:w-2/3"}
                placeholder={values.uniform}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"uniform_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.uniform_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* fine */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"fine"}
                className={" w-full md:w-2/3"}
                placeholder={values.fine}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"fine_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.fine_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* others */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"others"}
                className={" w-full md:w-2/3"}
                placeholder={values.others}
                color={["bg-purple-700", "bg-gray-500"]}
              />
              <InputField
                label={"Prefix Amount"}
                name={"others_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.others_fee}
                color={["bg-purple-700", "bg-gray-500"]}
              />
            </div>
            {/* privious balance */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"previous_balnce"}
                className={" w-full md:w-2/3"}
                placeholder={values.previous_balnce}
                color={["bg-purple-700", "bg-gray-500"]}
                readOnly
              />
              <InputField
                label={"Prefix Amount"}
                name={"previous_balnce_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.previous_balnce_fee}
                color={["bg-purple-700", "bg-gray-500"]}
                readOnly
              />
            </div>
            {/* Discount */}
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-3 mt-6">
              <InputField
                label={"Particular Label*"}
                name={"discount"}
                className={" w-full md:w-2/3"}
                placeholder={values.discount}
                color={["bg-purple-700", "bg-gray-500"]}
                readOnly
              />
              <InputField
                label={"Prefix Amount"}
                name={"discount_in_fee"}
                className={" w-full md:w-1/3"}
                placeholder={values.discount_in_fee}
                color={["bg-purple-700", "bg-gray-500"]}
                readOnly
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <Button
                icon={Icons.update}
                className={"btn_primery rounded-full mt-4 px-4 py-3"}
                type={"submit"}
              >
                Save Chnages
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Fees_perticulars;
