/**
 * TextManipulator
 * This class provides with the s that are used to break the text into fragments,
 * and perform other text manipulations.
 *
 * @author      Rijul Gupta <rijulg@neblar.com>
 * @since       24 Dec 2017
 * @copyright   2017 Neblar Technologies
 * @license     MIT
 */

class TextManipulator{

    /**
     * TextManipulator constructor.
     * The constructor allows to set the minimum and maximum card lengths, these are
     * used to break the text into fragments.
     *
     * @param {int} maxCardLength the maximum length of card to detect, this is used to break the text into fragments only
     * @param {int} minCardLength the minimum length of card to detect, this is used to break the text into fragments only
     */
    constructor(maxCardLength = null, minCardLength = null){
        this.maxCardLength = (maxCardLength === null) ? 20 : maxCardLength;
        this.minCardLength = (minCardLength === null) ? 7 : minCardLength;
    }

    /**
     * extractNumberFromText
     * extracts a number from the provided text
     *
     * @param  {string} text the text from which to extract the number
     * @return {string|null} the extracted number or null
     */
    extractNumberFromText(text){
        let number =  text.replace(new RegExp("[^0-9]", "g"), '');
        if(number.length === 0){
            return null;
        }
        return number;
    }

    /**
     * getContinuousNumbers
     * returns the numbers that appear continuously in given text. For ex:
     * " bla bla 123456 bla bla" will return ["123456"]
     *
     * @param {string} text the text from which to extract the numbers
     * @return {Array} the array of numbers extracted
     */
    getContinuousNumbers(text){
        return text.match(new RegExp("([0-9]+)", "g"));
    }

    /**
     * getDiscontinuousNumbers
     * returns the numbers that appear continuously in given text. For ex:
     * " bla bla 123 456 bla 321-4 5 bla 9876" will return ["123 456", "321-4 5", "9876"]
     *
     * @param {string} text the text from which to extract the numbers
     * @return {Array} the array of numbers extracted
     */
    getDiscontinuousNumbers(text){
        return text.match(new RegExp("([0-9]+(((?![a-zA-Z]))([^a-zA-Z]+))[0-9])", "g"));
    }

    /**
     * getSuspectedFragments
     * breaks the given text into suspected fragments which contain a number.
     * This number will further be inspected for accessing whether it belongs to
     * a credit card or not.
     *
     * @param {string} text the string from which to extract the fragments
     * @param {int} checkLevel the level of check used to inspect the text and identify numbers [1-2]
     * @return {Array} the array of suspected fragments
     */
    getSuspectedFragments(text, checkLevel){
        let fragments;
        switch(checkLevel){
            case 2  :   fragments = this.getDiscontinuousNumbers(text);
                        break;
            case 1  :
            default :   fragments = this.getContinuousNumbers(text);
        }
        if(fragments === null) {
            return [];
        }
        return fragments.filter((el, i, a) => i === a.indexOf(el));
    }

    /**
     * markFragment
     * marks the specified fragment in given text with the provided marker
     * The main text is passed by reference, so the original text gets changed.
     *
     * @param {string} text      the text in which to do the marking
     * @param {string} fragment  the fragment that needs to be marked
     * @param {string} marker    the marker used to identify the mark
     */
    markFragment(text, fragment, marker){
        if(fragment === '') return text;
        let replacement = "{{"+fragment+"}["+marker+"]}";
        return text.replace(new RegExp(fragment, "g"),replacement);
    }

}