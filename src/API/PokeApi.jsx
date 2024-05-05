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
        fetchData(inputValue.toLowerCase());
    };

    return (
        <div className='PokeAPI container '>
            <form onSubmit={handleSubmit} className='Form rounded-lg p-4 bg-zinc-900 flex justify-center items-center gap-4'>
                <input 
                    className='inputField p-2'
                    type="text" 
                    aria-label='Pokemon name'
                    placeholder='Enter Pokemon name . . .'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button type="submit" className='btn border-2 p-2 hover:bg-orange-600 font-semibold'>Find Poke</button>
            </form>
            <div className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-4 gap-4">
            {poke && (
                <>
                <div className="imageContainer flex items-center justify-center">
                    <img className='pokeImage w-[400px] bg-zinc-900 rounded-xl' src={poke.sprites.front_default} alt="Gengar" />
                </div>
                <div className="details rounded-xl p-4 flex justify-around items-center bg-zinc-900 h-full">
                    <div className="Bio">
                            <h1 className='font-semibold uppercase bg-purple-500 p-2 rounded-lg'>Bio</h1>
                            <h1>Name: {poke.name}</h1>
                            <h1>TYPE: {poke.types[0].type.name}</h1>
                            <h1>Order: {poke.order}</h1>
                            <h1>Height: {poke.height}</h1>
                            <h1>Weight: {poke.weight}</h1>
                    </div>
                    <div className="Stats">
                            <h1 className='font-semibold uppercase bg-purple-900 p-2 rounded-lg'>Stats</h1>
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
