"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const steps = [
  "Student Info",
  "Parents",
  "Academic",
  "Payments",
  "Subjects",
  "Semesters",
  "Address",
  "Confirm",
];

// Initial values
const initialValues = {
  firstName: "",
  lastName: "",
  dob: "",
  className: "",
  fatherName: "",
  motherName: "",
  course: "",
  prevInstitute: "",
  payment: "",
  duePayment: "",
  Accounting: "",
  Economics: "",
  Statistics: "",
  English: "",
  Bangla: "",
  History: "",
  Sem1: "",
  Sem2: "",
  vill: "",
  Distric: "",
};

// Validation schemas per step
const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    className: Yup.string().required("Required"),
  }),
  Yup.object({
    fatherName: Yup.string().required("Required"),
    motherName: Yup.string().required("Required"),
  }),
  Yup.object({
    course: Yup.string().required("Required"),
    prevInstitute: Yup.string().required("Required"),
  }),
  Yup.object({
    payment: Yup.number().required("Required"),
    duePayment: Yup.number(),
  }),
  Yup.object({}), // Subjects optional
  Yup.object({
    Sem1: Yup.number().required("Required"),
    Sem2: Yup.number().required("Required"),
  }),
  Yup.object({
    vill: Yup.string().required("Required"),
    Distric: Yup.string().required("Required"),
  }),
  Yup.object({}), // Confirm step no validation
];

export default function AddNewStudentModal({ open, setAddStudent }) {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl w-full max-w-5xl h-[80vh] overflow-hidden flex"
          >
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-50 dark:bg-gray-900 p-6 border-r border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-6">
                {steps.map((label, index) => (
                  <div
                    key={index}
                    className="relative flex items-center space-x-3 z-20"
                  >
                    {/* Step circle */}
                    <motion.div
                      animate={{
                        scale: index === step ? 1.2 : 1,
                        background:
                          index === step
                            ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                            : index < step
                            ? "linear-gradient(135deg, #16a34a, #22c55e)"
                            : "linear-gradient(135deg, #e5e7eb, #d1d5db)",
                      }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-full border-2 text-xs font-bold text-white shadow"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Step label */}
                    <motion.span
                      animate={{
                        color:
                          index === step
                            ? "#2563eb"
                            : index < step
                            ? "#16a34a"
                            : "#6b7280",
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-sm font-medium"
                    >
                      {label}
                    </motion.span>

                    {/* Connecting bar */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="absolute left-4 top-6 w-1 h-16 rounded -z-10"
                        animate={{
                          backgroundColor: index < step ? "#16a34a" : "#e5e7eb",
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="w-3/4 p-6 overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h1 className=" text-2xl text-center bg-clip-text text-purple-200">
                  {steps[step]}
                </h1>
                <button
                  onClick={() => setAddStudent(false)}
                  className=" px-3 py-2 rounded-md border-gray-300 border-[2px] cursor-pointer"
                >
                  Close
                </button>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas[step]}
                onSubmit={(values) => {
                  if (step === steps.length - 1) {
                    alert(JSON.stringify(values, null, 2));
                    setAddStudent(false);
                  } else {
                    handleNext();
                  }
                }}
              >
                {({ values }) => (
                  <Form className="space-y-4">
                    <AnimatePresence exitBeforeEnter>
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {step === 0 && (
                          <>
                            <label className="block text-sm font-medium">
                              First Name
                            </label>
                            <Field
                              name="firstName"
                              placeholder="First Name"
                              className="border p-2 w-full rounded"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                            <label className="block text-sm font-medium">
                              Last Name
                            </label>
                            <Field
                              name="lastName"
                              placeholder="Last Name"
                              className="border p-2 w-full rounded"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                            <label className="block text-sm font-medium">
                              Date of Birth
                            </label>
                            <Field
                              name="dob"
                              type="date"
                              className="border p-2 w-full rounded"
                            />
                            <label className="block text-sm font-medium">
                              Semester
                            </label>
                            <Field
                              name="className"
                              placeholder="Class"
                              className="border p-2 w-full rounded"
                            />
                          </>
                        )}

                        {step === 1 && (
                          <>
                            <label className="block text-sm font-medium">
                              Father Name
                            </label>
                            <Field
                              name="fatherName"
                              placeholder="Father Name"
                              className="border p-2 w-full rounded"
                            />
                            <label className="block text-sm font-medium">
                              Father Name
                            </label>
                            <Field
                              name="motherName"
                              placeholder="Mother Name"
                              className="border p-2 w-full rounded"
                            />
                          </>
                        )}

                        {step === 2 && (
                          <>
                            <label className="block text-sm font-medium">
                              Course
                            </label>
                            <Field
                              name="course"
                              placeholder="Course"
                              className="border p-2 w-full rounded"
                            />
                            <label className="block text-sm font-medium">
                              Previous Institute
                            </label>
                            <Field
                              name="prevInstitute"
                              placeholder="Previous Institute"
                              className="border p-2 w-full rounded"
                            />
                          </>
                        )}

                        {step === 3 && (
                          <>
                            <label className="block text-sm font-medium">
                              Payment
                            </label>
                            <Field
                              name="payment"
                              type="number"
                              placeholder="Payment"
                              className="border p-2 w-full rounded"
                            />
                            <label className="block text-sm font-medium">
                              Due Payment
                            </label>
                            <Field
                              name="duePayment"
                              type="number"
                              placeholder="Due Payment"
                              className="border p-2 w-full rounded"
                            />
                          </>
                        )}

                        {step === 4 && (
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              "Accounting",
                              "Economics",
                              "Statistics",
                              "English",
                              "Bangla",
                              "History",
                            ].map((subj) => (
                              <div key={subj}>
                                <label className="block text-sm font-medium">
                                  {subj}
                                </label>
                                <Field
                                  name={subj}
                                  type="number"
                                  className="border p-2 w-full rounded"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {step === 5 && (
                          <>
                            <label className="block text-sm font-medium">
                              Semester
                            </label>
                            <Field
                              name="Sem1"
                              type="number"
                              step="0.1"
                              placeholder="Semester 1 GPA"
                              className="border p-2 w-full rounded"
                            />
                            <Field
                              name="Sem2"
                              type="number"
                              step="0.1"
                              placeholder="Semester 2 GPA"
                              className="border p-2 w-full rounded"
                            />
                          </>
                        )}

                        {step === 6 && (
                          <>
                            <label className="block text-sm font-medium">
                              Village
                            </label>
                            <Field
                              name="vill"
                              placeholder="Village"
                              className="border p-2 w-full rounded"
                            />
                            <label className="block text-sm font-medium">
                              Distric
                            </label>
                            <Field
                              name="Distric"
                              placeholder="District"
                              className="border p-2 w-full rounded"
                            />
                          </>
                        )}

                        {step === 7 && (
                          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm">
                            {JSON.stringify(values, null, 2)}
                          </pre>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Buttons */}
                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={step === 0}
                        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white disabled:opacity-50"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded bg-blue-500 text-white"
                      >
                        {step === steps.length - 1 ? "Submit" : "Next"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
