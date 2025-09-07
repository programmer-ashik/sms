// StudentModal.jsx
import { useEffect, useRef } from "react";

/** Small label/value line */
function Item({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-1 border-b border-zinc-200 dark:border-zinc-800">
      <span className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {label}
      </span>
      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 break-words">
        {value ?? "-"}
      </span>
    </div>
  );
}

export default function StudentModal({ isOpen, onClose, student }) {
  console.log(isOpen, student);
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [isOpen]);

  if (!isOpen) return null;

  const {
    studentId,
    firstName,
    lastName,
    dob,
    className,
    session,
    division,
    additionalSkills = [],
    prevInstitute,
    lastGPA,
    gender,
    parentsDetails,
    payment,
    duePayment,
    course,
    courseFee,
    semesterFee,
    semesterFeeDue,
    totalSubject,
    subjectMarks = {},
    classTestAttend,
    classTestMark,
    totalSemester,
    perSemesterCGPA = {},
    remarks,
    address = {},
  } = student || {};

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  const closeBtn = (
    <button
      aria-label="Close"
      onClick={onClose}
      className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-700"
    >
      {/* X icon (inline SVG so no extra deps) */}
      <svg
        className="w-5 h-5 text-zinc-700 dark:text-zinc-200"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  );

  return (
    <div
      ref={overlayRef}
      onMouseDown={(e) => {
        // click outside dialog to close
        if (e.target === overlayRef.current) onClose?.();
      }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="relative w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 shadow-2xl border border-zinc-200 dark:border-zinc-800"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">
              Student Details
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              ID: {studentId || "-"} • {fullName || "-"}
            </p>
          </div>
          {closeBtn}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Top summary badge row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Class / Session
              </p>
              <p className="text-sm font-semibold">
                {className || "-"} / {session || "-"}
              </p>
            </div>
            <div className="rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Division
              </p>
              <p className="text-sm font-semibold">{division || "-"}</p>
            </div>
            <div className="rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Gender</p>
              <p className="text-sm font-semibold">{gender || "-"}</p>
            </div>
            <div className="rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">DOB</p>
              <p className="text-sm font-semibold">{dob || "-"}</p>
            </div>
          </div>

          {/* Grid sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Academic */}
            <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold mb-3">Academic</h3>
              <div className="space-y-1">
                <Item label="Previous Institute" value={prevInstitute} />
                <Item label="Last GPA" value={lastGPA} />
                <Item label="Course" value={course} />
                <Item label="Total Subjects" value={totalSubject} />
                <Item label="Total Semester" value={totalSemester} />
              </div>

              {/* Skills */}
              <div className="mt-3">
                <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                  Additional Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.length ? (
                    additionalSkills.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40"
                      >
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      —
                    </span>
                  )}
                </div>
              </div>
            </section>

            {/* Finance */}
            <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold mb-3">Finance</h3>
              <div className="space-y-1">
                <Item label="Course Fee" value={courseFee} />
                <Item label="Semester Fee" value={semesterFee} />
                <Item label="Semester Fee Due" value={semesterFeeDue} />
                <Item label="Paid" value={payment} />
                <Item label="Due" value={duePayment} />
              </div>
            </section>

            {/* Parents */}
            <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold mb-3">Parents</h3>
              <div className="space-y-1">
                <Item
                  label="Father"
                  value={
                    parentsDetails?.father
                      ? `${parentsDetails?.father?.name} • ${parentsDetails?.father?.occupation} • ${parentsDetails?.father?.age}y`
                      : "-"
                  }
                />
                <Item
                  label="Mother"
                  value={
                    parentsDetails?.mother
                      ? `${parentsDetails?.mother?.name} • ${parentsDetails?.mother?.occupation} • ${parentsDetails?.mother?.age}y`
                      : "-"
                  }
                />
              </div>
            </section>

            {/* Performance */}
            <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold mb-3">Performance</h3>
              <div className="space-y-1">
                <Item label="Class Tests Attended" value={classTestAttend} />
                <Item label="Class Test Best Mark" value={classTestMark} />
              </div>

              {/* CGPA by semester */}
              <div className="mt-3">
                <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                  Per Semester CGPA
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.keys(perSemesterCGPA).length ? (
                    Object.entries(perSemesterCGPA).map(([sem, cg], i) => (
                      <div
                        key={i}
                        className="rounded-lg px-3 py-2 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40"
                      >
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                          {sem}
                        </p>
                        <p className="text-sm font-semibold">{cg}</p>
                      </div>
                    ))
                  ) : (
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      —
                    </span>
                  )}
                </div>
              </div>
            </section>

            {/* Subjects & Marks */}
            <section className="md:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold mb-3">Subject Marks</h3>
              <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50 dark:bg-zinc-950/40 text-zinc-600 dark:text-zinc-300">
                    <tr>
                      <th className="text-left p-3">Subject</th>
                      <th className="text-right p-3">Mark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(subjectMarks).length ? (
                      Object.entries(subjectMarks).map(([sub, mark], idx) => (
                        <tr
                          key={idx}
                          className="border-t border-zinc-200 dark:border-zinc-800"
                        >
                          <td className="p-3">{sub}</td>
                          <td className="p-3 text-right font-medium">{mark}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={2}
                          className="p-3 text-zinc-500 dark:text-zinc-400"
                        >
                          No marks available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Address */}
            <section className="md:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold mb-3">Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Item label="Village" value={address?.vill} />
                <Item label="Post" value={address?.post} />
                <Item label="Upazila" value={address?.Upozila} />
                <Item label="District" value={address?.Distric} />
                <Item label="Division" value={address?.Division} />
                <Item label="Postal Code" value={address?.postalCode} />
                <Item label="Holding No" value={address?.holdingNo} />
              </div>
            </section>

            {/* Remarks */}
            <section className="md:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5">
              <h3 className="text-base font-semibold mb-3">Remarks</h3>
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                {remarks || "—"}
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
