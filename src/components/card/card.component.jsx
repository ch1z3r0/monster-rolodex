// import { Component } from "react";
import './card.style.css';


const Card = ({monster}) => {
    const {id, name, email} = monster;
    return (
        <div className="card-container" key={id}>
            <img 
            src={`https://robohash.org/${name}?set=set2&size=180x180`} 
            alt={`monster ${name}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
        </div>
    )
}


// class Card extends Component {
//     render (){
//         const {id, name, email} = this.props.monster;

//         return (
//             <div className="card-container" key={id}>
//                         <img 
//                         src={`https://robohash.org/${name}?set=set2&size=180x180`} 
//                         // src={`https://raw.githubusercontent.com/ch1z3r0/pokemon_sprites/master/sprites/pokemon/other/official-artwork/906.png`} 
//                         alt={`monster ${name}`}/>
//                             <h2>{name}</h2>
//                             <p>{email}</p>
//                     </div>
//         )
//     }
// }

export default Card;