import React from "react";
import FormHeader from "../../../../shared/Components/Form/FormHeader";
import { Form, Formik } from "formik";
import { InputField } from "../../../../shared/Components/Form/InputField";
import Button from "../../../../shared/Components/Button/Button";
import { Icons } from "../../../../shared/constant/icon.constant";

const FailCriteriaForm = () => {
  return (
    <div className=" w-full h-full">
      <FormHeader title={"Fail Criteria"} />
      <Formik
        initialValues={{
          overall: "",
          subject: "",
          noOfSubject: "",
        }}
        onSubmit={(values) => {
          console.log("Fail Criteria", values);
        }}
      >
        {({ values }) => (
          <Form>
            <div className="flex justify-between items-center">
              <div className=" grid grid-cols-3 items-start gap-x-4 h-[180px]">
                {/* 1st */}
                <div className="flex flex-col justify-between items-start gap-4 h-[150px]">
                  <p className=" justify-start">
                    Student Will be marken as{" "}
                    <span className="text-red-500 font-bole texx-sm">
                      FAILED
                    </span>{" "}
                    in the exams if he or she obtains an{" "}
                    <span className=" font-bold">overall percentage</span> score
                    equal to or below{" "}
                  </p>
                  <InputField
                    label={"Overall%"}
                    name={"overall"}
                    placeholder={"50"}
                  />
                </div>
                {/* 2nd */}
                <div className="flex flex-col justify-between items-start gap-4 h-[150px]">
                  <p>
                    <span className=" text-yellow-600">OR</span> he or she
                    obtains a{" "}
                    <span className=" font-bold">Subject percentage</span>
                    score equal to or below
                  </p>
                  <InputField
                    label={"Overall%"}
                    name={"overall"}
                    placeholder={"50"}
                  />
                </div>
                {/* 3rd */}
                <div className="flex flex-col justify-between items-start gap-4 h-[150px]">
                  <p className=" justify-start">
                    at least <span className=" text-sky-400 font-bold">in</span>{" "}
                    Subjects
                  </p>
                  <InputField
                    label={"No of Subjects"}
                    name={"overall"}
                    placeholder={"50"}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button
                icon={Icons.add}
                className={" rounded-full btn_primery w-[200px]"}
              >
                Update
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FailCriteriaForm;
