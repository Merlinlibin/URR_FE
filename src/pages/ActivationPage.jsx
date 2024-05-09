import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";

function ActivationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
    const API_URL = "https://urr-be.onrender.com";

  const activateAccount = async () => {
    try {
      setLoading(true);
      const response = await axios.put(`${API_URL}/api/user/activation/${id}`);
      console.log(response);
      toast({
        title: `User Activated`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      navigate("/login");
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
      setLoading(false);
      navigate("/");
      return;
    }
  };

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "Url('https://res.cloudinary.com/dewfjhlh5/image/upload/v1715097776/lc7uagda52g68thb536a.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition:"center"
      }}>
      <Button
        colorScheme="orange"
        size="lg"
        isLoading={loading}
        onClick={activateAccount}>
        Activate Account
      </Button>
    </div>
  );
}

export default ActivationPage;
