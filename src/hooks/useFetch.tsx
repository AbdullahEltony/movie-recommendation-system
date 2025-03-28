import React, { useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

export default useFetch;
