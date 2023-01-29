import React from 'react'
import './Quote.css'
const Quote = ({data}) => {
    
  return (
    <>
        <table className='quote-table' >
            <tr>
                <td >
                    <div className='first-cell' >
                    {data.channel === 'air' ? (
                        <span class="ship-icon plane material-symbols-outlined">
                            flight
                        </span>
                    ):(
                        <span class="ship-icon material-symbols-outlined">
                        directions_boat
                        </span>
                    )}Traditional {data.channel} freight
                    </div>
                </td>
                <td  rowspan="2">
                    <div className='header-cell'>
                    {data.route}
                    </div>
                    <div className='body-cell' >
                        US$ {data.price}
                    </div>
                </td>
            </tr>
            <tr>
                <td  >
                    <div className='details-cell' >
                        <div className='delivery-range' >{data.deliveryRange}</div>
                        <div className='estimated-delivery' >Estimated delivery<br/><b>{data.deliveryDate}</b></div>
                    </div>
                </td>
                
            </tr>
        </table>
    </>
  )
}

export default Quote