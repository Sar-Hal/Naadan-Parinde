import { useState } from "react";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import resourceData from "./constants/resourceData.json";
import District from "./components/district";
import DistrictList from "./components/districtList";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [resource, setResource] = useState(undefined);

  // const fetchData = async () => {
  //   let config = {
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: "https://api.mlsakiit.com/resources",
  //     headers: {},
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // fetchData();

  return (
    <>
      <div className="overflow-x-hidden antialiased text-neutral-200 selection:bg-neutral-200 selection:text-neutral-800">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className={`absolute inset-0 -z-9 h-full w-full items-center px-5 py-24 bg-[url('https://images6.alphacoders.com/856/856983.jpg')] bg-cover bg-center`}
          ></div>
        </div>
        <div className="container mx-auto px-5 py-20 h-screen">
          <District district={resourceData[0]} />

          {loggedIn ? (
            <div className="pb-20">
              {resource ? (
                <div className="flex flex-row gap-3 md:gap-5 items-center justify-start mb-10">
                  <IoArrowBack
                    className="md:text-5xl text-3xl cursor-pointer mr-2"
                    onClick={() => setResource(undefined)}
                  />

                  <h1 className="md:text-5xl text-3xl font-bold">
                    {resource.properties.dist_name}
                  </h1>
                </div>
              ) : (
                <h1 className="md:text-5xl text-3xl mb-7 font-bold">
                  Resource Districts
                </h1>
              )}

              {resource ? (
                <div className="w-full flex flex-col gap-10 items-start justify-center">
                  <District resource={resource.properties} />
                </div>
              ) : (
                <div className="flex flex-col gap-6 items-center justify-center">
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
                  className="py-4 px-8 rounded-2xl bg-[#653504] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer shadow-lg shadow-[#80471c] flex flex-row gap-4 items-center justify-center"
                  onClick={() => setLoggedIn(true)}
                >
                  <h1 className="text-4xl font-bold text-center">
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
