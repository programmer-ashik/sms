import { Icons } from "../../../shared/constant/icon.constant";
import Icon from "../../../shared/Components/Iocn/Icon";
import SubjectsCards from "../../../components/Dashboard/Subjects/SubjectsCards";
import { Link } from "react-router-dom";
import { Route } from "../../../shared/constant/route.constant";

const ClassWithSubjects = () => {
  return (
    <div className=" w-full flex flex-col sm:flex-row sm:gap-4 justify-start items-start">
      {/* card of subject wise mark */}
      <SubjectsCards />
      <div className=" w-full sm:w-[200px] border-2 border-dashed border-primary rounded-md h-32 flex justify-center items-center mt-4">
        <Link to={Route.asignSubject}>
          <div className="w-full h-24 rounded-md flex flex-col justify-center items-center p-2 text-pretty">
            <Icon icon={Icons.add} className=" text-3xl text-primary" /> Assign
            Subjects
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ClassWithSubjects;
