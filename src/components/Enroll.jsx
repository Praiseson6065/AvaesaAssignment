import person from "../assets/person.svg";

const Enroll = () => {
  return (
    <div id="enroll" className="bg-zinc-800">
      <div className="px-24 flex justify-around items-center py-8">
        <div className="bg-zinc-700 rounded-full">
          <img src={person} width={300} className="rounded-full" alt="" />
        </div>
        <div className="flex-col flex gap-6">
          <div className="text-lime-300 font-bold text-3xl ">Enroll Course</div>
          <div>
            <input
              type="text"
              className="py-2 rounded-full px-4"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              className="py-2 rounded-full px-4"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="submit"
              className="py-2 bg-lime-300 px-6 rounded-full"
              value="Enroll"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div className="px-24 flex justify-around items-center py-8 border-t text-white border-t-lime-50">
        Copyright © 2024 Mr.Arun&rsquo;s Journalism Course. Developed By
        Praiseson
      </div>
    </div>
  );
};

export default Enroll;
