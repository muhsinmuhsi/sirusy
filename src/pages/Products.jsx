import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../api";
import { Plus } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        console.log(res.data, "api response ");
        setProducts(res.data.data);
        setFilteredProducts(res.data.data); // initial state
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Price filter
    if (minPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(minPrice)
      );
    }
    if (maxPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, minPrice, maxPrice, products]);

  // Get unique categories from the product list
  const categories = ["all", ...new Set(products?.map((p) => p.category))];

  return (
    <div className="p-2">
      <h1 data-aos="fade-up" className="text-xl font-serif font-bold mt-6">
        Products
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/6"
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/6"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center">
            No products match your criteria.
          </p>
        ) : (
          filteredProducts.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              onClick={() => navigate(`/product/${data._id}`)}
              className="shadow-md w-44 h-80 p-3 rounded flex flex-col justify-between cursor-pointer"
            >
              {/* Image */}
              <div className="flex justify-center border rounded">
                <img
                  className="rounded h-44 object-fill"
                  src={
                    data.images && data.images.length > 0
                      ? data.images[0]
                      : "https://via.placeholder.com/150"
                  }
                  alt={data.title}
                />
              </div>

              {/* Details */}
              <div className="flex flex-col items-center mt-2">
                <h1 className="text-center font-medium">{data.title}</h1>
                <p className="text-sm text-gray-600">₹{data.price}</p>
                <button className="border border-black px-2 py-1 rounded-lg hover:scale-105 transition-all mt-2">
                  <Plus />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
