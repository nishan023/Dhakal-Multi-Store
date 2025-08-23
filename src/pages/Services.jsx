import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Zap, 
  Wrench, 
  Fuel, 
  Leaf, 
  Sprout,
  Truck,
  Phone,
  Clock,
  Star
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Groceries & Daily Essentials",
      description: "Complete range of groceries including rice, oil, sugar, spices, and all daily essentials. We source the best quality products to ensure your family gets the finest ingredients.",
      features: [
        "Fresh and quality groceries",
        "Wide variety of products",
        "Competitive prices",
        "Regular stock updates"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Electric Items & Electronics",
      description: "Comprehensive selection of electrical items including LED bulbs, extension cords, switches, and other electrical accessories for your home and business needs.",
      features: [
        "Energy-efficient products",
        "Quality electrical items",
        "Safety certified products",
        "Professional advice available"
      ],
      color: "bg-yellow-500"
    },
    {
      icon: Wrench,
      title: "Hardware & Tools",
      description: "Professional grade hardware and tools for construction, repair, and DIY projects. From hammers to complete tool sets, we have everything you need.",
      features: [
        "Professional grade tools",
        "Durable hardware items",
        "Complete tool sets",
        "Expert recommendations"
      ],
      color: "bg-gray-600"
    },
    {
      icon: Fuel,
      title: "Petroleum Products",
      description: "Reliable supply of petroleum products including petrol, diesel, and safe storage containers. We ensure quality fuel for your vehicles and machinery.",
      features: [
        "Quality fuel supply",
        "Safe storage containers",
        "Reliable delivery",
        "Competitive fuel prices"
      ],
      color: "bg-green-600"
    },
    {
      icon: Leaf,
      title: "Pesticides & Agricultural Supplies",
      description: "Effective pesticides and agricultural supplies to protect your crops and ensure healthy plant growth. We provide products suitable for various farming needs.",
      features: [
        "Effective pest control",
        "Safe for crops",
        "Multiple application methods",
        "Expert guidance available"
      ],
      color: "bg-green-500"
    },
    {
      icon: Sprout,
      title: "Seasonal Plant Seeds",
      description: "High-quality seeds for various seasonal plants including vegetables, flowers, and herbs. Perfect for home gardening and commercial farming.",
      features: [
        "High germination rate",
        "Seasonal varieties",
        "Organic options available",
        "Growing tips provided"
      ],
      color: "bg-emerald-500"
    }
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Convenient home delivery service for all your purchases. We deliver to your doorstep with care and punctuality.",
      features: ["Same day delivery", "Careful handling", "Flexible timing", "No extra charges"]
    },
    {
      icon: Phone,
      title: "Phone Orders",
      description: "Place your orders over the phone and we'll have them ready for pickup or delivery. Quick and convenient service.",
      features: ["Quick order processing", "Order confirmation", "Ready for pickup", "Delivery options"]
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "We're open from 6:00 AM to 8:00 PM daily, ensuring you can shop at your convenience.",
      features: ["Early morning hours", "Late evening service", "7 days a week", "Holiday availability"]
    },
    {
      icon: Star,
      title: "Customer Support",
      description: "Dedicated customer support to help you find the right products and answer all your questions.",
      features: ["Expert advice", "Product recommendations", "Problem resolution", "Friendly service"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="container-custom px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for all your daily needs. From groceries to hardware, 
              we provide quality products and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of products and services designed to meet all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${service.color} p-6 text-white`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond products, we offer convenient services to enhance your shopping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Star className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">Every product we offer is carefully selected and tested to ensure the highest quality standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Convenient Hours</h3>
                    <p className="text-gray-600">Open from 6:00 AM to 8:00 PM daily, making it easy to shop at your convenience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                    <p className="text-gray-600">Our knowledgeable staff is always ready to help you find the right products and provide expert advice.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Truck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h3>
                    <p className="text-gray-600">Consistent, reliable service that you can count on for all your daily needs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-lg mb-6 text-gray-100">
                  Visit our store today and experience the difference that quality products and exceptional service can make.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+977 9840566159</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span>6:00 AM - 8:00 PM (Daily)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Experience Our Services Today
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              From groceries to hardware, we have everything you need. Visit us and discover why we're the trusted choice in Nanglebhare.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Visit Our Store
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
