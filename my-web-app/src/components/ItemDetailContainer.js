import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../data/mockData.json';

function ItemDetailContainer() {
  const { itemId } = useParams();

  // Encuentra el elemento por su ID
  const item = mockData.categories.flatMap(category => category.items).find(item => item.id === itemId);

  return (
    <div>
      {/* Renderiza los detalles del elemento aquí */}
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <img src={item.image} alt={item.name} />
    </div>
  );
}

export default ItemDetailContainer;