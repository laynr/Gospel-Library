'use strict';

var scriptureReader = require('./scriptureReader');
var textHelper = require('./textHelper');

// This is an object that will hold your intent handlers. These will be the same
// intents that you define in your intent schema inside the Amazon Developer’s Console
var registerIntentHandlers = function (intentHandlers, skillContext) {

    intentHandlers.PassageIntent = function (intent, session, response) {
        scriptureReader.handlePassageIntent(intent, session, response);
    },

    intentHandlers['AMAZON.HelpIntent'] = function  (intent, session, response) {
        var speechOutput   = textHelper.helpIntentSpeechOutput;
        var repromptSpeech = textHelper.helpIntentRepromptSpeech;
        response.ask(speechOutput, repromptSpeech);
    },

    intentHandlers['AMAZON.StopIntent'] = function (intent, session, response) {
        var speechOutput   = textHelper.stopIntentSpeechOutput;
        response.tell(speechOutput);
    },

    intentHandlers['AMAZON.CancelIntent'] = function  (intent, session, response) {
        var speechOutput   = textHelper.cancelIntentSpeechOutput;
        response.tell(speechOutput);
    }
};

exports.register = registerIntentHandlers;
