import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import '../styles/home.css'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setNameTrainer(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
  }

  return (
    <div>
      <div className='home_top'>
      </div>
      <div className='home_form'>
        <div className='title__home'>
          <img className='title__img' src="../title.png" alt="" />
        </div>
        <div className='container__home'>
          <h2 className='home__hello'>Hello Trainer</h2>
          <p className='home__p'>Give me your name to start the adventure</p>
          <form className='home__form' onSubmit={handleSubmit}>
            <input className='home__input'  id='name' type="text" />
            <button className='home__button' >Start</button>
          </form>
        </div>

      </div>
      <div className='home_bottom'>
      </div>
    </div>
  )
}

export default Home