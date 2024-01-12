// import { Component } from "react";
import { useState, useEffect } from "react";

import "./App.css";
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue] = useState(initailValue)
  const [monsters, setMonsters] = useState([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState([monsters]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);  
  }, [monsters, searchField]);



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  

  return (
    <div className="App">
        
      <h1 className="title">Monster Rolodex</h1>
      
      <SearchBox onChangeHandler={onSearchChange} placeholder={'Search'}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
};



// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       );
//   }

//   // improve performance
//   // the function onchange doesnt have to reinitialize everytime render() runs
//   onSearchChange = (event) => {
//     // console.log(event.target.value);

//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return {searchField};
//     });

//   }

//   // react rerenders when setState is called or when props change
//   render() {
//     // console.log("render");

//     // To make the code more readable
//     const { onSearchChange } = this;
//     const { monsters, searchField } = this.state;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);  
//     });
    
//     return (
//       <div className="App">
        
//         {/*{filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })}*/}
//         <h1 className="title">Monster Rolodex</h1>
        
//         <SearchBox onChangeHandler={onSearchChange} placeholder={'Search'}/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
