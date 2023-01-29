import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import './Quote.css'
const Quote = ({data}) => {
    const {innerWidth, innerHeight} = useWindowSize()
  return (
    <>
        <table className='quote-table' >
            <tbody>
                <tr>
                    <td >
                        <div className='first-cell' >
                        {data.channel === 'air' ? (
                            <span className="ship-icon plane material-symbols-outlined">
                                flight
                            </span>
                        ):(
                            <span className="ship-icon material-symbols-outlined">
                            directions_boat
                            </span>
                        )}Traditional {data.channel} freight
                        </div>
                    </td>
                    {innerWidth> 720 ? (<td  rowSpan="2">
                        <div className='header-cell'>
                        {data.route}
                        </div>
                        <div className='body-cell' >
                            US$ {data.price}
                        </div>
                    </td>): null}
                </tr>
                <tr>
                    <td  >
                        <div className='details-cell' >
                            <div className='delivery-range' >{data.deliveryRange}</div>
                            <div className='estimated-delivery' >Estimated delivery<br/><b>{data.deliveryDate}</b></div>
                        </div>
                    </td>
                    
                </tr>
                {
                    innerWidth<= 720 ? (
                        <tr>
                            <td  rowSpan="2">
                                <div className='header-cell'>
                                {data.route}
                                </div>
                                <div className='body-cell' >
                                    US$ {data.price}
                                </div>
                            </td>
                        </tr>
                    ): null}
            </tbody>
        </table>
    </>
  )
}

export default Quote