import { useState, useEffect } from "react";
import { PANSIYON } from "../constants";
import "./Navbar.css";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuAcik, setMenuAcik] = useState(false);

  useEffect(() => {
    const fn = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const git = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuAcik(false);
  };

  return (
    <nav className={`nav ${scroll ? "nav--scroll" : ""}`}>
      <div className="nav__ic">
        <div className="nav__logo" onClick={() => git("hero")}>
          <span className="nav__logo-ikon">🏨</span>
          <span className="nav__logo-ad">{PANSIYON.ad}</span>
        </div>

        <div className={`nav__linkler ${menuAcik ? "nav__linkler--acik" : ""}`}>
          <button className="nav__link" onClick={() => git("hero")}>Ana Sayfa</button>
          <button className="nav__link" onClick={() => git("bizim")}>Bizim</button>
          <button className="nav__link" onClick={() => git("odalar")}>Odalar</button>
          <button className="nav__link" onClick={() => git("iletisim")}>İletişim</button>
          <button className="nav__link" onClick={() => git("sss")}>SSS</button>
          <button className="btn btn-turuncu btn-sm nav__rezervasyon" onClick={() => git("rezervasyon")}>
            Rezervasyon Yap
          </button>
        </div>

        <button className="nav__hamburger" onClick={() => setMenuAcik(!menuAcik)}>
          {menuAcik ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
