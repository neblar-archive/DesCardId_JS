/**
 * DesCardId
 * DesCardId (of Card Identification) is a php library used for identifying credit card numbers in text.
 * @version v1.0.0
 * @since December 25, 2017
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
            var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

            if (threshold === -1) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbGlkYXRpb25Db25zdGFudHMuanMiLCJWYWxpZGF0aW9uRnVuY3Rpb25zLmpzIiwiQ2FyZE51bWJlclZhbGlkYXRvci5qcyIsIlRleHRNYW5pcHVsYXRvci5qcyIsIkNhcmRJZGVudGlmaWVyLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRpb25Db25zdGFudHMiLCJNSU5fUE9TU0lCTEVfTEVOR1RIIiwiTUFYX1BPU1NJQkxFX0xFTkdUSCIsIlBST0JBQklMSVRJRVNfTEVOR1RIIiwiUFJPQkFCSUxJVElFU19SRUdFWF9QUk9WSURFUlMiLCJLTk9XTl9URVNUX05VTUJFUlMiLCJWYWxpZGF0aW9uRnVuY3Rpb25zIiwiY29uc3RhbnRzQ2xhc3MiLCJjb25zdGFudHMiLCJudW1iZXIiLCJpbmRleE9mIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJzdW0iLCJsYXN0RGlnaXQiLCJwYXJzZUludCIsInN1YnN0ciIsInJldmVyc2VTdHJpbmciLCJpIiwiZGlnaXQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc0Zpbml0ZSIsInByb3ZpZGVycyIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsInN0cmluZyIsIm91dCIsIkNhcmROdW1iZXJWYWxpZGF0b3IiLCJwcm9iYWJpbGl0aWVzIiwiREVGQVVMVF9USFJFU0hPTEQiLCJ2YWxpZGF0b3IiLCJwcm9iYWJpbGl0eSIsInZhbGlkYXRlS25vd25UZXN0TnVtYmVycyIsInZhbGlkYXRlTFVITiIsInZhbGlkYXRlUHJvdmlkZXIiLCJ2YWxpZGF0ZUxlbmd0aCIsInZhbGlkYXRlUG9zc2liaWxpdHkiLCJ0aHJlc2hvbGQiLCJjYWxjdWxhdGVQcm9iYWJpbGl0eU9mQmVpbmdBQ3JlZGl0Q2FyZCIsImtleVZhbHVlUGFpcnMiLCJvcmlnaW5hbFByb2JhYmlsaXRpZXMiLCJrZXkiLCJUZXh0TWFuaXB1bGF0b3IiLCJtYXhDYXJkTGVuZ3RoIiwibWluQ2FyZExlbmd0aCIsInRleHQiLCJyZXBsYWNlIiwibWF0Y2giLCJjaGVja0xldmVsIiwiZnJhZ21lbnRzIiwiZ2V0RGlzY29udGludW91c051bWJlcnMiLCJnZXRDb250aW51b3VzTnVtYmVycyIsImZpbHRlciIsImVsIiwiYSIsImZyYWdtZW50IiwibWFya2VyIiwicmVwbGFjZW1lbnQiLCJDYXJkSWRlbnRpZmllciIsInRocmVzaG9sZEFsZXJ0IiwidGhyZXNob2xkTm90aWNlIiwiYWxlcnQiLCJub3RpY2UiLCJ0ZXh0TWFuaXB1bGF0b3IiLCJnZXRTdXNwZWN0ZWRGcmFnbWVudHMiLCJleHRyYWN0TnVtYmVyRnJvbVRleHQiLCJpc1Bvc3NpYmxlVG9CZUFDcmVkaXRDYXJkIiwiaXNTdXJlbHlBQ3JlZGl0Q2FyZE51bWJlciIsIm1hcmtGcmFnbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0lBV0FBLG1CLEdBRUEsK0JBQUE7QUFBQTs7QUFDQSxTQUFBQyxtQkFBQSxHQUFBLENBQUE7QUFDQSxTQUFBQyxtQkFBQSxHQUFBLEVBQUE7O0FBRUE7OztBQUdBLFNBQUFDLG9CQUFBLEdBQUE7QUFDQSxZQUFBLEdBREEsRUFDQTtBQUNBLFlBQUEsR0FGQSxFQUVBO0FBQ0EsWUFBQSxFQUhBLENBR0E7QUFIQSxLQUFBOztBQU1BOzs7Ozs7QUFNQSxTQUFBQyw2QkFBQSxHQUFBO0FBQ0E7QUFDQSwrR0FBQSxHQUZBO0FBR0E7QUFDQSw2QkFBQSxFQUpBO0FBS0E7QUFDQSx5QkFBQSxFQU5BO0FBT0E7QUFDQSw2Q0FBQSxFQVJBO0FBU0E7QUFDQSwwQ0FBQSxFQVZBO0FBV0E7QUFDQSxnREFBQTtBQVpBLEtBQUE7O0FBZUE7Ozs7O0FBS0EsU0FBQUMsa0JBQUEsR0FBQSxDQUNBLGlCQURBLEVBQ0E7QUFDQSxxQkFGQSxFQUVBO0FBQ0EscUJBSEEsRUFHQTtBQUNBLHFCQUpBLEVBSUE7QUFDQSxxQkFMQSxFQUtBO0FBQ0EscUJBTkEsRUFNQTtBQUNBLHFCQVBBLEVBT0E7QUFDQSxxQkFSQSxFQVFBO0FBQ0EscUJBVEEsRUFTQTtBQUNBLHFCQVZBLEVBVUE7QUFDQSxxQkFYQSxFQVdBO0FBQ0Esc0JBWkEsRUFZQTtBQUNBLG9CQWJBLEVBYUE7QUFDQSxvQkFkQSxFQWNBO0FBQ0Esb0JBZkEsRUFlQTtBQUNBLG9CQWhCQSxFQWdCQTtBQUNBLG9CQWpCQSxFQWlCQTtBQUNBLG9CQWxCQSxFQWtCQTtBQUNBLG9CQW5CQSxFQW1CQTtBQUNBLG9CQXBCQSxFQW9CQTtBQUNBLHNCQXJCQSxFQXFCQTtBQUNBLHNCQXRCQSxFQXNCQTtBQUNBLHNCQXZCQSxFQXVCQTtBQUNBLHNCQXhCQSxFQXdCQTtBQUNBLHNCQXpCQSxFQXlCQTtBQUNBLHNCQTFCQSxFQTBCQTtBQUNBLHNCQTNCQSxFQTJCQTtBQUNBLHlCQTVCQSxFQTRCQTtBQUNBLHNCQTdCQSxFQTZCQTtBQUNBLHNCQTlCQSxFQThCQTtBQUNBLHNCQS9CQSxFQStCQTtBQUNBLHNCQWhDQSxFQWdDQTtBQUNBLHNCQWpDQSxFQWlDQTtBQUNBLHNCQWxDQSxFQWtDQTtBQUNBLHNCQW5DQSxFQW1DQTtBQUNBLHNCQXBDQSxFQW9DQTtBQUNBLHNCQXJDQSxFQXFDQTtBQUNBLHNCQXRDQSxFQXNDQTtBQUNBLHNCQXZDQSxFQXVDQTtBQUNBLHNCQXhDQSxFQXdDQTtBQUNBLHNCQXpDQSxFQXlDQTtBQUNBLHlCQTFDQSxFQTBDQTtBQUNBLHNCQTNDQSxFQTJDQTtBQUNBLHNCQTVDQSxFQTRDQTtBQUNBLHNCQTdDQSxFQTZDQTtBQUNBLG9CQTlDQSxFQThDQTtBQUNBLHdCQS9DQSxFQStDQTtBQUNBLHNCQWhEQSxFQWdEQTtBQUNBLHlCQWpEQSxFQWlEQTtBQUNBLHNCQWxEQSxFQWtEQTtBQUNBLHNCQW5EQSxFQW1EQTtBQUNBLHNCQXBEQSxFQW9EQTtBQUNBLHNCQXJEQSxFQXFEQTtBQUNBLHNCQXREQSxFQXNEQTtBQUNBLHNCQXZEQSxFQXVEQTtBQUNBLHNCQXhEQSxFQXdEQTtBQUNBLHNCQXpEQSxFQXlEQTtBQUNBLHNCQTFEQSxFQTBEQTtBQUNBLHNCQTNEQSxFQTJEQTtBQUNBLHNCQTVEQSxFQTREQTtBQUNBLHNCQTdEQSxFQTZEQTtBQUNBLHNCQTlEQSxFQThEQTtBQUNBLHNCQS9EQSxFQStEQTtBQUNBLHNCQWhFQSxFQWdFQTtBQUNBLG1CQWpFQSxFQWlFQTtBQUNBLHNCQWxFQSxFQWtFQTtBQUNBLHNCQW5FQSxFQW1FQTtBQUNBLHlCQXBFQSxFQW9FQTtBQUNBLHNCQXJFQSxFQXFFQTtBQUNBLHNCQXRFQSxFQXNFQTtBQUNBLHNCQXZFQSxFQXVFQTtBQUNBLHNCQXhFQSxFQXdFQTtBQUNBLHNCQXpFQSxFQXlFQTtBQUNBLHNCQTFFQSxFQTBFQTtBQUNBLHNCQTNFQSxFQTJFQTtBQUNBLHNCQTVFQSxFQTRFQTtBQUNBLHNCQTdFQSxFQTZFQTtBQUNBLHNCQTlFQSxFQThFQTtBQUNBLHFCQS9FQSxDQUFBO0FBaUZBLEM7O0FDcklBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkFDLG1COztBQUdBOzs7Ozs7QUFNQSxtQ0FBQTtBQUFBLFlBQUFDLGNBQUEsdUVBQUEsSUFBQTs7QUFBQTs7QUFDQSxhQUFBQyxTQUFBLEdBQUFELG1CQUFBLElBQUEsR0FBQSxJQUFBUCxtQkFBQSxFQUFBLEdBQUFPLGNBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O2lEQVFBRSxNLEVBQUE7QUFDQSxtQkFBQSxLQUFBRCxTQUFBLENBQUFILGtCQUFBLENBQUFLLE9BQUEsQ0FBQUQsTUFBQSxNQUFBLENBQUEsQ0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7dUNBU0FBLE0sRUFBQTtBQUNBLGdCQUFBRSxTQUFBRixPQUFBRSxNQUFBO0FBQ0EsZ0JBQUEsS0FBQUgsU0FBQSxDQUFBTCxvQkFBQSxDQUFBUyxjQUFBLENBQUFELE1BQUEsQ0FBQSxFQUFBO0FBQ0EsdUJBQUEsS0FBQUgsU0FBQSxDQUFBTCxvQkFBQSxDQUFBUSxNQUFBLENBQUE7QUFDQTtBQUNBLG1CQUFBLENBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztxQ0FPQUYsTSxFQUFBO0FBQ0EsZ0JBQUFJLE1BQUEsQ0FBQTtBQUNBLGdCQUFBRixTQUFBRixPQUFBRSxNQUFBO0FBQ0EsZ0JBQUFHLFlBQUFDLFNBQUFOLE9BQUFFLFNBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQUYscUJBQUFBLE9BQUFPLE1BQUEsQ0FBQSxDQUFBLEVBQUFMLFNBQUEsQ0FBQSxDQUFBO0FBQ0FGLHFCQUFBLEtBQUFRLGFBQUEsQ0FBQVIsTUFBQSxDQUFBO0FBQ0EsaUJBQUEsSUFBQVMsSUFBQSxDQUFBLEVBQUFBLElBQUFQLFNBQUEsQ0FBQSxFQUFBTyxHQUFBLEVBQUE7QUFDQSxvQkFBQUMsUUFBQUosU0FBQU4sT0FBQVMsQ0FBQSxDQUFBLENBQUE7O0FBRUEsb0JBQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQTtBQUNBQyw2QkFBQSxDQUFBO0FBQ0Esd0JBQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0FBLGlDQUFBLENBQUE7QUFDQTtBQUNBOztBQUVBTix1QkFBQU0sS0FBQTtBQUNBO0FBQ0EsbUJBQUEsQ0FBQU4sTUFBQUMsU0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OzRDQVFBTCxNLEVBQUE7O0FBRUEsZ0JBQUEsQ0FBQSxDQUFBVyxNQUFBQyxXQUFBWixNQUFBLENBQUEsQ0FBQSxJQUFBYSxTQUFBYixNQUFBLENBQUEsTUFBQSxLQUFBLEVBQUE7QUFDQSx1QkFBQSxLQUFBO0FBQ0E7O0FBRUEsZ0JBQUFFLFNBQUFGLE9BQUFFLE1BQUE7O0FBRUEsZ0JBQUFBLFNBQUEsS0FBQUgsU0FBQSxDQUFBUCxtQkFBQSxFQUFBO0FBQ0EsdUJBQUEsS0FBQTtBQUNBOztBQUVBLGdCQUFBVSxTQUFBLEtBQUFILFNBQUEsQ0FBQU4sbUJBQUEsRUFBQTtBQUNBLHVCQUFBLEtBQUE7QUFDQTs7QUFFQSxtQkFBQSxJQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O3lDQVFBTyxNLEVBQUE7QUFDQSxnQkFBQWMsWUFBQSxLQUFBZixTQUFBLENBQUFKLDZCQUFBO0FBQ0EsaUJBQUEsSUFBQW9CLEtBQUEsSUFBQUQsU0FBQSxFQUFBO0FBQ0Esb0JBQUFBLFVBQUFYLGNBQUEsQ0FBQVksS0FBQSxDQUFBLEVBQUE7QUFDQSx3QkFBQSxJQUFBQyxNQUFBLENBQUFELEtBQUEsRUFBQUUsSUFBQSxDQUFBakIsTUFBQSxDQUFBLEVBQUE7QUFDQSwrQkFBQWMsVUFBQUMsS0FBQSxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQUEsQ0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7c0NBTUFHLE0sRUFBQTtBQUNBLGdCQUFBVCxJQUFBUyxPQUFBaEIsTUFBQSxHQUFBLENBQUE7QUFBQSxnQkFDQWlCLE1BQUEsRUFEQTtBQUVBLG1CQUFBVixLQUFBLENBQUEsR0FBQTtBQUNBVSx1QkFBQUQsT0FBQVQsR0FBQSxDQUFBO0FBQ0E7QUFDQSxtQkFBQVUsR0FBQTtBQUNBOzs7Ozs7QUNwSkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CQUMsbUI7O0FBR0E7Ozs7Ozs7O0FBUUEsbUNBQUE7QUFBQSxZQUFBQyxhQUFBLHVFQUFBLElBQUE7QUFBQSxZQUFBdkIsY0FBQSx1RUFBQSxJQUFBOztBQUFBOztBQUNBLGFBQUF3QixpQkFBQSxHQUFBLEVBQUE7QUFDQSxZQUFBRCxrQkFBQSxJQUFBLEVBQUE7QUFDQSxpQkFBQUEsYUFBQSxHQUFBO0FBQ0Esd0JBQUEsRUFEQTtBQUVBLGdDQUFBLEdBRkE7QUFHQSw2QkFBQSxFQUhBO0FBSUEsMEJBQUE7QUFKQSxhQUFBO0FBTUEsU0FQQSxNQVFBO0FBQ0EsaUJBQUFBLGFBQUEsR0FBQUEsYUFBQTtBQUNBOztBQUVBLFlBQUF2QixtQkFBQSxJQUFBLEVBQUE7QUFDQSxpQkFBQXlCLFNBQUEsR0FBQSxJQUFBMUIsbUJBQUEsRUFBQTtBQUNBLFNBRkEsTUFHQTtBQUNBLGlCQUFBMEIsU0FBQSxHQUFBLElBQUExQixtQkFBQSxDQUFBQyxjQUFBLENBQUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OzsrREFVQUUsTSxFQUFBOztBQUVBLGdCQUFBd0IsY0FBQSxDQUFBOztBQUVBLGdCQUFBLEtBQUFELFNBQUEsQ0FBQUUsd0JBQUEsQ0FBQXpCLE1BQUEsQ0FBQSxFQUFBO0FBQ0F3QiwrQkFBQSxLQUFBSCxhQUFBLENBQUEsY0FBQSxDQUFBO0FBQ0E7O0FBRUEsZ0JBQUEsS0FBQUUsU0FBQSxDQUFBRyxZQUFBLENBQUExQixNQUFBLENBQUEsRUFBQTtBQUNBd0IsK0JBQUEsS0FBQUgsYUFBQSxDQUFBLE1BQUEsQ0FBQTtBQUNBOztBQUVBRywyQkFBQSxLQUFBRCxTQUFBLENBQUFJLGdCQUFBLENBQUEzQixNQUFBLEtBQUEsS0FBQXFCLGFBQUEsQ0FBQSxXQUFBLElBQUEsR0FBQSxDQUFBOztBQUVBRywyQkFBQSxLQUFBRCxTQUFBLENBQUFLLGNBQUEsQ0FBQTVCLE1BQUEsS0FBQSxLQUFBcUIsYUFBQSxDQUFBLFFBQUEsSUFBQSxHQUFBLENBQUE7O0FBRUEsbUJBQUFHLFdBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7a0RBUUF4QixNLEVBQUE7QUFDQSxtQkFBQSxLQUFBdUIsU0FBQSxDQUFBTSxtQkFBQSxDQUFBN0IsTUFBQSxDQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7a0RBVUFBLE0sRUFBQTtBQUFBLGdCQUFBOEIsU0FBQSx1RUFBQSxDQUFBLENBQUE7O0FBQ0EsZ0JBQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQUEsNEJBQUEsS0FBQVIsaUJBQUE7QUFDQTs7QUFFQSxnQkFBQUUsY0FBQSxLQUFBTyxzQ0FBQSxDQUFBL0IsTUFBQSxDQUFBOztBQUVBLG1CQUFBd0IsY0FBQU0sU0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O3lDQVVBRSxhLEVBQUE7QUFDQSxnQkFBQUMsd0JBQUEsS0FBQVosYUFBQTtBQUNBLGlCQUFBLElBQUFhLEdBQUEsSUFBQUYsYUFBQSxFQUFBO0FBQ0Esb0JBQUFBLGNBQUE3QixjQUFBLENBQUErQixHQUFBLENBQUEsRUFBQTtBQUNBLHdCQUFBQSxPQUFBLEtBQUFiLGFBQUEsRUFBQTtBQUNBLDZCQUFBQSxhQUFBLENBQUFhLEdBQUEsSUFBQUYsY0FBQUUsR0FBQSxDQUFBO0FBQ0EscUJBRkEsTUFHQTtBQUNBLDZCQUFBYixhQUFBLEdBQUFZLHFCQUFBO0FBQ0EsK0JBQUEsS0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFBLElBQUE7QUFDQTs7Ozs7O0FDeklBOzs7Ozs7Ozs7OztJQVdBRSxlOztBQUVBOzs7Ozs7OztBQVFBLCtCQUFBO0FBQUEsWUFBQUMsYUFBQSx1RUFBQSxJQUFBO0FBQUEsWUFBQUMsYUFBQSx1RUFBQSxJQUFBOztBQUFBOztBQUNBLGFBQUFELGFBQUEsR0FBQUEsa0JBQUEsSUFBQSxHQUFBLEVBQUEsR0FBQUEsYUFBQTtBQUNBLGFBQUFDLGFBQUEsR0FBQUEsa0JBQUEsSUFBQSxHQUFBLENBQUEsR0FBQUEsYUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs4Q0FPQUMsSSxFQUFBO0FBQ0EsZ0JBQUF0QyxTQUFBc0MsS0FBQUMsT0FBQSxDQUFBLElBQUF2QixNQUFBLENBQUEsUUFBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtBQUNBLGdCQUFBaEIsT0FBQUUsTUFBQSxLQUFBLENBQUEsRUFBQTtBQUNBLHVCQUFBLElBQUE7QUFDQTtBQUNBLG1CQUFBRixNQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OzZDQVFBc0MsSSxFQUFBO0FBQ0EsbUJBQUFBLEtBQUFFLEtBQUEsQ0FBQSxJQUFBeEIsTUFBQSxDQUFBLFVBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztnREFRQXNCLEksRUFBQTtBQUNBLG1CQUFBQSxLQUFBRSxLQUFBLENBQUEsSUFBQXhCLE1BQUEsQ0FBQSwyQ0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OENBVUFzQixJLEVBQUFHLFUsRUFBQTtBQUNBLGdCQUFBQyxrQkFBQTtBQUNBLG9CQUFBRCxVQUFBO0FBQ0EscUJBQUEsQ0FBQTtBQUFBQyxnQ0FBQSxLQUFBQyx1QkFBQSxDQUFBTCxJQUFBLENBQUE7QUFDQTtBQUNBLHFCQUFBLENBQUE7QUFDQTtBQUFBSSxnQ0FBQSxLQUFBRSxvQkFBQSxDQUFBTixJQUFBLENBQUE7QUFKQTtBQU1BLGdCQUFBSSxjQUFBLElBQUEsRUFBQTtBQUNBLHVCQUFBLEVBQUE7QUFDQTtBQUNBLG1CQUFBQSxVQUFBRyxNQUFBLENBQUEsVUFBQUMsRUFBQSxFQUFBckMsQ0FBQSxFQUFBc0MsQ0FBQTtBQUFBLHVCQUFBdEMsTUFBQXNDLEVBQUE5QyxPQUFBLENBQUE2QyxFQUFBLENBQUE7QUFBQSxhQUFBLENBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O3FDQVNBUixJLEVBQUFVLFEsRUFBQUMsTSxFQUFBO0FBQ0EsZ0JBQUFELGFBQUEsRUFBQSxFQUFBLE9BQUFWLElBQUE7QUFDQSxnQkFBQVksY0FBQSxPQUFBRixRQUFBLEdBQUEsSUFBQSxHQUFBQyxNQUFBLEdBQUEsSUFBQTtBQUNBLG1CQUFBWCxLQUFBQyxPQUFBLENBQUEsSUFBQXZCLE1BQUEsQ0FBQWdDLFFBQUEsRUFBQSxHQUFBLENBQUEsRUFBQUUsV0FBQSxDQUFBO0FBQ0E7Ozs7O0FDdEdBOzs7Ozs7Ozs7Ozs7Ozs7SUFlQUMsYzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSw4QkFFQTtBQUFBLFlBRkFDLGNBRUEsdUVBRkEsSUFFQTtBQUFBLFlBRkFDLGVBRUEsdUVBRkEsSUFFQTtBQUFBLFlBRkFaLFVBRUEsdUVBRkEsSUFFQTtBQUFBLFlBRkFhLEtBRUEsdUVBRkEsSUFFQTtBQUFBLFlBREFDLE1BQ0EsdUVBREEsSUFDQTtBQUFBLFlBREFuQixhQUNBLHVFQURBLElBQ0E7QUFBQSxZQURBQyxhQUNBLHVFQURBLElBQ0E7QUFBQSxZQURBaEIsYUFDQSx1RUFEQSxJQUNBO0FBQUEsWUFBQXZCLGNBQUEsdUVBQUEsSUFBQTs7QUFBQTs7QUFDQSxhQUFBd0QsS0FBQSxHQUFBQSxVQUFBLElBQUEsR0FBQSxPQUFBLEdBQUFBLEtBQUE7QUFDQSxhQUFBYixVQUFBLEdBQUFBLGVBQUEsSUFBQSxHQUFBLENBQUEsR0FBQUEsVUFBQTtBQUNBLGFBQUFjLE1BQUEsR0FBQUEsV0FBQSxJQUFBLEdBQUEsUUFBQSxHQUFBQSxNQUFBO0FBQ0EsYUFBQUMsZUFBQSxHQUFBLElBQUFyQixlQUFBLENBQUFDLGFBQUEsRUFBQUMsYUFBQSxDQUFBO0FBQ0EsYUFBQWUsY0FBQSxHQUFBQSxjQUFBO0FBQ0EsYUFBQUMsZUFBQSxHQUFBQSxlQUFBO0FBQ0EsYUFBQTlCLFNBQUEsR0FBQSxJQUFBSCxtQkFBQSxDQUFBQyxhQUFBLEVBQUF2QixjQUFBLENBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7b0NBVUF3QyxJLEVBQUE7QUFDQSxnQkFBQUksWUFBQSxLQUFBYyxlQUFBLENBQUFDLHFCQUFBLENBQUFuQixJQUFBLEVBQUEsS0FBQUcsVUFBQSxDQUFBO0FBQ0EsaUJBQUEsSUFBQWhDLElBQUEsQ0FBQSxFQUFBQSxJQUFBaUMsVUFBQXhDLE1BQUEsRUFBQU8sR0FBQSxFQUFBO0FBQ0Esb0JBQUFULFNBQUEsS0FBQXdELGVBQUEsQ0FBQUUscUJBQUEsQ0FBQWhCLFVBQUFqQyxDQUFBLENBQUEsQ0FBQTtBQUNBLG9CQUFBVCxXQUFBLElBQUEsRUFBQTtBQUNBLHdCQUFBLEtBQUF1QixTQUFBLENBQUFvQyx5QkFBQSxDQUFBM0QsTUFBQSxDQUFBLEVBQUE7QUFDQSw0QkFBQSxLQUFBdUIsU0FBQSxDQUFBcUMseUJBQUEsQ0FBQTVELE1BQUEsRUFBQSxLQUFBb0QsY0FBQSxDQUFBLEVBQUE7QUFDQWQsbUNBQUEsS0FBQWtCLGVBQUEsQ0FBQUssWUFBQSxDQUFBdkIsSUFBQSxFQUFBSSxVQUFBakMsQ0FBQSxDQUFBLEVBQUEsS0FBQTZDLEtBQUEsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQUFoQixJQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQWNBQSxJLEVBQUE7QUFDQSxnQkFBQUksWUFBQSxLQUFBYyxlQUFBLENBQUFDLHFCQUFBLENBQUFuQixJQUFBLEVBQUEsS0FBQUcsVUFBQSxDQUFBO0FBQ0EsaUJBQUEsSUFBQWhDLElBQUEsQ0FBQSxFQUFBQSxJQUFBaUMsVUFBQXhDLE1BQUEsRUFBQU8sR0FBQSxFQUFBO0FBQ0Esb0JBQUFULFNBQUEsS0FBQXdELGVBQUEsQ0FBQUUscUJBQUEsQ0FBQWhCLFVBQUFqQyxDQUFBLENBQUEsQ0FBQTtBQUNBLG9CQUFBVCxXQUFBLElBQUEsRUFBQTtBQUNBLHdCQUFBLEtBQUF1QixTQUFBLENBQUFvQyx5QkFBQSxDQUFBM0QsTUFBQSxDQUFBLEVBQUE7QUFDQSw0QkFBQXdCLGNBQUEsS0FBQUQsU0FBQSxDQUFBUSxzQ0FBQSxDQUFBL0IsTUFBQSxDQUFBO0FBQ0EsNEJBQUEsS0FBQW9ELGNBQUEsS0FBQSxJQUFBLElBQUE1QixjQUFBLEtBQUE0QixjQUFBLEVBQUE7QUFDQWQsbUNBQUEsS0FBQWtCLGVBQUEsQ0FBQUssWUFBQSxDQUFBdkIsSUFBQSxFQUFBSSxVQUFBakMsQ0FBQSxDQUFBLEVBQUEsS0FBQTZDLEtBQUEsQ0FBQTtBQUNBLHlCQUZBLE1BR0EsSUFBQSxLQUFBRCxlQUFBLEtBQUEsSUFBQSxJQUFBN0IsY0FBQSxLQUFBNkIsZUFBQSxFQUFBO0FBQ0FmLG1DQUFBLEtBQUFrQixlQUFBLENBQUFLLFlBQUEsQ0FBQXZCLElBQUEsRUFBQUksVUFBQWpDLENBQUEsQ0FBQSxFQUFBLEtBQUE4QyxNQUFBLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFBakIsSUFBQTtBQUNBIiwiZmlsZSI6IkRlc0NhcmRJZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBWYWxpZGF0aW9uQ29uc3RhbnRzXHJcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgYWxsIHRoZSBjb25zdGFudHMgdGhhdCBhcmUgdXNlZCBmb3IgdmFyaW91c1xyXG4gKiB2YWxpZGF0aW9ucy5cclxuICpcclxuICogQGF1dGhvciAgICAgIFJpanVsIEd1cHRhIDxyaWp1bGdAbmVibGFyLmNvbT5cclxuICogQHNpbmNlICAgICAgIDI0IERlYyAyMDE3XHJcbiAqIEBjb3B5cmlnaHQgICAyMDE3IE5lYmxhciBUZWNobm9sb2dpZXNcclxuICogQGxpY2Vuc2UgICAgIE1JVFxyXG4qL1xyXG5cclxuY2xhc3MgVmFsaWRhdGlvbkNvbnN0YW50c3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuTUlOX1BPU1NJQkxFX0xFTkdUSCA9IDc7XHJcbiAgICAgICAgdGhpcy5NQVhfUE9TU0lCTEVfTEVOR1RIID0gMTk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICpUaGVzZSBhcmUgcHJvYmFiaWxpdGllcyBiYXNlZCBvbiB0aGUgbW9zdCBjb21tb24gY2FyZCBsZW5ndGhzXHJcbiAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBST0JBQklMSVRJRVNfTEVOR1RIID0ge1xyXG4gICAgICAgICAgICAxNiA6IDEwMCwgLypUaGlzIGlzIHRoZSBtb3N0IGNvbW1vbiBjYXJkIG51bWJlciBsZW5ndGgqL1xyXG4gICAgICAgICAgICAxNSA6IDEwMCwgLypBbWVyaWNhbiBFeHByZXNzIGhhcyBjYXJkcyBvZiB0aGlzIGxlbmd0aCovXHJcbiAgICAgICAgICAgIDEzIDogODAsIC8qVklTQSBzb21ldGltZXMgbWFrZXMgY2FyZHMgb2YgdGhpcyBsZW5ndGgqL1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogSWYgdGhlIGlkZW50aWZpY2F0aW9uIGZpbmdlcnByaW50cyBvZiBhIHR5cGUgb2YgY2FyZCBhcmUgdG9vIGZld1xyXG4gICAgICAgICAqIGkuZS4gaWYgdGhlIHJlZ2V4IHBhdHRlciBpcyB0b28gc2hvcnQsIHdoaWNoIGluIHR1cm5zIG1lYW5zIHRoYXRcclxuICAgICAgICAgKiBpdCBtaWdodCBwcm9kdWNlIG1vcmUgZmFsc2UgcG9zaXRpdmVzIHRoZSBwcm9iYWJpbGl0eSBhc3NpZ25lZFxyXG4gICAgICAgICAqIHRvIHRoYXQgcGFydGljdWxhciByZWdleCBpcyBsb3cuXHJcbiAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBST0JBQklMSVRJRVNfUkVHRVhfUFJPVklERVJTID0ge1xyXG4gICAgICAgICAgICAvKlJlZ2V4IHRvIGlkZW50aWZ5IG1hc3RlcmNhcmQqL1xyXG4gICAgICAgICAgICAnXig1WzEtNV1bMC05XXs1LH18MjIyWzEtOV1bMC05XXszLH18MjJbMy05XVswLTldezQsfXwyWzMtNl1bMC05XXs1LH18MjdbMDFdWzAtOV17NCx9fDI3MjBbMC05XXszLH0pJzogMTAwLFxyXG4gICAgICAgICAgICAvKlJlZ2V4IHRvIGlkZW50aWZ5IGFtZXJpY2FuIGV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnXigzWzQ3XVswLTldezUsfSknOiA3MCxcclxuICAgICAgICAgICAgLypSZWdleCB0byBpZGVudGlmeSBWSVNBKi9cclxuICAgICAgICAgICAgJ14oNFswLTldezYsfSknOiA1MCxcclxuICAgICAgICAgICAgLypSZWdleCB0byBpZGVudGlmeSBEaW5lcnMgQ2x1YiovXHJcbiAgICAgICAgICAgICdeKDMoPzowWzAtNV18WzY4XVswLTldKVswLTldezQsfSknOiA4NSxcclxuICAgICAgICAgICAgLypSZWdleCB0byBpZGVudGlmeSBEaXNjb3ZlciovXHJcbiAgICAgICAgICAgICdeKDYoPzowMTF8NVswLTldezJ9KVswLTldezMsfSknOiA4MCxcclxuICAgICAgICAgICAgLypSZWdleCB0byBpZGVudGlmeSBKQ0IqL1xyXG4gICAgICAgICAgICAnXigoPzoyMTMxfDE4MDB8MzVbMC05XXszfSlbMC05XXszLH0pJzogODUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBUaGVzZSBhcmUgdGhlIHRlc3QgbnVtYmVycyB0aGF0IGFyZSBvcGVubHkgcHJvdmlkZWQgYnkgdmFyaW91cyBwcm92aWRlcnNcclxuICAgICAgICAgKiBzbyB0aGF0IHdlIGNhbiBjb3JyZWN0bHkgaWRlbnRpZnkgaWYgc29tZW9uZSBjaGVja3MgZm9yIGFueSBvZiBUaGVzZVxyXG4gICAgICAgICAqIHdpdGggZnVsbCBjZXJ0YWludHlcclxuICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuS05PV05fVEVTVF9OVU1CRVJTID0gW1xyXG4gICAgICAgICAgICAnMzc4MjgyMjQ2MzEwMDA1JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzcxNDQ5NjM1Mzk4NDMxJywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzQ1NDM2ODQ5MjUzNzg2JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzQ0MzQzNTk3MDk4NzM5JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzQ4MTk1MDUzMTQ4MTg0JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzQ2NzYxMTI4OTU4MTk2JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzc5OTgzOTYzOTE2OTg2JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzc2NzQ5NTAxODc5MDA5JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzQ5MjA0MjU0NjM0MjEzJywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzc2NDMyNTEwNDYzNTY2JywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MqL1xyXG4gICAgICAgICAgICAnMzc4NzM0NDkzNjcxMDAwJywgICAgICAvKkFtZXJpY2FuIEV4cHJlc3MgQ29ycG9yYXRlKi9cclxuICAgICAgICAgICAgJzU2MTA1OTEwODEwMTgyNTAnLCAgICAgLypBdXN0cmFsaWFuIEJhbmtDYXJkKi9cclxuICAgICAgICAgICAgJzMwNTY5MzA5MDI1OTA0JywgICAgICAgLypEaW5lcnMgQ2x1YiovXHJcbiAgICAgICAgICAgICczODUyMDAwMDAyMzIzNycsICAgICAgIC8qRGluZXJzIENsdWIqL1xyXG4gICAgICAgICAgICAnMzA0NjczMjM3ODMzOTQnLCAgICAgICAvKkRpbmVycyBDbHViIChDYXJ0ZSBCbGFuY2hlKSovXHJcbiAgICAgICAgICAgICczMDM4OTU4OTA0OTQzNycsICAgICAgIC8qRGluZXJzIENsdWIgKENhcnRlIEJsYW5jaGUpKi9cclxuICAgICAgICAgICAgJzMwMjEzNDY5NzgyOTAxJywgICAgICAgLypEaW5lcnMgQ2x1YiAoQ2FydGUgQmxhbmNoZSkqL1xyXG4gICAgICAgICAgICAnMzYxOTczNjU3MTg4OTEnLCAgICAgICAvKkRpbmVycyBDbHViIChJbnRlcm5hdGlvbmFsKSovXHJcbiAgICAgICAgICAgICczNjgyMzc4NTAyNDc0OScsICAgICAgIC8qRGluZXJzIENsdWIgKEludGVybmF0aW9uYWwpKi9cclxuICAgICAgICAgICAgJzM2MjUxNzAxODcxMTAyJywgICAgICAgLypEaW5lcnMgQ2x1YiAoSW50ZXJuYXRpb25hbCkqL1xyXG4gICAgICAgICAgICAnNTQ4NTE1NzA1OTI3ODIyNycsICAgICAvKkRpbmVycyBDbHViIChOb3J0aCBBbWVyaWNhKSovXHJcbiAgICAgICAgICAgICc1NDE4MTk5OTg4MzYyNDg0JywgICAgIC8qRGluZXJzIENsdWIgKE5vcnRoIEFtZXJpY2EpKi9cclxuICAgICAgICAgICAgJzU0MDIwOTM4NzA2NzU3NjQnLCAgICAgLypEaW5lcnMgQ2x1YiAoTm9ydGggQW1lcmljYSkqL1xyXG4gICAgICAgICAgICAnNjAxMTExMTExMTExMTExNycsICAgICAvKkRpc2NvdmVyKi9cclxuICAgICAgICAgICAgJzYwMTEwMDA5OTAxMzk0MjQnLCAgICAgLypEaXNjb3ZlciovXHJcbiAgICAgICAgICAgICc2MDExNTQwMDE4MzQxNzU5JywgICAgIC8qRGlzY292ZXIqL1xyXG4gICAgICAgICAgICAnNjAxMTA1MjA1NzcyMzkyMScsICAgICAvKkRpc2NvdmVyKi9cclxuICAgICAgICAgICAgJzYwMTEyNzc2MTgyMTE0ODQ1ODUnLCAgLypEaXNjb3ZlciovXHJcbiAgICAgICAgICAgICc2MDExODYxMjg2ODM1NzIyJywgICAgIC8qRGlzY292ZXIqL1xyXG4gICAgICAgICAgICAnNjAxMTg5MDM3NjE3MzY2MCcsICAgICAvKkRpc2NvdmVyKi9cclxuICAgICAgICAgICAgJzYwMTE0NjQyNDc4OTI1MTgnLCAgICAgLypEaXNjb3ZlciovXHJcbiAgICAgICAgICAgICc2MDExMjQ0NzU4NDI4MDQ3JywgICAgIC8qRGlzY292ZXIqL1xyXG4gICAgICAgICAgICAnNjAxMTQ2OTM0NTcyOTMwNicsICAgICAvKkRpc2NvdmVyKi9cclxuICAgICAgICAgICAgJzYzODI5NjE4MDYwNDY1OTMnLCAgICAgLypJbnN0YVBheW1lbnQqL1xyXG4gICAgICAgICAgICAnNjM3MzQxMzM5NzQ5NzQ2MycsICAgICAvKkluc3RhUGF5bWVudCovXHJcbiAgICAgICAgICAgICc2Mzc1Mjc1MjE3NDM3MzY5JywgICAgIC8qSW5zdGFQYXltZW50Ki9cclxuICAgICAgICAgICAgJzM1MzAxMTEzMzMzMDAwMDAnLCAgICAgLypKQ0IqL1xyXG4gICAgICAgICAgICAnMzU2NjAwMjAyMDM2MDUwNScsICAgICAvKkpDQiovXHJcbiAgICAgICAgICAgICczNTY2MTExMTExMTExMTEzJywgICAgIC8qSkNCKi9cclxuICAgICAgICAgICAgJzM1Mjk4NDQ0NzA5OTQ3NTQnLCAgICAgLypKQ0IqL1xyXG4gICAgICAgICAgICAnMzUzNTc1NDIzMTQzNzM2OScsICAgICAvKkpDQiovXHJcbiAgICAgICAgICAgICczNTQxMDMxMzM3NDY3Mjk5NzIyJywgIC8qSkNCKi9cclxuICAgICAgICAgICAgJzY3NjI2Nzg5NDEwODQ4MzAnLCAgICAgLypNYWVzdHJvKi9cclxuICAgICAgICAgICAgJzUwMTgxMzE1NDgxNTgzMDQnLCAgICAgLypNYWVzdHJvKi9cclxuICAgICAgICAgICAgJzYzMDQ1MjE5MzQzMzM5OTMnLCAgICAgLypNYWVzdHJvKi9cclxuICAgICAgICAgICAgJzUwMzM5NjE5ODkwOTE3JywgICAgICAgLypNYWVzdHJvIChJbnRlcm5hdGlvbmFsKSovXHJcbiAgICAgICAgICAgICc1ODY4MjQxNjA4MjU1MzMzMzgnLCAgIC8qTWFlc3RybyAoSW50ZXJuYXRpb25hbCkqL1xyXG4gICAgICAgICAgICAnNjc1OTQxMTEwMDAwMDAwOCcsICAgICAvKk1hZXN0cm8gKFVLIERvbWVzdGljKSovXHJcbiAgICAgICAgICAgICc2NzU5NTYwMDQ1MDA1NzI3MDU0JywgIC8qTWFlc3RybyAoVUsgRG9tZXN0aWMpKi9cclxuICAgICAgICAgICAgJzU2NDE4MjExMTExNjY2NjknLCAgICAgLypNYWVzdHJvIChVSyBEb21lc3RpYykqL1xyXG4gICAgICAgICAgICAnNTU1NTU1NTU1NTU1NDQ0NCcsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTEwNTEwNTEwNTEwNTEwMCcsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnMjIyMjQyMDAwMDAwMTExMycsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnMjIyMjYzMDAwMDAwMTEyNScsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTI0Njc3MjA1OTI0MjI5NCcsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTM2NTY0MzQxMjM2MDkyMicsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTMxMDUwNjQ3NTUwMjg1MicsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTE5MjMxMDU2MDgyNjY0NicsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTE3NDIyNDkyNDA4MTQ4NycsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTM1MzczMjMxMTkzODQ4NCcsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTIwMzI0NjA3NTg4Mzk1MicsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNTE4NjY4MjQ3NjMwNjYyNicsICAgICAvKk1hc3RlckNhcmQqL1xyXG4gICAgICAgICAgICAnNDExMTExMTExMTExMTExMScsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDAxMjg4ODg4ODg4MTg4MScsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDIyMjIyMjIyMjIyMicsICAgICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDMzMDk1NDE4NzQyOTI2MicsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDkxNjg2MTg3MzA0MjYyNicsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDAyNDAwNzE3NjY1ODg5MjExOScsICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDQ4NTk5MjU1ODg4Njg4NycsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDU1NjU1NjY4OTg1MzIwOScsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDUzMjM3OTM0Mjc1MTA3NycsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDAyNDAwNzE1MzUyNDk4NycsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDQ4NTY0MzIwNDEwMjYxMycsICAgICAvKlZJU0EqL1xyXG4gICAgICAgICAgICAnNDUwODEzODA3OTY4NjUzOCcsICAgICAvKlZJU0EgKGVsZWN0cm9uKSovXHJcbiAgICAgICAgICAgICc0MDI2MjA3MTQwNTEwMTE5JywgICAgIC8qVklTQSAoZWxlY3Ryb24pKi9cclxuICAgICAgICAgICAgJzQ1MDg2MDg1OTM4NDc1NTAnLCAgICAgLypWSVNBIChlbGVjdHJvbikqL1xyXG4gICAgICAgICAgICAnNTAxOTcxNzAxMDEwMzc0MicsICAgICAvKlBCUyovXHJcbiAgICAgICAgICAgICc2MzMxMTAxOTk5OTkwMDE2JywgICAgIC8qUGF5bWVudGVjaCovXHJcbiAgICAgICAgICAgICcxMzU0MTIzNDU2Nzg5MTEnLCAgICAgIC8qVUFUUCovXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLyoqXHJcbiAqIFZhbGlkYXRpb25GdW5jdGlvbnNcclxuICogVGhpcyBjbGFzcyBjb250YWlucyBhbGwgdGhlIHZhcmlvdXMgYWxnb3JpdGhtcyB3ZSBlbXBsb3kgaW4gZGV0ZXJtaW5pbmdcclxuICogdGhhdCBhIGdpdmVuIG51bWJlciBiZWxvbmdzIHRvIGEgY3JlZGl0IGNhcmQgb3Igbm90LlxyXG4gKlxyXG4gKiBPbmx5IGEgdmFsaWQsIGZvcm1hdHRlZCBudW1iZXIgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGVzZSBmdW5jdGlvbnMuXHJcbiAqIEZvcm1hdHRlZCBoZXJlIGltcGxpZXMgdGhhdCB0aGVyZSBzaG91bGQgYmUgbm8gc3BhY2VzIG9yIHNwZWNpYWxcclxuICogY2hhcmFjdGVycyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBudW1iZXIuXHJcbiAqXHJcbiAqIFRoZSBmdW5jdGlvbnMgZG8gbm90IGhhdmUgYW4gZXh0cmEgbGF5ZXIgb2YgbnVtYmVyIHZhbGlkYXRpb24gYmVjYXVzZVxyXG4gKiB0aGF0IHBhcnRpY3VsYXIgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgeW91IGFjY2VzcyBhbnkgb2YgdGhlc2UuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgICBSaWp1bCBHdXB0YSA8cmlqdWxnQG5lYmxhci5jb20+XHJcbiAqIEBzaW5jZSAgICAgICAyNCBEZWMgMjAxN1xyXG4gKiBAY29weXJpZ2h0ICAgMjAxNyBOZWJsYXIgVGVjaG5vbG9naWVzXHJcbiAqIEBsaWNlbnNlICAgICBNSVRcclxuKi9cclxuXHJcbmNsYXNzIFZhbGlkYXRpb25GdW5jdGlvbnN7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGlvbkZ1bmN0aW9ucyBjb25zdHJ1Y3Rvci5cclxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBhbGxvd3MgdXMgdG8gY3VzdG9taXplIHRoZSBjb25zdGFudHMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY29uZHVjdCB0aGUgdmFsaWRhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtWYWxpZGF0aW9uQ29uc3RhbnRzfSAgIGNvbnN0YW50c0NsYXNzIHRoZSBjb25zdGFudHMgdXNlZCBmb3IgdmFsaWRhdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25zdGFudHNDbGFzcyA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuY29uc3RhbnRzID0gKGNvbnN0YW50c0NsYXNzID09PSBudWxsKSA/IG5ldyBWYWxpZGF0aW9uQ29uc3RhbnRzKCkgOiBjb25zdGFudHNDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHZhbGlkYXRlS25vd25UZXN0TnVtYmVyc1xyXG4gICAgICogY2hlY2tzIGlmIHRoZSBnaXZlbiBudW1iZXIgbWF0Y2hlcyBhbnkgb2YgdGhlIGRpc2Nsb3NlZCB0ZXN0IG51bWJlcnNcclxuICAgICAqIHByb3ZpZGVkIGJ5IHRoZSBtYWpvciBjb21wYW5pZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICBudW1iZXIgdGhlIG51bWJlciB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICB0cnVlIGlmIG51bWJlciBtYXRjaGVzIGEga25vd24gdGVzdCBudW1iZXIsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAgKi9cclxuICAgIHZhbGlkYXRlS25vd25UZXN0TnVtYmVycyhudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb25zdGFudHMuS05PV05fVEVTVF9OVU1CRVJTLmluZGV4T2YobnVtYmVyKSAhPT0gLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdmFsaWRhdGVMZW5ndGhcclxuICAgICAqIHJldHVybnMgdGhlIGxpa2VsaWhvb2Qgb2YgYSBudW1iZXIgYmVpbmcgYSBjcmVkaXQgY2FyZCBudW1iZXIgYmFzZWRcclxuICAgICAqIGp1c3Qgb24gaXQncyBsZW5ndGguIFNvIGEgY29tbW9uIGxlbmd0aCBsaWtlIDE2IHdvdWxkIHJldHVybiAxMDAsXHJcbiAgICAgKiBhbiB1bmNvbW1vbiBvbmUgbGlrZSAxOCB3b3VsZCByZXR1cm4gNjAgd2hpbGUgb3RoZXJzIHdvdWxkIHJldHVybiAwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbnVtYmVyIHRoZSBudW1iZXIgdG8gYmUgY2hlY2tlZFxyXG4gICAgICogQHJldHVybiB7aW50fSBsaWtlbGlob29kIGFzc29jaWF0ZWQgd2l0aCBsZW5ndGggb2YgbnVtYmVyXHJcbiAgICAqL1xyXG4gICAgdmFsaWRhdGVMZW5ndGgobnVtYmVyKXtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBudW1iZXIubGVuZ3RoO1xyXG4gICAgICAgIGlmKHRoaXMuY29uc3RhbnRzLlBST0JBQklMSVRJRVNfTEVOR1RILmhhc093blByb3BlcnR5KGxlbmd0aCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMuUFJPQkFCSUxJVElFU19MRU5HVEhbbGVuZ3RoXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWxpZGF0ZUxVSE5cclxuICAgICAqIHBlcmZvcm1zIGEgTFVITiBjaGVjayBvbiB0aGUgbnVtYmVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1iZXIgdGhlIG51bWJlciB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgIHRydWUgaWYgcGFzc2VzIHRoZSBjaGVjaywgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAqL1xyXG4gICAgdmFsaWRhdGVMVUhOKG51bWJlcil7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbnVtYmVyLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBsYXN0RGlnaXQgPSBwYXJzZUludChudW1iZXJbbGVuZ3RoLTFdKTtcclxuICAgICAgICBudW1iZXIgPSBudW1iZXIuc3Vic3RyKDAsbGVuZ3RoLTEpO1xyXG4gICAgICAgIG51bWJlciA9IHRoaXMucmV2ZXJzZVN0cmluZyhudW1iZXIpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aC0xOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgZGlnaXQgPSBwYXJzZUludChudW1iZXJbaV0pO1xyXG5cclxuICAgICAgICAgICAgaWYoaSUyID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGRpZ2l0ICo9IDI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlnaXQgPiA5KXtcclxuICAgICAgICAgICAgICAgICAgICBkaWdpdCAtPSA5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdW0gKz0gZGlnaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKChzdW0rbGFzdERpZ2l0KSUxMCk9PT0wKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHZhbGlkYXRlUG9zc2liaWxpdHlcclxuICAgICAqIGRldGVybWluZXMgd2hldGhlciBpdCBpcyBhdCBsZWFzdCBwb3NzaWJsZSBmb3IgYSBnaXZlbiBudW1iZXJcclxuICAgICAqIHRvIGJlIGEgY3JlZGl0IGNhcmQgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbnVtYmVyIHRoZSBudW1iZXIgdG8gYmUgY2hlY2tlZFxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICB0cnVlIGlmIGl0IGlzIHBvc3NpYmxlLCBmYWxzZSBvdGhlcndpc2VcclxuICAgICovXHJcbiAgICB2YWxpZGF0ZVBvc3NpYmlsaXR5KG51bWJlcil7XHJcblxyXG4gICAgICAgIGlmKCghaXNOYU4ocGFyc2VGbG9hdChudW1iZXIpKSAmJiBpc0Zpbml0ZShudW1iZXIpKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBudW1iZXIubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZihsZW5ndGggPCB0aGlzLmNvbnN0YW50cy5NSU5fUE9TU0lCTEVfTEVOR1RIKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobGVuZ3RoID4gdGhpcy5jb25zdGFudHMuTUFYX1BPU1NJQkxFX0xFTkdUSCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdmFsaWRhdGVQcm92aWRlclxyXG4gICAgICogY2hlY2tzIGlmIGEgcHJvdmlkZXIgY2FuIGJlIGlkZW50aWZpZWQgZm9yIHRoZSBnaXZlbiBjYXJkIG51bWJlclxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGNlcnRhaW50eSBvZiBpZGVudGlmaWNhdGlvbiBtYXBwZWQgZnJvbSAwIHRvIDEwMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbnVtYmVyIHRoZSBudW1iZXIgdG8gYmUgY2hlY2tlZFxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBwcm9iYWJpbGl0eSBvZiBzdXJldHkgb2YgaWRlbnRpZmljYXRpb24gb2YgYSBwcm92aWRlclxyXG4gICAgKi9cclxuICAgIHZhbGlkYXRlUHJvdmlkZXIobnVtYmVyKXtcclxuICAgICAgICBjb25zdCBwcm92aWRlcnMgPSB0aGlzLmNvbnN0YW50cy5QUk9CQUJJTElUSUVTX1JFR0VYX1BST1ZJREVSUztcclxuICAgICAgICBmb3IobGV0IHJlZ2V4IGluIHByb3ZpZGVycyl7XHJcbiAgICAgICAgICAgIGlmKHByb3ZpZGVycy5oYXNPd25Qcm9wZXJ0eShyZWdleCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKHJlZ2V4KS50ZXN0KG51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvdmlkZXJzW3JlZ2V4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldmVyc2VTdHJpbmdcclxuICAgICAqIHJldmVyc2VzIGEgZ2l2ZW4gc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSByZXZlcnNlZCBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcmV2ZXJzZVN0cmluZyhzdHJpbmcpe1xyXG4gICAgICAgIGxldCBpID0gc3RyaW5nLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIG91dCA9ICcnO1xyXG4gICAgICAgIGZvciAoOyBpID49IDA7KXtcclxuICAgICAgICAgICAgb3V0ICs9IHN0cmluZ1tpLS1dXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBDYXJkTnVtYmVyVmFsaWRhdG9yXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgd2l0aCB0aGUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gdmFsaWRhdGUgYVxyXG4gKiBjYXJkIG51bWJlci5cclxuICpcclxuICogWW91IHNob3VsZCBmaXJzdCBlbnN1cmUgdGhhdCBhIG51bWJlciBjYW4gcG9zc2libHkgYmUgYSBjcmVkaXQgY2FyZCBudW1iZXJcclxuICogYnkgY2FsbGluZyBcImlzSW1wb3NzaWJsZVRvQmVBQ3JlZGl0Q2FyZFwiIGZ1bmN0aW9uIGFuZCBjaGVja2luZyB0aGF0IGl0IGlzXHJcbiAqIGZhbHNlLCBhZnRlciB0aGF0IHlvdSBjYW4gY2hlY2sgaWYgd2UgY2FuIHN1cmVseSBzYXkgdGhhdCBhIG51bWJlciBpcyBhXHJcbiAqIGNyZWRpdCBjYXJkIG51bWJlciBvciBub3QgYnkgY2FsbGluZyBcImlzU3VyZWx5QUNyZWRpdENhcmROdW1iZXJcIi5cclxuICogVGhlIGxldmVsIG9mIHRocmVzaG9sZCBmb3IgY2hlY2sgY2FuIGJlIHNldCBhbmQgc2hvdWxkIGJlIGRlY2lkZWQgYmFzZWRcclxuICogb24gaG93IHN1cmUgeW91IHdhbnQgdG8gYmUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgICBSaWp1bCBHdXB0YSA8cmlqdWxnQG5lYmxhci5jb20+XHJcbiAqIEBzaW5jZSAgICAgICAyNCBEZWMgMjAxN1xyXG4gKiBAY29weXJpZ2h0ICAgMjAxNyBOZWJsYXIgVGVjaG5vbG9naWVzXHJcbiAqIEBsaWNlbnNlICAgICBNSVRcclxuKi9cclxuXHJcblxyXG5jbGFzcyBDYXJkTnVtYmVyVmFsaWRhdG9ye1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcmROdW1iZXJWYWxpZGF0b3IgY29uc3RydWN0b3IuXHJcbiAgICAgKiB0aGUgY29uc3RydWN0b3IgYWxsb3dzIHVzIHRvIGN1c3RvbWl6ZSB0aGUgcHJvYmFiaWxpdGllcyB1c2VkIGZvciB0aGUgdmFsaWRhdGlvbiBjaGVjayBhcyB3ZWxsIGFzXHJcbiAgICAgKiBkZWZpbmUgdGhlIGNvbnN0YW50cyB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNvbmR1Y3QgdGhlIHZhbGlkYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgICAgICAgIHByb2JhYmlsaXRpZXMgIHRoZSBwcm9iYWJpbGl0aWVzIGFzc2lnbmVkIHRvIHZhcmlvdXMgdmFsaWRhdGlvbnMgaW4gVmFsaWRhdGlvbkZ1bmN0aW9uc1xyXG4gICAgICogQHBhcmFtIHtWYWxpZGF0aW9uQ29uc3RhbnRzfSAgIGNvbnN0YW50c0NsYXNzIHRoZSBjb25zdGFudHMgdXNlZCBmb3IgdmFsaWRhdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9iYWJpbGl0aWVzID0gbnVsbCwgY29uc3RhbnRzQ2xhc3MgPSBudWxsKXtcclxuICAgICAgICB0aGlzLkRFRkFVTFRfVEhSRVNIT0xEID0gODU7XHJcbiAgICAgICAgaWYocHJvYmFiaWxpdGllcyA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvYmFiaWxpdGllcyA9IHtcclxuICAgICAgICAgICAgICAgICdMVUhOJzo2MCxcclxuICAgICAgICAgICAgICAgICdURVNUX05VTUJFUlMnOjEwMCxcclxuICAgICAgICAgICAgICAgICdQUk9WSURFUlMnOjE1LFxyXG4gICAgICAgICAgICAgICAgJ0xFTkdUSCc6MTUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucHJvYmFiaWxpdGllcyA9IHByb2JhYmlsaXRpZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjb25zdGFudHNDbGFzcyA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRpb25GdW5jdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdGlvbkZ1bmN0aW9ucyhjb25zdGFudHNDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2FsY3VsYXRlUHJvYmFiaWxpdHlPZkJlaW5nQUNyZWRpdENhcmRcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgcHJvYmFiaWxpdHkgb2YgYSBudW1iZXIgYmVpbmcgYXNzb2NpYXRlZFxyXG4gICAgICogd2l0aCBhIGNyZWRpdCBjYXJkLlxyXG4gICAgICogVGhlIHByb2JhYmlsaXR5IGFzc29jaWF0ZWQgd2l0aCBlYWNoIGNoZWNrIGlzIGRlY2xhcmVkIHNlcGFyYXRlbHkgaW5cclxuICAgICAqIGEgY29uc3RhbnRzIGNsYXNzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1iZXIgdGhlIG51bWJlciB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRvdGFsIHByb2JhYmlsaXR5IG9mIGEgbnVtYmVyIGJlaW5nIGEgY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICAqL1xyXG4gICAgY2FsY3VsYXRlUHJvYmFiaWxpdHlPZkJlaW5nQUNyZWRpdENhcmQobnVtYmVyKXtcclxuXHJcbiAgICAgICAgbGV0IHByb2JhYmlsaXR5ID0gMDtcclxuXHJcbiAgICAgICAgaWYodGhpcy52YWxpZGF0b3IudmFsaWRhdGVLbm93blRlc3ROdW1iZXJzKG51bWJlcikpe1xyXG4gICAgICAgICAgICBwcm9iYWJpbGl0eSArPSB0aGlzLnByb2JhYmlsaXRpZXNbJ1RFU1RfTlVNQkVSUyddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy52YWxpZGF0b3IudmFsaWRhdGVMVUhOKG51bWJlcikpe1xyXG4gICAgICAgICAgICBwcm9iYWJpbGl0eSArPSB0aGlzLnByb2JhYmlsaXRpZXNbJ0xVSE4nXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb2JhYmlsaXR5ICs9ICggdGhpcy52YWxpZGF0b3IudmFsaWRhdGVQcm92aWRlcihudW1iZXIpICogKHRoaXMucHJvYmFiaWxpdGllc1snUFJPVklERVJTJ10gLyAxMDApICk7XHJcblxyXG4gICAgICAgIHByb2JhYmlsaXR5ICs9ICggdGhpcy52YWxpZGF0b3IudmFsaWRhdGVMZW5ndGgobnVtYmVyKSAqICh0aGlzLnByb2JhYmlsaXRpZXNbJ0xFTkdUSCddIC8gMTAwKSApO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvYmFiaWxpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpc1Bvc3NpYmxlVG9CZUFDcmVkaXRDYXJkXHJcbiAgICAgKiB3cmFwcGVyIGZ1bmN0aW9uIHRvIGNoZWNrIHdoZXRoZXIgdGhlIG51bWJlciBjYW4gcG9zc2libHkgYmUgYSBjcmVkaXRcclxuICAgICAqIGNhcmQgbnVtYmVyIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bWJlciB0aGUgbnVtYmVyIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgdHJ1ZSBpZiBudW1iZXIgY2FuIGJlIGEgY3JlZGl0IGNhcmQsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAgKi9cclxuICAgIGlzUG9zc2libGVUb0JlQUNyZWRpdENhcmQobnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IudmFsaWRhdGVQb3NzaWJpbGl0eShudW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaXNTdXJlbHlBQ3JlZGl0Q2FyZE51bWJlclxyXG4gICAgICogY29tcGFyZXMgdGhlIHByb2JhYmlsaXR5IG9mIGdpdmVuIG51bWJlciBiZWluZyBhIGNyZWRpdCBjYXJkIG51bWJlclxyXG4gICAgICogdG8gc3BlY2lmaWVkIHRocmVzaG9sZC4gSWYgdGhlIHRocmVzaG9sZCBpcyBub3Qgc3BlY2lmaWVkLCBpdCBnZXRzXHJcbiAgICAgKiBkZWZhdWx0ZWQgdG8gdGhlIGRlZmF1bHRzIHNldCBpbiB0aGUgY29uc3RhbnRzIGNsYXNzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1iZXIgICAgdGhlIG51bWJlciB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHRocmVzaG9sZCB0aGUgdG9sZXJhYmxlIGxldmVsIG9mIHVuY2VydGFpbnR5XHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHdlIGFyZSBzdXJlLCBmYWxzZSBvdGhlcndpc2VcclxuICAgICovXHJcbiAgICBpc1N1cmVseUFDcmVkaXRDYXJkTnVtYmVyKG51bWJlciwgdGhyZXNob2xkID0gLTEpe1xyXG4gICAgICAgIGlmKHRocmVzaG9sZCA9PT0gLTEpe1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQgPSB0aGlzLkRFRkFVTFRfVEhSRVNIT0xEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb2JhYmlsaXR5ID0gdGhpcy5jYWxjdWxhdGVQcm9iYWJpbGl0eU9mQmVpbmdBQ3JlZGl0Q2FyZChudW1iZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKHByb2JhYmlsaXR5ID4gdGhyZXNob2xkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldFByb2JhYmlsaXRpZXNcclxuICAgICAqIFRoaXMgaXMgYSBoZWxwZXIgZnVuY3Rpb24gdGhhdCBoZWxwcyBzZXQgdGhlIHByb2JhYmlsaXRpZXMgZm9yXHJcbiAgICAgKiBjYWxjdWxhdGlvbi4gVGhpcyBhbGxvd3MgdGhlIHVzZXJzIHRvIGN1c3RvbWl6ZSB0aGUgY2FsY3VsYXRpb24gZm9yXHJcbiAgICAgKiB0aGVpciBuZWVkcy5cclxuICAgICAqIElmIHRoZSBzZXR1cCBmYWlscyBvbiBhbnkgc3RlcCBpdCByZXZlcnRzIHRvIHRoZSBvcmlnaW5hbCBzZXR0aW5ncy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gICB7QXJyYXl9IGtleVZhbHVlUGFpcnMgYXJyYXkgb2Yga2V5ID0+IHZhbHVlIHBhaXJzIHRvIGJlIHNldFxyXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICBmYWxzZSBpZiBmYWlscyBvbiBhbnkgc3RlcCwgdHJ1ZSBvdGhlcndpc2VcclxuICAgICovXHJcbiAgICBzZXRQcm9iYWJpbGl0aWVzKGtleVZhbHVlUGFpcnMpe1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvYmFiaWxpdGllcyA9IHRoaXMucHJvYmFiaWxpdGllcztcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBrZXlWYWx1ZVBhaXJzKXtcclxuICAgICAgICAgICAgaWYoa2V5VmFsdWVQYWlycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgIGlmKGtleSBpbiB0aGlzLnByb2JhYmlsaXRpZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmFiaWxpdGllc1trZXldID0ga2V5VmFsdWVQYWlyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JhYmlsaXRpZXMgPSBvcmlnaW5hbFByb2JhYmlsaXRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogVGV4dE1hbmlwdWxhdG9yXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgd2l0aCB0aGUgcyB0aGF0IGFyZSB1c2VkIHRvIGJyZWFrIHRoZSB0ZXh0IGludG8gZnJhZ21lbnRzLFxyXG4gKiBhbmQgcGVyZm9ybSBvdGhlciB0ZXh0IG1hbmlwdWxhdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgICBSaWp1bCBHdXB0YSA8cmlqdWxnQG5lYmxhci5jb20+XHJcbiAqIEBzaW5jZSAgICAgICAyNCBEZWMgMjAxN1xyXG4gKiBAY29weXJpZ2h0ICAgMjAxNyBOZWJsYXIgVGVjaG5vbG9naWVzXHJcbiAqIEBsaWNlbnNlICAgICBNSVRcclxuICovXHJcblxyXG5jbGFzcyBUZXh0TWFuaXB1bGF0b3J7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZXh0TWFuaXB1bGF0b3IgY29uc3RydWN0b3IuXHJcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgYWxsb3dzIHRvIHNldCB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBjYXJkIGxlbmd0aHMsIHRoZXNlIGFyZVxyXG4gICAgICogdXNlZCB0byBicmVhayB0aGUgdGV4dCBpbnRvIGZyYWdtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbWF4Q2FyZExlbmd0aCB0aGUgbWF4aW11bSBsZW5ndGggb2YgY2FyZCB0byBkZXRlY3QsIHRoaXMgaXMgdXNlZCB0byBicmVhayB0aGUgdGV4dCBpbnRvIGZyYWdtZW50cyBvbmx5XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbWluQ2FyZExlbmd0aCB0aGUgbWluaW11bSBsZW5ndGggb2YgY2FyZCB0byBkZXRlY3QsIHRoaXMgaXMgdXNlZCB0byBicmVhayB0aGUgdGV4dCBpbnRvIGZyYWdtZW50cyBvbmx5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1heENhcmRMZW5ndGggPSBudWxsLCBtaW5DYXJkTGVuZ3RoID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5tYXhDYXJkTGVuZ3RoID0gKG1heENhcmRMZW5ndGggPT09IG51bGwpID8gMjAgOiBtYXhDYXJkTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubWluQ2FyZExlbmd0aCA9IChtaW5DYXJkTGVuZ3RoID09PSBudWxsKSA/IDcgOiBtaW5DYXJkTGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXh0cmFjdE51bWJlckZyb21UZXh0XHJcbiAgICAgKiBleHRyYWN0cyBhIG51bWJlciBmcm9tIHRoZSBwcm92aWRlZCB0ZXh0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IGZyb20gd2hpY2ggdG8gZXh0cmFjdCB0aGUgbnVtYmVyXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gdGhlIGV4dHJhY3RlZCBudW1iZXIgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBleHRyYWN0TnVtYmVyRnJvbVRleHQodGV4dCl7XHJcbiAgICAgICAgbGV0IG51bWJlciA9ICB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChcIlteMC05XVwiLCBcImdcIiksICcnKTtcclxuICAgICAgICBpZihudW1iZXIubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRDb250aW51b3VzTnVtYmVyc1xyXG4gICAgICogcmV0dXJucyB0aGUgbnVtYmVycyB0aGF0IGFwcGVhciBjb250aW51b3VzbHkgaW4gZ2l2ZW4gdGV4dC4gRm9yIGV4OlxyXG4gICAgICogXCIgYmxhIGJsYSAxMjM0NTYgYmxhIGJsYVwiIHdpbGwgcmV0dXJuIFtcIjEyMzQ1NlwiXVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IGZyb20gd2hpY2ggdG8gZXh0cmFjdCB0aGUgbnVtYmVyc1xyXG4gICAgICogQHJldHVybiB7QXJyYXl9IHRoZSBhcnJheSBvZiBudW1iZXJzIGV4dHJhY3RlZFxyXG4gICAgICovXHJcbiAgICBnZXRDb250aW51b3VzTnVtYmVycyh0ZXh0KXtcclxuICAgICAgICByZXR1cm4gdGV4dC5tYXRjaChuZXcgUmVnRXhwKFwiKFswLTldKylcIiwgXCJnXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldERpc2NvbnRpbnVvdXNOdW1iZXJzXHJcbiAgICAgKiByZXR1cm5zIHRoZSBudW1iZXJzIHRoYXQgYXBwZWFyIGNvbnRpbnVvdXNseSBpbiBnaXZlbiB0ZXh0LiBGb3IgZXg6XHJcbiAgICAgKiBcIiBibGEgYmxhIDEyMyA0NTYgYmxhIDMyMS00IDUgYmxhIDk4NzZcIiB3aWxsIHJldHVybiBbXCIxMjMgNDU2XCIsIFwiMzIxLTQgNVwiLCBcIjk4NzZcIl1cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCBmcm9tIHdoaWNoIHRvIGV4dHJhY3QgdGhlIG51bWJlcnNcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSB0aGUgYXJyYXkgb2YgbnVtYmVycyBleHRyYWN0ZWRcclxuICAgICAqL1xyXG4gICAgZ2V0RGlzY29udGludW91c051bWJlcnModGV4dCl7XHJcbiAgICAgICAgcmV0dXJuIHRleHQubWF0Y2gobmV3IFJlZ0V4cChcIihbMC05XSsoKCg/IVthLXpBLVpdKSkoW15hLXpBLVpdKykpWzAtOV0pXCIsIFwiZ1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRTdXNwZWN0ZWRGcmFnbWVudHNcclxuICAgICAqIGJyZWFrcyB0aGUgZ2l2ZW4gdGV4dCBpbnRvIHN1c3BlY3RlZCBmcmFnbWVudHMgd2hpY2ggY29udGFpbiBhIG51bWJlci5cclxuICAgICAqIFRoaXMgbnVtYmVyIHdpbGwgZnVydGhlciBiZSBpbnNwZWN0ZWQgZm9yIGFjY2Vzc2luZyB3aGV0aGVyIGl0IGJlbG9uZ3MgdG9cclxuICAgICAqIGEgY3JlZGl0IGNhcmQgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSBzdHJpbmcgZnJvbSB3aGljaCB0byBleHRyYWN0IHRoZSBmcmFnbWVudHNcclxuICAgICAqIEBwYXJhbSB7aW50fSBjaGVja0xldmVsIHRoZSBsZXZlbCBvZiBjaGVjayB1c2VkIHRvIGluc3BlY3QgdGhlIHRleHQgYW5kIGlkZW50aWZ5IG51bWJlcnMgWzEtMl1cclxuICAgICAqIEByZXR1cm4ge0FycmF5fSB0aGUgYXJyYXkgb2Ygc3VzcGVjdGVkIGZyYWdtZW50c1xyXG4gICAgICovXHJcbiAgICBnZXRTdXNwZWN0ZWRGcmFnbWVudHModGV4dCwgY2hlY2tMZXZlbCl7XHJcbiAgICAgICAgbGV0IGZyYWdtZW50cztcclxuICAgICAgICBzd2l0Y2goY2hlY2tMZXZlbCl7XHJcbiAgICAgICAgICAgIGNhc2UgMiAgOiAgIGZyYWdtZW50cyA9IHRoaXMuZ2V0RGlzY29udGludW91c051bWJlcnModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEgIDpcclxuICAgICAgICAgICAgZGVmYXVsdCA6ICAgZnJhZ21lbnRzID0gdGhpcy5nZXRDb250aW51b3VzTnVtYmVycyh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZnJhZ21lbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50cy5maWx0ZXIoKGVsLCBpLCBhKSA9PiBpID09PSBhLmluZGV4T2YoZWwpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1hcmtGcmFnbWVudFxyXG4gICAgICogbWFya3MgdGhlIHNwZWNpZmllZCBmcmFnbWVudCBpbiBnaXZlbiB0ZXh0IHdpdGggdGhlIHByb3ZpZGVkIG1hcmtlclxyXG4gICAgICogVGhlIG1haW4gdGV4dCBpcyBwYXNzZWQgYnkgcmVmZXJlbmNlLCBzbyB0aGUgb3JpZ2luYWwgdGV4dCBnZXRzIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgICAgICB0aGUgdGV4dCBpbiB3aGljaCB0byBkbyB0aGUgbWFya2luZ1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZyYWdtZW50ICB0aGUgZnJhZ21lbnQgdGhhdCBuZWVkcyB0byBiZSBtYXJrZWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrZXIgICAgdGhlIG1hcmtlciB1c2VkIHRvIGlkZW50aWZ5IHRoZSBtYXJrXHJcbiAgICAgKi9cclxuICAgIG1hcmtGcmFnbWVudCh0ZXh0LCBmcmFnbWVudCwgbWFya2VyKXtcclxuICAgICAgICBpZihmcmFnbWVudCA9PT0gJycpIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIGxldCByZXBsYWNlbWVudCA9IFwie3tcIitmcmFnbWVudCtcIn1bXCIrbWFya2VyK1wiXX1cIjtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoZnJhZ21lbnQsIFwiZ1wiKSxyZXBsYWNlbWVudCk7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIENhcmRJZGVudGlmaWVyXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgd2l0aCB0aGUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgY2FyZFxyXG4gKiBudW1iZXJzIGZyb20gYSBnaXZlbiBwaWVjZSBvZiB0ZXh0LlxyXG4gKlxyXG4gKiBBbnkgZ2l2ZW4gdGV4dCB3aWxsIGJlIHJldHVybmVkIHdpdGggYSBmb3JtYXR0ZWQgZHVwbGljYXRlIHdoaWNoIHdpbGxcclxuICogaGF2ZSBhbnkgZnJhZ21lbnRzIG9mIHRleHQgdGhhdCBhcmUgc3VzcGVjdGVkIG9mIGJlaW5nIGNyZWRpdCBjYXJkXHJcbiAqIG51bWJlcnMgbWFya2VkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICAgUmlqdWwgR3VwdGEgPHJpanVsZ0BuZWJsYXIuY29tPlxyXG4gKiBAc2luY2UgICAgICAgMjQgRGVjIDIwMTdcclxuICogQGNvcHlyaWdodCAgIDIwMTcgTmVibGFyIFRlY2hub2xvZ2llc1xyXG4gKiBAbGljZW5zZSAgICAgTUlUXHJcbiovXHJcblxyXG5jbGFzcyBDYXJkSWRlbnRpZmllcntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcmRJZGVudGlmaWVyIGNvbnN0cnVjdG9yLlxyXG4gICAgICogVGhlIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkIGhlcmUgdG8gY3VzdG9taXplIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGNoZWNrcyBieSBhbHRlcmluZ1xyXG4gICAgICogdGhlIGxldmVsIG9mIGNoZWNrcywgdGhlIHByb2JhYmlsaXRpZXMgYXNzaWduZWQgdG8gdmFyaW91cyB2YWxpZGF0aW9ucywgdGhlIGNvbnN0YW50c1xyXG4gICAgICogdXNlZCBmb3IgdmFsaWRhdGlvbiBhbmQgdGhlIG1hcmtlcnMgdXNlZCB0byBpZGVudGlmeSBzdXNwZWN0ZWQgZW50cmllc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICAgICAgICAgICAgICB0aHJlc2hvbGRBbGVydCAgICAgdGhlIHRocmVzaG9sZCB1c2VkIGZvciBzZXBhcmF0aW5nIG51bWJlcnMgd2hpY2ggd2UgYXJlIHN1cmUgYWJvdXQgYW5kIHRob3NlIHdlIGFyZW4ndFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgICAgICAgICAgICAgIHRocmVzaG9sZE5vdGljZSAgICB0aGUgdGhyZXNob2xkIHVzZWQgZm9yIHNlcGFyYXRpbmcgbnVtYmVycyB3aGljaCB3ZSBhcmUgc3VyZSBhYm91dCBhbmQgdGhvc2Ugd2UgYXJlbid0XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gICAgICAgICAgICAgICAgICAgY2hlY2tMZXZlbCAgICAgICAgIHRoZSBsZXZlbCBvZiBjaGVjayB1c2VkIHRvIGluc3BlY3QgdGhlIHRleHQgYW5kIGlkZW50aWZ5IG51bWJlcnMgWzEtMl1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICBhbGVydCAgICAgICAgICAgICAgdGhlIHRleHQgdXNlZCB0byBpZGVudGlmeSB0aGUgbnVtYmVycyB0aGF0IGFyZSBpZGVudGlmaWVkIHdpdGggY2VydGFpbnR5XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgbm90aWNlICAgICAgICAgICAgIHRoZSB0ZXh0IHVzZWQgdG8gaWRlbnRpZnkgdGhlIG51bWJlcnMgdGhhdCBhcmUgaWRlbnRpZmllZCB3aXRob3V0IHVuY2VydGFpbnR5XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gICAgICAgICAgICAgICAgICAgbWF4Q2FyZExlbmd0aCAgICAgIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiBjYXJkIHRvIGRldGVjdCwgdGhpcyBpcyB1c2VkIHRvIGJyZWFrIHRoZSB0ZXh0IGludG8gZnJhZ21lbnRzIG9ubHlcclxuICAgICAqIEBwYXJhbSB7aW50fSAgICAgICAgICAgICAgICAgICBtaW5DYXJkTGVuZ3RoICAgICAgdGhlIG1pbmltdW0gbGVuZ3RoIG9mIGNhcmQgdG8gZGV0ZWN0LCB0aGlzIGlzIHVzZWQgdG8gYnJlYWsgdGhlIHRleHQgaW50byBmcmFnbWVudHMgb25seVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgICAgICAgIHByb2JhYmlsaXRpZXMgICAgICB0aGUgcHJvYmFiaWxpdGllcyBhc3NpZ25lZCB0byB2YXJpb3VzIHZhbGlkYXRpb25zIGluIFZhbGlkYXRpb25GdW5jdGlvbnNcclxuICAgICAqIEBwYXJhbSB7VmFsaWRhdGlvbkNvbnN0YW50c30gICBjb25zdGFudHNDbGFzcyAgICAgdGhlIGNvbnN0YW50cyB1c2VkIGZvciB2YWxpZGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRocmVzaG9sZEFsZXJ0ID0gbnVsbCx0aHJlc2hvbGROb3RpY2UgPSBudWxsLCBjaGVja0xldmVsID0gbnVsbCwgYWxlcnQgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgbm90aWNlID0gbnVsbCwgbWF4Q2FyZExlbmd0aCA9IG51bGwsIG1pbkNhcmRMZW5ndGggPSBudWxsLCBwcm9iYWJpbGl0aWVzID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50c0NsYXNzID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5hbGVydCAgICAgICAgICAgID0gKGFsZXJ0ID09PSBudWxsKSA/ICdBTEVSVCcgOiBhbGVydDtcclxuICAgICAgICB0aGlzLmNoZWNrTGV2ZWwgICAgICAgPSAoY2hlY2tMZXZlbCA9PT0gbnVsbCkgPyAyIDogY2hlY2tMZXZlbDtcclxuICAgICAgICB0aGlzLm5vdGljZSAgICAgICAgICAgPSAobm90aWNlID09PSBudWxsKSA/ICdOT1RJQ0UnIDogbm90aWNlO1xyXG4gICAgICAgIHRoaXMudGV4dE1hbmlwdWxhdG9yICA9IG5ldyBUZXh0TWFuaXB1bGF0b3IobWF4Q2FyZExlbmd0aCwgbWluQ2FyZExlbmd0aCk7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGRBbGVydCAgID0gdGhyZXNob2xkQWxlcnQ7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGROb3RpY2UgID0gdGhyZXNob2xkTm90aWNlO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yICAgICAgICA9IG5ldyBDYXJkTnVtYmVyVmFsaWRhdG9yKHByb2JhYmlsaXRpZXMsIGNvbnN0YW50c0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluc3BlY3RUZXh0XHJcbiAgICAgKiBpbnNwZWN0cyB0aGUgcHJvdmlkZWQgdGV4dCBhbmQgZm9ybWF0cyB0aGUgdGV4dCB0byByZWZsZWN0IGlkZW50aWZpZWRcclxuICAgICAqIGNhcmQgbnVtYmVycyBpbiB0aGUgdGV4dC5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd29ya3Mgd2l0aG91dCBzZXR0aW5nIGFueSBvZiB0aGUgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3JcclxuICAgICAqIHdpdGggZGVmYXVsdHMgaW4gYWxsIHRoZSBzdWJzZXF1ZW50IGNsYXNzZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRoYXQgbmVlZHMgdG8gYmUgaW5zcGVjdGVkXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZyBmb3JtYXR0ZWQgdGV4dFxyXG4gICAgICovXHJcbiAgICBpbnNwZWN0VGV4dCh0ZXh0KXtcclxuICAgICAgICBjb25zdCBmcmFnbWVudHMgPSB0aGlzLnRleHRNYW5pcHVsYXRvci5nZXRTdXNwZWN0ZWRGcmFnbWVudHModGV4dCwgdGhpcy5jaGVja0xldmVsKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxmcmFnbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBudW1iZXIgPSB0aGlzLnRleHRNYW5pcHVsYXRvci5leHRyYWN0TnVtYmVyRnJvbVRleHQoZnJhZ21lbnRzW2ldKTtcclxuICAgICAgICAgICAgaWYobnVtYmVyICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudmFsaWRhdG9yLmlzUG9zc2libGVUb0JlQUNyZWRpdENhcmQobnVtYmVyKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy52YWxpZGF0b3IuaXNTdXJlbHlBQ3JlZGl0Q2FyZE51bWJlcihudW1iZXIsIHRoaXMudGhyZXNob2xkQWxlcnQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRoaXMudGV4dE1hbmlwdWxhdG9yLm1hcmtGcmFnbWVudCh0ZXh0LGZyYWdtZW50c1tpXSx0aGlzLmFsZXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbnNwZWN0VGV4dFdpdGhOb3RpY2VzXHJcbiAgICAgKiBpbnNwZWN0cyB0aGUgcHJvdmlkZWQgdGV4dCBhbmQgZm9ybWF0cyB0aGUgdGV4dCB0byByZWZsZWN0IGlkZW50aWZpZWRcclxuICAgICAqIGNhcmQgbnVtYmVycyBpbiB0aGUgdGV4dC5cclxuICAgICAqIEEgbm90aWNlIGlzIGFkZGVkIHRvIG51bWJlcnMgdGhhdCBoYXZlIGEgcHJvYmFiaWxpdHkgbW9yZSB0aGFuIHRocmVzaG9sZE5vdGljZVxyXG4gICAgICogb2YgYmVpbmcgYSBjcmVkaXQgY2FyZC5cclxuICAgICAqXHJcbiAgICAgKiBUbyBtYWtlIHVzZSBvZiB0aGlzIGZ1bmN0aW9uIHByb3Blcmx5IHNldCB0aGUgdGhyZXNob2xkQWxlcnQgYW5kIHRocmVzaG9sZE5vdGljZVxyXG4gICAgICogaW4gdGhlIGNvbnN0cnVjdG9yIHRvIGEgZGVzaXJlZCB2YWx1ZS4gSWYgeW91IGRvbid0IHdhbnQgYW55IHRocmVzaG9sZHMgZm9yIHRoZVxyXG4gICAgICogbm90aWNlcyB0aGVuIGp1c3QgbGVhdmUgaXQgYmxhbmsgb3IgcGFzcyBudWxsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dCB0aGUgdGV4dCB0aGF0IG5lZWRzIHRvIGJlIGluc3BlY3RlZFxyXG4gICAgICogQHJldHVybiBzdHJpbmcgZm9ybWF0dGVkIHRleHRcclxuICAgICovXHJcbiAgICBpbnNwZWN0VGV4dFdpdGhOb3RpY2VzKHRleHQpe1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50cyA9IHRoaXMudGV4dE1hbmlwdWxhdG9yLmdldFN1c3BlY3RlZEZyYWdtZW50cyh0ZXh0LCB0aGlzLmNoZWNrTGV2ZWwpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGZyYWdtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMudGV4dE1hbmlwdWxhdG9yLmV4dHJhY3ROdW1iZXJGcm9tVGV4dChmcmFnbWVudHNbaV0pO1xyXG4gICAgICAgICAgICBpZihudW1iZXIgIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52YWxpZGF0b3IuaXNQb3NzaWJsZVRvQmVBQ3JlZGl0Q2FyZChudW1iZXIpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9iYWJpbGl0eSA9IHRoaXMudmFsaWRhdG9yLmNhbGN1bGF0ZVByb2JhYmlsaXR5T2ZCZWluZ0FDcmVkaXRDYXJkKG51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50aHJlc2hvbGRBbGVydCA9PT0gbnVsbCB8fCBwcm9iYWJpbGl0eSA+IHRoaXMudGhyZXNob2xkQWxlcnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGhpcy50ZXh0TWFuaXB1bGF0b3IubWFya0ZyYWdtZW50KHRleHQsZnJhZ21lbnRzW2ldLHRoaXMuYWxlcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMudGhyZXNob2xkTm90aWNlID09PSBudWxsIHx8IHByb2JhYmlsaXR5ID4gdGhpcy50aHJlc2hvbGROb3RpY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGhpcy50ZXh0TWFuaXB1bGF0b3IubWFya0ZyYWdtZW50KHRleHQsZnJhZ21lbnRzW2ldLHRoaXMubm90aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG59Il19
