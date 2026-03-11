import { PANSIYON } from "../constants";
import "./Bizim.css";

function Bizim() {
  return (
    <section className="bolum bizim" id="bizim">
      <div className="bolum__ic">
        <div className="bizim__grid">
          {/* Sol: Metin */}
          <div className="bizim__sol">
            <span className="bolum__etiket">Hikayemiz</span>
            <h2 className="bolum__baslik">{PANSIYON.ad} Ailesi</h2>
            <p className="bizim__aciklama">
              Yıllardır öğrencilerine sıcak ve samimi bir şekilde hizmet vermenin gururunu yaşıyor.
              Ailecek işletittiğimiz pansiyonumuzda, her misafirimizi evimizde ağırlar gibi karşılıyoruz.
              Deneyimli kadromuz ve konforlu odalarımızla muhteşem anılar biriktirmenize yardımcı olur.
            </p>

            <div className="bizim__gorsel-wrap">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
                alt="Pansiyon sahibi"
                className="bizim__gorsel"
              />
            </div>
          </div>

          {/* Sağ: İstatistik + özellikler */}
          <div className="bizim__sag">
            <div className="bizim__stat">
              <span className="bizim__stat-sayi">25+</span>
              <span className="bizim__stat-etiket">Yıldır Misafirlerimize<br />Hizmet Veriyoruz</span>
            </div>

            <div className="bizim__ozellikler">
              {[
                { ikon: "🛡️", baslik: "Güvenilir Hizmetler", aciklama: "Yıllardır sürdürdüğümüz kaliteli ve güvenilir hizmet anlayışı" },
                { ikon: "❤️", baslik: "Samimi Ortam", aciklama: "Ailenizin, evinizde gibi hissedeceğiniz bir atmosfer" },
                { ikon: "⭐", baslik: "Mükemmel Konum", aciklama: "Denize ve şehre doğru yürümesi ideal konumumuz" },
              ].map((item, i) => (
                <div key={i} className="bizim__ozellik">
                  <div className="bizim__ozellik-ikon">{item.ikon}</div>
                  <div>
                    <div className="bizim__ozellik-baslik">{item.baslik}</div>
                    <div className="bizim__ozellik-aciklama">{item.aciklama}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-lacivert">Daha Fazla Bilgi</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bizim;
