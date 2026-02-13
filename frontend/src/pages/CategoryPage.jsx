import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import { products, categories } from "../data/products";

const CategoryPage = () => {
  const { categoryId } = useParams();

  // Robust fallback: if category definition is missing, create one dynamically
  // This handles cases where category keys might differ from URL params
  let category = categories[categoryId];

  if (!category) {
    category = {
      id: categoryId,
      title: categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace('-', ' '),
      subtitle: "Curated frequencies for your journey"
    };
  }

  // Filter products matching the category ID
  const categoryProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Category Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 capitalize">
            {category.title}
          </h1>
          <p className="text-xl text-gray-600">{category.subtitle}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.length > 0 ? (
            categoryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-20 bg-gray-50 rounded-3xl">
              <p className="text-xl">No products found in this category.</p>
              <p className="text-sm mt-2 opacity-60">Category ID: {categoryId}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
