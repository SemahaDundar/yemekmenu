
import Categories from "./Categories";
import Menu from './Menu';

import items from "./data";
import React from "react";
const tumCategoriler = ['tum', ...new Set(items.map((item) => item.kategori))];

function App() {
  const [menuListesi, menuAyarla] = React.useState(items);
  const [kategoriler, KategoriGuncelle] = React.useState(tumCategoriler);

  const filterItems = (kategori) => {
    if (kategori === "tum") {
      menuAyarla(items);
      return;


    }

    const yeniOgeler = items.filter((item) => item.kategori === kategori);
    menuAyarla(menuAyarla);
  };

  return (
    <main>
      <section className="menu-sec">
        <div className="baslik">
          <h2> our menu</h2>
          <div className="underline"></div>
          <Categories kategoriler={kategoriler} filterItems={filterItems} />
          <Menu items={menuListesi} />
        </div>
      </section>
    </main>
  );
}

export default App;
