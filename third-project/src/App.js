import './App.css';
//import Header from "./Header.js"
import Card from "./Card.js"

//<Header />

function App() {
  return (
    <Card 
      img='swimmer.png'
      rating='5.0'
      reviewCount='6'
      country='USA'
      title='Life Lessons with Katie Zaferes'
      price='136'
    />  
  );
}

export default App;
