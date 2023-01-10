import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import React, { useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
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
  const handleLogin = () => {
    console.log("state", state);
    const { email, password } = state;
    if (email && password) {
      setError(null);
      authActions.login({
        user: {
          email,
          password,
        },
        token: "Bearer Token",
      });
      router.push("/");
    } else {
      setError("Email & password is required field!");
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
