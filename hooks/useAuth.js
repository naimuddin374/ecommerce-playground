import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import React, { useState } from "react";
import api from "../service";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});
  const [error, setError] = useState(null);

  const router = useRouter();

  // Global actions
  const authActions = useStoreActions((action) => action.auth);

  // handle form input change handler
  const changeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  // handle login
  const handleLogin = async () => {
    const { email, password } = state;

    try {
      if (!email || !password) {
        setError("Email & password is required field!");
      }
      setLoading(true);
      setError(null);

      const formData = {
        email: email,
        password: password,
        // firstName,
        // lastName,
        // contact: '01754540123'
      };
      const response = await api.post("/auth/login", formData);
      const token = response.data.data;
      const user = jwtDecode(token);
      authActions.login({
        user,
        token,
      });
      router.push("/");
    } catch (error) {
      setError(error.response.data.message);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  // handle logout
  const handleLogout = () => {
    authActions.logout();
    router.push("/");
  };

  // handle new user registration
  const handleRegistration = () => {};

  return {
    state,
    loading,
    error,
    handleLogin,
    handleLogout,
    handleRegistration,
    changeHandler,
  };
};
export default useAuth;
