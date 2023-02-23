import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pokecard from '../components/Pokedex/PokeCard'
import SelectTypes from '../components/Pokedex/SelectTypes'
import '../styles/pokeDex.css'

const Pokedex = () => {

  const { nameTrainer } = useSelector(state => state)
  const [pokemons, setPokemons] = useState()
  const [selectValue, setSelectValue] = useState('allpokemons')

  const navigate = useNavigate()

  useEffect(() => {
    if (selectValue === 'allpokemons') {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
      axios.get(url)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))

    } else {
      axios.get(selectValue)
        .then(res => {
          const results = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results })
        })
        .catch(err => console.log(err))
    }
  }, [selectValue])

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.pokemon.value.trim().toLowerCase()
    navigate(`/pokedex/${inputValue}`)
    e.target.pokemon.value = ''
  }

  return (
    <div className='pokeDex__container'>
      <header className='pokedex__header'>
        <img className='imgPokedx' src="../pokedex.png" alt="" />
        <div className='circuloPokedex'>
          <p className='circuloP'></p>

        </div>
      </header>
      <div className='pokedex__div'>
        <h2 className='pokedex__hello'>Hello <span className='pokedex__span'>"{nameTrainer}"</span>, here you'll find your favorite Pokemon</h2>
        <form className='pokedex__form' onSubmit={handleSubmit}>
          <input className='pokedex__input' type="text" id="pokemon" />
          <button className='pokedex__buttom'>Search Pokemon</button>
          <SelectTypes
            setSelectValue={setSelectValue} />
        </form>
      </div>
      <div className='pokeItem__container'>
        {
          pokemons?.results.map(pokemon => (
            <Pokecard
              key={pokemon.url}
              pokemon={pokemon}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex