import React from "react";
import FormHeader from "../../../shared/Components/Form/FormHeader";
import { Form, Formik } from "formik";
import { InputField } from "../../../shared/Components/Form/InputField";
import { Icons } from "../../../shared/constant/icon.constant";
import Button from "../../../shared/Components/Button/Button";

const NewClass = () => {
  return (
    <div className=" space-y-4 w-full md:w-[60%] mx-auto bg-white dark:bg-zinc-950 theme-text dark:shadow-[5px_5px_150px_white] rounded-lg p-4 mt-12">
      <FormHeader title="Add New Classes" />

      <Formik
        initialValues={{
          className: "",
          monthlyTutionFees: "",
          classTeacher: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className=" space-y-4">
            <InputField
              label="Class Name"
              name="className"
              placeholder="Class Name"
            />
            <InputField
              label="Monthly Tuition Fees"
              name="monthlyTutionFees"
              placeholder="Monthly Tution Fees"
            />
            <InputField
              label="Class Teacher"
              name="classTeacher"
              placeholder="Class Teacher"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className=" btn_primery px-4 py-3 rounded-md mx-auto"
              icon={Icons.add}
            >
              Creact
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewClass;
