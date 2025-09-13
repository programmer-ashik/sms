import React from "react";
import FormHeader from "../../../shared/Components/Form/FormHeader";
import Assign_SubjectForm from "../../../components/Dashboard/Subjects/Assign_SubjectForm";

const Asign_Subject = () => {
  return (
    <div className=" mt-8">
      <div className=" w-full sm:w-[40%] mx-auto border-2 rounded-lg p-2 sm:p-4">
        <FormHeader title={"Create Subject"} />
        <Assign_SubjectForm />
      </div>
    </div>
  );
};

export default Asign_Subject;
