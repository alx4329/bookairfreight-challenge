import React, { useState } from 'react'
import Quote from '../components/Quote'
import QuoteForm from '../components/QuoteForm'
import './QuoteGenerator.css'
const QuoteGenerator = () => {
    
    const [quoteData, setQuoteData] = useState(null)
  return (
        <>
            <div className='qg-container' >
                <QuoteForm setQuoteData={setQuoteData} />
                {quoteData && <Quote data={quoteData} /> }
            </div>
            
        </>
  )
}

export default QuoteGenerator