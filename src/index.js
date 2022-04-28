import ReactDOM from 'react-dom';
// import Painting from './components/Painting';
import paintings from './paintings.json';

function Painting() {
  return (
    <div>
      <img src="" alt="" width="480" />
      <h2></h2>
      <p>
        Автор: <a href=""></a>
      </p>
      <p>Цена: кредитов</p>
      <p>Доступность: заканчивается или есть в наличии}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

ReactDOM.render(<Painting />, document.querySelector('#root'));

// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
