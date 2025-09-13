import Button from "../../../../shared/Components/Button/Button";
import { InputField } from "../../../../shared/Components/Form/InputField";
import { Icons } from "../../../../shared/constant/icon.constant";
import { Formik, Form, FieldArray } from "formik";

const initialGrades = [
  { grade: "A+", form: 80, upto: 100, status: "PASS" },
  { grade: "A", form: 70, upto: 79, status: "PASS" },
  { grade: "B+", form: 60, upto: 69, status: "PASS" },
  { grade: "B", form: 50, upto: 59, status: "PASS" },
  { grade: "C", form: 40, upto: 49, status: "PASS" },
  { grade: "D", form: 33, upto: 39, status: "PASS" },
  { grade: "F", form: 0, upto: 32, status: "FAIL" },
];

const MarkGradingForm = () => {
  return (
    <div className="theme-bg theme-text">
      <Formik
        initialValues={{ grades: initialGrades }}
        onSubmit={(values) => {
          console.log("Grading System:", values);
        }}
      >
        {({ values }) => (
          <Form className="space-y-4">
            <FieldArray name="grades">
              {() =>
                values.grades.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-4"
                  >
                    <InputField
                      label="Grade*"
                      name={`grades[${index}].grade`}
                      placeholder={item.grade}
                      color={["bg-[#7F60E4]", "bg-gray-500"]}
                      className="w-full md:w-[30%]"
                    />
                    <InputField
                      label="%From*"
                      name={`grades[${index}].form`}
                      placeholder={item.form.toString()}
                      color={["bg-[#7F60E4]", "bg-gray-500"]}
                      className="w-full md:w-[20%]"
                    />
                    <InputField
                      label="%Upto*"
                      name={`grades[${index}].upto`}
                      placeholder={item.upto.toString()}
                      color={["bg-[#7F60E4]", "bg-gray-500"]}
                      className="w-full md:w-[20%]"
                    />
                    <InputField
                      label="Status*"
                      name={`grades[${index}].status`}
                      placeholder={item.status}
                      color={["bg-[#7F60E4]", "bg-gray-500"]}
                      className="w-full md:w-[30%]"
                    />
                  </div>
                ))
              }
            </FieldArray>
            <div className="full flex justify-center items-center">
              <Button
                type="submit"
                icon={Icons.done}
                className="rounded-full btn_primery"
              >
                Update Changes
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MarkGradingForm;
