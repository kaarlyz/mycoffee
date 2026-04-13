import AnimatedWrapper from "../components/AnimatedWrapper";

const About = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <AnimatedWrapper direction="down">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-8 border-b-2 border-black/10 pb-4">
            Tentang JJ Coffee
          </h1>
        </AnimatedWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <AnimatedWrapper direction="left" delay={0.2}>
            <div className="aspect-square bg-slate-200 border-2 border-black/20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          </AnimatedWrapper>
          
          <AnimatedWrapper direction="right" delay={0.4}>
            <h2 className="text-2xl font-bold mb-4 text-slate-800">Cerita Kami</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              JJ Coffee bermula dari kecintaan kami terhadap secangkir kopi yang sempurna. Setiap biji kopi yang kami sajikan dipilih dengan cermat dari petani kopi lokal terbaik di seluruh nusantara.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Misi kami adalah menyajikan lebih dari sekadar minuman, melainkan sebuah pengalaman yang menghubungkan orang-orang melalui kehangatan kopi.
            </p>
          </AnimatedWrapper>
        </div>
      </div>
    </main>
  );
};

export default About;