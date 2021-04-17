
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div className="not__found">
          <p>По запросу "Example" ничего не найдено!</p>
        </div>
        <div className="search__input__block">
          <input
            placeholder="Введите запрос"
            type="text"
            className="search__input"
          />
        </div>

      </div>

    </div>
  );
}

export default App;
