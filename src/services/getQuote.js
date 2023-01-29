import moment from "moment";
import countryList from 'country-list'

export const getQuote = ({fromCountry,toCountry,price,channel})  => {
    const deliveryRange = getDeliveryRange(channel)
    const deliveryDate = getDeliveryDate(deliveryRange)
    const route = `${toUpperCase(fromCountry)} >> ${toUpperCase(toCountry)}`
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
const toUpperCase = (str) => {
    const words = str.split(' ')
    const upperCase = words.map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return upperCase.join('')
}
export const validateCountry = (country) => {
    if(!country || typeof(country) !== 'string') return false
    const trimCountry = country.trim()
    const nameandcodes = countryList.getNameList()
    if(nameandcodes[trimCountry.toLowerCase()]) return true
    else {
            const names = countryList.getNames()
            const found = names.find(item => item.toLocaleLowerCase().includes(trimCountry.toLocaleLowerCase()))
            return found ? true : false
        }
}

export const validatePrice = (price) => {
    return price > 0 ? true : false
}