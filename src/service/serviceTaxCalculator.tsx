import axios from "axios"
import Home from "../app/page";


const APIURL =  "http://localhost:5001/tax-calculator/"

const serviceTaxCalculator = async (income: any, year: any) => {
    let response

    try {
        response = await axios.get(APIURL);
        var res = response.data.tax_brackets;

        console.log("API response", res)

        var amountTaxable, taxPayable, total = 0;
        for(let i=0; i<res.length; i++){
            if(res[i].max){
                amountTaxable = res[i].max - res[i].min
                taxPayable = amountTaxable * res[i].rate;
            } else {
               amountTaxable = income - res[i].min;
               taxPayable = amountTaxable * res[i].rate;
            }
            total += taxPayable;
           // console.log(amountTaxable);
        }

    }catch(exception){
        console.log("exception", exception)
    }
    
    return (
        <div>

        </div>
    )

}

export default serviceTaxCalculator