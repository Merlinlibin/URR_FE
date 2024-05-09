import axios from "axios";
import { createContext, useContext } from "react";
import { LoginUser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const API_URI = "https://urr-be.onrender.com";
  //const API_URI = "http://localhost:3000";

  const getUser = async () => {
    const token = JSON.parse(localStorage.getItem("userInfo"));
    try {
      if (token) {
        const res = await axios.get(`${API_URI}/api/user/loggedinUser`, {
          headers: { Authorization: `Bearer ${token.token}` },
        });
        if (res.data.user) {
          dispatch(LoginUser(res.data.user));
        } else {
          toast({
            title: res.data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        }
      }
    } catch (error) {
      console.log(error);
      let errorMessage = "An error occurred. Please try again later.";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };

  return (
    <AppContext.Provider value={{ getUser, API_URI }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
