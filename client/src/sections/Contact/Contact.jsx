import React, { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";

export const Contact = ({ setSection }) => {
  const { ref, inView, entry } = useObserver();

  useEffect(() => {
    if (inView) {
      setSection(3);
    }
  }, [inView]);

  return (
    <section
      id="contact"
      ref={ref}
      className=" flex items-center justify-center"
    >
      <div className=" text-center flex flex-col gap-3">
        <p className=" text-lg">
          <strong>Phone:</strong> 754-801-9532
        </p>
        <p className=" text-lg">
          <strong>Email:</strong> XavianMoody1025@gmail.com
        </p>
        <p className=" mt-20 text-xl">
          <strong>Hope to hear from you...Thank You</strong>
        </p>
      </div>
    </section>
  );
};
