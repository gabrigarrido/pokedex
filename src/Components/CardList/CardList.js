import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import { useEffect, useState } from 'react';
import './CardList.css';
import SearchBox from '../Search/SearchBox';
import '../Search/SearchBox.css';

export default function CardList(){

    /*escrever js e variaveis aqui, antes do return*/

    
    const [pokemons, setPokemons] = useState([]); /* nesse é um vetor por causa que o listapokemons é um vetor de objetos*/
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState([]);

    const getData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        .then(resposta => resposta.json())
        .then( (result) => {
            setPokemons(result.results)
            setFilter(result.results)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(true)
        })
    }

    useEffect( () => {
        getData();
    }, []);

    
    const filterPokemon = (e) => {
        const filtered = filter.filter( item => item.name.includes(e.target.value));
        setPokemons(filtered);
    }


    return (
        <>  
            <SearchBox placeholder=" Buscar pokémon aqui..." action={filterPokemon}></SearchBox>
        
            <div className="card-list">
               {
                   loading ? (
                       <Card></Card>
                        ) : (
                            pokemons.map((item) => (<Card key={item.name} info={item}></Card>))
                        )
                   
               }
            </div>
        </>
        
    )
    
}