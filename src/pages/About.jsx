import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Award, 
  Users, 
  Target, 
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const About = () => {
  const [showMap, setShowMap] = useState(false);
  const stats = [
    { number: "10+", label: "Years of Experience", icon: Award },
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "500+", label: "Products Available", icon: Target },
    { number: "24/7", label: "Customer Support", icon: Heart }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our products. Every item in our store is carefully selected to meet the highest standards.",
      icon: Award
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority. We go above and beyond to ensure you have the best shopping experience.",
      icon: Heart
    },
    {
      title: "Community Focus",
      description: "We're proud to be part of the Nanglebhare community and strive to contribute positively to our local area.",
      icon: Users
    },
    {
      title: "Reliability",
      description: "You can count on us for consistent service, fair prices, and reliable products that you can trust.",
      icon: Target
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Store Founded",
      description: "Dhakal Multi Store was established in Nanglebhare with a vision to serve the local community."
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Expanded our product range to include electric items and hardware products."
    },
    {
      year: "2018",
      title: "Petroleum Services",
      description: "Added petroleum products and services to meet the growing needs of our customers."
    },
    {
      year: "2020",
      title: "Digital Presence",
      description: "Launched our online presence to better serve our customers in the digital age."
    },
    {
      year: "2024",
      title: "Modern Store",
      description: "Completely renovated and modernized our store to provide an even better shopping experience."
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
              About Dhakal Multi Store
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in Nanglebhare for over a decade. We provide quality products 
              and exceptional service to meet all your daily needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2014, Dhakal Multi Store began as a small family business with a simple mission: 
                  to provide quality products and excellent service to the people of Nanglebhare.
                </p>
                <p>
                  What started as a modest grocery store has grown into a comprehensive multi-store serving 
                  the diverse needs of our community. From daily groceries to hardware, electric items, 
                  petroleum products, and agricultural supplies, we've expanded our offerings to become 
                  your one-stop shop.
                </p>
                <p>
                  Over the years, we've built strong relationships with our customers, suppliers, and 
                  the local community. Our commitment to quality, fair pricing, and customer satisfaction 
                  has made us a trusted name in Nanglebhare.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Nanglebhare 01 Nanglebhare , Kathmandu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+977 9840566159</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@dhakalmultistore.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-8 h-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Hours</h3>
                      <p className="text-gray-600">6:00 AM - 8:00 PM (Daily)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Our Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These numbers reflect our commitment to serving the community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg mb-4 inline-block">
                  <stat.icon className="w-12 h-12 text-primary-600 mx-auto" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="bg-primary-100 p-4 rounded-full w-fit mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of growth and community service
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Visit Our Store Today
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Experience the difference that quality products and exceptional service can make. 
              We look forward to serving you!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              onClick={() => setShowMap(true)}
            >
              Get Directions
            </motion.button>
      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl shadow-lg p-6 relative max-w-2xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowMap(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505.019185164928!2d85.53057401190677!3d27.764670176050362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0184c86ad069%3A0xfa9938efa1de08dd!2sDhakal%20Multi%20Store!5e1!3m2!1sen!2snp!4v1755963995461!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: '1px solid #e5e7eb', width: '100%', height: '450px', borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dhakal Multi Store Location"
            ></iframe>
          </div>
        </div>
      )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
