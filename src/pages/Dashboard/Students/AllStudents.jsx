import { studentsData } from "../../../shared/constant/stuents.data";
import StudentCard from "../../../components/Dashboard/Student/StudentCard";
import QueryController from "../../../components/Dashboard/Student/QueryController/QueryController";
import { useSelector } from "react-redux";
import ListHeader from "../../../shared/Components/ListHeader";
import StudentList from "../../../components/Dashboard/Student/StudentList/StudentList";
import { Pagination } from "../../../shared/Components/Paginations/Pagination";
import { useEffect, useState } from "react";
const AllStudents = () => {
  const { searchQuery, filters, view } = useSelector((state) => state.controls);
  const [currentPage, setCurrentPage] = useState(1);

  const [dataPerPage, setDataPerPage] = useState(8);
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
  // 2. Pagination setup
  const totalEntries = filteredStudents.length;
  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;
  const currentData = filteredStudents.slice(indexOfFirst, indexOfLast);

  // 3. Reset to first page if search or perPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [dataPerPage]);
  const semesterOptions =
    studentsData.length > 0 ? Object.keys(studentsData[0].perSemesterCGPA) : [];
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <QueryController semesterOptions={semesterOptions} />
      </div>
      {currentData.length > 0 ? (
        <>
          {view === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentData.map((student, index) => (
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
                  {currentData.map((student, index) => (
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
      <Pagination
        currentPage={currentPage}
        totalEntries={totalEntries}
        dataPerPage={dataPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default AllStudents;
