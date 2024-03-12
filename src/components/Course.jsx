const Course = () => {
  return (
    <div id="course" className="px-24 bg-[url('/src/assets/bg2.png')] bg-cover">
      <div className="w-full bg-lime-300 py-16 px-2 box-border rounded-b-full">
        <div className="font-bold text-4xl text-center">Course Overview</div>
        <div className="font-bold text-center mt-4">
          Mastering the Art of Journalism - A 2-Week Online Course
        </div>
        <div className="font-medium text-center">
          Gain practical insights, sharpen your skills, and embark on your
          journalistic journey with Mr. Arun
        </div>
      </div>
      <div className="flex flex-col py-6 justify-center items-center">
        <div className="text-2xl font-semibold text-center my-6">Course Modules:</div>
        <div className="list-disc grid grid-cols-2 gap-x-12 gap-y-4">
          <li>Introduction to Journalism</li>
          <li>News Writing and Reporting</li>
          <li>Investigative Journalism</li>
          <li>Multimedia Journalism</li>
          <li>Digital Journalism and Online Platforms</li>
          <li>Journalism Ethics and Law</li>
          <li>Feature Writing and Opinion Journalism</li>
          <li>Career Development in Journalism</li>
        </div>
      </div>
    </div>
  );
};

export default Course;
