import React, { useState } from 'react'
import Quote from '../components/Quote'
import QuoteForm from '../components/QuoteForm'

const QuoteGenerator = () => {
    
    const [quoteData, setQuoteData] = useState(null)
  return (
        <>
            <QuoteForm setQuoteData={setQuoteData} />
            {quoteData && <Quote data={quoteData} /> }
            
        </>
  )
}

export default QuoteGenerator