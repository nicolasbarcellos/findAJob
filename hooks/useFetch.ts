import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "@env";
import axios from "axios";

export type Props = {
  query: string;
  page: number;
  num_pages: string;
};

const api_key = RAPID_API_KEY;

export const useFetch = (endpoint: string, query: Props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = async () => {
    setIsLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, refetch };
};
