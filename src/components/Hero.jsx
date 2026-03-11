import { PANSIYON } from "../constants";
import "./Hero.css";

function Hero() {
  const git = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="hero">
      {/* Arka plan fotoğrafı */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=85"
          alt="Sultan Pansiyon"
        />
        <div className="hero__overlay" />
      </div>

      {/* İçerik */}
      <div className="hero__ic">
        <div className="hero__icerik">
          <h1 className="hero__baslik">{PANSIYON.slogan}</h1>
          <p className="hero__aciklama">{PANSIYON.aciklama}</p>
          <button className="btn btn-turuncu hero__btn" onClick={() => git("rezervasyon")}>
            Hemen Rezervasyon Yap
          </button>

          {/* Alt bilgi kartları */}
          <div className="hero__bilgi-kartlar">
            <div className="hero__bilgi-kart">
              <span className="hero__bilgi-ikon">📍</span>
              <div>
                <div className="hero__bilgi-etiket">Konum</div>
                <div className="hero__bilgi-deger">{PANSIYON.konum}</div>
              </div>
            </div>
            <div className="hero__bilgi-kart">
              <span className="hero__bilgi-ikon">👨‍👩‍👧</span>
              <div>
                <div className="hero__bilgi-etiket">İşletme</div>
                <div className="hero__bilgi-deger">{PANSIYON.isletme}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
