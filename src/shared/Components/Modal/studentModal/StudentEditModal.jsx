"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { FaCross } from "react-icons/fa6";
import { Icons } from "../../../constant/icon.constant";

const StudentEditModal = ({ isOpen, onClose, student, onSubmit }) => {
  if (!isOpen) return null;

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dob: Yup.date().required("Date of birth is required"),
    className: Yup.string().required("Class name is required"),
    session: Yup.string().required("Session is required"),
    division: Yup.string().required("Division is required"),
    course: Yup.string().required("Course is required"),
    courseFee: Yup.number().required("Course fee is required"),
    gender: Yup.string().required("Gender is required"),
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-xl font-bold dark:text-white">
              Edit Student Information
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
            >
              <Icons.close className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* ✅ Formik Form */}
          <Formik
            initialValues={student}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              onSubmit(values);
              onClose();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* DOB */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Date of Birth
                  </label>
                  <Field
                    name="dob"
                    type="date"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Class Name */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Class
                  </label>
                  <Field
                    name="className"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="className"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Session */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Session
                  </label>
                  <Field
                    name="session"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="session"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Division */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Division
                  </label>
                  <Field
                    name="division"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="division"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Gender
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Course */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Course
                  </label>
                  <Field
                    name="course"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="course"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Course Fee */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-200">
                    Course Fee
                  </label>
                  <Field
                    name="courseFee"
                    type="number"
                    className="w-full mt-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  />
                  <ErrorMessage
                    name="courseFee"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2 flex justify-end mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StudentEditModal;
