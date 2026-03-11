import { ODALAR } from "../constants";
import "../css/Odalar.css";

function OdaKarti({ oda }) {
  return (
    <div className="oda-karti kart">
      <div className="oda-karti__gorsel-wrap">
        <img src={oda.gorsel} alt={oda.ad} className="oda-karti__gorsel" />
        <span className={`oda-karti__durum ${oda.dolu ? "durum-dolu" : "durum-bos"}`}>
          {oda.dolu ? "✕ Dolu" : "✓ Müsait"}
        </span>
      </div>
      <div className="oda-karti__icerik">
        <h3 className="oda-karti__ad">{oda.ad}</h3>
        <p className="oda-karti__aciklama">{oda.aciklama}</p>
        <div className="oda-karti__taglar">
          {oda.ozellik.map((t) => (
            <span key={t} className="oda-karti__tag">{t}</span>
          ))}
        </div>
        <div className="oda-karti__alt">
          <div className="oda-karti__fiyat">
            <span className="oda-karti__fiyat-tl">₺ {oda.fiyat.toLocaleString("tr-TR")}</span>
            <span className="oda-karti__fiyat-gece">/gece</span>
          </div>
          <button
            className="btn btn-lacivert btn-sm"
            onClick={() => document.getElementById("rezervasyon")?.scrollIntoView({ behavior: "smooth" })}
          >
            Detayları Gör
          </button>
        </div>
      </div>
    </div>
  );
}

function Odalar() {
  return (
    <section className="bolum odalar" id="odalar">
      <div className="bolum__ic">
        <div className="odalar__ust">
          <div>
            <h2 className="bolum__baslik">Konforlu<br />Odalarımız</h2>
          </div>
          <p className="odalar__aciklama bolum__aciklama">
            Her biri ayrılmış odalarda rahat ve huzurlu bir konaklama deneyimi
          </p>
        </div>
        <div className="odalar__grid">
          {ODALAR.map((oda) => (
            <OdaKarti key={oda.id} oda={oda} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Odalar;
