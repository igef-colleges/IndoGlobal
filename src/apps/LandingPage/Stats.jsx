import React from 'react';
import bg from "../../assets/stats-bg.svg";

const Stats = () => {
  const stats = [
    { data: "70", title: "Acres of Campus" },
    { data: "22+", title: "Years of Excellence" },
    { data: "10000+", title: "Alumni" },
    { data: "20+", title: "Courses" },
  ];

  return (
    <section className="py-28 relative">
      <img
        src={bg}
        alt="stats"
        className="absolute object-cover top-0 h-full w-full -z-10"
      />
      <div className="bg-black inset-0 opacity-70 absolute z-20" />
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative z-30">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-3xl font-semibold text-white sm:text-5xl">INDO GLOBAL GROUPS OF COLLEGES</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-300 sm:text-lg lg:text-xl">
            Spanning 70 acres, with 22+ years of academic excellence, over 10,000 alumni, and 20+ specialized courses, we continue to shape future professionals.
          </p>
        </div>
        {/* text - end */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x-2  md:divide-red-700">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:p-4">
              <div className="text-4xl font-semibold text-white sm:text-6xl">{item.data}</div>
              <div className="mt-3 text-sm font-medium text-gray-400 sm:text-xl">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;