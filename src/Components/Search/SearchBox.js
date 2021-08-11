import './SearchBox.css';
import pokemon01 from '../Img/pokemon03.png';


export default function SearchBox(filter){
    return (
        <>
        <div className="searchBox">
            <img src={pokemon01} className="logo"></img>

        <div className="searchBox-input">
            <img></img>
            <input 
        
            type="text"
            placeholder={filter.placeholder}
            onChange = {filter.action}
            >
            
            </input>
        </div>
        </div>
        <div className="search-div">.</div>
        

        </>
        
    )
}