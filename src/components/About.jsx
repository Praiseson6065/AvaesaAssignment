const About = () => {
  return (
    <div id="about" className="bg-zinc-800">
      <div className="px-24 py-12 text-white flex flex-col gap-8 justify-around">
        <div className="font-bold text-4xl text-center">About</div>
        <div className="text-center mt-2 px-48">
          Meet Mr. Arun, a seasoned journalist with decades of experience in the
          field. His journey unfolds a treasure trove of stories, insights, and
          practical knowledge that aspiring journalists crave.
        </div>
        <div className="px-16 py-12 bg-zinc-700 rounded-full flex justify-around">
          <div className="flex flex-col justify-center ">
            <div className=" text-center text-4xl font-bold text-lime-300">
              5+
            </div>
            <div className="text-2xl font-medium    ">Awards</div>
          </div>
          <div className="flex flex-col justify-center ">
            <div className=" text-center text-4xl font-bold text-lime-300">
              299+
            </div>
            <div className="text-2xl font-medium">Journals</div>
          </div>
          <div className="flex flex-col justify-center ">
            <div className=" text-center text-4xl font-bold text-lime-300">
              999+
            </div>
            <div className="text-2xl font-medium">Publications</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
