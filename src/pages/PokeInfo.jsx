import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/pokeInfo.css'

const PokeInfo = () => {

  const [hasError, setHasError] = useState(false)

  const { id } = useParams()

  const [poke, setPoke] = useState()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(url)
      .then(res => {
        setPoke(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [id])

  console.log(poke)

  if (hasError) {
    return <h1> The pokemon with name "{id}" not found</h1>
  } else {

    return (
      <div className='pokeInfo__container'>
        <header className='pokedex__header'>
          <img className='imgPokedx' src="../pokedex.png" alt="" />
          <div className='circuloPokedex'>
            <p className='circuloP'></p>

          </div>
        </header>
        <div className='pokeinfo__container-cards '>
          <div className={`pokeInfo__img-container ${poke?.types[0].type.name}`}>
            <img className='pokeInfo__img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
          <div className="pokeInfo__card">
            <h2 className={`pokeInfo__id pokeCard__name${poke?.types[0].type.name}`} >#{poke?.id}</h2>
            <div className='pokeInfo__container-name'>
              <hr className='pokeInfo__hr' />
              <h1 className={`pokeInfo__name pokeCard__name${poke?.types[0].type.name}`}> {poke?.name} </h1>
              <hr className='pokeInfo__hr' />
            </div>
            <header className='pokeInfo__header'>
              <span> Weight <br />{poke?.weight}</span>
              <span> Heigth <br />{poke?.height}</span>
            </header>
            <div className='pokeInfo__divHeader'>
              <header className='pokeInfo__types'>
                <h4 >types</h4>
                <ul className='pokeInfo__type' >
                  {
                    poke?.types.map(type => (
                      <li className={` pokeInfo__type-li ${type.type.name}`} key={type.type.name}>{type.type.name}  </li>
                    ))
                  }
                </ul>
              </header>
              <header className='pokeInfo__habilities'>
                <h4>Abilities</h4>
                <ul className='pokeInfo__habilty' >
                  {
                    poke?.abilities.map(ability => (
                      <li className='pokeInfo__habilty-li' key={ability.ability.name}>
                        <span> {ability.ability.name}</span>
                      </li>
                    ))
                  }
                </ul>
              </header>
            </div>
            <div className='pokeInfo__stats-name'>
              <h3>Stats</h3>
              <hr className='pokeInfo__stats-hr' />
              <span className='pokeInfo__circulo1'>
                <p className='pokeInfo__circulo2'></p>
              </span>
            </div>
            <ul className='pokeInfo__stats'>
              <li className='pokeInfo__stats-li' >
                <span className='pokeInfo__span1'>{poke?.stats[0].stat.name} </span>
                <span className='pokeInfo__span2'>{poke?.stats[0].base_stat} / 200</span>
              </li>
              <div className='pokeInfo__estadistica'><div className={`pokeInfo__estadistica-color`} style={{ width: ` calc(${poke?.stats[0].base_stat}% /2)` }} ></div></div>
              <li className='pokeInfo__stats-li' >
                <span className='pokeInfo__span1'>{poke?.stats[1].stat.name} </span>
                <span className='pokeInfo__span2'>{poke?.stats[1].base_stat} / 200</span>
              </li>
              <div className='pokeInfo__estadistica'><div className={`pokeInfo__estadistica-color`} style={{ width: ` calc(${poke?.stats[1].base_stat}% /2)` }} ></div></div>
              <li className='pokeInfo__stats-li'>
                <span className='pokeInfo__span1'>{poke?.stats[2].stat.name} </span>
                <span className='pokeInfo__span2'>{poke?.stats[2].base_stat} / 200</span>
              </li>
              <div className='pokeInfo__estadistica'><div className={`pokeInfo__estadistica-color`} style={{ width: ` calc(${poke?.stats[2].base_stat}% /2)` }} ></div></div>
              <li className='pokeInfo__stats-li'>
                <span className='pokeInfo__span1'>{poke?.stats[5].stat.name} </span>
                <span className='pokeInfo__span2'>{poke?.stats[5].base_stat} / 200</span>
              </li>
              <div className='pokeInfo__estadistica'><div className={`pokeInfo__estadistica-color`} style={{ width: ` calc(${poke?.stats[5].base_stat}% /2)` }} ></div></div>
            </ul>
          </div>
          <div className='pokeInfo__movents' >
            <h2 className='pokeInfo__movents-h2' >Movements</h2>
            <ul className='pokeInfo__movents-ul'>
              {
                poke?.moves.map(move => (
                  <li className={` pokeInfo__movents-li ${move.move.name}`} key={move.move.name}>{move.move.name} </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>
    )
  }
}

export default PokeInfo