import './App.css';
import Data from './data';
import Card from './components/Card';
import Header from './components/Header';

function App() {

  const cardDetails = Data.map(item =>
    <Card 
      key={item.id}
      {...item}
    />
  )

  return (
    <div className="App">
      <Header />
      <div className="App-container">
        {cardDetails}
      </div>
    </div>
  );
}

export default App;
