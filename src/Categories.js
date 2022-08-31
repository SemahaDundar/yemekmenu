import React from "react";

const Categories = ({ kategoriler, filterItems }) => {
  return (
    <div className="btn-kutusu">
      {kategoriler.map((kategori, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(kategori)}
          >
            {kategori}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;