/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import image from "../../assets/instructorimg/i1.jpg";

const InstructorCard = ({ course }) => {
  const { id, name, startMonth, expertise, endMonth, year } = course;

  return (
    <div className="card w-64 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
          <figure className="px-4 pt-2">
        <img src={image} alt="Course" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="text-cyan-400 ">Instructor Id : {id}</h6>
        <h6 className="font-bold  ">
          Name:{name.firstName + " " + name.lastName}
        </h6>
        <p className="font-bold text-cyan-500  text-sm">
          Expertise:{expertise?.primary + " " + expertise?.secondary}
        </p>

        <Link to="instructor/details">
          <button className="btn text-sm btn-xs  btn-outline">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
