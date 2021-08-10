import logo from './logo.svg';
import './App.css';

// Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';

const cards = [
  {
    id: "1",
    title: "First Card",
    content: "Here's My Second Card"
  },
  {
    id: "2",
    title: "Second Card"
  },
  {
    id: "3",
    title: "Third Card"
  }
]


function App() {
  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar />
      <Header firstName='Faith' lastName='Thao'/>

      {/* CardList Component */}
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
