import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/ProductCard';
import { products, categories } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products by category only
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesCategory;
    });

    // Sort by name by default
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [selectedCategory]);

  return (
    <Layout>
      <Helmet>
        <title>Products - Dhakal Multi Store</title>
        <meta name="description" content="Browse our wide range of products including groceries, electric items, hardware, petroleum products, pesticides, and seasonal plant seeds." />
        <meta name="keywords" content="products, groceries, electric items, hardware, petroleum, pesticides, seeds, Dhakal Multi Store" />
        <meta property="og:title" content="Products - Dhakal Multi Store" />
        <meta property="og:description" content="Browse our wide range of products including groceries, electric items, hardware, petroleum products, pesticides, and seasonal plant seeds." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dhakalmultistore.com.np/products" />
        <link rel="canonical" href="https://dhakalmultistore.com.np/products" />
      </Helmet>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover our wide range of quality products for all your daily needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
