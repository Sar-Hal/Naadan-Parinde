const District = ({ district, survivors }) => {
  // const [survivors, setSurvivors] = useState([]);

  // const fetchData = async () => {
  //   const result = await fetch("https://api.mlsakiit.com/survivors", {
  //     method: "GET",
  //   }).catch((err) => console.error(err));
  //   const data = await result.json().catch((err) => console.error(err));
  //   console.log(data);
  //   setSurvivors(data);
  // };
  // fetchData();

  return (
    <div className="w-full p-10 bg-[#653504] flex flex-col gap-10 items-center justify-center rounded-2xl border-3 border-[#da9046] shadow-lg shadow-[#80471c]">
      <div className="flex flex-row gap-12 w-full items-center justify-evenly">
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Temperature</h1>
          <div className="flex items-center justify-center w-full rounded-xl bg-[#da9046] p-4 shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.temp ? district.temp : "N/A"}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Rainfall</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.rainfall ? district.rainfall : "N/A"}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Wind Speed</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.wind_speed ? district.wind_speed : "N/A"}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Water</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.water ? district.water : "N/A"}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-12 w-full items-center justify-evenly">
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Food Rations</h1>
          <div className="flex items-center justify-center w-full rounded-xl bg-[#da9046] p-4 shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.food_rations ? district.food_rations : "N/A"}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">MedKits</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.medkits ? district.medkits : "N/A"}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h1 className="text-2xl font-bold">Ammo</h1>
          <div className="flex items-center justify-center rounded-xl bg-[#da9046] p-4 w-full shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-in-out duration-200">
            <h1 className="font-bold text-2xl text-[#4f3317]">
              {district.ammo ? district.ammo : "N/A"}
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
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="text-4xl font-semibold">Survivors</h1>
        <div className="flex flex-wrap gap-4 w-full items-center justify-evenly">
          {survivors
            .filter((survivor) => survivor.district === district.dist_name)
            .map((survivor, index) => (
              <div
                className="flex flex-col gap-0 hover:gap-1.5 group items-center justify-center rounded-xl bg-[#da9046] p-4 shadow-lg shadow-[#653504] hover:scale-105 transition-all ease-linear duration-200 hover:shadow-lg hover:shadow-[#da9046]"
                key={index}
              >
                <h1 className="font-bold text-2xl text-[#4f3317]">
                  {survivor.survivor_id}
                </h1>
                <div className="flex-col gap-3 transition-all ease-linear duration-200 w-full items-center justify-center">
                  <h1 className="text-[0px] group-hover:text-lg font-semibold text-[#4f3317] transition-all ease-linear duration-200">{`Lat: ${survivor.lat.toFixed(
                    3
                  )}`}</h1>
                  <h1 className="text-[0px] group-hover:text-lg font-semibold text-[#4f3317] transition-all ease-linear duration-200">{`Lon: ${survivor.lon.toFixed(
                    3
                  )}`}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default District;
