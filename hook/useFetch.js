import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [payload, setPayLoad] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const res = await axios.get(url);
        setPayLoad(res.data);
      } catch (err) {
        setError(err);
      }
      setFetching(false);
    };
    fetchData();
  }, [url]);

  const refetchData = async () => {
    setFetching(true);
    try {
      const res = await axios.get(url);
      setPayLoad(res.data);
    } catch (err) {
      setError(err);
    }
    setFetching(false);
  };

  return {payload,fetching,error,refetchData}
};


export default useFetch;