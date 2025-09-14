import FormHeader from "../../../shared/Components/Form/FormHeader";
import { Form, Formik } from "formik";
import Button from "../../../shared/Components/Button/Button";
import { Icons } from "../../../shared/constant/icon.constant";
import { FeeRow } from "../../../components/Dashboard/General_Setting/Fee_Particulars/FeeRow";
import { feeFields } from "../../../shared/constant/feeFields.constant";

const Fees_perticulars = () => {
  return (
    <div>
      <FormHeader
        title={"Change Fee Particulars"}
        options={["Editable", "Fixed"]}
        color={["border-purple-500", "border-gray-500"]}
      />
      <Formik
        initialValues={{
          fee_particulars: "",
          monthly_tution: "[MONTHLY TUTION FEE]",
          monthly_tution_fee: "[FIXED]",
          admission: "ADMISSION FEE",
          admission_fee: "0",
          registration: "REGISTRATON FEE",
          registration_fee: "0",
          art_matarial: "ART MATERIAL",
          art_matarial_fee: "0",
          transport: "TRANSPORT",
          transport_fee: "0",
          books: "Books",
          books_fee: "0",
          uniform: "UNIFORM",
          uniform_fee: "0",
          fine: "FINE",
          fine_fee: "0",
          others: "OTHERS",
          others_fee: "0",
          previous_balnce_fee: "[FIXED]",
          previous_balnce: "PREVIOUS BALANCE",
          discount: "DISCOUNT IN FEE [FIXED]",
          discount_in_fee: "[FIXED]",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 200);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form className=" w-full px-2 md:px-4 lg:px-12 xl:px-20">
            {feeFields.map((field, idx) => (
              <FeeRow key={idx} field={field} values={values} />
            ))}
            <div className="w-full flex justify-center items-center">
              <Button
                icon={Icons.update}
                className="btn_primery rounded-full mt-4 px-4 py-3"
                type="submit"
                isSubmitting={isSubmitting}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Fees_perticulars;
