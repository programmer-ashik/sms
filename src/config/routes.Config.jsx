import { Route } from "../shared/constant/route.constant";
import NotFound from "../pages/NotFound/NotFound";
import DashBoardLayout from "../layout/DashLayout/DashBoardLayout";
import Overview from "../pages/Dashboard/Overview/Overview";
import Library from "../pages/Dashboard/Library";
import Exams from "../pages/Dashboard/Exams";
import ExamsDetails from "../pages/Dashboard/Exams/ExamsDetails/ExamsDetails";
import LibraryDetails from "../pages/Dashboard/Library/LibraryDetails/LibraryDetails";
import Assignments from "../pages/Dashboard/Assignments";
import AssignmentDetails from "../pages/Dashboard/Assignments/AssignmentDetails/AssignmentDetails";
import Transport from "../pages/Dashboard/Transport";
import TransportDetails from "../pages/Dashboard/Transport/TransportDetails/TransportDetails";
import NoticeBoard from "../pages/Dashboard/NoticeBoard";
import Events from "../pages/Dashboard/Events";
import EventDetails from "../pages/Dashboard/Events/EventDetails/EventDetails";
import Payroll from "../pages/Dashboard/Payroll";
import Reports from "../pages/Dashboard/Reports/Reports";
import Employees from "../pages/Dashboard/Employees";
import Courses from "../pages/Dashboard/Courses";
import CoursesDetails from "../pages/Dashboard/Courses/CoursesDetails/CoursesDetails";
import EmployeesDetails from "../pages/Dashboard/Employees/EmployeesDetails/EmployeesDetails";
import Settings from "../pages/Dashboard/Settings";
import General_Setting from "../pages/Dashboard/General_Setting/General_Setting";
import Institute from "../pages/Dashboard/General_Setting/Institute";
import Fees_perticulars from "../pages/Dashboard/General_Setting/Fees_perticulars";
import Fees_structure from "../pages/Dashboard/General_Setting/Fees_structure";
import Rules_regulations from "../pages/Dashboard/General_Setting/Rules_regulations";
import Marks_grading from "../pages/Dashboard/General_Setting/Marks_grading";
import Account_settings from "../pages/Dashboard/General_Setting/Account_settings";
import LogOut from "../pages/Dashboard/General_Setting/LogOut";
import DiscountType from "../pages/Dashboard/General_Setting/DiscountType";
import Theme_Language from "../pages/Dashboard/General_Setting/Theme_Language";
import { Navigate } from "react-router-dom";
import Account_for_fees_Invoice from "../pages/Dashboard/General_Setting/Account_for_fees_Invoice";
import Classes from "../pages/Dashboard/Classes/Classes";
import AllClasses from "../pages/Dashboard/Classes/AllClasses";
import NewClass from "../pages/Dashboard/Classes/NewClass";
import Subjects from "../pages/Dashboard/Subjects/Subjects";
import ClassWithSubjects from "../pages/Dashboard/Subjects/ClassWithSubjects";
import Asign_Subject from "../pages/Dashboard/Subjects/Asign_Subject";
import Students from "../pages/Dashboard/Students/Students";
import AllStudents from "../pages/Dashboard/Students/AllStudents";
import Add_New from "../pages/Dashboard/Students/Add_New";
import Manage_Families from "../pages/Dashboard/Students/Manage_Families";
import Active_InActive from "../pages/Dashboard/Students/Active_InActive";
import Admission_letter from "../pages/Dashboard/Students/Admission_letter";
import Students_Cards from "../pages/Dashboard/Students/Students_Cards";
import Print_Basic_List from "../pages/Dashboard/Students/Print_Basic_List";
import Manage_Login from "../pages/Dashboard/Students/Manage_Login";
import Promote_Students from "../pages/Dashboard/Students/Promote_Students";
import All_Employees from "../pages/Dashboard/Employees/All_Employees";
import Add_New_Employees from "../pages/Dashboard/Employees/Add_New_Employees";
import Stuff_ID_Cards from "../pages/Dashboard/Employees/Stuff_ID_Cards";
import Job_Letter from "../pages/Dashboard/Employees/Job_Letter";
import Manage_Employees_Login from "../pages/Dashboard/Employees/Manage_Employees_Login";
import Accounts from "../pages/Dashboard/Accounts/Accounts";
import Charts_of_Accounts from "../pages/Dashboard/Accounts/Charts_of_Accounts";
import Add_income from "../pages/Dashboard/Accounts/Add_income";
import Add_Expense from "../pages/Dashboard/Accounts/Add_Expense";
import Account_Statement from "../pages/Dashboard/Accounts/Account_Statement";
import Fees from "../pages/Dashboard/Fees/Fees";
import Generate_fees_invoice from "../pages/Dashboard/Fees/Generate_fees_invoice";
import Collect_Fees from "../pages/Dashboard/Fees/Collect_Fees";
import Fees_Paid_Slip from "../pages/Dashboard/Fees/Fees_Paid_Slip";
import Fees_Defaulters from "../pages/Dashboard/Fees/Fees_Defaulters";
import Fees_Report from "../pages/Dashboard/Fees/Fees_Report";
import Delete_Fees from "../pages/Dashboard/Fees/Delete_Fees";
import Salary from "../pages/Dashboard/Salary/Salary";
import Pay_Salary from "../pages/Dashboard/Salary/Pay_Salary";
import Salary_Paid_Slip from "../pages/Dashboard/Salary/Salary_Paid_Slip";
import Salary_Sheet from "../pages/Dashboard/Salary/Salary_Sheet";
import Salary_Report from "../pages/Dashboard/Salary/Salary_Report";
import Attendance from "../pages/Dashboard/Attendance/Attendance";
import Students_Attendence from "../pages/Dashboard/Attendance/Students_Attendence";
import Employees_Attendence from "../pages/Dashboard/Attendance/Employees_Attendence";
import Class_Wise_Report from "../pages/Dashboard/Attendance/Class_Wise_Report";
import Students_Attendence_Report from "../pages/Dashboard/Attendance/Students_Attendence_Report";
import Employees_Attendance_Report from "../pages/Dashboard/Attendance/Employees_Attendance_Report";
import TimeTable from "../pages/Dashboard/TimeTable/TimeTable";
import Weekdays from "../pages/Dashboard/TimeTable/Weekdays";
import Time_periods from "../pages/Dashboard/TimeTable/Time_periods";
import Class_Rooms from "../pages/Dashboard/TimeTable/Class_Rooms";
import Create_TimeTable from "../pages/Dashboard/TimeTable/Create_TimeTable";
import Generate_For_Class from "../pages/Dashboard/TimeTable/Generate_For_Class";
import Generate from "../pages/Dashboard/TimeTable/Generate";
import Behaviour_Skills from "../pages/Dashboard/Behaviour_Skills/Behaviour_Skills";
import Rate_Behaviours from "../pages/Dashboard/Behaviour_Skills/Rate_Behaviours";
import Rate_Skills from "../pages/Dashboard/Behaviour_Skills/Rate_Skills";
import Affective_Domain_Rating_Reports from "../pages/Dashboard/Behaviour_Skills/Affective_Domain_Rating_Reports";
import Psychomotor_Domain_Rating_Report from "../pages/Dashboard/Behaviour_Skills/Psychomotor_Domain_Rating_Report";
import Observations from "../pages/Dashboard/Behaviour_Skills/Observations";
import Online_Store from "../pages/Dashboard/Online_Store/Online_Store";
import Store_Analytics from "../pages/Dashboard/Online_Store/Store_Analytics";
import Products_Categories from "../pages/Dashboard/Online_Store/Products_Categories";
import Products_Tax from "../pages/Dashboard/Online_Store/Products_Tax";
import Products from "../pages/Dashboard/Online_Store/Products";
import New_Order from "../pages/Dashboard/Online_Store/New_Order";
import All_Order from "../pages/Dashboard/Online_Store/All_Order";

export const RoutesConfig = [
  {
    path: "/",
    element: <Navigate to={"/dashboard"} replace />,
  },
  {
    path: Route.dash,
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      // general_setting route
      {
        path: "general_setting",
        element: <General_Setting />,
        breadcrumb: "General Settings",
        children: [
          {
            path: Route.institute,
            element: <Institute />,
            breadcrumb: "Institute Profile",
          },
          {
            path: Route.feesParticulars,
            element: <Fees_perticulars />,
            breadcrumb: "Fees Particulars",
          },
          {
            path: Route.feesStructure,
            element: <Fees_structure />,
            breadcrumb: "Fees Structure",
          },
          {
            path: Route.discountType,
            element: <DiscountType />,
            breadcrumb: "Discount Type",
          },
          {
            path: Route.accountsFor,
            element: <Account_for_fees_Invoice />,
            breadcrumb: "Accounts For",
          },
          {
            path: Route.rulesRegulations,
            element: <Rules_regulations />,
            breadcrumb: "Rules & Regulations",
          },
          {
            path: Route.marksGrading,
            element: <Marks_grading />,
            breadcrumb: "Marks Grading",
          },
          {
            path: Route.themeLanguage,
            element: <Theme_Language />,
            breadcrumb: "Theme & Language",
          },
          {
            path: Route.accountSettings,
            element: <Account_settings />,
            breadcrumb: "Account Settings",
          },
          {
            path: Route.logout,
            element: <LogOut />,
            breadcrumb: "Log out",
          },
        ],
      },
      // classes_routing
      {
        path: "classes",
        element: <Classes />,
        breadcrumb: "Classes",
        children: [
          {
            path: Route.allClasses,
            element: <AllClasses />,
            breadcrumb: "All Classes",
          },
          {
            path: Route.newClass,
            element: <NewClass />,
            breadcrumb: "New Class",
          },
        ],
      },
      // subjects
      {
        path: "subjects",
        element: <Subjects />,
        breadcrumb: "Subjects",
        children: [
          {
            path: Route.classWithSubjects,
            element: <ClassWithSubjects />,
            breadcrumb: "Classes With Subjects",
          },
          {
            path: Route.asignSubject,
            element: <Asign_Subject />,
            breadcrumb: "Asign Subject",
          },
        ],
      },
      // students
      {
        path: "students",
        element: <Students />,
        breadcrumb: "Students",
        children: [
          {
            path: Route.allStudents,
            element: <AllStudents />,
            breadcrumb: "All Students",
          },
          {
            path: Route.add_new,
            element: <Add_New />,
            breadcrumb: "Add New Student",
          },
          {
            path: Route.manage_families,
            element: <Manage_Families />,
            breadcrumb: "Manage Families",
          },
          {
            path: Route.active_inactive,
            element: <Active_InActive />,
            breadcrumb: "Active InActive",
          },
          {
            path: Route.admission_letter,
            element: <Admission_letter />,
            breadcrumb: "Admission Letter",
          },
          {
            path: Route.students_cards,
            element: <Students_Cards />,
            breadcrumb: "Students Cards",
          },
          {
            path: Route.print_basic_list,
            element: <Print_Basic_List />,
            breadcrumb: "Print Basic List",
          },
          {
            path: Route.manages_login,
            element: <Manage_Login />,
            breadcrumb: "Manage Login",
          },
          {
            path: Route.promote_students,
            element: <Promote_Students />,
            breadcrumb: "Promote Students",
          },
        ],
      },
      {
        path: Route.employees,
        element: <Employees />,
        breadcrumb: "Employees",
        children: [
          {
            path: Route.all_employees,
            element: <All_Employees />,
            breadcrumb: "All Employees",
          },
          {
            path: Route.add_new_employees,
            element: <Add_New_Employees />,
            breadcrumb: "Add New Employeees",
          },
          {
            path: Route.stuff_id_cards,
            element: <Stuff_ID_Cards />,
            breadcrumb: "Stuff Id Cards",
          },
          {
            path: Route.job_letter,
            element: <Job_Letter />,
            breadcrumb: "Job Letter",
          },
          {
            path: Route.manage_employees_login,
            element: <Manage_Employees_Login />,
            breadcrumb: "Manage Employees Login",
          },
        ],
      },
      // fees
      {
        path: Route.fees,
        element: <Fees />,
        breadcrumb: "Fees",
        children: [
          {
            path: Route.generate_fees_invoice,
            element: <Generate_fees_invoice />,
            breadcrumb: "Generate Fees Invoice",
          },
          {
            path: Route.collect_fees,
            element: <Collect_Fees />,
            breadcrumb: "Collect Fees",
          },
          {
            path: Route.fees_paid_slip,
            element: <Fees_Paid_Slip />,
            breadcrumb: "Fees Paid Slip",
          },
          {
            path: Route.fees_defaulters,
            element: <Fees_Defaulters />,
            breadcrumb: "Fees Defaulters",
          },
          {
            path: Route.fees_report,
            element: <Fees_Report />,
            breadcrumb: "Fees Reports",
          },
          {
            path: Route.delete_fees,
            element: <Delete_Fees />,
            breadcrumb: "Delete Fees",
          },
        ],
      },
      {
        path: Route.accounts,
        element: <Accounts />,
        breadcrumb: "Accounts",
        children: [
          {
            path: Route.charts_of_account,
            element: <Charts_of_Accounts />,
            breadcrumb: "Charts of Accounts",
          },
          {
            path: Route.add_income,
            element: <Add_income />,
            breadcrumb: "Add Income",
          },
          {
            path: Route.add_expense,
            element: <Add_Expense />,
            breadcrumb: "Add Expense",
          },
          {
            path: Route.account_statement,
            element: <Account_Statement />,
            breadcrumb: "Account Statement",
          },
        ],
      },
      // salary
      {
        path: Route.salary,
        element: <Salary />,
        breadcrumb: "Salary",
        children: [
          {
            path: Route.pay_salary,
            element: <Pay_Salary />,
            breadcrumb: "Pay Salary",
          },
          {
            path: Route.salary_paid_slip,
            element: <Salary_Paid_Slip />,
            breadcrumb: "Salary Paid Slip",
          },
          {
            path: Route.salary_sheet,
            element: <Salary_Sheet />,
            breadcrumb: "Salary Sheet",
          },
          {
            path: Route.salary_report,
            element: <Salary_Report />,
            breadcrumb: "Salary Report",
          },
        ],
      },
      // attendence
      {
        path: Route.attendence,
        element: <Attendance />,
        breadcrumb: "Attendance",
        children: [
          {
            path: Route.students_attendence,
            element: <Students_Attendence />,
            breadcrumb: "Students Attendence",
          },
          {
            path: Route.employees_attendence,
            element: <Employees_Attendence />,
            breadcrumb: "Employees Attendence",
          },
          {
            path: Route.class_wide_report,
            element: <Class_Wise_Report />,
            breadcrumb: "Class Wise Report",
          },
          {
            path: Route.students_attendence_report,
            element: <Students_Attendence_Report />,
            breadcrumb: "Students Attendence Report",
          },
          {
            path: Route.employees_attendence_report,
            element: <Employees_Attendance_Report />,
            breadcrumb: "Employees Attendence Report",
          },
        ],
      },
      {
        path: Route.timetable,
        element: <TimeTable />,
        breadcrumb: "Time Table",
        children: [
          {
            path: Route.weekdays,
            element: <Weekdays />,
            breadcrumb: "Week Days",
          },
          {
            path: Route.time_periouds,
            element: <Time_periods />,
            breadcrumb: "Time Periods",
          },
          {
            path: Route.class_rooms,
            element: <Class_Rooms />,
            breadcrumb: "Class Rooms",
          },
          {
            path: Route.create_timetable,
            element: <Create_TimeTable />,
            breadcrumb: "Create Time Table",
          },
          {
            path: Route.generate_for_class,
            element: <Generate_For_Class />,
            breadcrumb: "Generate For Class",
          },
          {
            path: Route.generate,
            element: <Generate />,
            breadcrumb: "Generate",
          },
        ],
      },
      // behaviour-skills
      {
        path: Route.behaviour,
        element: <Behaviour_Skills />,
        breadcrumb: "Behaviour Skills",
        children: [
          {
            path: Route.rate_behaviour,
            element: <Rate_Behaviours />,
            breadcrumb: "Rate Behaviours",
          },
          {
            path: Route.rate_skills,
            element: <Rate_Skills />,
            breadcrumb: "Rate Skills",
          },
          {
            path: Route.affective_domain,
            element: <Affective_Domain_Rating_Reports />,
            breadcrumb: "Affective Domain Rating Reports",
          },
          {
            path: Route.psychomotor,
            element: <Psychomotor_Domain_Rating_Report />,
            breadcrumb: "Psychomotor Domain Rating Reports",
          },
          {
            path: Route.observations,
            element: <Observations />,
            breadcrumb: "Observations",
          },
        ],
      },
      // onlineStore and POS start
      {
        path: Route.online_store,
        element: <Online_Store />,
        breadcrumb: "Online Store & POS",
        children: [
          {
            path: Route.store_analytics,
            element: <Store_Analytics />,
            breadcrumb: "Store Analytics",
          },
          {
            path: Route.products_categories,
            element: <Products_Categories />,
            breadcrumb: "Products Categories",
          },
          {
            path: Route.products_tax,
            element: <Products_Tax />,
            breadcrumb: "Products Tax",
          },
          {
            path: Route.products,
            element: <Products />,
            breadcrumb: "Products",
          },
          {
            path: Route.new_order,
            element: <New_Order />,
            breadcrumb: "New Order",
          },
          {
            path: Route.all_order,
            element: <All_Order />,
            breadcrumb: "All Order",
          },
        ],
      },

      {
        path: Route.exams,
        element: <Exams />,
      },
      {
        path: Route.examDetails,
        element: <ExamsDetails />,
      },
      {
        path: Route.library,
        element: <Library />,
      },
      {
        path: Route.libraryDetails,
        element: <LibraryDetails />,
      },
      {
        path: Route.assignments,
        element: <Assignments />,
      },
      {
        path: Route.assignmentDetails,
        element: <AssignmentDetails />,
      },
      {
        path: Route.transport,
        element: <Transport />,
      },
      {
        path: Route.transportDetails,
        element: <TransportDetails />,
      },
      {
        path: Route.noticeBoard,
        element: <NoticeBoard />,
      },
      {
        path: Route.events,
        element: <Events />,
      },
      {
        path: Route.eventDetails,
        element: <EventDetails />,
      },
      {
        path: Route.payroll,
        element: <Payroll />,
      },
      {
        path: Route.reports,
        element: <Reports />,
      },
      {
        path: Route.employeeDetails,
        element: <EmployeesDetails />,
      },
      {
        path: Route.courses,
        element: <Courses />,
      },
      {
        path: Route.courseDetails,
        element: <CoursesDetails />,
      },
      {
        path: Route.settings,
        element: <Settings />,
      },
      {
        path: Route.notFound,
        element: <NotFound />,
      },
    ],
  },
];
