import React from 'react'
import './Quote.css'
const Quote = ({data}) => {
    
  return (
    <>
        <table className='quote-table' >
            <tr>
                <td>Traditional {data.channel} freight</td>
                <td>{data.route}</td>
            </tr>
            <tr>
                <td>
                    <div>{data.deliveryRange}</div>
                    <div>Estimated delivery<br/>{data.deliveryDate}</div>
                </td>
                <td>
                    US$ {data.price}
                </td>
            </tr>
        </table>
    </>
  )
}

export default Quote