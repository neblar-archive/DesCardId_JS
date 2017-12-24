/**
 * CardIdentifier
 * This class provides with the functions that can be used to identify card
 * numbers from a given piece of text.
 *
 * Any given text will be returned with a formatted duplicate which will
 * have any fragments of text that are suspected of being credit card
 * numbers marked.
 *
 * @author      Rijul Gupta <rijulg@neblar.com>
 * @since       24 Dec 2017
 * @copyright   2017 Neblar Technologies
 * @license     MIT
*/

class CardIdentifier{

    /**
     * CardIdentifier constructor.
     * The parameters are provided here to customize the functionality of checks by altering
     * the level of checks, the probabilities assigned to various validations, the constants
     * used for validation and the markers used to identify suspected entries
     *
     * @param {number}                thresholdAlert     the threshold used for separating numbers which we are sure about and those we aren't
     * @param {number}                thresholdNotice    the threshold used for separating numbers which we are sure about and those we aren't
     * @param {int}                   checkLevel         the level of check used to inspect the text and identify numbers [1-2]
     * @param {string}                alert              the text used to identify the numbers that are identified with certainty
     * @param {string}                notice             the text used to identify the numbers that are identified without uncertainty
     * @param {int}                   maxCardLength      the maximum length of card to detect, this is used to break the text into fragments only
     * @param {int}                   minCardLength      the minimum length of card to detect, this is used to break the text into fragments only
     * @param {Object}                probabilities      the probabilities assigned to various validations in ValidationFunctions
     * @param {ValidationConstants}   constantsClass     the constants used for validation
     */
    constructor(thresholdAlert = null,thresholdNotice = null, checkLevel = null, alert = null,
                notice = null, maxCardLength = null, minCardLength = null, probabilities = null,
                constantsClass = null){
        this.alert            = (alert === null) ? 'ALERT' : alert;
        this.checkLevel       = (checkLevel === null) ? 2 : checkLevel;
        this.notice           = (notice === null) ? 'NOTICE' : notice;
        this.textManipulator  = new TextManipulator(maxCardLength, minCardLength);
        this.thresholdAlert   = thresholdAlert;
        this.thresholdNotice  = thresholdNotice;
        this.validator        = new CardNumberValidator(probabilities, constantsClass);
    }

    /**
     * inspectText
     * inspects the provided text and formats the text to reflect identified
     * card numbers in the text.
     * This function works without setting any of the properties in the constructor
     * with defaults in all the subsequent classes.
     *
     * @param  {string} text the text that needs to be inspected
     * @return string formatted text
     */
    inspectText(text){
        const fragments = this.textManipulator.getSuspectedFragments(text, this.checkLevel);
        for(let i=0; i<fragments.length; i++){
            const number = this.textManipulator.extractNumberFromText(fragments[i]);
            if(number !== null){
                if(this.validator.isPossibleToBeACreditCard(number)){
                    if(this.validator.isSurelyACreditCardNumber(number, this.thresholdAlert)){
                        text = this.textManipulator.markFragment(text,fragments[i],this.alert);
                    }
                }
            }
        }
        return text;
    }

    /**
     * inspectTextWithNotices
     * inspects the provided text and formats the text to reflect identified
     * card numbers in the text.
     * A notice is added to numbers that have a probability more than thresholdNotice
     * of being a credit card.
     *
     * To make use of this function properly set the thresholdAlert and thresholdNotice
     * in the constructor to a desired value. If you don't want any thresholds for the
     * notices then just leave it blank or pass null.
     *
     * @param  {string} text the text that needs to be inspected
     * @return string formatted text
    */
    inspectTextWithNotices(text){
        const fragments = this.textManipulator.getSuspectedFragments(text, this.checkLevel);
        for(let i=0; i<fragments.length; i++){
            const number = this.textManipulator.extractNumberFromText(fragments[i]);
            if(number !== null){
                if(this.validator.isPossibleToBeACreditCard(number)){
                    const probability = this.validator.calculateProbabilityOfBeingACreditCard(number);
                    if(this.thresholdAlert === null || probability > this.thresholdAlert){
                        text = this.textManipulator.markFragment(text,fragments[i],this.alert);
                    }
                    else if(this.thresholdNotice === null || probability > this.thresholdNotice){
                        text = this.textManipulator.markFragment(text,fragments[i],this.notice);
                    }
                }
            }
        }
        return text;
    }

}