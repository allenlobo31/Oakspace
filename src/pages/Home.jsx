import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import ProductCard from '../Components/ProductCard';
import IntroImage from '../Components/IntroImage';
import IntroVideo from '../Components/IntroVideo';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShopByCategory from '../Components/ShopByCategory';

const Home = () => {
  const { products } = useApp();
  
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);
  
  // Get products by category for showcase
  const livingRoomProducts = products.filter(p => p.category === 'Living Room').slice(0, 2);
  const bedroomProducts = products.filter(p => p.category === 'Bedroom').slice(0, 2);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with existing components */}
      <IntroImage />

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that
            combine style, comfort, and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-[#241e19]  text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl transform"
          >
            <span>View All Products</span>
            <ArrowForwardIcon />
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <IntroVideo />

      {/* Categories Showcase */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Find the perfect furniture for every room in your home
            </p>
          </div>

          <div className="flex flex-row gap-4 overflow-x-auto scrollbar-none">
            {/* Living Room Section */}
            <ShopByCategory
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Living Room"
              title="Living Room"
              link="/products"
            />

            {/* Bedroom Section */}
            <ShopByCategory
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Bedroom"
              title="Bedroom"
              link="/products"
            />

            {/* Dining Room Section */}
            <ShopByCategory
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Dining Room"
              title="Dining Room"
              link="/products"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose OakSpace?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <WorkspacePremiumIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                All our furniture is crafted with premium materials and comes
                with a satisfaction guarantee.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <LocalShippingIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable delivery service to get your furniture to you
                as soon as possible.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <SupportAgentIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our team of furniture experts is here to help you find the
                perfect pieces for your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-gradient-to-r from-[#f5e6c5] via-[#ecd9b2] to-[#dec8a0]">
        <img
          src="https://b3359817.smushcdn.com/3359817/wp-content/uploads/2021/04/zenhit4.jpg?lossy=2&strip=1&webp=1"
          className="object-cover w-[430px] h-[550px] md:w-full"
        />
        <div className="absolute top-10 md:top-25 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Stay Updated with Our Latest Collections
          </h2>
          <p className="text-white text-lg font-bold md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our newsletter to get exclusive access to new arrivals, design
            inspirations, and special offers — straight to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 font-medium shadow-lg placeholder-white
                   focus:ring-2 focus:ring-white focus:outline-none border border-white/50 bg-white/30 backdrop-blur-sm
                   transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-white text-black px-10 py-4 rounded-xl font-semibold shadow-xl 
                   hover:bg-blue-50 hover:scale-105 hover:shadow-2xl 
                   transition-all duration-300 transform active:scale-100"
            >
              Subscribe
            </button>
          </form>

          <p className="text-white italic text-sm mt-6">
            We care about your privacy — unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
