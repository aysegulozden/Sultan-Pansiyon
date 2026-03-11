import { YORUMLAR } from "../constants";
import "../css/Yorumlar.css";

function YildizPuani({ puan }) {
  return (
    <div className="yildizlar">
      {Array(5).fill(null).map((_, i) => (
        <span key={i} className={i < puan ? "yildiz yildiz--dolu" : "yildiz"}>★</span>
      ))}
    </div>
  );
}

function Yorumlar() {
  return (
    <section className="bolum yorumlar" id="yorumlar">
      <div className="bolum__ic">
        <div className="yorumlar__ust">
          <span className="bolum__etiket">Yorumlar</span>
          <h2 className="bolum__baslik">Misafirlerimiz<br />Ne Diyor?</h2>
        </div>
        <div className="yorumlar__grid">
          {YORUMLAR.map((y, i) => (
            <div key={i} className="yorum-karti kart">
              <div className="yorum-karti__ust">
                <div className="yorum-karti__avatar">
                  {y.ad.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="yorum-karti__ad">{y.ad}</div>
                  <div className="yorum-karti__kullanici">{y.kullanici}</div>
                </div>
              </div>
              <p className="yorum-karti__metin">" {y.yorum} "</p>
              <YildizPuani puan={y.puan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Yorumlar;
