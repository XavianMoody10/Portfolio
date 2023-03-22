import { useInView } from "react-intersection-observer";

export const useObserver = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return { ref: ref, inView: inView, entry: entry };
};