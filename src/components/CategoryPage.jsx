import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await api.get(`/products/category/${category}`);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  console.log(products,'this is filtered category');
  

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">{category} Products</h1>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} 
            onClick={() => navigate(`/product/${product._id}`)}
            className="border rounded-xl p-4 shadow hover:shadow-md transition">
              <img
              src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/150"
                  } alt={product.name} className="w-full h-48 object-contain rounded-md" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="font-bold mt-2">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
