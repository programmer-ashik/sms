import { studentsData } from "../../../shared/constant/stuents.data";
import StudentCard from "../../../components/Dashboard/Student/StudentCard";
import QueryController from "../../../components/Dashboard/Student/QueryController/QueryController";
import { useSelector } from "react-redux";
import ListHeader from "../../../shared/Components/ListHeader";
import StudentList from "../../../components/Dashboard/Student/StudentList/StudentList";
const AllStudents = () => {
  const { searchQuery, filters, view } = useSelector((state) => state.controls);
  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.division.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      (filters.semester === "" ||
        student.perSemesterCGPA["Sem " + filters.semester]) &&
      (filters.division === "" || student.division === filters.division) &&
      (filters.paymentStatus === "" ||
        (filters.paymentStatus === "paid"
          ? student.duePayment === 0
          : student.duePayment > 0));

    return matchesSearch && matchesFilters;
  });
  const semesterOptions =
    studentsData.length > 0 ? Object.keys(studentsData[0].perSemesterCGPA) : [];
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <QueryController semesterOptions={semesterOptions} />
      </div>
      {filteredStudents.length > 0 ? (
        <>
          {view === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStudents.map((student, index) => (
                <StudentCard key={index} student={student} />
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto theme-bg rounded-lg shadow-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className=" theme-bg theme-text">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium theme-text uppercase tracking-wider">
                      Roll No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium theme-text uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium theme-text uppercase tracking-wider">
                      Division
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium theme-text uppercase tracking-wider">
                      CGPA
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium theme-text uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium theme-text uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="theme-bg divide-y divide-gray-200">
                  {filteredStudents.map((student, index) => (
                    <StudentList key={index} student={student} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <p className="text-center theme-text mt-4">No students found.</p>
      )}
    </div>
  );
};

export default AllStudents;
