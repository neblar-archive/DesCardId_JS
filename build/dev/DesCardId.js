/**
 * DesCardId
 * DesCardId (of Card Identification) is a php library used for identifying credit card numbers in text.
 * @version v1.0.0
 * @since December 26, 2017
 * @link http://neblar.com
 * @copyright 2017 Neblar Technologies
 * @license MIT
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ValidationConstants
 * This class contains all the constants that are used for various
 * validations.
 *
 * @author      Rijul Gupta <rijulg@neblar.com>
 * @since       24 Dec 2017
 * @copyright   2017 Neblar Technologies
 * @license     MIT
*/

var ValidationConstants = function ValidationConstants() {
    _classCallCheck(this, ValidationConstants);

    this.MIN_POSSIBLE_LENGTH = 7;
    this.MAX_POSSIBLE_LENGTH = 19;

    /*
     *These are probabilities based on the most common card lengths
    */
    this.PROBABILITIES_LENGTH = {
        16: 100, /*This is the most common card number length*/
        15: 100, /*American Express has cards of this length*/
        13: 80 /*VISA sometimes makes cards of this length*/
    };

    /*
     * If the identification fingerprints of a type of card are too few
     * i.e. if the regex patter is too short, which in turns means that
     * it might produce more false positives the probability assigned
     * to that particular regex is low.
    */
    this.PROBABILITIES_REGEX_PROVIDERS = {
        /*Regex to identify mastercard*/
        '^(5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,})': 100,
        /*Regex to identify american express*/
        '^(3[47][0-9]{5,})': 70,
        /*Regex to identify VISA*/
        '^(4[0-9]{6,})': 50,
        /*Regex to identify Diners Club*/
        '^(3(?:0[0-5]|[68][0-9])[0-9]{4,})': 85,
        /*Regex to identify Discover*/
        '^(6(?:011|5[0-9]{2})[0-9]{3,})': 80,
        /*Regex to identify JCB*/
        '^((?:2131|1800|35[0-9]{3})[0-9]{3,})': 85
    };

    /*
     * These are the test numbers that are openly provided by various providers
     * so that we can correctly identify if someone checks for any of These
     * with full certainty
    */
    this.KNOWN_TEST_NUMBERS = ['378282246310005', /*American Express*/
    '371449635398431', /*American Express*/
    '345436849253786', /*American Express*/
    '344343597098739', /*American Express*/
    '348195053148184', /*American Express*/
    '346761128958196', /*American Express*/
    '379983963916986', /*American Express*/
    '376749501879009', /*American Express*/
    '349204254634213', /*American Express*/
    '376432510463566', /*American Express*/
    '378734493671000', /*American Express Corporate*/
    '5610591081018250', /*Australian BankCard*/
    '30569309025904', /*Diners Club*/
    '38520000023237', /*Diners Club*/
    '30467323783394', /*Diners Club (Carte Blanche)*/
    '30389589049437', /*Diners Club (Carte Blanche)*/
    '30213469782901', /*Diners Club (Carte Blanche)*/
    '36197365718891', /*Diners Club (International)*/
    '36823785024749', /*Diners Club (International)*/
    '36251701871102', /*Diners Club (International)*/
    '5485157059278227', /*Diners Club (North America)*/
    '5418199988362484', /*Diners Club (North America)*/
    '5402093870675764', /*Diners Club (North America)*/
    '6011111111111117', /*Discover*/
    '6011000990139424', /*Discover*/
    '6011540018341759', /*Discover*/
    '6011052057723921', /*Discover*/
    '6011277618211484585', /*Discover*/
    '6011861286835722', /*Discover*/
    '6011890376173660', /*Discover*/
    '6011464247892518', /*Discover*/
    '6011244758428047', /*Discover*/
    '6011469345729306', /*Discover*/
    '6382961806046593', /*InstaPayment*/
    '6373413397497463', /*InstaPayment*/
    '6375275217437369', /*InstaPayment*/
    '3530111333300000', /*JCB*/
    '3566002020360505', /*JCB*/
    '3566111111111113', /*JCB*/
    '3529844470994754', /*JCB*/
    '3535754231437369', /*JCB*/
    '3541031337467299722', /*JCB*/
    '6762678941084830', /*Maestro*/
    '5018131548158304', /*Maestro*/
    '6304521934333993', /*Maestro*/
    '50339619890917', /*Maestro (International)*/
    '586824160825533338', /*Maestro (International)*/
    '6759411100000008', /*Maestro (UK Domestic)*/
    '6759560045005727054', /*Maestro (UK Domestic)*/
    '5641821111166669', /*Maestro (UK Domestic)*/
    '5555555555554444', /*MasterCard*/
    '5105105105105100', /*MasterCard*/
    '2222420000001113', /*MasterCard*/
    '2222630000001125', /*MasterCard*/
    '5246772059242294', /*MasterCard*/
    '5365643412360922', /*MasterCard*/
    '5310506475502852', /*MasterCard*/
    '5192310560826646', /*MasterCard*/
    '5174224924081487', /*MasterCard*/
    '5353732311938484', /*MasterCard*/
    '5203246075883952', /*MasterCard*/
    '5186682476306626', /*MasterCard*/
    '4111111111111111', /*VISA*/
    '4012888888881881', /*VISA*/
    '4222222222222', /*VISA*/
    '4330954187429262', /*VISA*/
    '4916861873042626', /*VISA*/
    '4024007176658892119', /*VISA*/
    '4485992558886887', /*VISA*/
    '4556556689853209', /*VISA*/
    '4532379342751077', /*VISA*/
    '4024007153524987', /*VISA*/
    '4485643204102613', /*VISA*/
    '4508138079686538', /*VISA (electron)*/
    '4026207140510119', /*VISA (electron)*/
    '4508608593847550', /*VISA (electron)*/
    '5019717010103742', /*PBS*/
    '6331101999990016', /*Paymentech*/
    '135412345678911'];
};

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

var ValidationFunctions = function () {

    /**
     * ValidationFunctions constructor.
     * The constructor allows us to customize the constants that will be used to conduct the validations.
     *
     * @param {ValidationConstants}   constantsClass the constants used for validation
     */
    function ValidationFunctions() {
        var constantsClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, ValidationFunctions);

        this.constants = constantsClass === null ? new ValidationConstants() : constantsClass;
    }

    /**
     * validateKnownTestNumbers
     * checks if the given number matches any of the disclosed test numbers
     * provided by the major companies
     *
     * @param  {string}     number the number to be checked
     * @return {boolean}    true if number matches a known test number, false otherwise
    */


    _createClass(ValidationFunctions, [{
        key: 'validateKnownTestNumbers',
        value: function validateKnownTestNumbers(number) {
            return this.constants.KNOWN_TEST_NUMBERS.indexOf(number) !== -1;
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

    }, {
        key: 'validateLength',
        value: function validateLength(number) {
            var length = number.length;
            if (this.constants.PROBABILITIES_LENGTH.hasOwnProperty(length)) {
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

    }, {
        key: 'validateLUHN',
        value: function validateLUHN(number) {
            var sum = 0;
            var length = number.length;
            var lastDigit = parseInt(number[length - 1]);
            number = number.substr(0, length - 1);
            number = this.reverseString(number);
            for (var i = 0; i < length - 1; i++) {
                var digit = parseInt(number[i]);

                if (i % 2 === 0) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }

                sum += digit;
            }
            return (sum + lastDigit) % 10 === 0;
        }

        /**
         * validatePossibility
         * determines whether it is at least possible for a given number
         * to be a credit card or not.
         *
         * @param  {string} number the number to be checked
         * @return {boolean}   true if it is possible, false otherwise
        */

    }, {
        key: 'validatePossibility',
        value: function validatePossibility(number) {

            if ((!isNaN(parseFloat(number)) && isFinite(number)) === false) {
                return false;
            }

            var length = number.length;

            if (length < this.constants.MIN_POSSIBLE_LENGTH) {
                return false;
            }

            if (length > this.constants.MAX_POSSIBLE_LENGTH) {
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

    }, {
        key: 'validateProvider',
        value: function validateProvider(number) {
            var providers = this.constants.PROBABILITIES_REGEX_PROVIDERS;
            for (var regex in providers) {
                if (providers.hasOwnProperty(regex)) {
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

    }, {
        key: 'reverseString',
        value: function reverseString(string) {
            var i = string.length - 1,
                out = '';
            for (; i >= 0;) {
                out += string[i--];
            }
            return out;
        }
    }]);

    return ValidationFunctions;
}();

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

var CardNumberValidator = function () {

    /**
     * CardNumberValidator constructor.
     * the constructor allows us to customize the probabilities used for the validation check as well as
     * define the constants that should be used to conduct the validation
     *
     * @param {Object}                 probabilities  the probabilities assigned to various validations in ValidationFunctions
     * @param {ValidationConstants}   constantsClass the constants used for validation
     */
    function CardNumberValidator() {
        var probabilities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var constantsClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, CardNumberValidator);

        this.DEFAULT_THRESHOLD = 85;
        if (probabilities === null) {
            this.probabilities = {
                'LUHN': 60,
                'TEST_NUMBERS': 100,
                'PROVIDERS': 15,
                'LENGTH': 15
            };
        } else {
            this.probabilities = probabilities;
        }

        if (constantsClass === null) {
            this.validator = new ValidationFunctions();
        } else {
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


    _createClass(CardNumberValidator, [{
        key: 'calculateProbabilityOfBeingACreditCard',
        value: function calculateProbabilityOfBeingACreditCard(number) {

            var probability = 0;

            if (this.validator.validateKnownTestNumbers(number)) {
                probability += this.probabilities['TEST_NUMBERS'];
            }

            if (this.validator.validateLUHN(number)) {
                probability += this.probabilities['LUHN'];
            }

            probability += this.validator.validateProvider(number) * (this.probabilities['PROVIDERS'] / 100);

            probability += this.validator.validateLength(number) * (this.probabilities['LENGTH'] / 100);

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

    }, {
        key: 'isPossibleToBeACreditCard',
        value: function isPossibleToBeACreditCard(number) {
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

    }, {
        key: 'isSurelyACreditCardNumber',
        value: function isSurelyACreditCardNumber(number) {
            var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (threshold === null) {
                threshold = this.DEFAULT_THRESHOLD;
            }

            var probability = this.calculateProbabilityOfBeingACreditCard(number);

            return probability > threshold;
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

    }, {
        key: 'setProbabilities',
        value: function setProbabilities(keyValuePairs) {
            var originalProbabilities = this.probabilities;
            for (var key in keyValuePairs) {
                if (keyValuePairs.hasOwnProperty(key)) {
                    if (key in this.probabilities) {
                        this.probabilities[key] = keyValuePairs[key];
                    } else {
                        this.probabilities = originalProbabilities;
                        return false;
                    }
                }
            }
            return true;
        }
    }]);

    return CardNumberValidator;
}();

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

var TextManipulator = function () {

    /**
     * TextManipulator constructor.
     * The constructor allows to set the minimum and maximum card lengths, these are
     * used to break the text into fragments.
     *
     * @param {int} maxCardLength the maximum length of card to detect, this is used to break the text into fragments only
     * @param {int} minCardLength the minimum length of card to detect, this is used to break the text into fragments only
     */
    function TextManipulator() {
        var maxCardLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var minCardLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, TextManipulator);

        this.maxCardLength = maxCardLength === null ? 20 : maxCardLength;
        this.minCardLength = minCardLength === null ? 7 : minCardLength;
    }

    /**
     * extractNumberFromText
     * extracts a number from the provided text
     *
     * @param  {string} text the text from which to extract the number
     * @return {string|null} the extracted number or null
     */


    _createClass(TextManipulator, [{
        key: 'extractNumberFromText',
        value: function extractNumberFromText(text) {
            var number = text.replace(new RegExp("[^0-9]", "g"), '');
            if (number.length === 0) {
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

    }, {
        key: 'getContinuousNumbers',
        value: function getContinuousNumbers(text) {
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

    }, {
        key: 'getDiscontinuousNumbers',
        value: function getDiscontinuousNumbers(text) {
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

    }, {
        key: 'getSuspectedFragments',
        value: function getSuspectedFragments(text, checkLevel) {
            var fragments = void 0;
            switch (checkLevel) {
                case 2:
                    fragments = this.getDiscontinuousNumbers(text);
                    break;
                case 1:
                default:
                    fragments = this.getContinuousNumbers(text);
            }
            if (fragments === null) {
                return [];
            }
            return fragments.filter(function (el, i, a) {
                return i === a.indexOf(el);
            });
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

    }, {
        key: 'markFragment',
        value: function markFragment(text, fragment, marker) {
            if (fragment === '') return text;
            var replacement = "{{" + fragment + "}[" + marker + "]}";
            return text.replace(new RegExp(fragment, "g"), replacement);
        }
    }]);

    return TextManipulator;
}();
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

var CardIdentifier = function () {

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
    function CardIdentifier() {
        var thresholdAlert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var thresholdNotice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var checkLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var alert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var notice = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var maxCardLength = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var minCardLength = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var probabilities = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        var constantsClass = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;

        _classCallCheck(this, CardIdentifier);

        this.alert = alert === null ? 'ALERT' : alert;
        this.checkLevel = checkLevel === null ? 2 : checkLevel;
        this.notice = notice === null ? 'NOTICE' : notice;
        this.textManipulator = new TextManipulator(maxCardLength, minCardLength);
        this.thresholdAlert = thresholdAlert;
        this.thresholdNotice = thresholdNotice;
        this.validator = new CardNumberValidator(probabilities, constantsClass);
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


    _createClass(CardIdentifier, [{
        key: 'inspectText',
        value: function inspectText(text) {
            var fragments = this.textManipulator.getSuspectedFragments(text, this.checkLevel);
            for (var i = 0; i < fragments.length; i++) {
                var number = this.textManipulator.extractNumberFromText(fragments[i]);
                if (number !== null) {
                    if (this.validator.isPossibleToBeACreditCard(number)) {
                        if (this.validator.isSurelyACreditCardNumber(number, this.thresholdAlert)) {
                            text = this.textManipulator.markFragment(text, fragments[i], this.alert);
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

    }, {
        key: 'inspectTextWithNotices',
        value: function inspectTextWithNotices(text) {
            var fragments = this.textManipulator.getSuspectedFragments(text, this.checkLevel);
            for (var i = 0; i < fragments.length; i++) {
                var number = this.textManipulator.extractNumberFromText(fragments[i]);
                if (number !== null) {
                    if (this.validator.isPossibleToBeACreditCard(number)) {
                        var probability = this.validator.calculateProbabilityOfBeingACreditCard(number);
                        if (this.thresholdAlert === null || probability > this.thresholdAlert) {
                            text = this.textManipulator.markFragment(text, fragments[i], this.alert);
                        } else if (this.thresholdNotice === null || probability > this.thresholdNotice) {
                            text = this.textManipulator.markFragment(text, fragments[i], this.notice);
                        }
                    }
                }
            }
            return text;
        }
    }]);

    return CardIdentifier;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbGlkYXRpb25Db25zdGFudHMuanMiLCJWYWxpZGF0aW9uRnVuY3Rpb25zLmpzIiwiQ2FyZE51bWJlclZhbGlkYXRvci5qcyIsIlRleHRNYW5pcHVsYXRvci5qcyIsIkNhcmRJZGVudGlmaWVyLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRpb25Db25zdGFudHMiLCJNSU5fUE9TU0lCTEVfTEVOR1RIIiwiTUFYX1BPU1NJQkxFX0xFTkdUSCIsIlBST0JBQklMSVRJRVNfTEVOR1RIIiwiUFJPQkFCSUxJVElFU19SRUdFWF9QUk9WSURFUlMiLCJLTk9XTl9URVNUX05VTUJFUlMiLCJWYWxpZGF0aW9uRnVuY3Rpb25zIiwiY29uc3RhbnRzQ2xhc3MiLCJjb25zdGFudHMiLCJudW1iZXIiLCJpbmRleE9mIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJzdW0iLCJsYXN0RGlnaXQiLCJwYXJzZUludCIsInN1YnN0ciIsInJldmVyc2VTdHJpbmciLCJpIiwiZGlnaXQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc0Zpbml0ZSIsInByb3ZpZGVycyIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsInN0cmluZyIsIm91dCIsIkNhcmROdW1iZXJWYWxpZGF0b3IiLCJwcm9iYWJpbGl0aWVzIiwiREVGQVVMVF9USFJFU0hPTEQiLCJ2YWxpZGF0b3IiLCJwcm9iYWJpbGl0eSIsInZhbGlkYXRlS25vd25UZXN0TnVtYmVycyIsInZhbGlkYXRlTFVITiIsInZhbGlkYXRlUHJvdmlkZXIiLCJ2YWxpZGF0ZUxlbmd0aCIsInZhbGlkYXRlUG9zc2liaWxpdHkiLCJ0aHJlc2hvbGQiLCJjYWxjdWxhdGVQcm9iYWJpbGl0eU9mQmVpbmdBQ3JlZGl0Q2FyZCIsImtleVZhbHVlUGFpcnMiLCJvcmlnaW5hbFByb2JhYmlsaXRpZXMiLCJrZXkiLCJUZXh0TWFuaXB1bGF0b3IiLCJtYXhDYXJkTGVuZ3RoIiwibWluQ2FyZExlbmd0aCIsInRleHQiLCJyZXBsYWNlIiwibWF0Y2giLCJjaGVja0xldmVsIiwiZnJhZ21lbnRzIiwiZ2V0RGlzY29udGludW91c051bWJlcnMiLCJnZXRDb250aW51b3VzTnVtYmVycyIsImZpbHRlciIsImVsIiwiYSIsImZyYWdtZW50IiwibWFya2VyIiwicmVwbGFjZW1lbnQiLCJDYXJkSWRlbnRpZmllciIsInRocmVzaG9sZEFsZXJ0IiwidGhyZXNob2xkTm90aWNlIiwiYWxlcnQiLCJub3RpY2UiLCJ0ZXh0TWFuaXB1bGF0b3IiLCJnZXRTdXNwZWN0ZWRGcmFnbWVudHMiLCJleHRyYWN0TnVtYmVyRnJvbVRleHQiLCJpc1Bvc3NpYmxlVG9CZUFDcmVkaXRDYXJkIiwiaXNTdXJlbHlBQ3JlZGl0Q2FyZE51bWJlciIsIm1hcmtGcmFnbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0lBV0FBLG1CLEdBRUEsK0JBQUE7QUFBQTs7QUFDQSxTQUFBQyxtQkFBQSxHQUFBLENBQUE7QUFDQSxTQUFBQyxtQkFBQSxHQUFBLEVBQUE7O0FBRUE7OztBQUdBLFNBQUFDLG9CQUFBLEdBQUE7QUFDQSxZQUFBLEdBREEsRUFDQTtBQUNBLFlBQUEsR0FGQSxFQUVBO0FBQ0EsWUFBQSxFQUhBLENBR0E7QUFIQSxLQUFBOztBQU1BOzs7Ozs7QUFNQSxTQUFBQyw2QkFBQSxHQUFBO0FBQ0E7QUFDQSwrR0FBQSxHQUZBO0FBR0E7QUFDQSw2QkFBQSxFQUpBO0FBS0E7QUFDQSx5QkFBQSxFQU5BO0FBT0E7QUFDQSw2Q0FBQSxFQVJBO0FBU0E7QUFDQSwwQ0FBQSxFQVZBO0FBV0E7QUFDQSxnREFBQTtBQVpBLEtBQUE7O0FBZUE7Ozs7O0FBS0EsU0FBQUMsa0JBQUEsR0FBQSxDQUNBLGlCQURBLEVBQ0E7QUFDQSxxQkFGQSxFQUVBO0FBQ0EscUJBSEEsRUFHQTtBQUNBLHFCQUpBLEVBSUE7QUFDQSxxQkFMQSxFQUtBO0FBQ0EscUJBTkEsRUFNQTtBQUNBLHFCQVBBLEVBT0E7QUFDQSxxQkFSQSxFQVFBO0FBQ0EscUJBVEEsRUFTQTtBQUNBLHFCQVZBLEVBVUE7QUFDQSxxQkFYQSxFQVdBO0FBQ0Esc0JBWkEsRUFZQTtBQUNBLG9CQWJBLEVBYUE7QUFDQSxvQkFkQSxFQWNBO0FBQ0Esb0JBZkEsRUFlQTtBQUNBLG9CQWhCQSxFQWdCQTtBQUNBLG9CQWpCQSxFQWlCQTtBQUNBLG9CQWxCQSxFQWtCQTtBQUNBLG9CQW5CQSxFQW1CQTtBQUNBLG9CQXBCQSxFQW9CQTtBQUNBLHNCQXJCQSxFQXFCQTtBQUNBLHNCQXRCQSxFQXNCQTtBQUNBLHNCQXZCQSxFQXVCQTtBQUNBLHNCQXhCQSxFQXdCQTtBQUNBLHNCQXpCQSxFQXlCQTtBQUNBLHNCQTFCQSxFQTBCQTtBQUNBLHNCQTNCQSxFQTJCQTtBQUNBLHlCQTVCQSxFQTRCQTtBQUNBLHNCQTdCQSxFQTZCQTtBQUNBLHNCQTlCQSxFQThCQTtBQUNBLHNCQS9CQSxFQStCQTtBQUNBLHNCQWhDQSxFQWdDQTtBQUNBLHNCQWpDQSxFQWlDQTtBQUNBLHNCQWxDQSxFQWtDQTtBQUNBLHNCQW5DQSxFQW1DQTtBQUNBLHNCQXBDQSxFQW9DQTtBQUNBLHNCQXJDQSxFQXFDQTtBQUNBLHNCQXRDQSxFQXNDQTtBQUNBLHNCQXZDQSxFQXVDQTtBQUNBLHNCQXhDQSxFQXdDQTtBQUNBLHNCQXpDQSxFQXlDQTtBQUNBLHlCQTFDQSxFQTBDQTtBQUNBLHNCQTNDQSxFQTJDQTtBQUNBLHNCQTVDQSxFQTRDQTtBQUNBLHNCQTdDQSxFQTZDQTtBQUNBLG9CQTlDQSxFQThDQTtBQUNBLHdCQS9DQSxFQStDQTtBQUNBLHNCQWhEQSxFQWdEQTtBQUNBLHlCQWpEQSxFQWlEQTtBQUNBLHNCQWxEQSxFQWtEQTtBQUNBLHNCQW5EQSxFQW1EQTtBQUNBLHNCQXBEQSxFQW9EQTtBQUNBLHNCQXJEQSxFQXFEQTtBQUNBLHNCQXREQSxFQXNEQTtBQUNBLHNCQXZEQSxFQXVEQTtBQUNBLHNCQXhEQSxFQXdEQTtBQUNBLHNCQXpEQSxFQXlEQTtBQUNBLHNCQTFEQSxFQTBEQTtBQUNBLHNCQTNEQSxFQTJEQTtBQUNBLHNCQTVEQSxFQTREQTtBQUNBLHNCQTdEQSxFQTZEQTtBQUNBLHNCQTlEQSxFQThEQTtBQUNBLHNCQS9EQSxFQStEQTtBQUNBLHNCQWhFQSxFQWdFQTtBQUNBLG1CQWpFQSxFQWlFQTtBQUNBLHNCQWxFQSxFQWtFQTtBQUNBLHNCQW5FQSxFQW1FQTtBQUNBLHlCQXBFQSxFQW9FQTtBQUNBLHNCQXJFQSxFQXFFQTtBQUNBLHNCQXRFQSxFQXNFQTtBQUNBLHNCQXZFQSxFQXVFQTtBQUNBLHNCQXhFQSxFQXdFQTtBQUNBLHNCQXpFQSxFQXlFQTtBQUNBLHNCQTFFQSxFQTBFQTtBQUNBLHNCQTNFQSxFQTJFQTtBQUNBLHNCQTVFQSxFQTRFQTtBQUNBLHNCQTdFQSxFQTZFQTtBQUNBLHNCQTlFQSxFQThFQTtBQUNBLHFCQS9FQSxDQUFBO0FBaUZBLEM7O0FDcklBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkFDLG1COztBQUdBOzs7Ozs7QUFNQSxtQ0FBQTtBQUFBLFlBQUFDLGNBQUEsdUVBQUEsSUFBQTs7QUFBQTs7QUFDQSxhQUFBQyxTQUFBLEdBQUFELG1CQUFBLElBQUEsR0FBQSxJQUFBUCxtQkFBQSxFQUFBLEdBQUFPLGNBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O2lEQVFBRSxNLEVBQUE7QUFDQSxtQkFBQSxLQUFBRCxTQUFBLENBQUFILGtCQUFBLENBQUFLLE9BQUEsQ0FBQUQsTUFBQSxNQUFBLENBQUEsQ0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7dUNBU0FBLE0sRUFBQTtBQUNBLGdCQUFBRSxTQUFBRixPQUFBRSxNQUFBO0FBQ0EsZ0JBQUEsS0FBQUgsU0FBQSxDQUFBTCxvQkFBQSxDQUFBUyxjQUFBLENBQUFELE1BQUEsQ0FBQSxFQUFBO0FBQ0EsdUJBQUEsS0FBQUgsU0FBQSxDQUFBTCxvQkFBQSxDQUFBUSxNQUFBLENBQUE7QUFDQTtBQUNBLG1CQUFBLENBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztxQ0FPQUYsTSxFQUFBO0FBQ0EsZ0JBQUFJLE1BQUEsQ0FBQTtBQUNBLGdCQUFBRixTQUFBRixPQUFBRSxNQUFBO0FBQ0EsZ0JBQUFHLFlBQUFDLFNBQUFOLE9BQUFFLFNBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQUYscUJBQUFBLE9BQUFPLE1BQUEsQ0FBQSxDQUFBLEVBQUFMLFNBQUEsQ0FBQSxDQUFBO0FBQ0FGLHFCQUFBLEtBQUFRLGFBQUEsQ0FBQVIsTUFBQSxDQUFBO0FBQ0EsaUJBQUEsSUFBQVMsSUFBQSxDQUFBLEVBQUFBLElBQUFQLFNBQUEsQ0FBQSxFQUFBTyxHQUFBLEVBQUE7QUFDQSxvQkFBQUMsUUFBQUosU0FBQU4sT0FBQVMsQ0FBQSxDQUFBLENBQUE7O0FBRUEsb0JBQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQTtBQUNBQyw2QkFBQSxDQUFBO0FBQ0Esd0JBQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0FBLGlDQUFBLENBQUE7QUFDQTtBQUNBOztBQUVBTix1QkFBQU0sS0FBQTtBQUNBO0FBQ0EsbUJBQUEsQ0FBQU4sTUFBQUMsU0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OzRDQVFBTCxNLEVBQUE7O0FBRUEsZ0JBQUEsQ0FBQSxDQUFBVyxNQUFBQyxXQUFBWixNQUFBLENBQUEsQ0FBQSxJQUFBYSxTQUFBYixNQUFBLENBQUEsTUFBQSxLQUFBLEVBQUE7QUFDQSx1QkFBQSxLQUFBO0FBQ0E7O0FBRUEsZ0JBQUFFLFNBQUFGLE9BQUFFLE1BQUE7O0FBRUEsZ0JBQUFBLFNBQUEsS0FBQUgsU0FBQSxDQUFBUCxtQkFBQSxFQUFBO0FBQ0EsdUJBQUEsS0FBQTtBQUNBOztBQUVBLGdCQUFBVSxTQUFBLEtBQUFILFNBQUEsQ0FBQU4sbUJBQUEsRUFBQTtBQUNBLHVCQUFBLEtBQUE7QUFDQTs7QUFFQSxtQkFBQSxJQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O3lDQVFBTyxNLEVBQUE7QUFDQSxnQkFBQWMsWUFBQSxLQUFBZixTQUFBLENBQUFKLDZCQUFBO0FBQ0EsaUJBQUEsSUFBQW9CLEtBQUEsSUFBQUQsU0FBQSxFQUFBO0FBQ0Esb0JBQUFBLFVBQUFYLGNBQUEsQ0FBQVksS0FBQSxDQUFBLEVBQUE7QUFDQSx3QkFBQSxJQUFBQyxNQUFBLENBQUFELEtBQUEsRUFBQUUsSUFBQSxDQUFBakIsTUFBQSxDQUFBLEVBQUE7QUFDQSwrQkFBQWMsVUFBQUMsS0FBQSxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQUEsQ0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7c0NBTUFHLE0sRUFBQTtBQUNBLGdCQUFBVCxJQUFBUyxPQUFBaEIsTUFBQSxHQUFBLENBQUE7QUFBQSxnQkFDQWlCLE1BQUEsRUFEQTtBQUVBLG1CQUFBVixLQUFBLENBQUEsR0FBQTtBQUNBVSx1QkFBQUQsT0FBQVQsR0FBQSxDQUFBO0FBQ0E7QUFDQSxtQkFBQVUsR0FBQTtBQUNBOzs7Ozs7QUNwSkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CQUMsbUI7O0FBR0E7Ozs7Ozs7O0FBUUEsbUNBQUE7QUFBQSxZQUFBQyxhQUFBLHVFQUFBLElBQUE7QUFBQSxZQUFBdkIsY0FBQSx1RUFBQSxJQUFBOztBQUFBOztBQUNBLGFBQUF3QixpQkFBQSxHQUFBLEVBQUE7QUFDQSxZQUFBRCxrQkFBQSxJQUFBLEVBQUE7QUFDQSxpQkFBQUEsYUFBQSxHQUFBO0FBQ0Esd0JBQUEsRUFEQTtBQUVBLGdDQUFBLEdBRkE7QUFHQSw2QkFBQSxFQUhBO0FBSUEsMEJBQUE7QUFKQSxhQUFBO0FBTUEsU0FQQSxNQVFBO0FBQ0EsaUJBQUFBLGFBQUEsR0FBQUEsYUFBQTtBQUNBOztBQUVBLFlBQUF2QixtQkFBQSxJQUFBLEVBQUE7QUFDQSxpQkFBQXlCLFNBQUEsR0FBQSxJQUFBMUIsbUJBQUEsRUFBQTtBQUNBLFNBRkEsTUFHQTtBQUNBLGlCQUFBMEIsU0FBQSxHQUFBLElBQUExQixtQkFBQSxDQUFBQyxjQUFBLENBQUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OzsrREFVQUUsTSxFQUFBOztBQUVBLGdCQUFBd0IsY0FBQSxDQUFBOztBQUVBLGdCQUFBLEtBQUFELFNBQUEsQ0FBQUUsd0JBQUEsQ0FBQXpCLE1BQUEsQ0FBQSxFQUFBO0FBQ0F3QiwrQkFBQSxLQUFBSCxhQUFBLENBQUEsY0FBQSxDQUFBO0FBQ0E7O0FBRUEsZ0JBQUEsS0FBQUUsU0FBQSxDQUFBRyxZQUFBLENBQUExQixNQUFBLENBQUEsRUFBQTtBQUNBd0IsK0JBQUEsS0FBQUgsYUFBQSxDQUFBLE1BQUEsQ0FBQTtBQUNBOztBQUVBRywyQkFBQSxLQUFBRCxTQUFBLENBQUFJLGdCQUFBLENBQUEzQixNQUFBLEtBQUEsS0FBQXFCLGFBQUEsQ0FBQSxXQUFBLElBQUEsR0FBQSxDQUFBOztBQUVBRywyQkFBQSxLQUFBRCxTQUFBLENBQUFLLGNBQUEsQ0FBQTVCLE1BQUEsS0FBQSxLQUFBcUIsYUFBQSxDQUFBLFFBQUEsSUFBQSxHQUFBLENBQUE7O0FBRUEsbUJBQUFHLFdBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7a0RBUUF4QixNLEVBQUE7QUFDQSxtQkFBQSxLQUFBdUIsU0FBQSxDQUFBTSxtQkFBQSxDQUFBN0IsTUFBQSxDQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7a0RBVUFBLE0sRUFBQTtBQUFBLGdCQUFBOEIsU0FBQSx1RUFBQSxJQUFBOztBQUNBLGdCQUFBQSxjQUFBLElBQUEsRUFBQTtBQUNBQSw0QkFBQSxLQUFBUixpQkFBQTtBQUNBOztBQUVBLGdCQUFBRSxjQUFBLEtBQUFPLHNDQUFBLENBQUEvQixNQUFBLENBQUE7O0FBRUEsbUJBQUF3QixjQUFBTSxTQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7eUNBVUFFLGEsRUFBQTtBQUNBLGdCQUFBQyx3QkFBQSxLQUFBWixhQUFBO0FBQ0EsaUJBQUEsSUFBQWEsR0FBQSxJQUFBRixhQUFBLEVBQUE7QUFDQSxvQkFBQUEsY0FBQTdCLGNBQUEsQ0FBQStCLEdBQUEsQ0FBQSxFQUFBO0FBQ0Esd0JBQUFBLE9BQUEsS0FBQWIsYUFBQSxFQUFBO0FBQ0EsNkJBQUFBLGFBQUEsQ0FBQWEsR0FBQSxJQUFBRixjQUFBRSxHQUFBLENBQUE7QUFDQSxxQkFGQSxNQUdBO0FBQ0EsNkJBQUFiLGFBQUEsR0FBQVkscUJBQUE7QUFDQSwrQkFBQSxLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQUEsSUFBQTtBQUNBOzs7Ozs7QUN6SUE7Ozs7Ozs7Ozs7O0lBV0FFLGU7O0FBRUE7Ozs7Ozs7O0FBUUEsK0JBQUE7QUFBQSxZQUFBQyxhQUFBLHVFQUFBLElBQUE7QUFBQSxZQUFBQyxhQUFBLHVFQUFBLElBQUE7O0FBQUE7O0FBQ0EsYUFBQUQsYUFBQSxHQUFBQSxrQkFBQSxJQUFBLEdBQUEsRUFBQSxHQUFBQSxhQUFBO0FBQ0EsYUFBQUMsYUFBQSxHQUFBQSxrQkFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBQSxhQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OzhDQU9BQyxJLEVBQUE7QUFDQSxnQkFBQXRDLFNBQUFzQyxLQUFBQyxPQUFBLENBQUEsSUFBQXZCLE1BQUEsQ0FBQSxRQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO0FBQ0EsZ0JBQUFoQixPQUFBRSxNQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQ0EsdUJBQUEsSUFBQTtBQUNBO0FBQ0EsbUJBQUFGLE1BQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7NkNBUUFzQyxJLEVBQUE7QUFDQSxtQkFBQUEsS0FBQUUsS0FBQSxDQUFBLElBQUF4QixNQUFBLENBQUEsVUFBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O2dEQVFBc0IsSSxFQUFBO0FBQ0EsbUJBQUFBLEtBQUFFLEtBQUEsQ0FBQSxJQUFBeEIsTUFBQSxDQUFBLDJDQUFBLEVBQUEsR0FBQSxDQUFBLENBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs4Q0FVQXNCLEksRUFBQUcsVSxFQUFBO0FBQ0EsZ0JBQUFDLGtCQUFBO0FBQ0Esb0JBQUFELFVBQUE7QUFDQSxxQkFBQSxDQUFBO0FBQUFDLGdDQUFBLEtBQUFDLHVCQUFBLENBQUFMLElBQUEsQ0FBQTtBQUNBO0FBQ0EscUJBQUEsQ0FBQTtBQUNBO0FBQUFJLGdDQUFBLEtBQUFFLG9CQUFBLENBQUFOLElBQUEsQ0FBQTtBQUpBO0FBTUEsZ0JBQUFJLGNBQUEsSUFBQSxFQUFBO0FBQ0EsdUJBQUEsRUFBQTtBQUNBO0FBQ0EsbUJBQUFBLFVBQUFHLE1BQUEsQ0FBQSxVQUFBQyxFQUFBLEVBQUFyQyxDQUFBLEVBQUFzQyxDQUFBO0FBQUEsdUJBQUF0QyxNQUFBc0MsRUFBQTlDLE9BQUEsQ0FBQTZDLEVBQUEsQ0FBQTtBQUFBLGFBQUEsQ0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7cUNBU0FSLEksRUFBQVUsUSxFQUFBQyxNLEVBQUE7QUFDQSxnQkFBQUQsYUFBQSxFQUFBLEVBQUEsT0FBQVYsSUFBQTtBQUNBLGdCQUFBWSxjQUFBLE9BQUFGLFFBQUEsR0FBQSxJQUFBLEdBQUFDLE1BQUEsR0FBQSxJQUFBO0FBQ0EsbUJBQUFYLEtBQUFDLE9BQUEsQ0FBQSxJQUFBdkIsTUFBQSxDQUFBZ0MsUUFBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBRSxXQUFBLENBQUE7QUFDQTs7Ozs7QUN0R0E7Ozs7Ozs7Ozs7Ozs7OztJQWVBQyxjOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLDhCQUVBO0FBQUEsWUFGQUMsY0FFQSx1RUFGQSxJQUVBO0FBQUEsWUFGQUMsZUFFQSx1RUFGQSxJQUVBO0FBQUEsWUFGQVosVUFFQSx1RUFGQSxJQUVBO0FBQUEsWUFGQWEsS0FFQSx1RUFGQSxJQUVBO0FBQUEsWUFEQUMsTUFDQSx1RUFEQSxJQUNBO0FBQUEsWUFEQW5CLGFBQ0EsdUVBREEsSUFDQTtBQUFBLFlBREFDLGFBQ0EsdUVBREEsSUFDQTtBQUFBLFlBREFoQixhQUNBLHVFQURBLElBQ0E7QUFBQSxZQUFBdkIsY0FBQSx1RUFBQSxJQUFBOztBQUFBOztBQUNBLGFBQUF3RCxLQUFBLEdBQUFBLFVBQUEsSUFBQSxHQUFBLE9BQUEsR0FBQUEsS0FBQTtBQUNBLGFBQUFiLFVBQUEsR0FBQUEsZUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBQSxVQUFBO0FBQ0EsYUFBQWMsTUFBQSxHQUFBQSxXQUFBLElBQUEsR0FBQSxRQUFBLEdBQUFBLE1BQUE7QUFDQSxhQUFBQyxlQUFBLEdBQUEsSUFBQXJCLGVBQUEsQ0FBQUMsYUFBQSxFQUFBQyxhQUFBLENBQUE7QUFDQSxhQUFBZSxjQUFBLEdBQUFBLGNBQUE7QUFDQSxhQUFBQyxlQUFBLEdBQUFBLGVBQUE7QUFDQSxhQUFBOUIsU0FBQSxHQUFBLElBQUFILG1CQUFBLENBQUFDLGFBQUEsRUFBQXZCLGNBQUEsQ0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztvQ0FVQXdDLEksRUFBQTtBQUNBLGdCQUFBSSxZQUFBLEtBQUFjLGVBQUEsQ0FBQUMscUJBQUEsQ0FBQW5CLElBQUEsRUFBQSxLQUFBRyxVQUFBLENBQUE7QUFDQSxpQkFBQSxJQUFBaEMsSUFBQSxDQUFBLEVBQUFBLElBQUFpQyxVQUFBeEMsTUFBQSxFQUFBTyxHQUFBLEVBQUE7QUFDQSxvQkFBQVQsU0FBQSxLQUFBd0QsZUFBQSxDQUFBRSxxQkFBQSxDQUFBaEIsVUFBQWpDLENBQUEsQ0FBQSxDQUFBO0FBQ0Esb0JBQUFULFdBQUEsSUFBQSxFQUFBO0FBQ0Esd0JBQUEsS0FBQXVCLFNBQUEsQ0FBQW9DLHlCQUFBLENBQUEzRCxNQUFBLENBQUEsRUFBQTtBQUNBLDRCQUFBLEtBQUF1QixTQUFBLENBQUFxQyx5QkFBQSxDQUFBNUQsTUFBQSxFQUFBLEtBQUFvRCxjQUFBLENBQUEsRUFBQTtBQUNBZCxtQ0FBQSxLQUFBa0IsZUFBQSxDQUFBSyxZQUFBLENBQUF2QixJQUFBLEVBQUFJLFVBQUFqQyxDQUFBLENBQUEsRUFBQSxLQUFBNkMsS0FBQSxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBQWhCLElBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBY0FBLEksRUFBQTtBQUNBLGdCQUFBSSxZQUFBLEtBQUFjLGVBQUEsQ0FBQUMscUJBQUEsQ0FBQW5CLElBQUEsRUFBQSxLQUFBRyxVQUFBLENBQUE7QUFDQSxpQkFBQSxJQUFBaEMsSUFBQSxDQUFBLEVBQUFBLElBQUFpQyxVQUFBeEMsTUFBQSxFQUFBTyxHQUFBLEVBQUE7QUFDQSxvQkFBQVQsU0FBQSxLQUFBd0QsZUFBQSxDQUFBRSxxQkFBQSxDQUFBaEIsVUFBQWpDLENBQUEsQ0FBQSxDQUFBO0FBQ0Esb0JBQUFULFdBQUEsSUFBQSxFQUFBO0FBQ0Esd0JBQUEsS0FBQXVCLFNBQUEsQ0FBQW9DLHlCQUFBLENBQUEzRCxNQUFBLENBQUEsRUFBQTtBQUNBLDRCQUFBd0IsY0FBQSxLQUFBRCxTQUFBLENBQUFRLHNDQUFBLENBQUEvQixNQUFBLENBQUE7QUFDQSw0QkFBQSxLQUFBb0QsY0FBQSxLQUFBLElBQUEsSUFBQTVCLGNBQUEsS0FBQTRCLGNBQUEsRUFBQTtBQUNBZCxtQ0FBQSxLQUFBa0IsZUFBQSxDQUFBSyxZQUFBLENBQUF2QixJQUFBLEVBQUFJLFVBQUFqQyxDQUFBLENBQUEsRUFBQSxLQUFBNkMsS0FBQSxDQUFBO0FBQ0EseUJBRkEsTUFHQSxJQUFBLEtBQUFELGVBQUEsS0FBQSxJQUFBLElBQUE3QixjQUFBLEtBQUE2QixlQUFBLEVBQUE7QUFDQWYsbUNBQUEsS0FBQWtCLGVBQUEsQ0FBQUssWUFBQSxDQUFBdkIsSUFBQSxFQUFBSSxVQUFBakMsQ0FBQSxDQUFBLEVBQUEsS0FBQThDLE1BQUEsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQUFqQixJQUFBO0FBQ0EiLCJmaWxlIjoiRGVzQ2FyZElkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFZhbGlkYXRpb25Db25zdGFudHNcclxuICogVGhpcyBjbGFzcyBjb250YWlucyBhbGwgdGhlIGNvbnN0YW50cyB0aGF0IGFyZSB1c2VkIGZvciB2YXJpb3VzXHJcbiAqIHZhbGlkYXRpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICAgUmlqdWwgR3VwdGEgPHJpanVsZ0BuZWJsYXIuY29tPlxyXG4gKiBAc2luY2UgICAgICAgMjQgRGVjIDIwMTdcclxuICogQGNvcHlyaWdodCAgIDIwMTcgTmVibGFyIFRlY2hub2xvZ2llc1xyXG4gKiBAbGljZW5zZSAgICAgTUlUXHJcbiovXHJcblxyXG5jbGFzcyBWYWxpZGF0aW9uQ29uc3RhbnRze1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5NSU5fUE9TU0lCTEVfTEVOR1RIID0gNztcclxuICAgICAgICB0aGlzLk1BWF9QT1NTSUJMRV9MRU5HVEggPSAxOTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKlRoZXNlIGFyZSBwcm9iYWJpbGl0aWVzIGJhc2VkIG9uIHRoZSBtb3N0IGNvbW1vbiBjYXJkIGxlbmd0aHNcclxuICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUFJPQkFCSUxJVElFU19MRU5HVEggPSB7XHJcbiAgICAgICAgICAgIDE2IDogMTAwLCAvKlRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGNhcmQgbnVtYmVyIGxlbmd0aCovXHJcbiAgICAgICAgICAgIDE1IDogMTAwLCAvKkFtZXJpY2FuIEV4cHJlc3MgaGFzIGNhcmRzIG9mIHRoaXMgbGVuZ3RoKi9cclxuICAgICAgICAgICAgMTMgOiA4MCwgLypWSVNBIHNvbWV0aW1lcyBtYWtlcyBjYXJkcyBvZiB0aGlzIGxlbmd0aCovXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBJZiB0aGUgaWRlbnRpZmljYXRpb24gZmluZ2VycHJpbnRzIG9mIGEgdHlwZSBvZiBjYXJkIGFyZSB0b28gZmV3XHJcbiAgICAgICAgICogaS5lLiBpZiB0aGUgcmVnZXggcGF0dGVyIGlzIHRvbyBzaG9ydCwgd2hpY2ggaW4gdHVybnMgbWVhbnMgdGhhdFxyXG4gICAgICAgICAqIGl0IG1pZ2h0IHByb2R1Y2UgbW9yZSBmYWxzZSBwb3NpdGl2ZXMgdGhlIHByb2JhYmlsaXR5IGFzc2lnbmVkXHJcbiAgICAgICAgICogdG8gdGhhdCBwYXJ0aWN1bGFyIHJlZ2V4IGlzIGxvdy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUFJPQkFCSUxJVElFU19SRUdFWF9QUk9WSURFUlMgPSB7XHJcbiAgICAgICAgICAgIC8qUmVnZXggdG8gaWRlbnRpZnkgbWFzdGVyY2FyZCovXHJcbiAgICAgICAgICAgICdeKDVbMS01XVswLTldezUsfXwyMjJbMS05XVswLTldezMsfXwyMlszLTldWzAtOV17NCx9fDJbMy02XVswLTldezUsfXwyN1swMV1bMC05XXs0LH18MjcyMFswLTldezMsfSknOiAxMDAsXHJcbiAgICAgICAgICAgIC8qUmVnZXggdG8gaWRlbnRpZnkgYW1lcmljYW4gZXhwcmVzcyovXHJcbiAgICAgICAgICAgICdeKDNbNDddWzAtOV17NSx9KSc6IDcwLFxyXG4gICAgICAgICAgICAvKlJlZ2V4IHRvIGlkZW50aWZ5IFZJU0EqL1xyXG4gICAgICAgICAgICAnXig0WzAtOV17Nix9KSc6IDUwLFxyXG4gICAgICAgICAgICAvKlJlZ2V4IHRvIGlkZW50aWZ5IERpbmVycyBDbHViKi9cclxuICAgICAgICAgICAgJ14oMyg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17NCx9KSc6IDg1LFxyXG4gICAgICAgICAgICAvKlJlZ2V4IHRvIGlkZW50aWZ5IERpc2NvdmVyKi9cclxuICAgICAgICAgICAgJ14oNig/OjAxMXw1WzAtOV17Mn0pWzAtOV17Myx9KSc6IDgwLFxyXG4gICAgICAgICAgICAvKlJlZ2V4IHRvIGlkZW50aWZ5IEpDQiovXHJcbiAgICAgICAgICAgICdeKCg/OjIxMzF8MTgwMHwzNVswLTldezN9KVswLTldezMsfSknOiA4NSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFRoZXNlIGFyZSB0aGUgdGVzdCBudW1iZXJzIHRoYXQgYXJlIG9wZW5seSBwcm92aWRlZCBieSB2YXJpb3VzIHByb3ZpZGVyc1xyXG4gICAgICAgICAqIHNvIHRoYXQgd2UgY2FuIGNvcnJlY3RseSBpZGVudGlmeSBpZiBzb21lb25lIGNoZWNrcyBmb3IgYW55IG9mIFRoZXNlXHJcbiAgICAgICAgICogd2l0aCBmdWxsIGNlcnRhaW50eVxyXG4gICAgICAgICovXHJcbiAgICAgICAgdGhpcy5LTk9XTl9URVNUX05VTUJFUlMgPSBbXHJcbiAgICAgICAgICAgICczNzgyODIyNDYzMTAwMDUnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNzE0NDk2MzUzOTg0MzEnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNDU0MzY4NDkyNTM3ODYnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNDQzNDM1OTcwOTg3MzknLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNDgxOTUwNTMxNDgxODQnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNDY3NjExMjg5NTgxOTYnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNzk5ODM5NjM5MTY5ODYnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNzY3NDk1MDE4NzkwMDknLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNDkyMDQyNTQ2MzQyMTMnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNzY0MzI1MTA0NjM1NjYnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyovXHJcbiAgICAgICAgICAgICczNzg3MzQ0OTM2NzEwMDAnLCAgICAgIC8qQW1lcmljYW4gRXhwcmVzcyBDb3Jwb3JhdGUqL1xyXG4gICAgICAgICAgICAnNTYxMDU5MTA4MTAxODI1MCcsICAgICAvKkF1c3RyYWxpYW4gQmFua0NhcmQqL1xyXG4gICAgICAgICAgICAnMzA1NjkzMDkwMjU5MDQnLCAgICAgICAvKkRpbmVycyBDbHViKi9cclxuICAgICAgICAgICAgJzM4NTIwMDAwMDIzMjM3JywgICAgICAgLypEaW5lcnMgQ2x1YiovXHJcbiAgICAgICAgICAgICczMDQ2NzMyMzc4MzM5NCcsICAgICAgIC8qRGluZXJzIENsdWIgKENhcnRlIEJsYW5jaGUpKi9cclxuICAgICAgICAgICAgJzMwMzg5NTg5MDQ5NDM3JywgICAgICAgLypEaW5lcnMgQ2x1YiAoQ2FydGUgQmxhbmNoZSkqL1xyXG4gICAgICAgICAgICAnMzAyMTM0Njk3ODI5MDEnLCAgICAgICAvKkRpbmVycyBDbHViIChDYXJ0ZSBCbGFuY2hlKSovXHJcbiAgICAgICAgICAgICczNjE5NzM2NTcxODg5MScsICAgICAgIC8qRGluZXJzIENsdWIgKEludGVybmF0aW9uYWwpKi9cclxuICAgICAgICAgICAgJzM2ODIzNzg1MDI0NzQ5JywgICAgICAgLypEaW5lcnMgQ2x1YiAoSW50ZXJuYXRpb25hbCkqL1xyXG4gICAgICAgICAgICAnMzYyNTE3MDE4NzExMDInLCAgICAgICAvKkRpbmVycyBDbHViIChJbnRlcm5hdGlvbmFsKSovXHJcbiAgICAgICAgICAgICc1NDg1MTU3MDU5Mjc4MjI3JywgICAgIC8qRGluZXJzIENsdWIgKE5vcnRoIEFtZXJpY2EpKi9cclxuICAgICAgICAgICAgJzU0MTgxOTk5ODgzNjI0ODQnLCAgICAgLypEaW5lcnMgQ2x1YiAoTm9ydGggQW1lcmljYSkqL1xyXG4gICAgICAgICAgICAnNTQwMjA5Mzg3MDY3NTc2NCcsICAgICAvKkRpbmVycyBDbHViIChOb3J0aCBBbWVyaWNhKSovXHJcbiAgICAgICAgICAgICc2MDExMTExMTExMTExMTE3JywgICAgIC8qRGlzY292ZXIqL1xyXG4gICAgICAgICAgICAnNjAxMTAwMDk5MDEzOTQyNCcsICAgICAvKkRpc2NvdmVyKi9cclxuICAgICAgICAgICAgJzYwMTE1NDAwMTgzNDE3NTknLCAgICAgLypEaXNjb3ZlciovXHJcbiAgICAgICAgICAgICc2MDExMDUyMDU3NzIzOTIxJywgICAgIC8qRGlzY292ZXIqL1xyXG4gICAgICAgICAgICAnNjAxMTI3NzYxODIxMTQ4NDU4NScsICAvKkRpc2NvdmVyKi9cclxuICAgICAgICAgICAgJzYwMTE4NjEyODY4MzU3MjInLCAgICAgLypEaXNjb3ZlciovXHJcbiAgICAgICAgICAgICc2MDExODkwMzc2MTczNjYwJywgICAgIC8qRGlzY292ZXIqL1xyXG4gICAgICAgICAgICAnNjAxMTQ2NDI0Nzg5MjUxOCcsICAgICAvKkRpc2NvdmVyKi9cclxuICAgICAgICAgICAgJzYwMTEyNDQ3NTg0MjgwNDcnLCAgICAgLypEaXNjb3ZlciovXHJcbiAgICAgICAgICAgICc2MDExNDY5MzQ1NzI5MzA2JywgICAgIC8qRGlzY292ZXIqL1xyXG4gICAgICAgICAgICAnNjM4Mjk2MTgwNjA0NjU5MycsICAgICAvKkluc3RhUGF5bWVudCovXHJcbiAgICAgICAgICAgICc2MzczNDEzMzk3NDk3NDYzJywgICAgIC8qSW5zdGFQYXltZW50Ki9cclxuICAgICAgICAgICAgJzYzNzUyNzUyMTc0MzczNjknLCAgICAgLypJbnN0YVBheW1lbnQqL1xyXG4gICAgICAgICAgICAnMzUzMDExMTMzMzMwMDAwMCcsICAgICAvKkpDQiovXHJcbiAgICAgICAgICAgICczNTY2MDAyMDIwMzYwNTA1JywgICAgIC8qSkNCKi9cclxuICAgICAgICAgICAgJzM1NjYxMTExMTExMTExMTMnLCAgICAgLypKQ0IqL1xyXG4gICAgICAgICAgICAnMzUyOTg0NDQ3MDk5NDc1NCcsICAgICAvKkpDQiovXHJcbiAgICAgICAgICAgICczNTM1NzU0MjMxNDM3MzY5JywgICAgIC8qSkNCKi9cclxuICAgICAgICAgICAgJzM1NDEwMzEzMzc0NjcyOTk3MjInLCAgLypKQ0IqL1xyXG4gICAgICAgICAgICAnNjc2MjY3ODk0MTA4NDgzMCcsICAgICAvKk1hZXN0cm8qL1xyXG4gICAgICAgICAgICAnNTAxODEzMTU0ODE1ODMwNCcsICAgICAvKk1hZXN0cm8qL1xyXG4gICAgICAgICAgICAnNjMwNDUyMTkzNDMzMzk5MycsICAgICAvKk1hZXN0cm8qL1xyXG4gICAgICAgICAgICAnNTAzMzk2MTk4OTA5MTcnLCAgICAgICAvKk1hZXN0cm8gKEludGVybmF0aW9uYWwpKi9cclxuICAgICAgICAgICAgJzU4NjgyNDE2MDgyNTUzMzMzOCcsICAgLypNYWVzdHJvIChJbnRlcm5hdGlvbmFsKSovXHJcbiAgICAgICAgICAgICc2NzU5NDExMTAwMDAwMDA4JywgICAgIC8qTWFlc3RybyAoVUsgRG9tZXN0aWMpKi9cclxuICAgICAgICAgICAgJzY3NTk1NjAwNDUwMDU3MjcwNTQnLCAgLypNYWVzdHJvIChVSyBEb21lc3RpYykqL1xyXG4gICAgICAgICAgICAnNTY0MTgyMTExMTE2NjY2OScsICAgICAvKk1hZXN0cm8gKFVLIERvbWVzdGljKSovXHJcbiAgICAgICAgICAgICc1NTU1NTU1NTU1NTU0NDQ0JywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MTA1MTA1MTA1MTA1MTAwJywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICcyMjIyNDIwMDAwMDAxMTEzJywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICcyMjIyNjMwMDAwMDAxMTI1JywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MjQ2NzcyMDU5MjQyMjk0JywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MzY1NjQzNDEyMzYwOTIyJywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MzEwNTA2NDc1NTAyODUyJywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MTkyMzEwNTYwODI2NjQ2JywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MTc0MjI0OTI0MDgxNDg3JywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MzUzNzMyMzExOTM4NDg0JywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MjAzMjQ2MDc1ODgzOTUyJywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc1MTg2NjgyNDc2MzA2NjI2JywgICAgIC8qTWFzdGVyQ2FyZCovXHJcbiAgICAgICAgICAgICc0MTExMTExMTExMTExMTExJywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0MDEyODg4ODg4ODgxODgxJywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0MjIyMjIyMjIyMjIyJywgICAgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0MzMwOTU0MTg3NDI5MjYyJywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0OTE2ODYxODczMDQyNjI2JywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0MDI0MDA3MTc2NjU4ODkyMTE5JywgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0NDg1OTkyNTU4ODg2ODg3JywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0NTU2NTU2Njg5ODUzMjA5JywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0NTMyMzc5MzQyNzUxMDc3JywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0MDI0MDA3MTUzNTI0OTg3JywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0NDg1NjQzMjA0MTAyNjEzJywgICAgIC8qVklTQSovXHJcbiAgICAgICAgICAgICc0NTA4MTM4MDc5Njg2NTM4JywgICAgIC8qVklTQSAoZWxlY3Ryb24pKi9cclxuICAgICAgICAgICAgJzQwMjYyMDcxNDA1MTAxMTknLCAgICAgLypWSVNBIChlbGVjdHJvbikqL1xyXG4gICAgICAgICAgICAnNDUwODYwODU5Mzg0NzU1MCcsICAgICAvKlZJU0EgKGVsZWN0cm9uKSovXHJcbiAgICAgICAgICAgICc1MDE5NzE3MDEwMTAzNzQyJywgICAgIC8qUEJTKi9cclxuICAgICAgICAgICAgJzYzMzExMDE5OTk5OTAwMTYnLCAgICAgLypQYXltZW50ZWNoKi9cclxuICAgICAgICAgICAgJzEzNTQxMjM0NTY3ODkxMScsICAgICAgLypVQVRQKi9cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogVmFsaWRhdGlvbkZ1bmN0aW9uc1xyXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCB0aGUgdmFyaW91cyBhbGdvcml0aG1zIHdlIGVtcGxveSBpbiBkZXRlcm1pbmluZ1xyXG4gKiB0aGF0IGEgZ2l2ZW4gbnVtYmVyIGJlbG9uZ3MgdG8gYSBjcmVkaXQgY2FyZCBvciBub3QuXHJcbiAqXHJcbiAqIE9ubHkgYSB2YWxpZCwgZm9ybWF0dGVkIG51bWJlciBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZXNlIGZ1bmN0aW9ucy5cclxuICogRm9ybWF0dGVkIGhlcmUgaW1wbGllcyB0aGF0IHRoZXJlIHNob3VsZCBiZSBubyBzcGFjZXMgb3Igc3BlY2lhbFxyXG4gKiBjaGFyYWN0ZXJzIGJldHdlZW4gdGhlIHByb3ZpZGVkIG51bWJlci5cclxuICpcclxuICogVGhlIGZ1bmN0aW9ucyBkbyBub3QgaGF2ZSBhbiBleHRyYSBsYXllciBvZiBudW1iZXIgdmFsaWRhdGlvbiBiZWNhdXNlXHJcbiAqIHRoYXQgcGFydGljdWxhciBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSB5b3UgYWNjZXNzIGFueSBvZiB0aGVzZS5cclxuICpcclxuICogQGF1dGhvciAgICAgIFJpanVsIEd1cHRhIDxyaWp1bGdAbmVibGFyLmNvbT5cclxuICogQHNpbmNlICAgICAgIDI0IERlYyAyMDE3XHJcbiAqIEBjb3B5cmlnaHQgICAyMDE3IE5lYmxhciBUZWNobm9sb2dpZXNcclxuICogQGxpY2Vuc2UgICAgIE1JVFxyXG4qL1xyXG5cclxuY2xhc3MgVmFsaWRhdGlvbkZ1bmN0aW9uc3tcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0aW9uRnVuY3Rpb25zIGNvbnN0cnVjdG9yLlxyXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFsbG93cyB1cyB0byBjdXN0b21pemUgdGhlIGNvbnN0YW50cyB0aGF0IHdpbGwgYmUgdXNlZCB0byBjb25kdWN0IHRoZSB2YWxpZGF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1ZhbGlkYXRpb25Db25zdGFudHN9ICAgY29uc3RhbnRzQ2xhc3MgdGhlIGNvbnN0YW50cyB1c2VkIGZvciB2YWxpZGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnN0YW50c0NsYXNzID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jb25zdGFudHMgPSAoY29uc3RhbnRzQ2xhc3MgPT09IG51bGwpID8gbmV3IFZhbGlkYXRpb25Db25zdGFudHMoKSA6IGNvbnN0YW50c0NsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdmFsaWRhdGVLbm93blRlc3ROdW1iZXJzXHJcbiAgICAgKiBjaGVja3MgaWYgdGhlIGdpdmVuIG51bWJlciBtYXRjaGVzIGFueSBvZiB0aGUgZGlzY2xvc2VkIHRlc3QgbnVtYmVyc1xyXG4gICAgICogcHJvdmlkZWQgYnkgdGhlIG1ham9yIGNvbXBhbmllc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgIG51bWJlciB0aGUgbnVtYmVyIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgIHRydWUgaWYgbnVtYmVyIG1hdGNoZXMgYSBrbm93biB0ZXN0IG51bWJlciwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAqL1xyXG4gICAgdmFsaWRhdGVLbm93blRlc3ROdW1iZXJzKG51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbnN0YW50cy5LTk9XTl9URVNUX05VTUJFUlMuaW5kZXhPZihudW1iZXIpICE9PSAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWxpZGF0ZUxlbmd0aFxyXG4gICAgICogcmV0dXJucyB0aGUgbGlrZWxpaG9vZCBvZiBhIG51bWJlciBiZWluZyBhIGNyZWRpdCBjYXJkIG51bWJlciBiYXNlZFxyXG4gICAgICoganVzdCBvbiBpdCdzIGxlbmd0aC4gU28gYSBjb21tb24gbGVuZ3RoIGxpa2UgMTYgd291bGQgcmV0dXJuIDEwMCxcclxuICAgICAqIGFuIHVuY29tbW9uIG9uZSBsaWtlIDE4IHdvdWxkIHJldHVybiA2MCB3aGlsZSBvdGhlcnMgd291bGQgcmV0dXJuIDAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1iZXIgdGhlIG51bWJlciB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcmV0dXJuIHtpbnR9IGxpa2VsaWhvb2QgYXNzb2NpYXRlZCB3aXRoIGxlbmd0aCBvZiBudW1iZXJcclxuICAgICovXHJcbiAgICB2YWxpZGF0ZUxlbmd0aChudW1iZXIpe1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG51bWJlci5sZW5ndGg7XHJcbiAgICAgICAgaWYodGhpcy5jb25zdGFudHMuUFJPQkFCSUxJVElFU19MRU5HVEguaGFzT3duUHJvcGVydHkobGVuZ3RoKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy5QUk9CQUJJTElUSUVTX0xFTkdUSFtsZW5ndGhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHZhbGlkYXRlTFVITlxyXG4gICAgICogcGVyZm9ybXMgYSBMVUhOIGNoZWNrIG9uIHRoZSBudW1iZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bWJlciB0aGUgbnVtYmVyIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgdHJ1ZSBpZiBwYXNzZXMgdGhlIGNoZWNrLCBmYWxzZSBvdGhlcndpc2VcclxuICAgICovXHJcbiAgICB2YWxpZGF0ZUxVSE4obnVtYmVyKXtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBudW1iZXIubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGxhc3REaWdpdCA9IHBhcnNlSW50KG51bWJlcltsZW5ndGgtMV0pO1xyXG4gICAgICAgIG51bWJlciA9IG51bWJlci5zdWJzdHIoMCxsZW5ndGgtMSk7XHJcbiAgICAgICAgbnVtYmVyID0gdGhpcy5yZXZlcnNlU3RyaW5nKG51bWJlcik7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoLTE7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBkaWdpdCA9IHBhcnNlSW50KG51bWJlcltpXSk7XHJcblxyXG4gICAgICAgICAgICBpZihpJTIgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgZGlnaXQgKj0gMjtcclxuICAgICAgICAgICAgICAgIGlmIChkaWdpdCA+IDkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZ2l0IC09IDk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN1bSArPSBkaWdpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgoKHN1bStsYXN0RGlnaXQpJTEwKT09PTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdmFsaWRhdGVQb3NzaWJpbGl0eVxyXG4gICAgICogZGV0ZXJtaW5lcyB3aGV0aGVyIGl0IGlzIGF0IGxlYXN0IHBvc3NpYmxlIGZvciBhIGdpdmVuIG51bWJlclxyXG4gICAgICogdG8gYmUgYSBjcmVkaXQgY2FyZCBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1iZXIgdGhlIG51bWJlciB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgIHRydWUgaWYgaXQgaXMgcG9zc2libGUsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAgKi9cclxuICAgIHZhbGlkYXRlUG9zc2liaWxpdHkobnVtYmVyKXtcclxuXHJcbiAgICAgICAgaWYoKCFpc05hTihwYXJzZUZsb2F0KG51bWJlcikpICYmIGlzRmluaXRlKG51bWJlcikpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG51bWJlci5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKGxlbmd0aCA8IHRoaXMuY29uc3RhbnRzLk1JTl9QT1NTSUJMRV9MRU5HVEgpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihsZW5ndGggPiB0aGlzLmNvbnN0YW50cy5NQVhfUE9TU0lCTEVfTEVOR1RIKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWxpZGF0ZVByb3ZpZGVyXHJcbiAgICAgKiBjaGVja3MgaWYgYSBwcm92aWRlciBjYW4gYmUgaWRlbnRpZmllZCBmb3IgdGhlIGdpdmVuIGNhcmQgbnVtYmVyXHJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGUgY2VydGFpbnR5IG9mIGlkZW50aWZpY2F0aW9uIG1hcHBlZCBmcm9tIDAgdG8gMTAwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1iZXIgdGhlIG51bWJlciB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHByb2JhYmlsaXR5IG9mIHN1cmV0eSBvZiBpZGVudGlmaWNhdGlvbiBvZiBhIHByb3ZpZGVyXHJcbiAgICAqL1xyXG4gICAgdmFsaWRhdGVQcm92aWRlcihudW1iZXIpe1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVycyA9IHRoaXMuY29uc3RhbnRzLlBST0JBQklMSVRJRVNfUkVHRVhfUFJPVklERVJTO1xyXG4gICAgICAgIGZvcihsZXQgcmVnZXggaW4gcHJvdmlkZXJzKXtcclxuICAgICAgICAgICAgaWYocHJvdmlkZXJzLmhhc093blByb3BlcnR5KHJlZ2V4KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAocmVnZXgpLnRlc3QobnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlcnNbcmVnZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV2ZXJzZVN0cmluZ1xyXG4gICAgICogcmV2ZXJzZXMgYSBnaXZlbiBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gdGhlIHJldmVyc2VkIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICByZXZlcnNlU3RyaW5nKHN0cmluZyl7XHJcbiAgICAgICAgbGV0IGkgPSBzdHJpbmcubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgb3V0ID0gJyc7XHJcbiAgICAgICAgZm9yICg7IGkgPj0gMDspe1xyXG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nW2ktLV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLyoqXHJcbiAqIENhcmROdW1iZXJWYWxpZGF0b3JcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB3aXRoIHRoZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byB2YWxpZGF0ZSBhXHJcbiAqIGNhcmQgbnVtYmVyLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGZpcnN0IGVuc3VyZSB0aGF0IGEgbnVtYmVyIGNhbiBwb3NzaWJseSBiZSBhIGNyZWRpdCBjYXJkIG51bWJlclxyXG4gKiBieSBjYWxsaW5nIFwiaXNJbXBvc3NpYmxlVG9CZUFDcmVkaXRDYXJkXCIgZnVuY3Rpb24gYW5kIGNoZWNraW5nIHRoYXQgaXQgaXNcclxuICogZmFsc2UsIGFmdGVyIHRoYXQgeW91IGNhbiBjaGVjayBpZiB3ZSBjYW4gc3VyZWx5IHNheSB0aGF0IGEgbnVtYmVyIGlzIGFcclxuICogY3JlZGl0IGNhcmQgbnVtYmVyIG9yIG5vdCBieSBjYWxsaW5nIFwiaXNTdXJlbHlBQ3JlZGl0Q2FyZE51bWJlclwiLlxyXG4gKiBUaGUgbGV2ZWwgb2YgdGhyZXNob2xkIGZvciBjaGVjayBjYW4gYmUgc2V0IGFuZCBzaG91bGQgYmUgZGVjaWRlZCBiYXNlZFxyXG4gKiBvbiBob3cgc3VyZSB5b3Ugd2FudCB0byBiZS5cclxuICpcclxuICogQGF1dGhvciAgICAgIFJpanVsIEd1cHRhIDxyaWp1bGdAbmVibGFyLmNvbT5cclxuICogQHNpbmNlICAgICAgIDI0IERlYyAyMDE3XHJcbiAqIEBjb3B5cmlnaHQgICAyMDE3IE5lYmxhciBUZWNobm9sb2dpZXNcclxuICogQGxpY2Vuc2UgICAgIE1JVFxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIENhcmROdW1iZXJWYWxpZGF0b3J7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FyZE51bWJlclZhbGlkYXRvciBjb25zdHJ1Y3Rvci5cclxuICAgICAqIHRoZSBjb25zdHJ1Y3RvciBhbGxvd3MgdXMgdG8gY3VzdG9taXplIHRoZSBwcm9iYWJpbGl0aWVzIHVzZWQgZm9yIHRoZSB2YWxpZGF0aW9uIGNoZWNrIGFzIHdlbGwgYXNcclxuICAgICAqIGRlZmluZSB0aGUgY29uc3RhbnRzIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY29uZHVjdCB0aGUgdmFsaWRhdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgICAgICAgcHJvYmFiaWxpdGllcyAgdGhlIHByb2JhYmlsaXRpZXMgYXNzaWduZWQgdG8gdmFyaW91cyB2YWxpZGF0aW9ucyBpbiBWYWxpZGF0aW9uRnVuY3Rpb25zXHJcbiAgICAgKiBAcGFyYW0ge1ZhbGlkYXRpb25Db25zdGFudHN9ICAgY29uc3RhbnRzQ2xhc3MgdGhlIGNvbnN0YW50cyB1c2VkIGZvciB2YWxpZGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb2JhYmlsaXRpZXMgPSBudWxsLCBjb25zdGFudHNDbGFzcyA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuREVGQVVMVF9USFJFU0hPTEQgPSA4NTtcclxuICAgICAgICBpZihwcm9iYWJpbGl0aWVzID09PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9iYWJpbGl0aWVzID0ge1xyXG4gICAgICAgICAgICAgICAgJ0xVSE4nOjYwLFxyXG4gICAgICAgICAgICAgICAgJ1RFU1RfTlVNQkVSUyc6MTAwLFxyXG4gICAgICAgICAgICAgICAgJ1BST1ZJREVSUyc6MTUsXHJcbiAgICAgICAgICAgICAgICAnTEVOR1RIJzoxNSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wcm9iYWJpbGl0aWVzID0gcHJvYmFiaWxpdGllcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNvbnN0YW50c0NsYXNzID09PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdGlvbkZ1bmN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0aW9uRnVuY3Rpb25zKGNvbnN0YW50c0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYWxjdWxhdGVQcm9iYWJpbGl0eU9mQmVpbmdBQ3JlZGl0Q2FyZFxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBwcm9iYWJpbGl0eSBvZiBhIG51bWJlciBiZWluZyBhc3NvY2lhdGVkXHJcbiAgICAgKiB3aXRoIGEgY3JlZGl0IGNhcmQuXHJcbiAgICAgKiBUaGUgcHJvYmFiaWxpdHkgYXNzb2NpYXRlZCB3aXRoIGVhY2ggY2hlY2sgaXMgZGVjbGFyZWQgc2VwYXJhdGVseSBpblxyXG4gICAgICogYSBjb25zdGFudHMgY2xhc3NcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bWJlciB0aGUgbnVtYmVyIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdG90YWwgcHJvYmFiaWxpdHkgb2YgYSBudW1iZXIgYmVpbmcgYSBjcmVkaXQgY2FyZCBudW1iZXJcclxuICAgICovXHJcbiAgICBjYWxjdWxhdGVQcm9iYWJpbGl0eU9mQmVpbmdBQ3JlZGl0Q2FyZChudW1iZXIpe1xyXG5cclxuICAgICAgICBsZXQgcHJvYmFiaWxpdHkgPSAwO1xyXG5cclxuICAgICAgICBpZih0aGlzLnZhbGlkYXRvci52YWxpZGF0ZUtub3duVGVzdE51bWJlcnMobnVtYmVyKSl7XHJcbiAgICAgICAgICAgIHByb2JhYmlsaXR5ICs9IHRoaXMucHJvYmFiaWxpdGllc1snVEVTVF9OVU1CRVJTJ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnZhbGlkYXRvci52YWxpZGF0ZUxVSE4obnVtYmVyKSl7XHJcbiAgICAgICAgICAgIHByb2JhYmlsaXR5ICs9IHRoaXMucHJvYmFiaWxpdGllc1snTFVITiddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvYmFiaWxpdHkgKz0gKCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZVByb3ZpZGVyKG51bWJlcikgKiAodGhpcy5wcm9iYWJpbGl0aWVzWydQUk9WSURFUlMnXSAvIDEwMCkgKTtcclxuXHJcbiAgICAgICAgcHJvYmFiaWxpdHkgKz0gKCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZUxlbmd0aChudW1iZXIpICogKHRoaXMucHJvYmFiaWxpdGllc1snTEVOR1RIJ10gLyAxMDApICk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9iYWJpbGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzUG9zc2libGVUb0JlQUNyZWRpdENhcmRcclxuICAgICAqIHdyYXBwZXIgZnVuY3Rpb24gdG8gY2hlY2sgd2hldGhlciB0aGUgbnVtYmVyIGNhbiBwb3NzaWJseSBiZSBhIGNyZWRpdFxyXG4gICAgICogY2FyZCBudW1iZXIgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbnVtYmVyIHRoZSBudW1iZXIgdG8gYmUgY2hlY2tlZFxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICB0cnVlIGlmIG51bWJlciBjYW4gYmUgYSBjcmVkaXQgY2FyZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAqL1xyXG4gICAgaXNQb3NzaWJsZVRvQmVBQ3JlZGl0Q2FyZChudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZVBvc3NpYmlsaXR5KG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpc1N1cmVseUFDcmVkaXRDYXJkTnVtYmVyXHJcbiAgICAgKiBjb21wYXJlcyB0aGUgcHJvYmFiaWxpdHkgb2YgZ2l2ZW4gbnVtYmVyIGJlaW5nIGEgY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICAgKiB0byBzcGVjaWZpZWQgdGhyZXNob2xkLiBJZiB0aGUgdGhyZXNob2xkIGlzIG5vdCBzcGVjaWZpZWQsIGl0IGdldHNcclxuICAgICAqIGRlZmF1bHRlZCB0byB0aGUgZGVmYXVsdHMgc2V0IGluIHRoZSBjb25zdGFudHMgY2xhc3NcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bWJlciAgICB0aGUgbnVtYmVyIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gdGhyZXNob2xkIHRoZSB0b2xlcmFibGUgbGV2ZWwgb2YgdW5jZXJ0YWludHlcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgd2UgYXJlIHN1cmUsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAgKi9cclxuICAgIGlzU3VyZWx5QUNyZWRpdENhcmROdW1iZXIobnVtYmVyLCB0aHJlc2hvbGQgPSBudWxsKXtcclxuICAgICAgICBpZih0aHJlc2hvbGQgPT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQgPSB0aGlzLkRFRkFVTFRfVEhSRVNIT0xEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb2JhYmlsaXR5ID0gdGhpcy5jYWxjdWxhdGVQcm9iYWJpbGl0eU9mQmVpbmdBQ3JlZGl0Q2FyZChudW1iZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKHByb2JhYmlsaXR5ID4gdGhyZXNob2xkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldFByb2JhYmlsaXRpZXNcclxuICAgICAqIFRoaXMgaXMgYSBoZWxwZXIgZnVuY3Rpb24gdGhhdCBoZWxwcyBzZXQgdGhlIHByb2JhYmlsaXRpZXMgZm9yXHJcbiAgICAgKiBjYWxjdWxhdGlvbi4gVGhpcyBhbGxvd3MgdGhlIHVzZXJzIHRvIGN1c3RvbWl6ZSB0aGUgY2FsY3VsYXRpb24gZm9yXHJcbiAgICAgKiB0aGVpciBuZWVkcy5cclxuICAgICAqIElmIHRoZSBzZXR1cCBmYWlscyBvbiBhbnkgc3RlcCBpdCByZXZlcnRzIHRvIHRoZSBvcmlnaW5hbCBzZXR0aW5ncy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gICB7QXJyYXl9IGtleVZhbHVlUGFpcnMgYXJyYXkgb2Yga2V5ID0+IHZhbHVlIHBhaXJzIHRvIGJlIHNldFxyXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICBmYWxzZSBpZiBmYWlscyBvbiBhbnkgc3RlcCwgdHJ1ZSBvdGhlcndpc2VcclxuICAgICovXHJcbiAgICBzZXRQcm9iYWJpbGl0aWVzKGtleVZhbHVlUGFpcnMpe1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvYmFiaWxpdGllcyA9IHRoaXMucHJvYmFiaWxpdGllcztcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBrZXlWYWx1ZVBhaXJzKXtcclxuICAgICAgICAgICAgaWYoa2V5VmFsdWVQYWlycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgIGlmKGtleSBpbiB0aGlzLnByb2JhYmlsaXRpZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmFiaWxpdGllc1trZXldID0ga2V5VmFsdWVQYWlyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JhYmlsaXRpZXMgPSBvcmlnaW5hbFByb2JhYmlsaXRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogVGV4dE1hbmlwdWxhdG9yXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgd2l0aCB0aGUgcyB0aGF0IGFyZSB1c2VkIHRvIGJyZWFrIHRoZSB0ZXh0IGludG8gZnJhZ21lbnRzLFxyXG4gKiBhbmQgcGVyZm9ybSBvdGhlciB0ZXh0IG1hbmlwdWxhdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgICBSaWp1bCBHdXB0YSA8cmlqdWxnQG5lYmxhci5jb20+XHJcbiAqIEBzaW5jZSAgICAgICAyNCBEZWMgMjAxN1xyXG4gKiBAY29weXJpZ2h0ICAgMjAxNyBOZWJsYXIgVGVjaG5vbG9naWVzXHJcbiAqIEBsaWNlbnNlICAgICBNSVRcclxuICovXHJcblxyXG5jbGFzcyBUZXh0TWFuaXB1bGF0b3J7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZXh0TWFuaXB1bGF0b3IgY29uc3RydWN0b3IuXHJcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgYWxsb3dzIHRvIHNldCB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBjYXJkIGxlbmd0aHMsIHRoZXNlIGFyZVxyXG4gICAgICogdXNlZCB0byBicmVhayB0aGUgdGV4dCBpbnRvIGZyYWdtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbWF4Q2FyZExlbmd0aCB0aGUgbWF4aW11bSBsZW5ndGggb2YgY2FyZCB0byBkZXRlY3QsIHRoaXMgaXMgdXNlZCB0byBicmVhayB0aGUgdGV4dCBpbnRvIGZyYWdtZW50cyBvbmx5XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbWluQ2FyZExlbmd0aCB0aGUgbWluaW11bSBsZW5ndGggb2YgY2FyZCB0byBkZXRlY3QsIHRoaXMgaXMgdXNlZCB0byBicmVhayB0aGUgdGV4dCBpbnRvIGZyYWdtZW50cyBvbmx5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1heENhcmRMZW5ndGggPSBudWxsLCBtaW5DYXJkTGVuZ3RoID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5tYXhDYXJkTGVuZ3RoID0gKG1heENhcmRMZW5ndGggPT09IG51bGwpID8gMjAgOiBtYXhDYXJkTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubWluQ2FyZExlbmd0aCA9IChtaW5DYXJkTGVuZ3RoID09PSBudWxsKSA/IDcgOiBtaW5DYXJkTGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXh0cmFjdE51bWJlckZyb21UZXh0XHJcbiAgICAgKiBleHRyYWN0cyBhIG51bWJlciBmcm9tIHRoZSBwcm92aWRlZCB0ZXh0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IGZyb20gd2hpY2ggdG8gZXh0cmFjdCB0aGUgbnVtYmVyXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gdGhlIGV4dHJhY3RlZCBudW1iZXIgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBleHRyYWN0TnVtYmVyRnJvbVRleHQodGV4dCl7XHJcbiAgICAgICAgbGV0IG51bWJlciA9ICB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChcIlteMC05XVwiLCBcImdcIiksICcnKTtcclxuICAgICAgICBpZihudW1iZXIubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRDb250aW51b3VzTnVtYmVyc1xyXG4gICAgICogcmV0dXJucyB0aGUgbnVtYmVycyB0aGF0IGFwcGVhciBjb250aW51b3VzbHkgaW4gZ2l2ZW4gdGV4dC4gRm9yIGV4OlxyXG4gICAgICogXCIgYmxhIGJsYSAxMjM0NTYgYmxhIGJsYVwiIHdpbGwgcmV0dXJuIFtcIjEyMzQ1NlwiXVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IGZyb20gd2hpY2ggdG8gZXh0cmFjdCB0aGUgbnVtYmVyc1xyXG4gICAgICogQHJldHVybiB7QXJyYXl9IHRoZSBhcnJheSBvZiBudW1iZXJzIGV4dHJhY3RlZFxyXG4gICAgICovXHJcbiAgICBnZXRDb250aW51b3VzTnVtYmVycyh0ZXh0KXtcclxuICAgICAgICByZXR1cm4gdGV4dC5tYXRjaChuZXcgUmVnRXhwKFwiKFswLTldKylcIiwgXCJnXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldERpc2NvbnRpbnVvdXNOdW1iZXJzXHJcbiAgICAgKiByZXR1cm5zIHRoZSBudW1iZXJzIHRoYXQgYXBwZWFyIGNvbnRpbnVvdXNseSBpbiBnaXZlbiB0ZXh0LiBGb3IgZXg6XHJcbiAgICAgKiBcIiBibGEgYmxhIDEyMyA0NTYgYmxhIDMyMS00IDUgYmxhIDk4NzZcIiB3aWxsIHJldHVybiBbXCIxMjMgNDU2XCIsIFwiMzIxLTQgNVwiLCBcIjk4NzZcIl1cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBmcm9tIHdoaWNoIHRvIGV4dHJhY3QgdGhlIG51bWJlcnNcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSB0aGUgYXJyYXkgb2YgbnVtYmVycyBleHRyYWN0ZWRcclxuICAgICAqL1xyXG4gICAgZ2V0RGlzY29udGludW91c051bWJlcnModGV4dCl7XHJcbiAgICAgICAgcmV0dXJuIHRleHQubWF0Y2gobmV3IFJlZ0V4cChcIihbMC05XSsoKCg/IVthLXpBLVpdKSkoW15hLXpBLVpdKykpWzAtOV0pXCIsIFwiZ1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRTdXNwZWN0ZWRGcmFnbWVudHNcclxuICAgICAqIGJyZWFrcyB0aGUgZ2l2ZW4gdGV4dCBpbnRvIHN1c3BlY3RlZCBmcmFnbWVudHMgd2hpY2ggY29udGFpbiBhIG51bWJlci5cclxuICAgICAqIFRoaXMgbnVtYmVyIHdpbGwgZnVydGhlciBiZSBpbnNwZWN0ZWQgZm9yIGFjY2Vzc2luZyB3aGV0aGVyIGl0IGJlbG9uZ3MgdG9cclxuICAgICAqIGEgY3JlZGl0IGNhcmQgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSBzdHJpbmcgZnJvbSB3aGljaCB0byBleHRyYWN0IHRoZSBmcmFnbWVudHNcclxuICAgICAqIEBwYXJhbSB7aW50fSBjaGVja0xldmVsIHRoZSBsZXZlbCBvZiBjaGVjayB1c2VkIHRvIGluc3BlY3QgdGhlIHRleHQgYW5kIGlkZW50aWZ5IG51bWJlcnMgWzEtMl1cclxuICAgICAqIEByZXR1cm4ge0FycmF5fSB0aGUgYXJyYXkgb2Ygc3VzcGVjdGVkIGZyYWdtZW50c1xyXG4gICAgICovXHJcbiAgICBnZXRTdXNwZWN0ZWRGcmFnbWVudHModGV4dCwgY2hlY2tMZXZlbCl7XHJcbiAgICAgICAgbGV0IGZyYWdtZW50cztcclxuICAgICAgICBzd2l0Y2goY2hlY2tMZXZlbCl7XHJcbiAgICAgICAgICAgIGNhc2UgMiAgOiAgIGZyYWdtZW50cyA9IHRoaXMuZ2V0RGlzY29udGludW91c051bWJlcnModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEgIDpcclxuICAgICAgICAgICAgZGVmYXVsdCA6ICAgZnJhZ21lbnRzID0gdGhpcy5nZXRDb250aW51b3VzTnVtYmVycyh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZnJhZ21lbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50cy5maWx0ZXIoKGVsLCBpLCBhKSA9PiBpID09PSBhLmluZGV4T2YoZWwpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1hcmtGcmFnbWVudFxyXG4gICAgICogbWFya3MgdGhlIHNwZWNpZmllZCBmcmFnbWVudCBpbiBnaXZlbiB0ZXh0IHdpdGggdGhlIHByb3ZpZGVkIG1hcmtlclxyXG4gICAgICogVGhlIG1haW4gdGV4dCBpcyBwYXNzZWQgYnkgcmVmZXJlbmNlLCBzbyB0aGUgb3JpZ2luYWwgdGV4dCBnZXRzIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgICAgICB0aGUgdGV4dCBpbiB3aGljaCB0byBkbyB0aGUgbWFya2luZ1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZyYWdtZW50ICB0aGUgZnJhZ21lbnQgdGhhdCBuZWVkcyB0byBiZSBtYXJrZWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrZXIgICAgdGhlIG1hcmtlciB1c2VkIHRvIGlkZW50aWZ5IHRoZSBtYXJrXHJcbiAgICAgKi9cclxuICAgIG1hcmtGcmFnbWVudCh0ZXh0LCBmcmFnbWVudCwgbWFya2VyKXtcclxuICAgICAgICBpZihmcmFnbWVudCA9PT0gJycpIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIGxldCByZXBsYWNlbWVudCA9IFwie3tcIitmcmFnbWVudCtcIn1bXCIrbWFya2VyK1wiXX1cIjtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoZnJhZ21lbnQsIFwiZ1wiKSxyZXBsYWNlbWVudCk7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIENhcmRJZGVudGlmaWVyXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgd2l0aCB0aGUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgY2FyZFxyXG4gKiBudW1iZXJzIGZyb20gYSBnaXZlbiBwaWVjZSBvZiB0ZXh0LlxyXG4gKlxyXG4gKiBBbnkgZ2l2ZW4gdGV4dCB3aWxsIGJlIHJldHVybmVkIHdpdGggYSBmb3JtYXR0ZWQgZHVwbGljYXRlIHdoaWNoIHdpbGxcclxuICogaGF2ZSBhbnkgZnJhZ21lbnRzIG9mIHRleHQgdGhhdCBhcmUgc3VzcGVjdGVkIG9mIGJlaW5nIGNyZWRpdCBjYXJkXHJcbiAqIG51bWJlcnMgbWFya2VkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICAgUmlqdWwgR3VwdGEgPHJpanVsZ0BuZWJsYXIuY29tPlxyXG4gKiBAc2luY2UgICAgICAgMjQgRGVjIDIwMTdcclxuICogQGNvcHlyaWdodCAgIDIwMTcgTmVibGFyIFRlY2hub2xvZ2llc1xyXG4gKiBAbGljZW5zZSAgICAgTUlUXHJcbiovXHJcblxyXG5jbGFzcyBDYXJkSWRlbnRpZmllcntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcmRJZGVudGlmaWVyIGNvbnN0cnVjdG9yLlxyXG4gICAgICogVGhlIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkIGhlcmUgdG8gY3VzdG9taXplIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGNoZWNrcyBieSBhbHRlcmluZ1xyXG4gICAgICogdGhlIGxldmVsIG9mIGNoZWNrcywgdGhlIHByb2JhYmlsaXRpZXMgYXNzaWduZWQgdG8gdmFyaW91cyB2YWxpZGF0aW9ucywgdGhlIGNvbnN0YW50c1xyXG4gICAgICogdXNlZCBmb3IgdmFsaWRhdGlvbiBhbmQgdGhlIG1hcmtlcnMgdXNlZCB0byBpZGVudGlmeSBzdXNwZWN0ZWQgZW50cmllc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICAgICAgICAgICAgICB0aHJlc2hvbGRBbGVydCAgICAgdGhlIHRocmVzaG9sZCB1c2VkIGZvciBzZXBhcmF0aW5nIG51bWJlcnMgd2hpY2ggd2UgYXJlIHN1cmUgYWJvdXQgYW5kIHRob3NlIHdlIGFyZW4ndFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgICAgICAgICAgICAgIHRocmVzaG9sZE5vdGljZSAgICB0aGUgdGhyZXNob2xkIHVzZWQgZm9yIHNlcGFyYXRpbmcgbnVtYmVycyB3aGljaCB3ZSBhcmUgc3VyZSBhYm91dCBhbmQgdGhvc2Ugd2UgYXJlbid0XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gICAgICAgICAgICAgICAgICAgY2hlY2tMZXZlbCAgICAgICAgIHRoZSBsZXZlbCBvZiBjaGVjayB1c2VkIHRvIGluc3BlY3QgdGhlIHRleHQgYW5kIGlkZW50aWZ5IG51bWJlcnMgWzEtMl1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICBhbGVydCAgICAgICAgICAgICAgdGhlIHRleHQgdXNlZCB0byBpZGVudGlmeSB0aGUgbnVtYmVycyB0aGF0IGFyZSBpZGVudGlmaWVkIHdpdGggY2VydGFpbnR5XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgbm90aWNlICAgICAgICAgICAgIHRoZSB0ZXh0IHVzZWQgdG8gaWRlbnRpZnkgdGhlIG51bWJlcnMgdGhhdCBhcmUgaWRlbnRpZmllZCB3aXRob3V0IHVuY2VydGFpbnR5XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gICAgICAgICAgICAgICAgICAgbWF4Q2FyZExlbmd0aCAgICAgIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiBjYXJkIHRvIGRldGVjdCwgdGhpcyBpcyB1c2VkIHRvIGJyZWFrIHRoZSB0ZXh0IGludG8gZnJhZ21lbnRzIG9ubHlcclxuICAgICAqIEBwYXJhbSB7aW50fSAgICAgICAgICAgICAgICAgICBtaW5DYXJkTGVuZ3RoICAgICAgdGhlIG1pbmltdW0gbGVuZ3RoIG9mIGNhcmQgdG8gZGV0ZWN0LCB0aGlzIGlzIHVzZWQgdG8gYnJlYWsgdGhlIHRleHQgaW50byBmcmFnbWVudHMgb25seVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgICAgICAgIHByb2JhYmlsaXRpZXMgICAgICB0aGUgcHJvYmFiaWxpdGllcyBhc3NpZ25lZCB0byB2YXJpb3VzIHZhbGlkYXRpb25zIGluIFZhbGlkYXRpb25GdW5jdGlvbnNcclxuICAgICAqIEBwYXJhbSB7VmFsaWRhdGlvbkNvbnN0YW50c30gICBjb25zdGFudHNDbGFzcyAgICAgdGhlIGNvbnN0YW50cyB1c2VkIGZvciB2YWxpZGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRocmVzaG9sZEFsZXJ0ID0gbnVsbCx0aHJlc2hvbGROb3RpY2UgPSBudWxsLCBjaGVja0xldmVsID0gbnVsbCwgYWxlcnQgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgbm90aWNlID0gbnVsbCwgbWF4Q2FyZExlbmd0aCA9IG51bGwsIG1pbkNhcmRMZW5ndGggPSBudWxsLCBwcm9iYWJpbGl0aWVzID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50c0NsYXNzID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5hbGVydCAgICAgICAgICAgID0gKGFsZXJ0ID09PSBudWxsKSA/ICdBTEVSVCcgOiBhbGVydDtcclxuICAgICAgICB0aGlzLmNoZWNrTGV2ZWwgICAgICAgPSAoY2hlY2tMZXZlbCA9PT0gbnVsbCkgPyAyIDogY2hlY2tMZXZlbDtcclxuICAgICAgICB0aGlzLm5vdGljZSAgICAgICAgICAgPSAobm90aWNlID09PSBudWxsKSA/ICdOT1RJQ0UnIDogbm90aWNlO1xyXG4gICAgICAgIHRoaXMudGV4dE1hbmlwdWxhdG9yICA9IG5ldyBUZXh0TWFuaXB1bGF0b3IobWF4Q2FyZExlbmd0aCwgbWluQ2FyZExlbmd0aCk7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGRBbGVydCAgID0gdGhyZXNob2xkQWxlcnQ7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGROb3RpY2UgID0gdGhyZXNob2xkTm90aWNlO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yICAgICAgICA9IG5ldyBDYXJkTnVtYmVyVmFsaWRhdG9yKHByb2JhYmlsaXRpZXMsIGNvbnN0YW50c0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluc3BlY3RUZXh0XHJcbiAgICAgKiBpbnNwZWN0cyB0aGUgcHJvdmlkZWQgdGV4dCBhbmQgZm9ybWF0cyB0aGUgdGV4dCB0byByZWZsZWN0IGlkZW50aWZpZWRcclxuICAgICAqIGNhcmQgbnVtYmVycyBpbiB0aGUgdGV4dC5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd29ya3Mgd2l0aG91dCBzZXR0aW5nIGFueSBvZiB0aGUgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3JcclxuICAgICAqIHdpdGggZGVmYXVsdHMgaW4gYWxsIHRoZSBzdWJzZXF1ZW50IGNsYXNzZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRoYXQgbmVlZHMgdG8gYmUgaW5zcGVjdGVkXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZyBmb3JtYXR0ZWQgdGV4dFxyXG4gICAgICovXHJcbiAgICBpbnNwZWN0VGV4dCh0ZXh0KXtcclxuICAgICAgICBjb25zdCBmcmFnbWVudHMgPSB0aGlzLnRleHRNYW5pcHVsYXRvci5nZXRTdXNwZWN0ZWRGcmFnbWVudHModGV4dCwgdGhpcy5jaGVja0xldmVsKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxmcmFnbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBudW1iZXIgPSB0aGlzLnRleHRNYW5pcHVsYXRvci5leHRyYWN0TnVtYmVyRnJvbVRleHQoZnJhZ21lbnRzW2ldKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudmFsaWRhdG9yLmlzUG9zc2libGVUb0JlQUNyZWRpdENhcmQobnVtYmVyKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy52YWxpZGF0b3IuaXNTdXJlbHlBQ3JlZGl0Q2FyZE51bWJlcihudW1iZXIsIHRoaXMudGhyZXNob2xkQWxlcnQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRoaXMudGV4dE1hbmlwdWxhdG9yLm1hcmtGcmFnbWVudCh0ZXh0LGZyYWdtZW50c1tpXSx0aGlzLmFsZXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbnNwZWN0VGV4dFdpdGhOb3RpY2VzXHJcbiAgICAgKiBpbnNwZWN0cyB0aGUgcHJvdmlkZWQgdGV4dCBhbmQgZm9ybWF0cyB0aGUgdGV4dCB0byByZWZsZWN0IGlkZW50aWZpZWRcclxuICAgICAqIGNhcmQgbnVtYmVycyBpbiB0aGUgdGV4dC5cclxuICAgICAqIEEgbm90aWNlIGlzIGFkZGVkIHRvIG51bWJlcnMgdGhhdCBoYXZlIGEgcHJvYmFiaWxpdHkgbW9yZSB0aGFuIHRocmVzaG9sZE5vdGljZVxyXG4gICAgICogb2YgYmVpbmcgYSBjcmVkaXQgY2FyZC5cclxuICAgICAqXHJcbiAgICAgKiBUbyBtYWtlIHVzZSBvZiB0aGlzIGZ1bmN0aW9uIHByb3Blcmx5IHNldCB0aGUgdGhyZXNob2xkQWxlcnQgYW5kIHRocmVzaG9sZE5vdGljZVxyXG4gICAgICogaW4gdGhlIGNvbnN0cnVjdG9yIHRvIGEgZGVzaXJlZCB2YWx1ZS4gSWYgeW91IGRvbid0IHdhbnQgYW55IHRocmVzaG9sZHMgZm9yIHRoZVxyXG4gICAgICogbm90aWNlcyB0aGVuIGp1c3QgbGVhdmUgaXQgYmxhbmsgb3IgcGFzcyBudWxsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dCB0aGUgdGV4dCB0aGF0IG5lZWRzIHRvIGJlIGluc3BlY3RlZFxyXG4gICAgICogQHJldHVybiBzdHJpbmcgZm9ybWF0dGVkIHRleHRcclxuICAgICovXHJcbiAgICBpbnNwZWN0VGV4dFdpdGhOb3RpY2VzKHRleHQpe1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50cyA9IHRoaXMudGV4dE1hbmlwdWxhdG9yLmdldFN1c3BlY3RlZEZyYWdtZW50cyh0ZXh0LCB0aGlzLmNoZWNrTGV2ZWwpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGZyYWdtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMudGV4dE1hbmlwdWxhdG9yLmV4dHJhY3ROdW1iZXJGcm9tVGV4dChmcmFnbWVudHNbaV0pO1xyXG4gICAgICAgICAgICBpZihudW1iZXIgIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52YWxpZGF0b3IuaXNQb3NzaWJsZVRvQmVBQ3JlZGl0Q2FyZChudW1iZXIpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9iYWJpbGl0eSA9IHRoaXMudmFsaWRhdG9yLmNhbGN1bGF0ZVByb2JhYmlsaXR5T2ZCZWluZ0FDcmVkaXRDYXJkKG51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50aHJlc2hvbGRBbGVydCA9PT0gbnVsbCB8fCBwcm9iYWJpbGl0eSA+IHRoaXMudGhyZXNob2xkQWxlcnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGhpcy50ZXh0TWFuaXB1bGF0b3IubWFya0ZyYWdtZW50KHRleHQsZnJhZ21lbnRzW2ldLHRoaXMuYWxlcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMudGhyZXNob2xkTm90aWNlID09PSBudWxsIHx8IHByb2JhYmlsaXR5ID4gdGhpcy50aHJlc2hvbGROb3RpY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGhpcy50ZXh0TWFuaXB1bGF0b3IubWFya0ZyYWdtZW50KHRleHQsZnJhZ21lbnRzW2ldLHRoaXMubm90aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG59Il19
