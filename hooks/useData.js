import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import api from "../service";
import jwtDecode from "jwt-decode";

// "/categories"
const useData = (baseurl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   Global States
  const dataState = useStoreState((state) => state.data.data);

  // Global Actions
  const dataActions = useStoreActions((action) => action.data);

  const fetchData = async (customUrl) => {
    setLoading(true);
    try {
      const response = await api.get(customUrl);
      dataActions.setData({
        key: baseurl,
        value: response.data.data,
      });
    } catch (error) {
      setError(error.response.data.message);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!dataState[baseurl]) {
      fetchData(baseurl);
    }
  }, []);

  return {
    loading,
    data: dataState[baseurl],
    error,
  };
};
export default useData;
