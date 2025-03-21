"use client";
import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
const targetDate = "2024-09-01T00:00:00";
const ComingSoon = () => {
  const calculateTimeRemaining = () => {
    return intervalToDuration({
      start: new Date(),
      end: new Date(targetDate),
    });
  };
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <>
        <div className="w-full h-screen bg-gradient-to-bl from-teal-400 to-blue-500 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl">
            We are <b>Almost</b> there!
          </h1>
          <p>Stay tuned for something amazing!!!</p>

          <div className="flex flex-wrap mx-2 gap-y-6 mt-10 lg:mt-20 lg:w-10/12">
            <div className="bg-transparent border text-center w-1/2 sm:w-1/3 xl:w-1/6">
              <p className="text-5xl px-10 py-5">
                {timeRemaining?.years || "0"}
              </p>
              <hr />
              <p className="px-10 py-5">Years</p>
            </div>

            <div className="bg-transparent border text-center w-1/2 sm:w-1/3 xl:w-1/6">
              <p className="text-5xl px-10 py-5">
                {timeRemaining?.months || "0"}
              </p>
              <hr />
              <p className="px-10 py-5">Months</p>
            </div>

            <div className="bg-transparent border text-center w-1/2 sm:w-1/3 xl:w-1/6">
              <p className="text-5xl px-10 py-5">
                {timeRemaining.days || "00"}
              </p>
              <hr />
              <p className="px-10 py-5">days</p>
            </div>

            <div className="bg-transparent border text-center w-1/2 sm:w-1/3 xl:w-1/6">
              <p className="text-5xl px-10 py-5">
                {timeRemaining.hours || "00"}
              </p>
              <hr />
              <p className="px-10 py-5">hours</p>
            </div>

            <div className="bg-transparent border text-center w-1/2 sm:w-1/3 xl:w-1/6">
              <p className="text-5xl px-10 py-5">
                {timeRemaining.minutes || "00"}
              </p>
              <hr />
              <p className="px-10 py-5">mins</p>
            </div>

            <div className="bg-transparent border text-center w-1/2 sm:w-1/3 xl:w-1/6">
              <p className="text-5xl px-10 py-5">
                {timeRemaining.seconds || "0"}
              </p>
              <hr />
              <p className="px-10 py-5">secs</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ComingSoon;
