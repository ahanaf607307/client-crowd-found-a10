import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaRegStar, FaStar, FaUserCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Reviews() {
  return (
    <div className="md:p-5 max-w-7xl mx-auto ">
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#fd9940]">
        -- What People Say --
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 md:gap-10 lg:gap-20 my-10">
        <Fade>
        <div className="card w-80 border-2 p-3">
          <div className="flex gap-x-3 items-center">
            <h1 className="text-3xl">
              <FaUserCircle />
            </h1>
            <div className="my-5">
              <h1 className="font-semibold text-xl">
                <Typewriter
                  words={["Mr. Ayas Bin Ataur"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </h1>

              <p className="font-medium text-gray-600">Ayas LTD</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-5">
            "PlanMake allowed me to reach donors from around the world, boosting
            my campaign's visibility and success." – Mr. Ayas Bin Ataur
          </p>
          <hr />
          <div className="flex gap-4 items-center text-sm mt-2">
            <h1>Rating :</h1>{" "}
            <section className="text-[#fd9940] flex gap-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </section>
          </div>
        </div>
        </Fade>
       <Fade delay={500}>
       <div className="card w-80 border-2 p-3">
          <div className="flex gap-x-3 items-center">
            <h1 className="text-3xl">
              <FaUserCircle />
            </h1>
            <div className="my-5">
              <h1 className="font-semibold text-xl">
                <Typewriter
                  words={["Mr. Arosh Al Hasan"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </h1>
              <p className="font-medium text-gray-600">Cricketer</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-5">
            "I was concerned about online security, but PlanMake’s secure
            payment system gave me peace of mind." – Mr. Arosh Al Hasan
          </p>
          <hr />
          <div className="flex gap-4 items-center text-sm mt-2">
            <h1>Rating :</h1>{" "}
            <section className="text-orange-400 flex gap-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </section>
          </div>
        </div>
       </Fade>
       <Fade delay={900}>
       <div className="card w-80 border-2 p-3">
          <div className="flex gap-x-3 items-center">
            <h1 className="text-3xl">
              <FaUserCircle />
            </h1>
            <div className="my-5">
              <h1 className="font-semibold text-xl">
                <Typewriter
                  words={["Mr. Adnan Malik"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </h1>
              <p className="font-medium text-gray-600">COO Funder</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-5">
            "My project reached its goal faster than I expected! PlanMake's
            targeting tools really made a difference." – Mr. Adnan Malik
          </p>
          <hr />
          <div className="flex gap-4 items-center text-sm mt-2">
            <h1>Rating :</h1>{" "}
            <section className="text-orange-400 flex gap-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </section>
          </div>
        </div>
       </Fade>
       
      </div>
    </div>
  );
}

export default Reviews;
