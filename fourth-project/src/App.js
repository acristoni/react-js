import './App.css';
import Header from './Header.js'
import data from './data'
import Travel from './Travel';

function App() {
  const cards = data.map(item => {
    return (
      <Travel 
        key= {item.id}
        {...item}
      />   
    )
  })
  
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
