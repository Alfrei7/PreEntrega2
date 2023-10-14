import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../data/mockData.json';

function ItemListContainer() {
  const { categoryId } = useParams();

  // Filtra elementos según la categoría actual
  const category = mockData.categories.find(cat => cat.id === categoryId);

  return (
    <div>
      <h1>{category.name}</h1>
      <div className="card-container">
        {category.items.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a href={`/item/${item.id}`} className="btn btn-primary">Ver Detalles</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;