/**
 *  @author Rijul Gupta <rijulg@neblar.com>
 */

    const   assert = require('chai').assert,
            pkg = require('../package.json'),
            appSrc = '../build/test/DesCardId.js',
            app = require(appSrc);

    const IDENTIFICATION_PATTERN_REGEX = "{{.*}\[.*\]}";

    /**
     * assertContainsNoIdentifications
     * this function is used to ensure that a given piece of code does not have any
     * identification patterns.
     *
     * @param {string} identifiedText the text to be tested
     */
    function assertContainsNoIdentifications(identifiedText){
        assert.equal((new RegExp(IDENTIFICATION_PATTERN_REGEX).test(identifiedText)), 0);
    }

    /**
     * providerValidatePossibility
     * data provider for the test testValidatePossibility
     *
     * the format of the data is as follows:
     *  [testName, testNumber, expectedResult]
     *
     * @return {Array}
     */
    function providerValidatePossibility(){
        return [
            ['1.1. Number consisting of other characters', '1234 5678 1234 5678', false],
            ['1.2. Number consisting of other characters', '1234-5678-1234-5678', false],
            ['1.3. Number consisting of other characters', '1234.5678-1234 5678', false],
            ['2. Number shorter than minimum length', '123456', false],
            ['3. Number greater than maximum length', '12345678901234567890', false],
            ['4. Number equal to minimum length', '1234567', true],
            ['5. Number equal to maximum length', '1234567890123456789', true],
            ['6. Number between minimum and maximum length', '1234567890', true],
            ['7. Empty number', '', false],
        ];
    }

    exports.assert = assert;
    exports.app    = app;
    exports.assertContainsNoIdentifications = assertContainsNoIdentifications;
    exports.providerValidatePossibility = providerValidatePossibility;