import { useState } from "react";
import "./Filters.css";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangesMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="filters">
        <div>
          <label htmlFor="price">Precio A Partir De:</label>
          <input
            type="range"
            id="price"
            min="0"
            max="1000"
            onChange={handleChangesMinPrice}
          />
          <span>$ {minPrice}</span>
        </div>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select name="category" onChange={handleChangeCategory} id="category">
          <option value="all">Todas</option>
          <option value="laptops">Portétiles</option>
          <option value="smartphones"> Celulares </option>
        </select>
      </div>
    </section>
  );
}
