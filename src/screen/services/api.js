import axios from "axios";


// Fetch products from backend
export const fetchProducts = async () => {
  try {
    const token = localStorage.getItem("token"); // ✅ Retrieve token from localStorage

    const response = await axios.get(`${process.env.REACT_APP_URL}products/list`, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Attach token in the request headers
        "Content-Type": "application/json",
      },
    });


    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

