import React from 'react';
import propTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} width="400" height="300" alt={name} />
    </div>
  );
}

const foodLike = [
  {
    key : 1,
    name: 'banana',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012700739_0.jpg',
    rating:4.5,
  },
  {
    key : 2,
    name: 'apple',
    image: 'https://cdn.mkhealth.co.kr/news/photo/202010/50970_51164_4758.jpg',
    rating:5.0,
  },
  {
    key : 3,
    name: 'berry',
    image: 'https://cdn.blueberriesconsulting.com/2020/07/Berries-Mexico-debera-diversificar-con-urgencia-sus-mercados.jpg',
    rating:3.5,
  },
];

function App() {
  return (
    <div>
      <h1>hello world</h1>
        {foodLike.map(dish => (<Food key={dish.key} name={dish.name} picture={dish.image} rating={dish.rating} / >))}
    </div>
  );
}


Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
}

export default App;
