import { useState } from "react";
import { PANSIYON } from "../constants";
import "../css/Iletisim.css";

function Iletisim() {
  const [form, setForm] = useState({ ad: "", email: "", konu: "", mesaj: "" });

  const guncelle = (alan, deger) => setForm(f => ({ ...f, [alan]: deger }));

  function gonder() {
    if (!form.ad || !form.email || !form.mesaj) { alert("Lütfen zorunlu alanları doldurun!"); return; }
    const metin = `Merhaba!%0AAd: ${form.ad}%0AE-posta: ${form.email}%0AKonu: ${form.konu}%0AMesaj: ${form.mesaj}`;
    window.open(`https://wa.me/905001234567?text=${metin}`, "_blank");
  }

  return (
    <section className="bolum iletisim" id="iletisim">
      <div className="bolum__ic">
        <div className="iletisim__ust">
          <span className="bolum__etiket">İletişim</span>
          <h2 className="bolum__baslik">Bizimle İletişime Geçin</h2>
          <p className="bolum__aciklama">Sorularınız için bize ulaşabilir veya rezervasyon yapabilirsiniz</p>
        </div>

        <div className="iletisim__grid">
          {/* Sol: Bilgiler */}
          <div>
            <h3 className="iletisim__alt-baslik">İletişim Bilgileri</h3>
            <div className="iletisim__bilgiler">
              <div className="iletisim__bilgi">
                <div className="iletisim__bilgi-ikon">📍</div>
                <div>
                  <div className="iletisim__bilgi-baslik">Adres</div>
                  <div className="iletisim__bilgi-deger">{PANSIYON.adres}</div>
                </div>
              </div>
              <div className="iletisim__bilgi">
                <div className="iletisim__bilgi-ikon">📞</div>
                <div>
                  <div className="iletisim__bilgi-baslik">Telefon</div>
                  <div className="iletisim__bilgi-deger">{PANSIYON.telefon}</div>
                </div>
              </div>
              <div className="iletisim__bilgi">
                <div className="iletisim__bilgi-ikon">✉️</div>
                <div>
                  <div className="iletisim__bilgi-baslik">E-posta</div>
                  <div className="iletisim__bilgi-deger">{PANSIYON.email}</div>
                </div>
              </div>
              <div className="iletisim__bilgi">
                <div className="iletisim__bilgi-ikon">⏰</div>
                <div>
                  <div className="iletisim__bilgi-baslik">Çalışma Saatleri</div>
                  <div className="iletisim__bilgi-deger">7/24 Hizmetinizdeyiz</div>
                </div>
              </div>
            </div>

            <div className="iletisim__sosyal">
              <div className="iletisim__sosyal-baslik">Sosyal Medya</div>
              <div className="iletisim__sosyal-ikonlar">
                {["f", "📷", "✕", "💬"].map((ikon, i) => (
                  <button key={i} className="iletisim__sosyal-ikon">{ikon}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ: Form */}
          <div className="iletisim__form-kart">
            <h3 className="iletisim__alt-baslik">Mesaj gönderileri</h3>
            <div className="form-grup">
              <label>Ad Soyad *</label>
              <input className="r-input" type="text" placeholder="Adınız ve soyadınız" value={form.ad} onChange={e => guncelle("ad", e.target.value)} />
            </div>
            <div className="form-grup">
              <label>E-posta *</label>
              <input className="r-input" type="email" placeholder="ornek@email.com" value={form.email} onChange={e => guncelle("email", e.target.value)} />
            </div>
            <div className="form-grup">
              <label>Konu *</label>
              <input className="r-input" type="text" placeholder="Mesajınızın konusu" value={form.konu} onChange={e => guncelle("konu", e.target.value)} />
            </div>
            <div className="form-grup">
              <label>Mesajınız *</label>
              <textarea
                className="r-input r-textarea"
                placeholder="Mesajınızı buraya yazın (maksimum 500 karakter)"
                maxLength={500}
                value={form.mesaj}
                onChange={e => guncelle("mesaj", e.target.value)}
              />
              <div className="r-karakter">{form.mesaj.length}/500 karakter</div>
            </div>
            <button className="btn btn-turuncu" style={{ width: "100%", justifyContent: "center", borderRadius: 12 }} onClick={gonder}>
              Mesajı Gönder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Iletisim;
