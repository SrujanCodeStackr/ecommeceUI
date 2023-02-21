import React, { useEffect, useState } from "react";

const TwoApi = () => {
  const [data, setData] = useState([]);

  const Fetch = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    Fetch("");
    Fetch("");
  }, []);

  return <div>Hello</div>;
};

export default TwoApi;
