import React, { useState } from 'react'
import { getQuote, validateCountry, validatePrice } from '../services/getQuote'
import './QuoteForm.css'

const QuoteForm = ({setQuoteData}) => {
    const initialState = {
        fromCountry:"",
        toCountry:"",
        price:"",
        channel:"air"
    }
    const [state, setState] = useState(initialState)
    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!state.fromCountry || ! state.toCountry || ! state.price) return alert('Please complete all the fields')
        if(!validateCountry(state.fromCountry)) alert('Starting country doesnt seem to be a country')
        if(!validateCountry(state.toCountry)) alert('Destination country doesnt seem to be a country')
        if(state.fromCountry === state.toCountry) return alert("Starting and destination can't be the same")
        if(!validatePrice(state.price)) return alert('Price must be greater than 0')
        const quoteData = getQuote(state)
        setQuoteData(quoteData)
        setState(initialState)
    }
    return (
    <>
        <form onSubmit={handleSubmit} >
            <div className='item' >
                <label>Starting country.</label>
                <input name="fromCountry" value={state.fromCountry} onChange={handleChange} ></input>
            </div>
            <div className='item' >
                <label>Destination country</label>
                <input name="toCountry" value={state.toCountry} onChange={handleChange} ></input>
            </div>
            <div className='item' >
                <label>Quote price</label>
                <input  name="price" value={state.price} onChange={handleChange}  type="number" ></input>
            </div>
            <div className='item' >
                <label>Shipping channel</label>
                <select name="channel" value={state.channel} onChange={handleChange} >
                    <option value='air'>Air</option>
                    <option value='ocean'>Ocean</option>
                </select>
            </div>
            <button className='submit-btn' type='submit' >Create quote</button>
        </form>
    </>
  )
}

export default QuoteForm