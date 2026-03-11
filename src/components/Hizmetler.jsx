import { HIZMETLER } from "../constants";
import "./Hizmetler.css";

function Hizmetler() {
  return (
    <section className="bolum hizmetler" id="hizmetler">
      <div className="bolum__ic">
        <div className="hizmetler__ust">
          <span className="bolum__etiket">Neden Bizi Seçmelisiniz?</span>
          <h2 className="bolum__baslik">Size Sunduğumuz<br />Özel Hizmetler</h2>
          <p className="bolum__aciklama">Konforlu ve huzurlu bir tatil ihtiyacı için her şey Sultan Pansiyon'da</p>
        </div>
        <div className="hizmetler__grid">
          {HIZMETLER.map((h, i) => (
            <div key={i} className="hizmet-karti kart">
              <div className="hizmet-karti__ikon">{h.ikon}</div>
              <h3 className="hizmet-karti__baslik">{h.baslik}</h3>
              <p className="hizmet-karti__aciklama">{h.aciklama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hizmetler;
