import { PANSIYON } from "../constants";
import "../css/Footer.css";

function Footer() {
  const git = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer__ic">
        <div className="footer__ust">
          <div className="footer__sol">
            <div className="footer__logo">🏨</div>
            <p className="footer__aciklama">
              Ailecek işlettiğimiz Sultan Pansiyon'da, müşterilerimize sıcak ve samimi bir ortamda huzurlu bir konaklama deneyimi sunuyoruz.
            </p>
            <div className="footer__sosyal">
              {["f", "📷", "✕", "💬"].map((ikon, i) => (
                <button key={i} className="footer__sosyal-btn">{ikon}</button>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__baslik">İletişim</div>
            <div className="footer__iletisim-item"><strong>Adres</strong><br />{PANSIYON.adres}</div>
            <div className="footer__iletisim-item">
              <strong>Telefon</strong><br />
              Baba: {PANSIYON.telefon_baba}<br />
              Amca: {PANSIYON.telefon_amca}<br />
              <strong>**İlişki: {PANSIYON.telefon_ilski}**</strong>
            </div>
            <div className="footer__iletisim-item"><strong>E-posta</strong><br />{PANSIYON.email}</div>
          </div>

          <div>
            <div className="footer__baslik">Hızlı Bağlantılar</div>
            {[["hero","Ana Sayfa"],["bizim","Bizim"],["odalar","Odalar"],["rezervasyon","Geri"],["iletisim","İletişim"],["sss","SSS"]].map(([id, etiket]) => (
              <button key={id} className="footer__link" onClick={() => git(id)}>{etiket}</button>
            ))}
          </div>
        </div>

        <div className="footer__alt">
          <span>© 2025 Sultan Pansiyon. Tüm hakları saklıdır.</span>
          <div className="footer__alt-linkler">
            <button className="footer__alt-link">Gizlilik Politikası</button>
            <button className="footer__alt-link">Kullanım Şartları</button>
            <button className="footer__alt-link">Koşullar</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
