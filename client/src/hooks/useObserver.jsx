import { useInView } from "react-intersection-observer";

export const useObserver = (bool) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: bool,
  });

  return { ref: ref, inView: inView, entry: entry };
};
