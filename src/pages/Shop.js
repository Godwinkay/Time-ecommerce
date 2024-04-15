import React, { useContext, useState } from 'react';
import { ShopList } from '../Shoplist';
import Shopitem from '../Shopitem';
import '../Styles/Shop.css';
import { ShopContext } from '../context/shop-context';

function Shop() {
  const { search } = useContext(ShopContext);
  const [filteredItems, setFilteredItems] = useState([]);

  const filterItems = (categoryItem) => {
    const updatedItems = ShopList.filter((shopItem) => {
      return shopItem.category === categoryItem;
    });
    setFilteredItems(updatedItems);
  };

  return (
    <div className='product'>
      <h1>Food Items</h1>
      <div className='catButtons'>
        <button onClick={() => filterItems('vegetable')}>Vegetables</button>
        <button onClick={() => filterItems('fruit')}>Fruits</button>
        <button onClick={() => filterItems('other')}>Other</button>
        <button onClick={() => setFilteredItems([])}>All</button>
      </div>
      <div className='product-items'>
        {filteredItems.length > 0
          ? filteredItems.map((shopItem) => (
              <Shopitem
                key={shopItem.id}
                id={shopItem.id}
                name={shopItem.name}
                image={shopItem.image}
                price={shopItem.price}
                category={shopItem.category}
              />
            ))
          : ShopList.filter((shopItem) => {
              return search.toLowerCase() === ''
                ? shopItem
                : shopItem.name.toLowerCase().includes(search);
            }).map((shopItem) => (
              <Shopitem
                key={shopItem.id}
                id={shopItem.id}
                name={shopItem.name}
                image={shopItem.image}
                price={shopItem.price}
                category={shopItem.category}
              />
            ))}
      </div>
    </div>
  );
}

export default Shop;
