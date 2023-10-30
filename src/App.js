import './App.css';
import Dog from './components/Dog';

const dogs = [
  { name: 'Twinkie', age: 6, breed: 'Pug/Dachshund', deceased: false },
  { name: 'Winston', age: 15, breed: 'Fox-looking dog', deceased: true },
  { name: 'Raven', age: 20, breed: 'German shepherd, black lab', deceased: true },
  { name: 'Daisy', age: 9, breed: 'Morkie', deceased: false},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs:</h1>
          {dogs.map(dog => <Dog key={dog.name}
                                age={dog.age} 
                                name={dog.name} 
                                breed={dog.breed}
                                deceased={dog.deceased} />)}
      </header>
    </div>
  );
}

export default App;
