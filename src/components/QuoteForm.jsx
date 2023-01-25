import React, { useState } from 'react'
import { getQuote } from '../services/getQuote'
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
        const quoteData = getQuote(state)
        setQuoteData(quoteData)
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
            <button type='submit' >Create quote</button>
        </form>
    </>
  )
}

export default QuoteForm