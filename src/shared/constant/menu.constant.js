// menuItems.js
export const menuItems = [
  {
    title: "Home",
    icon: "Home",
    link: "/",
  },
  {
    title: "About Us",
    icon: "Users",
    link: "/about",
  },
  {
    title: "Projects",
    icon: "ProjectDiagram",
    link: "/project",
    // dropdown: [
    //   { name: "OnGoing", link: "/ongoing" },
    //   { name: "Completed", link: "/completed" },
    // ],
  },
  {
    title: "Publication",
    icon: "Book",
    dropdown: [{ name: "Articles", link: "/articals", icon: "Setting" }],
  },
  {
    title: "Notice",
    icon: "Book",
    link: "/notice",
  },
  {
    title: "Profile",
    icon: "User",
    dropdown: [
      { name: "Register", link: "/registration", icon: "AppRegistration" },
      { name: "Login", link: "/login", icon: "Login" },
      { name: "Settings", link: "/settings", icon: "Setting" },
    ],
  },
];
export const nav_menu = [
  {
    accordion: true,
    activeId: "",
    activeClass: "theme-text font-semibold",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "lucide:layout-dashboard",
        to: "/dashboard",
        isOpen: false,
        children: [
          {
            id: "dashboard-overview",
            label: "Central overview",
            description: "analytics, notifications, shortcuts",
            to: "/dashboard",
          },
        ],
      },
      {
        id: "general",
        label: "General Settings",
        icon: "lucide:settings",
        isOpen: false,
        children: [
          {
            id: "general-institute-profile",
            label: "Institute Profile",
            to: "/dashboard/general_setting/institute_Profile",
          },
          {
            id: "general-fees-particulars",
            label: "Fees Particulars",
            to: "/dashboard/general_setting/fees-particulars",
          },
          {
            id: "general-fees-structure",
            label: "Fees Structure",
            to: "/dashboard/general_setting/fees-structure",
          },
          {
            id: "general-discount-type",
            label: "Discount Type",
            to: "/dashboard/general_setting/discount-type",
          },
          {
            id: "general-accounts-for",
            label: "Accounts For Fees Invoice",
            to: "/dashboard/general_setting/accounts-for",
          },
          {
            id: "general-rules",
            label: "Rules & Regulations",
            to: "/dashboard/general_setting/rules-regulations",
          },
          {
            id: "general-marks-grading",
            label: "Marks Grading",
            to: "/dashboard/general_setting/marks-grading",
          },
          {
            id: "general-theme-language",
            label: "Theme & Language",
            to: "/dashboard/general_setting/theme-language",
          },
          {
            id: "general-account-settings",
            label: "Account Settings",
            to: "/dashboard/general_setting/account",
          },
          {
            id: "general-logout",
            label: "Log out",
            to: "/dashboard/general_setting/logout",
          },
        ],
      },
      {
        id: "classes",
        label: "Classes",
        icon: "lucide:school",
        isOpen: false,
        children: [
          { id: "classes-all", label: "All Classes", to: "/classes" },
          { id: "classes-new", label: "New Class", to: "/classes/new" },
        ],
      },
      {
        id: "subjects",
        label: "Subjects",
        icon: "lucide:book-open",
        isOpen: false,
        children: [
          {
            id: "subjects-by-class",
            label: "Classes With Subjects",
            to: "/subjects/by-class",
          },
          {
            id: "subjects-assign",
            label: "Assign Subjects",
            to: "/subjects/assign",
          },
        ],
      },
      {
        id: "students",
        label: "Students",
        icon: "lucide:users",
        isOpen: true,
        children: [
          {
            id: "students-all",
            label: "All Students",
            to: "/dashboard/students",
          },
          { id: "students-add", label: "Add New", to: "/students/new" },
          {
            id: "students-families",
            label: "Manage Families",
            to: "/students/families",
          },
          {
            id: "students-status",
            label: "Active / Inactive",
            to: "/students/status",
          },
          {
            id: "students-admission-letter",
            label: "Admission Letter",
            to: "/students/admission-letter",
          },
          {
            id: "students-id-cards",
            label: "Student ID Cards",
            to: "/students/id-cards",
          },
          {
            id: "students-print-list",
            label: "Print Basic List",
            to: "/students/print-list",
          },
          {
            id: "students-manage-login",
            label: "Manage Login",
            to: "/students/manage-login",
          },
          {
            id: "students-promote",
            label: "Promote Students",
            to: "/students/promote",
          },
        ],
      },
      {
        id: "employees",
        label: "Employees",
        icon: "lucide:id-card",
        isOpen: false,
        children: [
          { id: "employees-all", label: "All Employees", to: "/employees" },
          { id: "employees-add", label: "Add New", to: "/employees/new" },
          {
            id: "employees-id-cards",
            label: "Staff ID Cards",
            to: "/employees/id-cards",
          },
          {
            id: "employees-job-letter",
            label: "Job Letter",
            to: "/employees/job-letter",
          },
          {
            id: "employees-manage-login",
            label: "Manage Login",
            to: "/employees/manage-login",
          },
        ],
      },
      {
        id: "accounts",
        label: "Accounts",
        icon: "lucide:wallet",
        isOpen: false,
        children: [
          {
            id: "accounts-coa",
            label: "Charts of Account",
            to: "/accounts/chart-of-accounts",
          },
          {
            id: "accounts-income",
            label: "Add Income",
            to: "/accounts/income/new",
          },
          {
            id: "accounts-expense",
            label: "Add Expense",
            to: "/accounts/expense/new",
          },
          {
            id: "accounts-statement",
            label: "Account Statement",
            to: "/accounts/statement",
          },
        ],
      },
      {
        id: "fees",
        label: "Fees",
        icon: "lucide:receipt",
        isOpen: false,
        children: [
          {
            id: "fees-generate-invoice",
            label: "Generate Fees Invoice",
            to: "/fees/invoices/generate",
          },
          { id: "fees-collect", label: "Collect Fees", to: "/fees/collect" },
          {
            id: "fees-paid-slip",
            label: "Fees Paid Slip",
            to: "/fees/paid-slip",
          },
          {
            id: "fees-defaulters",
            label: "Fees Defaulters",
            to: "/fees/defaulters",
          },
          { id: "fees-report", label: "Fees Report", to: "/fees/report" },
          { id: "fees-delete", label: "Delete Fees", to: "/fees/delete" },
        ],
      },
      {
        id: "salary",
        label: "Salary",
        icon: "lucide:banknote",
        isOpen: false,
        children: [
          { id: "salary-pay", label: "Pay Salary", to: "/salary/pay" },
          {
            id: "salary-paid-slip",
            label: "Salary Paid Slip",
            to: "/salary/paid-slip",
          },
          { id: "salary-sheet", label: "Salary Sheet", to: "/salary/sheet" },
          { id: "salary-report", label: "Salary Report", to: "/salary/report" },
        ],
      },
      {
        id: "attendance",
        label: "Attendance",
        icon: "lucide:check-square",
        isOpen: false,
        children: [
          {
            id: "attendance-students",
            label: "Students Attendance",
            to: "/attendance/students",
          },
          {
            id: "attendance-employees",
            label: "Employees Attendance",
            to: "/attendance/employees",
          },
          {
            id: "attendance-class-wise",
            label: "Class Wise Report",
            to: "/attendance/class-wise-report",
          },
          {
            id: "attendance-students-report",
            label: "Students Attendance Report",
            to: "/attendance/students/report",
          },
          {
            id: "attendance-employees-report",
            label: "Employees Attendance Report",
            to: "/attendance/employees/report",
          },
        ],
      },
      {
        id: "timetable",
        label: "Timetable",
        icon: "lucide:calendar",
        isOpen: false,
        children: [
          {
            id: "timetable-weekdays",
            label: "Weekdays",
            to: "/timetable/weekdays",
          },
          {
            id: "timetable-periods",
            label: "Time Periods",
            to: "/timetable/periods",
          },
          {
            id: "timetable-classrooms",
            label: "Class Rooms",
            to: "/timetable/classrooms",
          },
          {
            id: "timetable-create",
            label: "Create Timetable",
            to: "/timetable/create",
          },
          {
            id: "timetable-generate-class",
            label: "Generate For Class",
            to: "/timetable/generate/class",
          },
          {
            id: "timetable-generate",
            label: "Generate",
            to: "/timetable/generate",
          },
        ],
      },
      {
        id: "homework",
        label: "Homework",
        icon: "lucide:clipboard-list",
        isOpen: false,
        children: [],
      },
      {
        id: "behaviour-skills",
        label: "Behaviour & Skills",
        icon: "lucide:smile-plus",
        isOpen: false,
        children: [
          {
            id: "behaviour-rate",
            label: "Rate Behaviours",
            to: "/behaviour/rate",
          },
          { id: "skills-rate", label: "Rate Skills", to: "/skills/rate" },
          {
            id: "observations",
            label: "Observations",
            to: "/behaviour/observations",
          },
          {
            id: "affective-report",
            label: "Affective Domain Rating Report",
            to: "/behaviour/affective-report",
          },
          {
            id: "psychomotor-report",
            label: "Psychomotor Domain Rating Report",
            to: "/behaviour/psychomotor-report",
          },
        ],
      },
      {
        id: "store-pos",
        label: "Online Store & POS",
        icon: "lucide:store",
        isOpen: false,
        children: [
          {
            id: "store-analytics",
            label: "Store analytics",
            to: "/store/analytics",
          },
          {
            id: "store-product-categories",
            label: "Products Categories",
            to: "/store/product-categories",
          },
          { id: "store-tax", label: "products Tax", to: "/store/tax" },
          { id: "store-products", label: "Products", to: "/store/products" },
          {
            id: "store-new-order",
            label: "New Order",
            to: "/store/orders/new",
          },
          { id: "store-all-orders", label: "All Order", to: "/store/orders" },
        ],
      },
      {
        id: "communication",
        label: "Communication",
        icon: "lucide:messages-square",
        isOpen: false,
        children: [
          {
            id: "comm-whatsapp",
            label: "WhatsApp",
            to: "/communication/whatsapp",
          },
          {
            id: "comm-messaging",
            label: "Messaging",
            to: "/communication/messaging",
          },
          { id: "comm-sms", label: "SMS Services", to: "/communication/sms" },
        ],
      },
      {
        id: "live-class",
        label: "Live Class",
        icon: "lucide:video",
        isOpen: false,
        children: [],
      },
      {
        id: "question-paper",
        label: "Question Paper",
        icon: "lucide:file-question",
        isOpen: false,
        children: [],
      },
      {
        id: "exams",
        label: "Exams",
        icon: "lucide:graduation-cap",
        isOpen: false,
        children: [
          { id: "exams-create", label: "Create New Exam", to: "/exams/new" },
          {
            id: "exams-marks",
            label: "Add / update Exam Marks",
            to: "/exams/marks",
          },
          {
            id: "exams-result-card",
            label: "Result Card",
            to: "/exams/result-card",
          },
          {
            id: "exams-result-sheet",
            label: "Result Sheet",
            to: "/exams/result-sheet",
          },
          {
            id: "exams-schedule",
            label: "Exam Schedule",
            to: "/exams/schedule",
          },
          {
            id: "exams-date-sheet",
            label: "Date Sheet",
            to: "/exams/date-sheet",
          },
          {
            id: "exams-blank-award",
            label: "Blank Award List",
            to: "/exams/blank-award-list",
          },
        ],
      },
      {
        id: "class-tests",
        label: "Class Tests",
        icon: "lucide:clipboard-check",
        isOpen: false,
        children: [
          {
            id: "tests-manage",
            label: "Manage Test Mark",
            to: "/tests/manage",
          },
          { id: "tests-result", label: "Test Result", to: "/tests/result" },
        ],
      },
      {
        id: "reports",
        label: "Reports",
        icon: "lucide:bar-chart-2",
        isOpen: false,
        children: [
          {
            id: "reports-student-card",
            label: "Students report Card",
            to: "/reports/student-card",
          },
          {
            id: "reports-students-info",
            label: "Students info report",
            to: "/reports/students-info",
          },
          {
            id: "reports-parents-info",
            label: "Parents info report",
            to: "/reports/parents-info",
          },
          {
            id: "reports-students-monthly-attendance",
            label: "Students Monthly Attendance Report",
            to: "/reports/students-monthly-attendance",
          },
          {
            id: "reports-staff-monthly-attendance",
            label: "Staff Monthly Attendance Report",
            to: "/reports/staff-monthly-attendance",
          },
          {
            id: "reports-fee-collection",
            label: "Fee Collection Report",
            to: "/reports/fee-collection",
          },
          {
            id: "reports-student-progress",
            label: "Student Progress Report",
            to: "/reports/student-progress",
          },
          {
            id: "reports-accounts",
            label: "Accounts Report",
            to: "/reports/accounts",
          },
          {
            id: "reports-customised",
            label: "Customised Reports",
            to: "/reports/customised",
          },
        ],
      },
      {
        id: "certificates",
        label: "Certificates",
        icon: "lucide:award",
        isOpen: false,
        children: [
          {
            id: "certificates-generate",
            label: "Generate Certificate",
            to: "/certificates/generate",
          },
          {
            id: "certificates-templates",
            label: "Certificate Templates",
            to: "/certificates/templates",
          },
        ],
      },
    ],
  },
];
