import React, { useState } from "react";
import { Icons } from "../../../../shared/constant/icon.constant";
import Icon from "../../../../shared/Components/Iocn/Icon";
import StudentModal from "../../../../shared/Components/Modal/studentModal/StudentModal";
import StudentEditModal from "../../../../shared/Components/Modal/studentModal/StudentEditModal";
import DeleteConfirmModal from "../../../../shared/Components/Modal/studentModal/DeleteConfirmModal";
import { Pagination } from "../../../../shared/Components/Paginations/Pagination";

const StudentList = ({ student }) => {
  const [editstudent, setEditStudent] = useState(false);
  const [deleteData, setDelete] = useState(false);
  const [viewstudent, setViewStudent] = useState(false);

  return (
    <>
      {viewstudent && (
        <StudentModal
          isOpen={viewstudent}
          onClose={() => setViewStudent(false)}
          student={student}
        />
      )}
      {editstudent && (
        <StudentEditModal
          isOpen={editstudent}
          onClose={() => setEditStudent(false)}
          student={student}
        />
      )}
      {deleteData && (
        <DeleteConfirmModal
          isOpen={deleteData}
          onClose={() => setDelete(false)}
          onConfirm={() => {
            // Handle delete action here
            setDelete(false);
          }}
        />
      )}
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">{student.studentId}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {student.firstName} {student.lastName}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{student.division}</td>
        <td className="px-6 py-4 whitespace-nowrap">{student.lastGPA}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`font-semibold ${
              student.duePayment === 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {student.duePayment === 0 ? "Paid" : "Due"}
          </span>
        </td>
        <td className="whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5 flex space-x-2">
          <Icon
            onClick={() => setViewStudent(true)}
            icon={Icons.view}
            className="btn h-7 w-7 rounded-full bg-success/10 p-1 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25 dark:bg-success-light/10 dark:text-success-light dark:hover:bg-success-light/20 dark:focus:bg-success-light/20 dark:active:bg-success-light/25"
          />

          <Icon
            onClick={() => setEditStudent(true)}
            icon={Icons.edit}
            className="btn h-7 w-7 rounded-full bg-warning/10 p-1 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25 dark:bg-warning-light/10 dark:text-warning-light dark:hover:bg-warning-light/20 dark:focus:bg-warning-light/20 dark:active:bg-warning-light/25"
          />
          <Icon
            onClick={() => setDelete(true)}
            icon={Icons.delete}
            className="btn h-7 w-7 rounded-full bg-error/10 p-1 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25 dark:bg-error-light/10 dark:text-error-light dark:hover:bg-error-light/20 dark:focus:bg-error-light/20 dark:active:bg-error-light/25"
          />
        </td>
      </tr>
    </>
  );
};

export default StudentList;
