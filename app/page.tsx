"use client"
import Link from "next/link";
import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaClock, FaShoppingCart } from "react-icons/fa";
import AnimatedWrapper from "./components/AnimatedWrapper";
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portraitSlides = [
    [
      {
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Arabica",
        description: "Biji kopi premium"
      },
      {
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Robusta",
        description: "Kekuatan dan aroma"
      },
      {
        image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Espresso",
        description: "Roast gelap khas"
      },
      {
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Single Origin",
        description: "Karakter unik"
      }
    ],
    [
      {
        image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Cappuccino",
        description: "Foam susu creamy"
      },
      {
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Mocha",
        description: "Coklat dan kopi"
      },
      {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Iced Coffee",
        description: "Kopi es menyegarkan"
      },
      {
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        title: "Cold Brew",
        description: "Seduhan dingin"
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portraitSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portraitSlides.length) % portraitSlides.length);
  };

  const coffeeCollection = [
    {
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Arabica Beans",
      description: "Biji kopi premium pilihan",
      price: "Rp 45.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Arabica Beans"
    },
    {
      image:
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Espresso Roast",
      description: "Roast gelap khas Italia",
      price: "Rp 38.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Espresso Roast"
    },
    {
      image:
        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Latte Art",
      description: "Seni susu kopi klasik",
      price: "Rp 42.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Latte Art"
    },
    {
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Cold Brew",
      description: "Kopi dingin menyegarkan",
      price: "Rp 40.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Cold Brew"
    },
    {
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Coffee Beans",
      description: "Biji kopi segar harian",
      price: "Rp 35.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Coffee Beans"
    },
    {
      image:
        "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Cappuccino",
      description: "Foam susu creamy premium",
      price: "Rp 37.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Cappuccino"
    },
    {
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Mocha",
      description: "Perpaduan coklat dan kopi",
      price: "Rp 43.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Mocha"
    },
    {
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Iced Coffee",
      description: "Kopi es segar alami",
      price: "Rp 32.000",
      whatsappText: "Halo JJ Coffee, saya mau pesan Iced Coffee"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image Section - Portrait Sections Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 flex h-full transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {portraitSlides.map((slideGroup, groupIndex) => (
            <div key={groupIndex} className="flex w-full h-full flex-shrink-0">
              {slideGroup.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex-1 relative overflow-hidden group cursor-pointer">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat brightness-50 group-hover:brightness-100 transition-all duration-500"
                    style={{
                      backgroundImage: `url('${slide.image}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pb-6">
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="relative text-center text-white z-10">
                      <h3 className="text-lg md:text-xl font-bold mb-1">{slide.title}</h3>
                      <p className="text-xs md:text-sm opacity-90">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 transition-all duration-300 group z-10 border border-white/40"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 transition-all duration-300 group z-10 border border-white/40"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {portraitSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="text-center text-white">
         <h1 className="font-sans text-4xl md:text-6xl font-semibold tracking-tight text-white hover:text-slate-300 transition-all duration-200 mb-4 drop-shadow-lg inline-block">
  JJ Coffee
</h1>
            <p className="text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto px-4">
              Pengalaman kopi terbaik dengan biji kopi pilihan
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Image Gallery */}
      <section className="py-16 px-4 border-t-2 border-b-2 border-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 pb-8 border-b-2 border-black/10">
            <AnimatedWrapper direction="down">
              <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-900 text-center">
                Koleksi Kopi Kami
              </h2>
            </AnimatedWrapper>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coffeeCollection.map((coffee, index) => (
              <AnimatedWrapper key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <div
                className="aspect-square w-full h-full overflow-hidden relative group cursor-pointer border-2 border-black/30 hover:border-black/50"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-100 group-hover:brightness-110 transition-all duration-300"
                  style={{ backgroundImage: `url('${coffee.image}')` }}
                />
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="relative p-4 text-white pb-16">
                    <a
                      href={`https://wa.me/6281234567890?text=${encodeURIComponent(coffee.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-4 bottom-4 flex items-center gap-2 text-[11px] opacity-90"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                      <FaWhatsapp className="w-4 h-4" />
                    </a>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-bold text-sm mb-1">{coffee.title}</h3>
                      <p className="text-xs text-gray-200 mb-2">{coffee.description}</p>
                      <p className="text-xs font-semibold text-slate-300 mb-3">{coffee.price}</p>
                      <a
                        href={`https://wa.me/6281234567890?text=${encodeURIComponent(coffee.whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-slate-600 hover:bg-slate-700 text-white text-xs font-semibold px-3 py-1.5 transition-all duration-200 border border-black"
                      >
                        Beli
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Our Menu Section */}
      <section className="py-16 px-4 bg-slate-50 border-t-2 border-b-2 border-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            {/* Image Left */}
            <AnimatedWrapper direction="left" className="flex-1 relative order-2 md:order-1">
              <div className="aspect-video overflow-hidden border-2 border-black/30">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')"
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Text Right */}
            <AnimatedWrapper direction="right" delay={0.2} className="flex-1 text-center md:text-left order-1 md:order-2">
              <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Menu
              </h2>
              <div className="w-12 h-px bg-amber-400 mb-6"></div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Nikmati koleksi menu kopi premium dan makanan ringan pilihan kami. Setiap produk dibuat dengan cermat menggunakan biji kopi terbaik dan bahan berkualitas tinggi untuk memberikan pengalaman rasa yang tak terlupakan bagi setiap tegukan.
              </p>
              <p className="text-slate-500 text-sm mb-8">
                Dari espresso klasik hingga specialty coffee modern, kami menyediakan berbagai pilihan untuk memenuhi preferensi selera Anda. Temukan favorit baru Anda hari ini.
              </p>
              <Link
                href="/menu"
                className="inline-block bg-slate-900 text-white px-8 py-3 font-medium hover:bg-slate-800 transition-colors duration-200 border-2 border-slate-900"
              >
                Lihat Menu Lengkap →
              </Link>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white border-t-2 border-b-2 border-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 pb-8 border-b-2 border-black/10">
            <AnimatedWrapper direction="down">
              <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-900 text-center">
                Kunjungi Kami
              </h2>
            </AnimatedWrapper>
            <AnimatedWrapper direction="up" delay={0.2}>
              <p className="text-slate-600 text-center max-w-2xl mt-6">Temukan kami di lokasi-lokasi strategis di kota. Kunjungi toko kami yang nyaman dan rasakan pengalaman kopi yang luar biasa.</p>
            </AnimatedWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <AnimatedWrapper direction="left" className="overflow-hidden h-96 md:h-[450px] border-2 border-black/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.932490004812!2d98.7639318!3d3.5913452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137ad944d411b%3A0xe5865f45d927a532!2sJJ%20Coffee!5e0!3m2!1sid!2sid!4v1776049953867!5m2!1sid!2sid" width="100%" height="100%" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </AnimatedWrapper>

            {/* Location Info */}
            <AnimatedWrapper direction="right" delay={0.2} className="space-y-6">
              <div className="p-6 bg-white border-l-4 border-black hover:border-slate-800 transition-colors duration-300 border-r-2 border-t-2 border-b-2 border-black/20">
                <h3 className="text-lg font-bold text-slate-900 mb-2">JJ Coffee - Pusat</h3>
                <p className="text-slate-600 mb-3">Jl. Makmur Pasar 7 Tembung</p>
                <p className="text-sm text-slate-500 mb-3">Senin - Minggu: 08:00 - 21:00</p>
                <a href="https://wa.me/6281234567890" className="text-slate-600 font-medium hover:text-slate-700 transition-colors">Hubungi Kami →</a>
              </div>

              <div className="p-6 bg-white border-l-4 border-black hover:border-slate-800 transition-colors duration-300 border-r-2 border-t-2 border-b-2 border-black/20">
                <h3 className="text-lg font-bold text-slate-900 mb-2">JJ Coffee - Cabang</h3>
                <p className="text-slate-600 mb-3">Jl. Makmur Pasar 7 Tembung</p>
                <p className="text-sm text-slate-500 mb-3">Senin - Minggu: 09:00 - 22:00</p>
                <a href="https://wa.me/6281234567890" className="text-slate-600 font-medium hover:text-slate-700 transition-colors">Hubungi Kami →</a>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 px-4 bg-white border-b-2 border-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 pb-8 border-b-2 border-black/10">
            <AnimatedWrapper direction="down">
              <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-900 text-center">
                Hubungi Kami
              </h2>
            </AnimatedWrapper>
            <AnimatedWrapper direction="up" delay={0.2}>
              <p className="text-slate-600 text-center max-w-2xl mt-6">Kami siap membantu Anda. Hubungi kami melalui berbagai channel yang tersedia.</p>
            </AnimatedWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <AnimatedWrapper direction="up" delay={0.1}>
            <div className="h-full p-6 bg-white border-2 border-black/20 hover:border-black/40 transition-all duration-300 cursor-pointer group">
              <div className="text-slate-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <MdEmail />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 pb-2 border-b border-black/30">
                Email
              </h3>
              <p className="text-slate-600 text-sm mb-4">Kirim pertanyaan Anda melalui email</p>
              <a href="mailto:info@jjcoffee.com" className="text-slate-600 font-medium hover:text-slate-700 transition-colors">
                info@jjcoffee.com →
              </a>
            </div>
            </AnimatedWrapper>

            {/* WhatsApp */}
            <AnimatedWrapper direction="up" delay={0.2}>
            <div className="h-full p-6 bg-white border-2 border-black/20 hover:border-black/40 transition-all duration-300 cursor-pointer group">
              <div className="text-slate-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 pb-2 border-b border-black/30">
                WhatsApp
              </h3>
              <p className="text-slate-600 text-sm mb-4">Chat langsung dengan customer service</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-medium hover:text-slate-700 transition-colors">
                +62 812 3456 7890 →
              </a>
            </div>
            </AnimatedWrapper>

            {/* Phone */}
            <AnimatedWrapper direction="up" delay={0.3}>
            <div className="h-full p-6 bg-white border-2 border-black/20 hover:border-black/40 transition-all duration-300 cursor-pointer group">
              <div className="text-slate-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <MdPhone />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 pb-2 border-b border-black/30">
                Telepon
              </h3>
              <p className="text-slate-600 text-sm mb-4">Hubungi kami secara langsung</p>
              <a href="tel:021-555-0123" className="text-slate-600 font-medium hover:text-slate-700 transition-colors">
                (021) 555-0123 →
              </a>
            </div>
            </AnimatedWrapper>

            {/* Address */}
            <AnimatedWrapper direction="up" delay={0.4}>
            <div className="h-full p-6 bg-white border-2 border-black/20 hover:border-black/40 transition-all duration-300 cursor-pointer group">
              <div className="text-slate-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <MdLocationOn />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 pb-2 border-b border-black/30">
                Lokasi
              </h3>
              <p className="text-slate-600 text-sm mb-4">Kunjungi cabang terdekat kami</p>
              <p className="text-slate-600 font-medium text-sm">
                Jl. Makmur Pasar 7 Tembung →
              </p>
            </div>
            </AnimatedWrapper>

            {/* Operating Hours */}
            <AnimatedWrapper direction="up" delay={0.5} className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="w-full p-6 bg-white border-2 border-black/20 hover:border-black/40 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="text-slate-600 text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaClock />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 pb-2 border-b border-black/30 w-fit">
                    Jam Operasional
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-slate-600 text-sm"><span className="text-slate-700 font-medium">Senin - Jumat:</span> 08:00 - 21:00 WIB</p>
                      <p className="text-slate-600 text-sm mt-1"><span className="text-slate-700 font-medium">Sabtu:</span> 07:00 - 22:00 WIB</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm"><span className="text-slate-700 font-medium">Minggu:</span> 08:00 - 20:00 WIB</p>
                      <p className="text-slate-600 text-sm mt-1"><span className="text-slate-700 font-medium">Hari Libur:</span> 09:00 - 19:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
