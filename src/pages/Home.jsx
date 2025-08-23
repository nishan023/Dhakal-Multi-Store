
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Truck, 
  Shield, 
  Star, 
  ArrowRight,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  const features = [
    {
      icon: ShoppingBag,
      title: "Wide Product Range",
      description: "From groceries to hardware, we have everything you need under one roof."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service to your doorstep."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All our products are carefully selected for the best quality."
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority with excellent service."
    }
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "500+", label: "Products Available" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Dhakal Multi Store - Quality Products in Nanglebhare</title>
        <meta name="description" content="Your trusted source for groceries, electric items, hardware, petroleum products, pesticides, and seasonal plant seeds in Nanglebhare, Nepal." />
        <meta name="keywords" content="Dhakal Multi Store, multi store Nepal, Nanglebhare store, groceries, hardware store, electric items, Nanglebhare  shop" />
        <meta property="og:title" content="Dhakal Multi Store - Quality Products in Nanglebhare" />
        <meta property="og:description" content="Your trusted source for groceries, electric items, hardware, petroleum products, pesticides, and seasonal plant seeds in Nanglebhare, Nepal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dhakalmultistore.com.np/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dhakal Multi Store - Quality Products in Nanglebhare" />
        <meta name="twitter:description" content="Your trusted source for groceries, electric items, hardware, petroleum products, pesticides, and seasonal plant seeds in Nanglebhare, Nepal." />
        <link rel="canonical" href="https://dhakalmultistore.com.np/" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="container-custom px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight">
                Your Trusted
                <span className="block text-accent-400">Multi Store</span>
                in Nanglebhare 
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Quality products, excellent service, and unbeatable prices. 
                Your one-stop shop for all your daily needs in Nanglebhare .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-accent-400" />
                    <span className="text-lg">+977 9840566159</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-accent-400" />
                    <span className="text-lg">Nanglebhare, Shankharapur 01 </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-accent-400" />
                    <span className="text-lg">6:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Why Choose Dhakal Multi Store?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional service and quality products to meet all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: index * 0.02 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg mb-4 inline-block">
                  <feature.icon className="w-12 h-12 text-primary-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, delay: index * 0.02 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular products that customers love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: index * 0.02 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="text-center"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                View All Products
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Ready to Shop?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Visit our store today and experience the best shopping experience in Nanglebhare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-secondary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Get Directions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
