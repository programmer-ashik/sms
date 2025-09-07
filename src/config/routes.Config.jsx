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
import Reports from "../pages/Dashboard/Reports";
import Employees from "../pages/Dashboard/Employees";
import Courses from "../pages/Dashboard/Courses";
import CoursesDetails from "../pages/Dashboard/Courses/CoursesDetails/CoursesDetails";
import EmployeesDetails from "../pages/Dashboard/Employees/EmployeesDetails/EmployeesDetails";
import Settings from "../pages/Dashboard/Settings";
import { Students } from "../pages/Dashboard/Students";
import General_Setting from "../pages/Dashboard/General_Setting/General_Setting";
import Institute from "../pages/Dashboard/General_Setting/Institute";
import Fees_perticulars from "../pages/Dashboard/General_Setting/Fees_perticulars";
import Fees_structure from "../pages/Dashboard/General_Setting/Fees_structure";
import Account_for_fees_discount from "../pages/Dashboard/General_Setting/Account_for_fees_discount";
import Rules_regulations from "../pages/Dashboard/General_Setting/Rules_regulations";
import Marks_grading from "../pages/Dashboard/General_Setting/Marks_grading";
import Account_settings from "../pages/Dashboard/General_Setting/Account_settings";
import LogOut from "../pages/Dashboard/General_Setting/LogOut";
import DiscountType from "../pages/Dashboard/General_Setting/DiscountType";
import Theme_Language from "../pages/Dashboard/General_Setting/Theme_Language";
import { Navigate } from "react-router-dom";

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
            element: <Account_for_fees_discount />,
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
      {
        path: Route.students,
        element: <Students />,
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
        path: Route.employees,
        element: <Employees />,
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
