import React from 'react';
import ReactDOM from 'react-dom';
import paintings from './paintings.json';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// function Painting(props) {
//   const { url, title, profileUrl, author, price } = props;
//   // можно сделать так: function Painting({ url, title, profileUrl, author, price }) - вместо const {...} props
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{props.title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }
// const painting = paintings[];

// ReactDOM.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     author={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />,
//   document.querySelector('#root'),
// );

// import ReactDOM from 'react-dom';
// import './index.css';
