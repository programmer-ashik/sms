import React from "react";
import image from "../../../assets/logo/images.png";
const FileUploadField = ({ label, name, values, setFieldValue }) => {
  const file = values?.[name]; // ✅ dynamic field access

  return (
    <div className={`relative flex flex-col gap-1 w-full`}>
      {/* Label */}
      <label
        htmlFor={name}
        className="absolute -top-3 left-4 font-medium bg-[#EA2264] px-1 rounded-sm text-[12px] text-white"
      >
        {label}
      </label>

      <div className="theme-border w-full">
        <div className="theme-bg flex justify-between items-center gap-2 rounded-[20px] py-6 px-4">
          {/* Preview */}
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className={` w-12 h-12 object-cover mb-3`}
            />
          ) : (
            <div
              className={` border-2 text-center flex items-center justify-center`}
            >
              <img
                src={image}
                alt="preview"
                className={`w-28 h-12 border-2 object-cover`}
              />
            </div>
          )}

          {/* Hidden Input */}
          <input
            id={name}
            type="file"
            accept="image/*"
            onChange={(e) => setFieldValue(name, e.target.files[0])}
            className="hidden"
          />

          {/* Trigger Button */}
          <button
            type="button"
            onClick={() => document.getElementById(name).click()}
            className="p-1 sm:p-2 theme-bg theme-text rounded-[20px] w-full md:w-[30%] lg:w-[60%] border-2 text-sm overflow-hidden"
          >
            {file ? file.name.split(0, 8) : "Upload File"}
          </button>
        </div>
      </div>
      <label
        htmlFor={name}
        className="absolute -bottom-4 left-4 font-medium bg-yellow-500 px-1 rounded-md text-[10px] text-black"
      >
        Max size 500kb
      </label>
    </div>
  );
};

export default FileUploadField;
