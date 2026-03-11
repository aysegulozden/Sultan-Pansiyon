import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Bizim       from "./components/Bizim";
import Odalar      from "./components/Odalar";
import Hizmetler   from "./components/Hizmetler";
import Rezervasyon from "./components/Rezervasyon";
import Yorumlar    from "./components/Yorumlar";
import Iletisim    from "./components/Iletisim";
import SSS         from "./components/SSS";
import Footer      from "./components/Footer";
import { PANSIYON } from "./constants";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bizim />
      <Odalar />
      <Hizmetler />
      <Rezervasyon />
      <Yorumlar />
      <Iletisim />
      <SSS />
      <Footer />

      {/* Sabit WhatsApp butonu */}
      <a href={PANSIYON.whatsapp} target="_blank" rel="noreferrer" className="whatsapp-btn">
        <div className="whatsapp-btn__ikon">💬</div>
        Bizimle konuşun
      </a>
    </>
  );
}

export default App;
