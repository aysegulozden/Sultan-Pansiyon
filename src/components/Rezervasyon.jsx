import { useState } from "react";
import { ODALAR, PANSIYON } from "../constants";
import "./Rezervasyon.css";

function Rezervasyon() {
  const [form, setForm] = useState({ ad: "", email: "", tel: "", giris: "", cikis: "", kisi: "2 Kişi", oda: "", istek: "" });
  const [gonderildi, setGonderildi] = useState(false);

  const guncelle = (alan, deger) => setForm(f => ({ ...f, [alan]: deger }));

  function gonder() {
    if (!form.ad || !form.tel || !form.giris || !form.cikis) {
      alert("Lütfen zorunlu alanları doldurun!"); return;
    }
    // WhatsApp'a yönlendir
    const mesaj = `Merhaba! Rezervasyon yapmak istiyorum.%0A👤 Ad: ${form.ad}%0A📞 Tel: ${form.tel}%0A🛏️ Oda: ${form.oda || "Belirtilmedi"}%0A📅 Giriş: ${form.giris}%0A📅 Çıkış: ${form.cikis}%0A👥 Kişi: ${form.kisi}%0A💬 Not: ${form.istek || "-"}`;
    window.open(`https://wa.me/905001234567?text=${mesaj}`, "_blank");
    setGonderildi(true);
    setTimeout(() => setGonderildi(false), 5000);
  }

  return (
    <section className="bolum rezervasyon" id="rezervasyon">
      <div className="bolum__ic">
        <div className="rezervasyon__grid">
          {/* Sol: Başlık + fotoğraf */}
          <div className="rezervasyon__sol">
            <span className="bolum__etiket">Hemen Rezervasyon Yapın</span>
            <h2 className="bolum__baslik rezervasyon__baslik">
              Yerinizi<br />Şimdi<br />Ayırtın
            </h2>
            <div className="rezervasyon__gorsel-wrap">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80"
                alt="Rezervasyon"
                className="rezervasyon__gorsel"
              />
            </div>
          </div>

          {/* Sağ: Form */}
          <div className="rezervasyon__form-kart">
            <h3 className="rezervasyon__form-baslik">Kolay Rezervasyon Sistemi</h3>
            <p className="rezervasyon__form-aciklama">
              Artık telefon karmaşası yok! Online sistemimizle hangi değişimler ne zaman düzenli olduğunu anında görebilir, rezervasyonunuzu kolayca yapabilirsiniz.
            </p>

            <div className="rezervasyon__alan-tek">
              <label>Ad Soyad *</label>
              <input className="r-input" type="text" placeholder="Adınız ve soyadınız" value={form.ad} onChange={e => guncelle("ad", e.target.value)} />
            </div>

            <div className="rezervasyon__alan-iki">
              <div>
                <label>E-posta *</label>
                <input className="r-input" type="email" placeholder="ornek@email.com" value={form.email} onChange={e => guncelle("email", e.target.value)} />
              </div>
              <div>
                <label>Telefon *</label>
                <input className="r-input" type="tel" placeholder="0555 555 55 55" value={form.tel} onChange={e => guncelle("tel", e.target.value)} />
              </div>
            </div>

            <div className="rezervasyon__alan-iki">
              <div>
                <label>Giriş Tarihi *</label>
                <input className="r-input" type="date" value={form.giris} onChange={e => guncelle("giris", e.target.value)} />
              </div>
              <div>
                <label>Çıkış Tarihi *</label>
                <input className="r-input" type="date" value={form.cikis} onChange={e => guncelle("cikis", e.target.value)} />
              </div>
            </div>

            <div className="rezervasyon__alan-iki">
              <div>
                <label>Misafir Sayısı *</label>
                <select className="r-input" value={form.kisi} onChange={e => guncelle("kisi", e.target.value)}>
                  {["1 Kişi","2 Kişi","3 Kişi","4 Kişi","5+ Kişi"].map(k => <option key={k}>{k}</option>)}
                </select>
              </div>
              <div>
                <label>Oda</label>
                <select className="r-input" value={form.oda} onChange={e => guncelle("oda", e.target.value)}>
                  <option value="">Seçiniz</option>
                  {ODALAR.map(o => <option key={o.id} value={o.ad}>{o.ad}</option>)}
                </select>
              </div>
            </div>

            <div className="rezervasyon__alan-tek">
              <label>Özel istekleriniz</label>
              <textarea
                className="r-input r-textarea"
                placeholder="Varsa özel isteğinizi belirtmeniz (maksimum 500 karakter)"
                maxLength={500}
                value={form.istek}
                onChange={e => guncelle("istek", e.target.value)}
              />
              <div className="r-karakter">{form.istek.length}/500 karakter</div>
            </div>

            <button className="btn btn-turuncu rezervasyon__gonder" onClick={gonder}>
              {gonderildi ? "✅ Gönderildi!" : "Rezervasyon Talebi Gönder →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rezervasyon;
