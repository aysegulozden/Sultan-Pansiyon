import { useState } from "react";
import { SSS } from "../constants";
import "../css/SSS.css";

function SSSSorusu({ soru, cevap }) {
  const [acik, setAcik] = useState(false);

  return (
    <div className={`sss-item ${acik ? "sss-item--acik" : ""}`}>
      <button className="sss-item__soru" onClick={() => setAcik(!acik)}>
        <span>{soru}</span>
        <span className="sss-item__ikon">{acik ? "∧" : "∨"}</span>
      </button>
      {acik && <div className="sss-item__cevap">{cevap}</div>}
    </div>
  );
}

function SSSSayfasi() {
  return (
    <section className="bolum sss" id="sss">
      <div className="bolum__ic">
        <div className="sss__ust">
          <span className="bolum__etiket">SSS</span>
          <h2 className="bolum__baslik">Sıkça Sorulan Sorular</h2>
          <p className="bolum__aciklama">Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz</p>
        </div>

        <div className="sss__liste">
          {SSS.map((item, i) => (
            <SSSSorusu key={i} soru={item.soru} cevap={item.cevap} />
          ))}
        </div>

        <div className="sss__alt">
          <p>Başka birini mi var?</p>
          <button
            className="btn btn-turuncu"
            onClick={() => document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" })}
          >
            Bize Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
}

export default SSSSayfasi;
