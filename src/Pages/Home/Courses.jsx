/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCourses from "../../Hooks/useCourses";
import CourseCard from "../Shared/CourseCard";

const Courses = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [courses, loading, refetch] = useCourses();
  const courseArray = courses?.data?.data;
  if (loading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (!courseArray) {
    return <div>No courses available.</div>;
  }

  return (
    <div>
      <SectionTitle
        data-aos="fade-right"
        data-aos-duration="7000"
        heading={"Our Courses "}
      ></SectionTitle>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex justify-center  container mx-auto mb-5    px-4"
      >
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {courseArray.slice(0, 4).map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </div>
      <Link to="/courses" className="px-10">
        {" "}
        <button className="  btn-small btn btn-primary ">
          show more Courses
        </button>
      </Link>
    </div>
  );
};

export default Courses;
