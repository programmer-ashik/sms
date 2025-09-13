import React, { useState } from "react";
import FormHeader from "../../../shared/Components/Form/FormHeader";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { InputField } from "../../../shared/Components/Form/InputField";
import Button from "../../../shared/Components/Button/Button";
import { Icons } from "../../../shared/constant/icon.constant";
import Icon from "../../../shared/Components/Iocn/Icon";

const Rules_regulations = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [justify, setJustify] = useState("left"); // left | center | right
  return (
    <div>
      <FormHeader
        title={"Rules Regulations"}
        color={["border-[#7F60E4]", "border-gray-500"]}
        options={["Required", "Optional"]}
      />
      <Formik
        initialValues={{
          rules: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form className=" w-full flex flex-col justify-center items-center pt-4">
            <div className="flex justify-start items-start gap-4 mb-4">
              <p
                onClick={() => setBold(!bold)}
                className=" bg-[#8585ee] text-white px-2 rounded-md cursor-pointer "
              >
                B
              </p>
              {/* justify */}
              <div className="flex justify-center items-center gap-2 px-1 rounded-md theme-text">
                <p
                  onClick={() => setJustify("left")}
                  className={`bg-[#8585ee] text-white px-2 rounded-md cursor-pointer ${
                    justify === "left" ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Icon icon={Icons.justify_left} className="text-2xl" />
                </p>
                <p
                  onClick={() => setJustify("center")}
                  className={`bg-[#8585ee] text-white px-2 rounded-md cursor-pointer ${
                    justify === "center" ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Icon icon={Icons.justify} className="text-2xl" />
                </p>
                <p
                  onClick={() => setJustify("right")}
                  className={`bg-[#8585ee] text-white px-2 rounded-md cursor-pointer ${
                    justify === "right" ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Icon icon={Icons.justify_right} className="text-2xl" />
                </p>
              </div>
              {/* Italic */}
              <p
                onClick={() => setItalic(!italic)}
                className=" bg-[#8585ee] text-white px-2 rounded-md cursor-pointer "
              >
                <Icon icon={Icons.italic} className="text-2xl" />
              </p>

              {/* Underline */}
              <p
                onClick={() => setUnderline(!underline)}
                className=" bg-[#8585ee] text-white px-2 rounded-md cursor-pointer "
              >
                <Icon icon={Icons.underline} className="text-2xl" />
              </p>
            </div>
            <InputField
              label={"Rules & Regulations"}
              name={"rules"}
              type="textarea"
              className={`w-[60%] 
                ${bold ? "font-bold" : "font-normal"} 
                ${italic ? "italic" : ""} 
                ${underline ? "underline" : ""} 
                ${justify === "left" ? "text-left" : ""} 
                ${justify === "center" ? "text-center" : ""} 
                ${justify === "right" ? "text-right" : ""}`}
            />
            <Button
              className={"btn_primery rounded-md mt-4"}
              icon={Icons.update}
            >
              Add New Rules
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Rules_regulations;
