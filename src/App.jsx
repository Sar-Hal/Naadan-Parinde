import { useState } from "react";
import fetch from "cross-fetch";
import { IoArrowBack } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import District from "./components/District";
import DistrictList from "./components/DistrictList";
import resourceData from "./constants/resourceData.json";
import survivors from "./constants/survivorsData.json";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [resource, setResource] = useState(undefined);

  // const [resourceData, setResourceData] = useState([]);
  // const [survivors, setSurvivors] = useState([]);

  // const fetchData = async () => {
  //   const resourceResult = await fetch("https://api.mlsakiit.com/resources", {
  //     method: "GET",
  //   }).catch((err) => console.error(err));
  //   const resData = await resourceResult
  //     .json()
  //     .catch((err) => console.error(err));
  //   setResourceData(resData.features);

  //   const survivorsResult = await fetch("https://api.mlsakiit.com/survivors", {
  //     method: "GET",
  //   }).catch((err) => console.error(err));
  //   const surData = await survivorsResult
  //     .json()
  //     .catch((err) => console.error(err));
  //   setSurvivors(surData);
  // };
  // fetchData();

  return (
    <>
      <div className="overflow-x-hidden antialiased text-neutral-200 selection:bg-neutral-200 selection:text-neutral-800">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className={`absolute inset-0 -z-9 h-full w-full items-center px-5 py-24 bg-[url('https://images6.alphacoders.com/856/856983.jpg')] bg-cover`}
          ></div>
        </div>
        <div className="container mx-auto px-5 py-20 h-screen select-none tracking-wider">
          {loggedIn ? (
            <div className="pb-20">
              {resource ? (
                <div className="flex flex-row gap-3 md:gap-5 items-center justify-start mb-10">
                  <IoArrowBack
                    className="md:text-6xl text-4xl cursor-pointer mr-2"
                    onClick={() => setResource(undefined)}
                  />

                  <h1 className="md:text-6xl text-4xl font-bold">
                    {`${resource.properties.dist_name} [#${resource.properties.dist_code}]`}
                  </h1>
                </div>
              ) : (
                <h1 className="md:text-6xl text-4xl mb-7 font-bold">
                  Resource Districts
                </h1>
              )}

              {resource ? (
                <div className="w-full flex flex-col gap-10 items-start justify-center">
                  <District
                    district={resource.properties}
                    survivors={survivors}
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-8 items-center justify-center pt-6">
                  {resourceData.map((resource, index) => (
                    <div
                      onClick={() => setResource(resource)}
                      className="w-full"
                      key={index}
                    >
                      <DistrictList district={resource} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="flex w-full h-full items-center justify-center">
                <div
                  className="py-4 px-8 rounded-2xl bg-[#653504] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer shadow-lg shadow-[#da9046] flex flex-row gap-4 items-center justify-center"
                  onClick={() => setLoggedIn(true)}
                >
                  <h1 className="text-5xl font-bold text-center">
                    VIEW DISTRICTS
                  </h1>
                  <FaArrowRight className="text-4xl" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
