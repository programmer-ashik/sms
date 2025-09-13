export const Route = {
  about: "/about",
  login: "/login",
  // if need needed for auth we have to add our route;
  // login: "/login",
  register: "/register",
  verify: "/verify",
  notFound: "*",
  //   forDashboard
  dash: "/dashboard",
  overview: "/dashboard/overview",
  // general_Setting
  institute: "/dashboard/general_setting/institute_Profile",
  feesParticulars: "/dashboard/general_setting/fees-particulars",
  feesStructure: "/dashboard/general_setting/fees-structure",
  discountType: "/dashboard/general_setting/discount-type",
  accountsFor: "/dashboard/general_setting/accounts-for",
  rulesRegulations: "/dashboard/general_setting/rules-regulations",
  marksGrading: "/dashboard/general_setting/marks-grading",
  accountSettings: "/dashboard/general_setting/account",
  logout: "/dashboard/general_setting/logout",
  themeLanguage: "/dashboard/general_setting/theme-language",

  // end setting
  // classes routeing
  allClasses: "/dashboard/classes/allClasses",
  newClass: "/dashboard/classes/newClass",
  // classes Route end
  // subject route Start
  classWithSubjects: "/dashboard/subjects/classWithSubjects",
  asignSubject: "/dashboard/subjects/asignSubject",
  // students routes
  allStudents: "/dashboard/students/all_students",
  add_new: "/dashboard/students/add_new",
  manage_families: "/dashboard/students/manage_families",
  active_inactive: "/dashboard/students/active_inactive",
  admission_letter: "/dashboard/students/admission_letter",
  students_cards: "/dashboard/students/students_cards",
  print_basic_list: "/dashboard/students/print_basic_list",
  manages_login: "/dashboard/students/manages_login",
  promote_students: "/dashboard/students/promote_students",
  // students route end
  // employes start
  employees: "/dashboard/employees",
  all_employees: "/dashboard/employees/all_employees",
  add_new_employees: "/dashboard/employees/add_new_employees",
  stuff_id_cards: "/dashboard/employees/stuff_id_cards",
  job_letter: "/dashboard/employees/job_letter",
  manage_employees_login: "/dashboard/employees/manage_employees_login",
  // eployes end
  // account route Start
  accounts: "/dashboard/accounts",
  charts_of_account: "/dashboard/accounts/charts_of_accounts",
  add_income: "/dashboard/accounts/add_income",
  add_expense: "/dashboard/accounts/add_expense",
  account_statement: "/dashboard/accounts/account_statement",
  // account route end
  // fees route start
  fees: "/dashboard/fees",
  generate_fees_invoice: "/dashboard/fees/generate_fees_invoice",
  collect_fees: "/dashboard/fees/collect_fees",
  fees_paid_slip: "/dashboard/fees/fees_paid_slip",
  fees_defaulters: "/dashboard/fees/fees_defaulters",
  fees_report: "/dashboard/fees/fees_report",
  delete_fees: "/dashboard/fees/delete_fees",
  // fees route end
  // salary route start
  salary: "/dashboard/salary",
  pay_salary: "/dashboard/salary/pay_salary",
  salary_paid_slip: "/dashboard/salary/salary_paid_slip",
  salary_sheet: "/dashboard/salary/salary_sheet",
  salary_report: "/dashboard/salary/salary_report",
  // salary route end
  // attendence start
  attendence: "/dashboard/attendence",
  students_attendence: "/dashboard/attendence/students_attendence",
  employees_attendence: "/dashboard/attendence/employees_attendence",
  class_wide_report: "/dashboard/attendence/class_wide_report",
  students_attendence_report:
    "/dashboard/attendence/students_attendence_report",
  employees_attendence_report:
    "/dashboard/attendence/employees_attendence_report",
  // attendence end
  // time table Start
  timetable: "/dashboard/timetable",
  weekdays: "/dashboard/timetable/weekdays",
  time_periouds: "/dashboard/timetable/time_periouds",
  class_rooms: "/dashboard/timetable/class_rooms",
  create_timetable: "/dashboard/timetable/create_timetable",
  generate_for_class: "/dashboard/timetable/generate_for_class",
  generate: "/dashboard/timetable/generate",
  // Time table end
  // behaviour&skill start
  behaviour: "/dashboard/behaviour",
  rate_behaviour: "/dashboard/behaviour/rate_behaviour",
  rate_skills: "/dashboard/behaviour/rate_skills",
  observations: "/dashboard/behaviour/observations",
  affective_domain: "/dashboard/behaviour/affective_domain_rating_report",
  psychomotor: "/dashboard/behaviour/psychomotor_domain_rating_report",
  // behaviour&skill end
  // OnlineStore_POS start
  online_store: "/dashboard/online_store",
  store_analytics: "/dashboard/online_store/store_analytics",
  products_categories: "/dashboard/online_store/products_categories",
  products_tax: "/dashboard/online_store/products_tax",
  products: "/dashboard/online_store/products",
  new_order: "/dashboard/online_store/new_order",
  all_order: "/dashboard/online_store/all_order",

  // ONlineStore_POs end
  settings: "/dashboard/settings",
  subjects: "/dashboard/subjects",
  classes: "/dashboard/classes",
  students: "/dashboard/students",
  studentDetails: "/dashboard/student/:id",

  employeeDetails: "/dashboard/employee/:id",
  courses: "/dashboard/courses",
  courseDetails: "/dashboard/course/:id",
  exams: "/dashboard/exams",
  examDetails: "/dashboard/exam/:id",
  assignments: "/dashboard/assignments",
  assignmentDetails: "/dashboard/assignment/:id",
  library: "/dashboard/library",
  libraryDetails: "/dashboard/library/:id",
  transport: "/dashboard/transport",
  transportDetails: "/dashboard/transport/:id",
  noticeBoard: "/dashboard/notice-board",
  events: "/dashboard/events",
  eventDetails: "/dashboard/event/:id",
  payroll: "/dashboard/payroll",
  reports: "/dashboard/reports",
};
