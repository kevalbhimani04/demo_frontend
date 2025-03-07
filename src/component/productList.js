import { useEffect, useState } from "react";
import { fetchProducts } from "../screen/services/api";
import './productList.css'
import { defaultImage } from "../screen/assets";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        alert("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <h2>Product Listing</h2>
      <div className="productClass">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product._id}>
                <img
                  src={product.image || defaultImage}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <p className="p-des">{product.description}</p>
                  {/* <button className="view-btn">View Details</button> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );

};

export default ProductList;
