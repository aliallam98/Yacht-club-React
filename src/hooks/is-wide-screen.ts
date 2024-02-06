import { useEffect, useState } from "react";

const IsWideScreen = () => {
    const [matches, setMatches] = useState(true);

useEffect(() => {
  const media = window.matchMedia("(min-width: 1024px)");

  const handleChange = () => {
    setMatches(media.matches);
  };

  media.addEventListener("change", handleChange);

  return () => media.removeEventListener("change", handleChange); // Cleanup
}, []); // Empty dependency array
  return matches
}

export default IsWideScreen 