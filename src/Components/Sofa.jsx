import React from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

// Fallback Button and Badge if you don't have them:
const Button = ({ children, ...props }) => (
  <button {...props} className={"px-4 py-2 rounded border " + (props.className || "")}>{children}</button>
);
const Badge = ({ children, ...props }) => (
  <span {...props} className={"inline-block px-2 py-1 rounded bg-gray-200 text-xs " + (props.className || "")}>{children}</span>
);

export default function FurnitureShowcase() {
  const products = [
    {
      id: 1,
      name: "Faible 6-Piece U-Shaped White Performance Linen Standard Depth Sectional Sofa With Right Arm",
      price: "$7,194.00",
      image: "/white-u-sectional.png",
      colors: ["#f5f5f5", "#e5e5e5", "#d4d4d4", "#737373", "#404040"],
      isNew: true,
      moreSizes: true,
      hasCertification: true,
    },
    {
      id: 2,
      name: "Faible 4-Piece L-Shaped White Performance Linen Standard Depth Sectional Sofa With Right Arm",
      price: "$4,696.00",
      image: "/white-l-shaped-sectional.png",
      colors: ["#f5f5f5", "#e5e5e5", "#d4d4d4", "#737373", "#404040"],
      isNew: true,
      moreSizes: true,
      hasCertification: true,
    },
    {
      id: 3,
      name: "Faible White Performance Linen Standard Depth Armless Chair",
      price: "$1,249.00",
      image: "/modern-white-armless-chair.png",
      colors: ["#f5f5f5", "#e5e5e5", "#d4d4d4", "#737373", "#404040"],
      isNew: true,
      moreSizes: true,
      hasCertification: true,
    },
    {
      id: 4,
      name: "Faible 6-Piece U-Shaped White Performance Linen Standard Depth Sectional Sofa With Left Arm",
      price: "$7,194.00",
      image: "/white-u-sectional-left-arm.png",
      colors: ["#f5f5f5", "#e5e5e5", "#d4d4d4", "#737373", "#404040"],
      isNew: true,
      moreSizes: true,
      hasCertification: true,
    },
  ]

  const collections = [
    {
      name: "FAIBLE COLLECTION",
      image: "/white-modern-sectional.png",
    },
    {
      name: "DESEO COLLECTION",
      image: "/dark-navy-sectional-sofa.png",
    },
    {
      name: "LUMIS COLLECTION",
      image: "/light-gray-sectional-sofa.png",
    },
    {
      name: "AMBROISE COLLECTION",
      image: "/beige-tufted-sectional.png",
    },
    {
      name: "BRETT COLLECTION",
      image: "/olive-green-sectional.png",
    },
    {
      name: "FITZ COLLECTION",
      image: "/placeholder-tjys5.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Product Grid Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-[4/3]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  style={{ position: "absolute", inset: 0 }}
                />
                {product.moreSizes && (
                  <Badge className="absolute top-4 left-4 bg-white text-gray-700 hover:bg-white">
                    MORE SIZES AVAILABLE
                  </Badge>
                )}
                <Button className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-4 space-y-3">
                {/* Color Swatches */}
                <div className="flex items-center gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">+ more</span>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  {product.isNew && (
                    <Badge className="text-xs">
                      NEW
                    </Badge>
                  )}
                  <h3 className="text-sm font-medium text-gray-900 leading-tight">{product.name}</h3>
                  <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                  {product.hasCertification && (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-green-700">FSC</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collections Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">SOFA & SECTIONAL COLLECTIONS</h2>
          <p className="text-gray-600">65+ custom fabrics, delivery in as little as 4 weeks</p>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <Button>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {collections.map((collection, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-gray-50 rounded-lg overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wide">{collection.name}</h3>
            </div>
          ))}
        </div>

        {/* Featured Collection Detail */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img
                src="/placeholder.svg"
                alt="Faible Collection Sectional"
                className="object-cover w-full h-full"
                style={{ position: "absolute", inset: 0 }}
              />
              <Button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-gray-700">
                  {"Shown in Crypton"}
                  <sup>®</sup>
                  {" Performance Fabric, Snow"}
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">FAIBLE COLLECTION</h2>
              <p className="text-gray-600 mb-4">Designed by VUUE</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Oversized profile is perfect for lounging with family and friends without sacrificing style
              </p>
              <p className="text-gray-700 mb-6">
                Available in Sofa, Sectional & Armless Chair
                <br />
                25+ Fabrics
              </p>

              {/* Color Swatches */}
              <div className="flex items-center gap-2 mb-8">
                {["#f5f5f5", "#e5e5e5", "#d4d4d4", "#737373", "#404040"].map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">+ More</span>
              </div>

              <Button className="w-fit px-8 py-3 text-sm font-medium tracking-wide bg-transparent">
                SHOP FAIBLE COLLECTION (48)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


