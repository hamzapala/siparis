import React, { useState } from 'react';
import "./main.css";

const Main = () => {
  const [currentMeal, setCurrentMeal] = useState("");
  const [ad, setAd] = useState("");
  // const [hamburger, setHamburger] = useState("");
  const [pizza, setPizza] = useState("");
  const [drink, setDrink] = useState("");

  const changeMeal = (newMeal) => {
    setCurrentMeal(newMeal);
  };
  const changeDrink = (newDrink) => {
    setDrink(newDrink);
  };
  const changeName = (newAd)=>{
    setAd(newAd);
  }
  const changePizza = (newPizza)=>{
    setPizza(newPizza);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.parentElement.lastElementChild.classList.add("show");
  };
  return (
    <div>
      <h1>Yemek Sipariş Uygulaması</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ad Soyad"
          required="required"
          onChange={(e) => changeName(e.target.value)}
        />
        <select
          name="yemek"
          id="yemek"
          onChange={(e) => changeMeal(e.target.value)}
          value={currentMeal}
        >
          <option value="">Yemek Türleri</option>
          <option value="hamburger">Hamburger</option>
          <option value="pizza">Pizza</option>
        </select>
        <select
          name="icecek"
          id="icecek"
          onChange={(e) => changeDrink(e.target.value)}
        >
          <option value="">İçecek</option>
          <option value="kola">Kola</option>
          <option value="icetea">İcetea</option>
          <option value="ayran">Ayran</option>
          <option value="şalgam">Şalgam</option>
        </select>
        <input type="submit" value="Kaydet" />
        {/* <div>{hamburger}</div> */}
        {currentMeal === "hamburger" && (
          <div className="hamburger">
            <h4>
              Lütfen içerisine koyulmasını istediğiniz malzemeleri
              işaretleyiniz:
            </h4>
            <div>
              <input type="checkbox" name="sogan" id="sogan" />
              <label htmlFor="sogan">Soğan</label>
            </div>
            <div>
              <input type="checkbox" name="domates" id="domates" />
              <label htmlFor="domates">Domates</label>
            </div>
            <div>
              <input type="checkbox" name="marul" id="marul" />
              <label htmlFor="marul">Marul</label>
            </div>
            <div>
              <input type="checkbox" name="tursu" id="tursu" />
              <label htmlFor="tursu">Turşu</label>
            </div>
          </div>
        )}
        {currentMeal === "pizza" && (
          <div className="pizza">
            <h4>Ne tür bir pizza arzu edersiniz:</h4>
            <select
              name="pizza"
              id="pizza"
              onChange={(e) => changePizza(e.target.value)}
            >
              <option value="belirtmedi">çeşit</option>
              <option value="peynirli">Peynirli</option>
              <option value="peperoni">Peperoni</option>
              <option value="karışık">Karışık</option>
              <option value="italyan">İtalyan</option>
            </select>
          </div>
        )}
      </form>
      <table id="table" className="hide">
        <tr>
          <th>Ad Soyad</th>
          <th>Yemek</th>
          <th>Çeşit veya İçerik</th>
          <th>İçecek</th>
        </tr>
        <tr>
          <td>{ad}</td>
          <td>{currentMeal}</td>
          <td>{pizza}</td>
          <td>{drink}</td>
        </tr>
      </table>
    </div>
  );
};

export default Main