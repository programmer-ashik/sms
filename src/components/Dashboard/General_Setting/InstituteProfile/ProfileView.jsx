import { FaFlag, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Icons } from "../../../../shared/constant/icon.constant";

export const ProfilePreview = ({ values }) => {
  return (
    <div className="p-6 rounded shadow-md w-full max-w-sm theme-bg theme-text">
      <h2 className="text-md font-semibold border-1 p-2 rounded-md inline-block border border-indigo-400">
        Profile Preview
      </h2>

      <div className="flex flex-col items-center my-4">
        {values.logo ? (
          <img
            src={URL.createObjectURL(values.logo)}
            alt="logo"
            className="w-20 h-20 object-cover rounded-full mb-3"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-300 rounded-full mb-3"></div>
        )}

        <h1 className="text-xl font-bold">
          {values.instituteName || "Institute Name"}
        </h1>
        <p className="text-gray-500">{values.tagline || "Tagline here"}</p>
      </div>

      <div className="mt-4 space-y-4 text-md">
        <p className=" space-y-2">
          <span className=" flex gap-3 items-center">
            <Icons.phone /> Phone NO
          </span>
          <span className=" text-sm tracking-wider">
            {values.phone || "+880-xxxx-xxxx"}
          </span>
        </p>
        <p className=" space-y-2">
          <span className=" flex gap-3 items-center">
            <Icons.email />
            Email
          </span>
          <span className=" text-sm tracking-wider">
            {values.email || "example@email.com"}
          </span>
        </p>
        <p className=" space-y-2">
          <span className=" flex gap-3 items-center">
            <Icons.web />
            Website
          </span>
          <span className=" text-sm tracking-wider">
            {values.email || "www.example.com"}
          </span>
        </p>
        <p className=" space-y-2">
          <span className=" flex gap-3 items-center tracking-widest font-semibold">
            <Icons.map />
            Addressh
          </span>
          <span className=" text-sm tracking-wider">
            {values.address || "Rajshahi/Godarari/Premtoly"}
          </span>
        </p>
        <p className=" space-y-2">
          <span className=" flex gap-3 items-center tracking-widest font-semibold">
            <Icons.map />
            Country
          </span>
          <span className=" text-sm tracking-wider">
            {values.country || "Bangladesh"}
          </span>
        </p>
      </div>
    </div>
  );
};
