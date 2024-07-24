// import { RefObject, useEffect, useState } from "react";

// export const useIsVisible = <T extends HTMLElement>(
//   targetRef: RefObject<T>
// ) => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true); // Set visibility to true
//           observer.unobserve(entry.target); // Stop observing the target
//         }
//       },
//       { threshold: 0 }
//     );
//     if (targetRef && targetRef.current) {
//       observer.observe(targetRef.current);
//     }
//     return () => {
//       if (targetRef && targetRef.current) {
//         observer.unobserve(targetRef.current);
//       }
//     };
//   }, [targetRef]);
//   return isVisible;
// };
