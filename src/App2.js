//import React from 'react';          # React를 import해야하지만 새 버전의 CRA가 자동으로 수행합니다.
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://www.probiotics-help.com/images/bowl-of-kimchi.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "Ramen",
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2012/09/Ramen-Vegetable-Soup-180x180.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Samgupsal",
    image: "https://www.maangchi.com/wp-content/uploads/2009/09/grilled-porkbelly_grilled1-150x150.jpg",
    rating: 4.3
  },
  {
    id: 4,
    name: "Chucumi",
    image: "http://gdimg.gmarket.co.kr/goods_image2/middle_jpgimg3/987/419/987419424.jpg",
    rating: 3.9
  },
  {
    id: 5,
    name: "Doncasu",
    image: "https://s3-media4.fl.yelpcdn.com/bphoto/RDPbw0DZAKb2CEqaJn_4pw/168s.jpg",
    rating: 4.8
  }
];

function Food({ name, picture, rating }) {
  return <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
