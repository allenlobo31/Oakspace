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
import Footer from '../Components/Footer';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  const { products } = useApp();

  // Get featured products (safe guard if products is undefined)
  const featuredProducts = (products || []).slice(0, 8);

  const imageUrl =
    "https://w0.peakpx.com/wallpaper/21/908/HD-wallpaper-gold-marbel-marble.jpg";

  return (
    <div className="min-h-screen w-full flex flex-col bg-fixed">
      {/* Hero Section */}
      <IntroImage />

      {/* Video Section */}
      <div className="mt-8 md:mt-24 lg:mt-40 text-center text-black px-4">
         <h1 className=" md:text-5xl lg:text-6xl font-bold text-center text-4xl font-bold text-gray-800 my-4">
          Discover Our Latest Collection
        </h1>
        <div className="mx-auto w-full max-w-screen h-full">
          <IntroVideo />
        </div>
        
      </div>

      {/* Featured Products Section (Swiper loop) */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">Featured Products</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that
            combine style, comfort, and quality.
          </p>
        </div>

        <div className="mb-8">
          <Swiper
            spaceBetween={24}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="flex justify-center">
                <div className="w-full max-w-xs">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-[#241e19] text-white px-10 py-4 mb-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl transform"
          >
            <span>View All Products</span>
            <ArrowForwardIcon />
          </Link>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 my-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find the perfect furniture for every room in your home</p>
          </div>

          <div className="flex flex-row gap-4 overflow-x-auto scrollbar-none mt-4 px-2">
            <ShopByCategory
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1470&q=80"
              alt="Living Room"
              title="Living Room"
              link="/products"
            />

            <ShopByCategory
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1470&q=80"
              alt="Bedroom"
              title="Bedroom"
              link="/products"
            />

            <ShopByCategory
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1470&q=80"
              alt="Dining Room"
              title="Dining Room"
              link="/products"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="py-14 bg-cover bg-center bg-no-repeat"
        
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose OakSpace?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <WorkspacePremiumIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All our furniture is crafted with premium materials and comes with a satisfaction guarantee.</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <LocalShippingIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery service to get your furniture to you as soon as possible.</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow duration-300 ">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <SupportAgentIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-gray-600">Our team of furniture experts is here to help you find the perfect pieces for your home.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
