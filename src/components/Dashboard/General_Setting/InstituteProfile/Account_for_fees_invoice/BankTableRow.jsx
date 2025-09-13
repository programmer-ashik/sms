import Icon from "../../../../../shared/Components/Iocn/Icon";
import { Icons } from "../../../../../shared/constant/icon.constant";

export const BankTableRow = ({ bank }) => {
  return (
    <div className="col-span-4 grid grid-cols-4 gap-4 text-center items-center py-2 border-b">
      <div className=" line-clamp-1">{bank.name}</div>
      <div>
        <img src={bank.logo} alt={bank.name} className="w-10 h-10 mx-auto" />
      </div>
      <div className=" line-clamp-1">{bank.accountNo}</div>
      <div>
        <button className=" p-2 text-[8px] bg-blue-300 text-white rounded-md hover:bg-blue-600">
          <Icon icon={Icons.pen} className={"text-[12px]"} />
        </button>
        <button className="ml-2 p-2 text-sm bg-red-300 text-white rounded-md hover:bg-red-600">
          <Icon icon={Icons.delete} className={"text-[12px] rounded-full"} />
        </button>
      </div>
    </div>
  );
};
