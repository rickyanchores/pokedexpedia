import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeAPI = () => {
    const [poke, setPoke] = useState();
    const [inputValue, setInputValue] = useState('');

    const fetchData = async (name) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
        try {
            let res = await axios.get(url);
            let data = res.data;
            console.log(data);
            setPoke(data);
        } catch (err) {
            console.log("Something went wrong", err);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData(inputValue);
    };

    return (
        <div className='PokeAPI container '>
            <h1>PokeAPI</h1>
            <form onSubmit={handleSubmit} className='Form bg-red-600 p-4'>
                <input 
                    type="text" 
                    placeholder='insert name'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button type="submit" className='btn'>Find Poke</button>
            </form>
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
            {poke && (
                <>
                <img className='pokeImage w-[300px] items-center' src={poke.sprites.front_default} alt="Gengar" />
                   <div className="details">
                    <div className="Bio">
                            <h1>Name: {poke.name}</h1>
                            <h1>Order: {poke.order}</h1>
                            <h1>Height: {poke.height}</h1>
                            <h1>Weight: {poke.weight}</h1>
                        </div>
                        <div className="Stats">
                            <h1>HP: {poke.stats[0].base_stat}</h1>
                            <h1>ATK: {poke.stats[1].base_stat}</h1>
                            <h1>DEF: {poke.stats[2].base_stat}</h1>
                            <h1>SPEC ATK: {poke.stats[3].base_stat}</h1>
                        </div>
                   </div>
                </>
            )}
            </div>
        </div>
    );
};

export default PokeAPI;
