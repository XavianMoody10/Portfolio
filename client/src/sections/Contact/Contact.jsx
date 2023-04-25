import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className=" h-screen flex items-center justify-center bg-custom-gradient"
    >
      <div className=" text-white text-center flex flex-col gap-2">
        <h1 className=" text-4xl font-bold mb-7">Contact</h1>
        <p className=" text-xl">
          <strong>Phone:</strong> 754-801-9532
        </p>
        <p className=" text-xl">
          <strong>Email:</strong> XavianMoody1025@gmail.com
        </p>

        <p className=" mt-5 text-2xl font-bold">
          Hope to hear from you...Thank You
        </p>
      </div>
    </section>
  );
};
