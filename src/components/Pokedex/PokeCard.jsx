import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/pokeCard.css'

const PokeCard = ({ pokemon }) => {

    const [poke, setPoke] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => setPoke(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${poke?.id}`)
    }

    return (
        <article
            onClick={handleClick}
            className={`poke__card-container  ${poke?.types[0].type.name}`}
        >
            <header className='pokeCard__header'>
                <img className='pokeCard__img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <div className="pokeCard__info">
                <h2 className={`poke__name pokeCard__name${poke?.types[0].type.name}`}>{poke?.name}</h2>
                <ul className='pokeCard__type' >
                    {
                        poke?.types.map(type => (
                            <li key={type.type.name}>{type.type.name} / </li>
                        ))
                    }
                </ul>
                <hr className='hr' />
                <ul className='pokeCard__stats'>
                    {/* {
                        poke?.stats.map(stat => (
                            <li className='stats__li' key={stat.stat.url}>
                                <span className='stats__span1'>{stat.stat.name} </span><br />
                                <span className='stats__span2'>{stat.base_stat}</span>
                            </li>
                        ))
                    } */}
                    <li className='stats__li' >
                        <span className='stats__span1'>{poke?.stats[0].stat.name} </span><br />
                        <span className={`stats__span2 pokeCard__name${poke?.types[0].type.name}`}>{poke?.stats[0].base_stat} </span>
                    </li>
                    <li className='stats__li' >
                        <span className='stats__span1'>{poke?.stats[1].stat.name} </span><br />
                        <span className={`stats__span2 pokeCard__name${poke?.types[0].type.name}`}>{poke?.stats[1].base_stat} </span>
                    </li>
                    <li className='stats__li' >
                        <span className='stats__span1'>{poke?.stats[2].stat.name} </span><br />
                        <span className={`stats__span2 pokeCard__name${poke?.types[0].type.name}`}>{poke?.stats[2].base_stat} </span>
                    </li>
                    <li className='stats__li' >
                        <span className='stats__span1'>{poke?.stats[5].stat.name} </span><br />
                        <span className={`stats__span2 pokeCard__name${poke?.types[0].type.name}`}>{poke?.stats[5].base_stat} </span>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default PokeCard