import axios from "axios"

const APIURL =  "http://localhost:5001/tax-calculator/"
const serviceTaxCalculator = async () => {
    let response 
    //axios.get(APIURL).then( res => res).catch( error => console.log(error));
    
    try {
        response = await axios.get(APIURL);
        var res = response.data
        console.log("API response", res)

    }catch(exception){
        console.log("exception", exception)
    }
    
    return response

}

export default serviceTaxCalculator