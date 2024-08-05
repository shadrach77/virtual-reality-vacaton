"use client";
import React from "react";
import { useState, useEffect } from "react";
import IPerson from "@/interface/person";

function OurTeam() {
  const [people, setPeople] = useState<IPerson[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/?results=3", {
        method: "GET",
        next: { revalidate: 1 },
      });
      const data: any = await res.json();
      setPeople(data.results as IPerson[]);
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#f3b700] flex items-center flex-col">
      <h1 className="text-6xl text-[#dd6e42] mx-16 my-8 font-bold">Our Team</h1>
      <p className="text-2xl text-[#fbf7ec] mx-16 mb-16">
        Meet the creative minds behind Virtual Escapes! Our team of VR experts
        and travel enthusiasts brings the world to your fingertips with
        immersive virtual journeys.
      </p>

      <div className="flex justify-between w-full pl-16 pr-16 max-w-3xl gap-4">
        {people.map((person, i) => (
          <div
            key={i}
            className=" h-full flex justify-center items-center flex-col bg-[#427aa1] px-6 py-8 rounded-md"
          >
            <img
              src={person.picture.large}
              alt=""
              className="w-auto h-auto object-contain rounded-full"
            />
            <h1 className="text-[#fbf7ec] relative top-3">
              {person.name.first}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
