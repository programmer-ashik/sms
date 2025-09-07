import React from "react";

const StudentCard = ({ filteredStudents }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredStudents.map((student, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">
            {student.firstName} {student.lastName}
          </h3>
          <p>
            <strong>DOB:</strong> {student.dob}
          </p>
          <p>
            <strong>Class:</strong> {student.className}
          </p>
          <p>
            <strong>Division:</strong> {student.division}
          </p>
          <p>
            <strong>Payment Status:</strong>
            <span
              className={`font-semibold ${
                student.duePayment === 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {" "}
              {student.duePayment === 0 ? "Paid" : "Due"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
