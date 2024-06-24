import Course from "../Course";

function CourseOverview() {
    return (
        <section className="w-3/4 mx-auto flex flex-col md:flex-row gap-5 justify-evenly items-center mt-10">
            <Course />
            <Course />
            <Course />
        </section>
    )
}

export default CourseOverview