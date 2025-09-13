import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { InputField } from "../../../shared/Components/Form/InputField";
import { SelectField } from "../../../shared/Components/Form/SelectField";
import Button from "../../../shared/Components/Button/Button";
import { Icons } from "../../../shared/constant/icon.constant";
import { AnimatePresence, motion } from "framer-motion";
const Assign_SubjectForm = () => {
  return (
    <div className="w-full mx-auto theme-bg theme-text p-4">
      <Formik
        initialValues={{
          selectSubject: "",
          subjects: [
            { subjectName: "", subjectMark: "" }, // start with 1 subject
          ],
        }}
        onSubmit={(values) => {
          console.log("✅ Submitted values:", values);

          // Example: map marks by subject name
          const subjectMarks = values.subjects.reduce((acc, s) => {
            acc[s.subjectName] = s.subjectMark;
            return acc;
          }, {});
          console.log("Mapped subject marks:", subjectMarks);
        }}
      >
        {({ values }) => (
          <Form className="space-y-4">
            {/* Select class */}
            <SelectField
              label="Select Class"
              name="selectSubject"
              options={[
                { label: "Bangla", value: "bangla" },
                { label: "English", value: "english" },
              ]}
            />

            {/* Dynamic subject fields */}
            <FieldArray name="subjects">
              {({ push, remove }) => (
                <div className="space-y-3">
                  <AnimatePresence>
                    {values.subjects.map((subject, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full mx-auto flex justify-evenly gap-3"
                      >
                        <InputField
                          label="Subject Name"
                          name={`subjects[${index}].subjectName`}
                          placeholder="Subject Name"
                          className="w-full"
                        />
                        <InputField
                          label="Subject Mark"
                          name={`subjects[${index}].subjectMark`}
                          placeholder="Subject Mark"
                          className="w-[50%]"
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Add/Remove at the bottom only */}
                  <div className="flex justify-center gap-3 w-full mx-auto">
                    <Button
                      type="button"
                      icon={Icons.add}
                      className="rounded-md text-sm px-2 cursor-pointer bg-gray-600 text-gray-50"
                      onClick={() => push({ subjectName: "", subjectMark: "" })}
                    >
                      Add more
                    </Button>

                    {values.subjects.length > 1 && (
                      <Button
                        type="button"
                        icon={Icons.remove}
                        className="rounded-md text-sm px-2 cursor-pointer bg-red-600 text-gray-50"
                        onClick={() => remove(values.subjects.length - 1)} // remove last one
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </FieldArray>

            {/* Submit */}
            <Button
              type="submit"
              icon={Icons.add}
              className="rounded-md btn_primery mx-auto px-4 py-3 font-poppins"
            >
              Assign Subjects
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Assign_SubjectForm;
