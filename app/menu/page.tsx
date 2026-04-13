"use client"
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("espresso");

  const categories = [
    { id: "espresso", name: "Espresso" },
    { id: "specialty", name: "Specialty Coffee" },
    { id: "cold", name: "Cold Drinks" },
    { id: "food", name: "Food & Snacks" },
    { id: "dessert", name: "Dessert" },
  ];

  const menuItems = {
    espresso: [
      {
        name: "Espresso",
        description: "Shot espresso kuat dan tahan lama",
        price: "Rp 20.000",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Double Espresso",
        description: "2 shot espresso yang kuat",
        price: "Rp 30.000",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Americano",
        description: "Espresso dengan air panas",
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Macchiato",
        description: "Espresso dengan sedikit susu",
        price: "Rp 28.000",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
    ],
    specialty: [
      {
        name: "Cappuccino",
        description: "Espresso dengan foam susu creamy",
        price: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Latte",
        description: "Espresso dengan susu hangat dan microfoam",
        price: "Rp 32.000",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Mocha",
        description: "Perpaduan espresso, coklat, dan susu",
        price: "Rp 38.000",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Caramel Macchiato",
        description: "Macchiato dengan sirup karamel hangat",
        price: "Rp 40.000",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
    ],
    cold: [
      {
        name: "Iced Coffee",
        description: "Kopi dingin dengan es batu",
        price: "Rp 28.000",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Iced Latte",
        description: "Latte dingin yang menyegarkan",
        price: "Rp 32.000",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Cold Brew",
        description: "Kopi yang diseduh dingin selama berjam-jam",
        price: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Iced Cappuccino",
        description: "Cappuccino dengan es krim di atas",
        price: "Rp 38.000",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba20d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
    ],
    food: [
      {
        name: "Croissant",
        description: "Pastry berkrim yang lezat dan renyah",
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Sandwich Tuna",
        description: "Sandwis premium dengan tuna segar",
        price: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1541619227-fc93999b97f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Toast Cheese",
        description: "Roti panggang dengan keju mozzarella",
        price: "Rp 30.000",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Salad Segar",
        description: "Salad organik dengan dressing pilihan",
        price: "Rp 38.000",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
    ],
    dessert: [
      {
        name: "Chocolate Cake",
        description: "Kue coklat lembut dengan frosting premium",
        price: "Rp 45.000",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Tiramisu",
        description: "Dessert Italia klasik yang lezat",
        price: "Rp 40.000",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Cheesecake",
        description: "Kue keju dengan rasa creamy premium",
        price: "Rp 42.000",
        image: "https://images.unsplash.com/photo-1533134242443-742c7f84e58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Brownie",
        description: "Brownies coklat dengan tekstur yang sempurna",
        price: "Rp 28.000",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
      },
    ],
  };

  const currentCategory = menuItems[selectedCategory as keyof typeof menuItems] || menuItems.espresso;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-amber-900/10 to-orange-900/5 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center text-amber-950">
          <div>
            <h1 className="section-title text-4xl md:text-6xl font-bold mb-4">OUR MENU</h1>
            <p className="text-lg md:text-xl text-amber-900/70">Jelajahi koleksi kopi dan makanan pilihan kami</p>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="border-t border-b border-amber-200/50 py-3 my-2">
        <div className="flex justify-center text-amber-300/40 text-lg">✧ ✧ ✧</div>
      </div>

      {/* Menu Section */}
      <section className="py-12 px-4 border-t border-amber-200/30">
        <div className="container mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 pb-8 border-b border-amber-200/30">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 font-medium transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? "bg-amber-100/80 text-amber-900/90 border-amber-300/60"
                    : "bg-orange-50/30 text-amber-700/80 border-amber-200/40 hover:bg-orange-100/30 hover:border-amber-200/60"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.map((item, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden transition-all duration-300 group border-2 border-amber-200/50 hover:border-amber-300/70"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-orange-100/15">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-5 border-t-2 border-amber-200/30">
                  <h3 className="text-lg font-bold text-amber-950/90 mb-2">{item.name}</h3>
                  <p className="text-sm text-amber-800/60 mb-4">{item.description}</p>
                  <div className="h-px bg-amber-200/30 mb-4"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-800/80">{item.price}</span>
                    <button className="flex items-center gap-2 bg-amber-100/60 hover:bg-amber-100 text-amber-900/80 px-4 py-2 font-medium transition-colors duration-300 border border-amber-300/60">
                      <FaShoppingCart className="text-sm" />
                      <span className="hidden sm:inline text-sm">Pesan</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="border-t border-b border-amber-200/50 py-3 my-6">
        <div className="flex justify-center text-amber-300/40 text-lg">✧ ✧ ✧</div>
      </div>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-amber-50/30 border-t-2 border-b-2 border-amber-200/50">
        <div className="container mx-auto text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 text-amber-950/90">Tidak Menemukan Favorit Anda?</h2>
          <p className="text-lg mb-8 text-amber-900/65">Hubungi kami untuk menu custom atau request khusus</p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-100/50 text-amber-900/80 px-8 py-3 font-bold hover:bg-amber-100/70 transition-colors duration-300 border-2 border-amber-300/60"
          >
            Chat WhatsApp Kami
          </a>
        </div>
      </section>
    </main>
  );
}
