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
        return;
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
  const handleRegistration = async () => {
    const { firstName, lastName, email, contact, password, confirmPassword } =
      state;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contact
    ) {
      setError("Please input all required fields!");
      return;
    } else if (isNaN(contact)) {
      setError("Contact number must be a numeric value!");
      return;
    } else if (contact.length !== 11) {
      setError("Contact number is not a valid number!");
      return;
    } else if (password !== confirmPassword) {
      setError("Confirm password doesn't match!");
      return;
    }
    setError(null);

    try {
      const registrationData = {
        firstName,
        lastName,
        email,
        contact: 1234,
        password,
      };

      const response = await api.post("/auth/register", registrationData);
      console.log("response", response.data);
      // const resData = response.data.data

      router.push("/signin");
    } catch (error) {
      setError(error.response.data.message);
      console.log("error", error);
    }
  };

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
