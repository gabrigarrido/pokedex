import './Info.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Info(info){

    const [pokemons, setPokemons] = useState(info.location.state);

    let id = ('000' + pokemons.id).slice(-3);
    
    return (
        <section className="info">
        <div className="info-card">
            <div className="info-header">{pokemons.name}</div>
            <div className="info-body">
                <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemons.name}></img>
                <div className= "info-block">
                    <p><strong>Altura:</strong>{pokemons.height}</p>
                    <p><strong>Peso:</strong>{pokemons.weight}</p>
                    <p><strong>Habilidades:</strong></p>
                        {
                        pokemons.abilities.map( (item) => (
                            <p key={item.ability.name}>{item.ability.name}</p>
                        ))
                        }
                </div>

                 <div className="type">
                 <p><strong>Tipo:</strong></p>
                 {
                    pokemons.types.map((item) => (
                    <span key={item.type.name} className={`category ${item.type.name}`}>{item.type.name}</span>
                    ))
                }
                    
                </div>
            </div>
            <div className="info-footer">
``              <Link to="/"> <button className="link">  Voltar</button> </Link>
            </div>
        </div>
        </section>

    );
}