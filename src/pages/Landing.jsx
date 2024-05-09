import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";

function Landing() {
  const { getUser } = useGlobalContext();
  useEffect(() => {
    getUser();
  });
  return <div style={{ height: "80vh", marginTop: "10px" }}>Landing</div>;
}

export default Landing;
