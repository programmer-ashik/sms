export const BankTableHeader = () => {
  return (
    <div className="col-span-4 grid grid-cols-4 content-center gap-4 font-semibold text-center py-2 rounded-md bg-purple-700 text-white">
      <div className="bankName">Bank Name</div>
      <div className="bankName">Logo</div>
      <div className="bankName">Account No</div>
      <div className="bankName">Actions</div>
    </div>
  );
};
