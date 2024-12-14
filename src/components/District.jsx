const District = ({ district }) => {
  return (
    <div className="w-full p-10 bg-[#653504] flex flex-col gap-10 items-center justify-center rounded-2xl border-3 border-[#da9046] shadow-lg shadow-[#80471c]">
      <div className="flex flex-row gap-12 w-full items-center justify-evenly">
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Temperature</h1>
          <div className="flex items-center justify-center w-full rounded-xl bg-[#da9046] p-4 shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.temp}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Rainfall</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.rainfall}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Wind Speed</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.wind_speed}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Water</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.water}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-12 w-full items-center justify-evenly">
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Food Rations</h1>
          <div className="flex items-center justify-center w-full rounded-xl bg-[#da9046] p-4 shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.food_rations}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">MedKits</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.medkits}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Ammo</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.ammo}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Camp Exists</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.camp_exists ? "Yes" : "No"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default District;
