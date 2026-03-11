// ── PANSİYON BİLGİLERİ ──────────────────────────────────────
// Buradan her şeyi güncelleyebilirsin!

export const PANSIYON = {
  ad: "Sultan Pansiyon",
  slogan: "Ailenizle Huzurlu Bir Konaklama",
  aciklama: "Sultan Pansiyon'da denize yakın, konforlu odalarımızda muhteşem bir tatil deneyimi dolumu",
  telefon: "+90 324 522 21 39",
  email: "info@sultanpansiyon.com",
  adres: "Türkiye",
  konum: "Denize 5 Dakika",
  isletme: "Aile İşletmesi",
  checkin: "14:00",
  checkout: "12:00",
  whatsapp: "https://wa.me/905001234567",
  sosyal: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    whatsapp: "https://wa.me/905001234567",
  },
};

export const ODALAR = [
  {
    id: 1,
    ad: "Standart Oda",
    aciklama: "Konforlu ve ferah standart odamız, çift kişilik yatak, klima, minibar ve özel banyolanyla konforlu bir...",
    fiyat: 1500,
    ozellik: ["Klima", "Mini-bar", "Özel Banyo"],
    gorsel: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    id: 2,
    ad: "Deluxe Oda",
    aciklama: "Geniş ve lüks deluxe odamız, king size yatak, oturma alanı, balkon ve deniz manzarasıyla muhteşem bir...",
    fiyat: 2200,
    ozellik: ["King Size Yatak", "Balkon", "Deniz Manzarası"],
    gorsel: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
  {
    id: 3,
    ad: "Aile Odası",
    aciklama: "Geniş aile odamız, iki ayrı yatak odası, geniş oturma alanı ve balkonu ile aileler için ideal bir seçenek.",
    fiyat: 3000,
    ozellik: ["2 Yatak Odası", "Genişletme Alanı", "Balkon"],
    gorsel: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    dolu: true,
  },
  {
    id: 4,
    ad: "Ekonomi Oda",
    aciklama: "Bütçe dostu, temiz ve konforlu odamız. Tüm temel ihtiyaçlarınızı karşılar.",
    fiyat: 900,
    ozellik: ["Duş", "WiFi", "TV"],
    gorsel: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    id: 5,
    ad: "Suit Oda",
    aciklama: "En lüks konaklamanız için suit odamız. Jakuzi, panoramik manzara ve özel servis dahil.",
    fiyat: 4500,
    ozellik: ["Jakuzi", "Panoramik Manzara", "Özel Servis"],
    gorsel: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
  },
  {
    id: 6,
    ad: "Üçlü Oda",
    aciklama: "3 kişilik aileniz veya arkadaş grupları için ideal. Geniş ve ferah tasarım.",
    fiyat: 2800,
    ozellik: ["3 Kişilik", "Balkon", "WiFi"],
    gorsel: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80",
  },
];

export const HIZMETLER = [
  { ikon: "📶", baslik: "Ücretsiz WiFi", aciklama: "Tüm bölgelerde ve ortak bölgelerde hızlı ve güvenli internet erişimi" },
  // { ikon: "🍳", baslik: "Kahvaltı Dahil", aciklama: "Her sabah taze ve lezzetli açık büfe kahvaltı servisi" },
  { ikon: "🅿️", baslik: "Ücretsiz Otopark", aciklama: "Misafirlerimiz için güvenli ve geniş otopark alanı" },
  { ikon: "🔔", baslik: "7/24", aciklama: "Her yerde olan profesyonel karşılama hizmeti" },
  { ikon: "❄️", baslik: "Klimalı Odalar", aciklama: "Tüm kişisel bireysel klima sistemi" },
  { ikon: "🛡️", baslik: "Güvenli Konaklama", aciklama: "24 saat güvenlik ve temiz hijyenik ortam" },
  { ikon: "📍", baslik: "Merkezi Konum", aciklama: "Denize ve şehre yakın konumumuz" },
  { ikon: "👨‍👩‍👧", baslik: "Aile İşletmesi", aciklama: "Samimi ve sıcak aile ortamında hizmet" },
];

export const YORUMLAR = [
  { ad: "Ayşe Yılmaz", kullanici: "@ayse_y", yorum: "Sultan Pansiyon'da geçirdiğimiz tatil yapabiliyordu! Odalar çok temiz ve konforluydu. Aile işletmesi olması sıcak bir ortam yaratmış. Gelecekte tekrar geleceğiz.", puan: 5 },
  { ad: "Mehmet Kaya", kullanici: "@mehmet_k", yorum: "Denize çok yakın ve merkezi bir paylaşılıyor. Kahvaltılar çok lezzetliydi. Personel çok ilgili ve yardımsever. Fiyat performans açısından harika bir yer.", puan: 5 },
  { ad: "Zeynep Demir", kullanici: "@zeynep_d", yorum: "Gideceklerimiz en güzel tatildi. Çocuklarımız çok mutlu oldu. Odalar geniş ve ferahtı. Rezervasyon sistemi çok pratikti.", puan: 5 },
  { ad: "Ali Öztürk", kullanici: "@ali_oz", yorum: "İşletme sahipleri çok samimi ve misafirperver. Kendimizi evimizde gibi hissediyoruz. Temizlik ve hijyen konusunda çok titizler.", puan: 5 },
  { ad: "Fatma Şahin", kullanici: "@fatma_s", yorum: "Balkonlu odamızdan manzara muhteşemdi. Her şey düşünülmüş. WiFi hızı çok temiz, işlerimi rahatlıkla halledebildim.", puan: 5 },
  { ad: "Can Arslan", kullanici: "@can_a", yorum: "Fiyatlar çok uygun ve kalite gerçekten yüksek. Otopark imkânı olması büyük avantaj. Herkese tavsiye ederim.", puan: 5 },
];

export const SSS = [
  { soru: "Giriş ve çıkış saatleri nedir?", cevap: "Giriş saatimiz 14:00, çıkış saatimiz ise 12:00'dir. Erken giriş veya geç çıkış için lütfen bizimle iletişime geçin." },
  { soru: "Rezervasyon iptali nasıl yapılır?", cevap: "Rezervasyon iptalleriniz için bizi telefonla veya e-posta yoluyla bilgilendirmeniz yeterlidir. Check-in tarihinden 48 saat öncesine kadar ücretsiz iptal yapılabilir." },
  { soru: "Evcil hayvan kabul ediliyor mu?", cevap: "Maalesef pansiyonumuzda evcil hayvan kabul edilmemektedir. Bu konuda anlayışınız için teşekkür ederiz." },
  { soru: "Otopark ücretsiz mi?", cevap: "Evet, tüm misafirlerimiz için ücretsiz ve güvenli otopark hizmetimiz mevcuttur." },
  { soru: "Havaalanı transfer hizmeti var mı?", cevap: "Ek ücret karşılığında havaalanı transfer hizmeti sunmaktayız. Detaylar için bizimle iletişime geçiniz." },
  { soru: "Kahvaltı dahil mi?", cevap: "Evet, tüm odalarımızda açık büfe kahvaltı hizmetimiz sabah 07:00-10:00 saatleri arasında sunulmaktadır." },
  { soru: "Denize uzaklık ne kadar?", cevap: "Pansiyonumuz denize yürüyüş mesafesinde, yaklaşık 5 dakikalık yürüyüş uzaklığındadır." },
  { soru: "Oda temizliği sıklıkla ne yapılıyor?", cevap: "Odalarımız her gün temizlenmekte, havlu ve çarşaflar 2 günde bir değiştirilmektedir." },
];
