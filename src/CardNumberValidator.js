/**
 * CardNumberValidator
 * This class provides with the functions that can be used to validate a
 * card number.
 *
 * You should first ensure that a number can possibly be a credit card number
 * by calling "isImpossibleToBeACreditCard" function and checking that it is
 * false, after that you can check if we can surely say that a number is a
 * credit card number or not by calling "isSurelyACreditCardNumber".
 * The level of threshold for check can be set and should be decided based
 * on how sure you want to be.
 *
 * @author      Rijul Gupta <rijulg@neblar.com>
 * @since       24 Dec 2017
 * @copyright   2017 Neblar Technologies
 * @license     MIT
*/


class CardNumberValidator{


    /**
     * CardNumberValidator constructor.
     * the constructor allows us to customize the probabilities used for the validation check as well as
     * define the constants that should be used to conduct the validation
     *
     * @param {Object}                 probabilities  the probabilities assigned to various validations in ValidationFunctions
     * @param {ValidationConstants}   constantsClass the constants used for validation
     */
    constructor(probabilities = null, constantsClass = null){
        this.DEFAULT_THRESHOLD = 85;
        if(probabilities === null){
            this.probabilities = {
                'LUHN':60,
                'TEST_NUMBERS':100,
                'PROVIDERS':15,
                'LENGTH':15,
            };
        }
        else{
            this.probabilities = probabilities;
        }

        if(constantsClass === null){
            this.validator = new ValidationFunctions();
        }
        else{
            this.validator = new ValidationFunctions(constantsClass);
        }
    }

    /**
     * calculateProbabilityOfBeingACreditCard
     * This function calculates the probability of a number being associated
     * with a credit card.
     * The probability associated with each check is declared separately in
     * a constants class
     *
     * @param  {string} number the number to be checked
     * @return {number} total probability of a number being a credit card number
    */
    calculateProbabilityOfBeingACreditCard(number){

        let probability = 0;

        if(this.validator.validateKnownTestNumbers(number)){
            probability += this.probabilities['TEST_NUMBERS'];
        }

        if(this.validator.validateLUHN(number)){
            probability += this.probabilities['LUHN'];
        }

        probability += ( this.validator.validateProvider(number) * (this.probabilities['PROVIDERS'] / 100) );

        probability += ( this.validator.validateLength(number) * (this.probabilities['LENGTH'] / 100) );

        return probability;
    }

    /**
     * isPossibleToBeACreditCard
     * wrapper function to check whether the number can possibly be a credit
     * card number or not.
     *
     * @param  {string} number the number to be checked
     * @return {boolean}   true if number can be a credit card, false otherwise
    */
    isPossibleToBeACreditCard(number){
        return this.validator.validatePossibility(number);
    }

    /**
     * isSurelyACreditCardNumber
     * compares the probability of given number being a credit card number
     * to specified threshold. If the threshold is not specified, it gets
     * defaulted to the defaults set in the constants class
     *
     * @param  {string} number    the number to be checked
     * @param  {number} threshold the tolerable level of uncertainty
     * @return {boolean} true if we are sure, false otherwise
    */
    isSurelyACreditCardNumber(number, threshold = -1){
        if(threshold === -1){
            threshold = this.DEFAULT_THRESHOLD;
        }

        let probability = this.calculateProbabilityOfBeingACreditCard(number);

        return (probability > threshold);
    }

    /**
     * setProbabilities
     * This is a helper function that helps set the probabilities for
     * calculation. This allows the users to customize the calculation for
     * their needs.
     * If the setup fails on any step it reverts to the original settings.
     *
     * @param   {Array} keyValuePairs array of key => value pairs to be set
     * @return  {boolean}  false if fails on any step, true otherwise
    */
    setProbabilities(keyValuePairs){
        const originalProbabilities = this.probabilities;
        for(let key in keyValuePairs){
            if(keyValuePairs.hasOwnProperty(key)){
                if(key in this.probabilities){
                    this.probabilities[key] = keyValuePairs[key];
                }
                else{
                    this.probabilities = originalProbabilities;
                    return false;
                }
            }
        }
        return true;
    }

}
