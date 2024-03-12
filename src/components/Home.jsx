import person from "../assets/person.svg";
import pen from "../assets/pen-nib-fill.svg";
const Home = () => {
  return (
    <div id="home" className="bg-[url('/src/assets/bg.png')] bg-cover px-24  flex flex-col justify-center items-center pt-16">
      <div className="flex justify-between items-center">
        <div className="px-6 rounded-lg bg-lime-50 shadow-md border border-1 border-lime-400 py-4 mb-64">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src={pen} width={20} alt="" /> Retired Journalist
            </div>
            <div className="flex gap-2">
              <img src={pen} width={20} alt="" />
              Practical Insights
            </div>
            <div className="flex gap-2">
              <img src={pen} width={20} alt="" /> Investigative Guru
            </div>
          </div>
        </div>
        <img src={person} width={480} className=" self-center" alt="" />
        <div className="px-6 rounded-lg bg-lime-50 shadow-md border border-1 border-lime-300 py-4 mt-64">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src={pen}   width={20} alt="" /> Retired Journalist
            </div>
            <div className="flex gap-2">
              <img src={pen} width={20} alt="" />
              Practical Insights
            </div>
            <div className="flex gap-2">
              <img src={pen} width={20} alt="" /> Investigative Guru
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full bg-lime-300 py-16 px-2 box-border rounded-t-full">
        <div className=" text-center text-5xl font-bold  ">
          Explore the Art of Journalism with Mr. Arun
        </div>
        <div className="text-center mt-4">
          Unlock the secrets of journalism through the lens of experience.
        </div>
      </div>
    </div>
  );
};

export default Home;
