import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import api from "../service";

// "/categories"
const useData = (baseurl = '/') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   Global States
  const dataState = useStoreState((state) => state.data.data);
  // const dataState = {
  //   "/api/categories": [10, 12],
  //   "/api/subcategories": [20, 22],
  //   "/api/products": [30, 32],
  //   "/api/tags": [33, 25, 34]
  // }
  // Global Actions
  const dataActions = useStoreActions((action) => action.data);

  const fetchData = async (customUrl) => {
    setLoading(true);
    try {
      const response = await api.get(customUrl);
      dataActions.setData({
        key: customUrl.split('?')[0],
        value: response.data.payload,
      });
    } catch (error) {
      setError(error.response);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const getDetails = (url) => {
    try {
      url = url.split('/')
      const key = `/${url[1]}`
      const dataId = url[2]
      const data = dataState[key].data
      if (!data || data.length === 0) return null
      const findData = data?.find(item => item._id === dataId)
      if (!findData) return null
      return findData
    } catch (error) {
      return null
    }
  }

  useEffect(() => {
    if (!dataState[baseurl]) {
      fetchData(baseurl);
    }
  }, []);

  return {
    loading,
    data: dataState[baseurl.split('?')[0]],
    getDetails,
    error,
  };
};
export default useData;
