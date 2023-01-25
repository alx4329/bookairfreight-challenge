import moment from "moment";
export const getQuote = ({fromCountry,toCountry,price,channel})  => {
    const deliveryRange = getDeliveryRange(channel)
    const deliveryDate = getDeliveryDate(deliveryRange)
    const route = `${fromCountry} >> ${toCountry}`
    return {
        channel,
        deliveryRange: `${deliveryRange.start}-${deliveryRange.end} days`, 
        deliveryDate, 
        route, 
        price}
}

const getDeliveryRange = (channel) =>{
    let start ;
    let end;
    if(channel ==='air') {
        start = Math.round(3 + Math.random()*4)
        end = start + Math.round(2 + Math.random()*2)
    }
    else {
        start = Math.round(25 + Math.random()*5)
        end = start + Math.round(5 + Math.random()*5)
    }
    return {start, end}
}

const getDeliveryDate = (range) =>{
    const today = moment()
    const start = moment(today).add(range.start,'days')
    const to = moment(today).add(range.end,'days')
    return `${start.format("MMM DD")} - ${to.format("MMM DD")}`
}