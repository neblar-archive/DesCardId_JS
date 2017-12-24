/**
 * ValidationFunctions
 * This class contains all the various algorithms we employ in determining
 * that a given number belongs to a credit card or not.
 *
 * Only a valid, formatted number should be passed to these functions.
 * Formatted here implies that there should be no spaces or special
 * characters between the provided number.
 *
 * The functions do not have an extra layer of number validation because
 * that particular check should happen before you access any of these.
 *
 * @author      Rijul Gupta <rijulg@neblar.com>
 * @since       24 Dec 2017
 * @copyright   2017 Neblar Technologies
 * @license     MIT
*/

class ValidationFunctions{


    /**
     * ValidationFunctions constructor.
     * The constructor allows us to customize the constants that will be used to conduct the validations.
     *
     * @param {ValidationConstants}   constantsClass the constants used for validation
     */
    constructor(constantsClass = null){
        this.constants = (constantsClass === null) ? new ValidationConstants() : constantsClass;
    }

    /**
     * validateKnownTestNumbers
     * checks if the given number matches any of the disclosed test numbers
     * provided by the major companies
     *
     * @param  {string}     number the number to be checked
     * @return {boolean}    true if number matches a known test number, false otherwise
    */
    validateKnownTestNumbers(number){
        return (this.constants.KNOWN_TEST_NUMBERS.indexOf(number) !== -1);
    }

    /**
     * validateLength
     * returns the likelihood of a number being a credit card number based
     * just on it's length. So a common length like 16 would return 100,
     * an uncommon one like 18 would return 60 while others would return 0.
     *
     * @param  {string} number the number to be checked
     * @return {int} likelihood associated with length of number
    */
    validateLength(number){
        const length = number.length;
        if(this.constants.PROBABILITIES_LENGTH.hasOwnProperty(length)){
            return this.constants.PROBABILITIES_LENGTH[length];
        }
        return 0;
    }

    /**
     * validateLUHN
     * performs a LUHN check on the number
     *
     * @param  {string} number the number to be checked
     * @return {boolean}   true if passes the check, false otherwise
    */
    validateLUHN(number){
        let sum = 0;
        const length = number.length;
        const lastDigit = parseInt(number[length-1]);
        number = number.substr(0,length-1);
        number = this.reverseString(number);
        for(let i=0; i<length-1; i++){
            let digit = parseInt(number[i]);

            if(i%2 === 0){
                digit *= 2;
                if (digit > 9){
                    digit -= 9;
                }
            }

            sum += digit;
        }
        return (((sum+lastDigit)%10)===0);
    }

    /**
     * validatePossibility
     * determines whether it is at least possible for a given number
     * to be a credit card or not.
     *
     * @param  {string} number the number to be checked
     * @return {boolean}   true if it is possible, false otherwise
    */
    validatePossibility(number){

        if((!isNaN(parseFloat(number)) && isFinite(number)) === false){
            return false;
        }

        const length = number.length;

        if(length < this.constants.MIN_POSSIBLE_LENGTH){
            return false;
        }

        if(length > this.constants.MAX_POSSIBLE_LENGTH){
            return false;
        }

        return true;
    }

    /**
     * validateProvider
     * checks if a provider can be identified for the given card number
     * and returns the certainty of identification mapped from 0 to 100
     *
     * @param  {string} number the number to be checked
     * @return {number} probability of surety of identification of a provider
    */
    validateProvider(number){
        const providers = this.constants.PROBABILITIES_REGEX_PROVIDERS;
        for(let regex in providers){
            if(providers.hasOwnProperty(regex)) {
                if (new RegExp(regex).test(number)) {
                    return providers[regex];
                }
            }
        }
        return 0;
    }

    /**
     * reverseString
     * reverses a given string
     * @param {string} string
     * @return {string} the reversed string
     */
    reverseString(string){
        let i = string.length - 1,
            out = '';
        for (; i >= 0;){
            out += string[i--]
        }
        return out;
    }

}
