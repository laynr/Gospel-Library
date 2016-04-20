'use strict';

var passages = require('./data');

var scriptureReader = (function () {
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }


    return {
    handlePassageIntent: function (intent, session, response) {
        var bookSlot = intent.slots.Book;
        var chapterSlot = intent.slots.Chapter;
        var verseSlot = intent.slots.Verse;
        var referenceName;
    	var speechOutput;
        var repromptOutput;
        var cardContent;

        if (bookSlot && bookSlot.value && chapterSlot && chapterSlot.value && verseSlot && verseSlot.value ){
            referenceName = bookSlot.value + " Chapter " + chapterSlot.value + " Verse " + verseSlot.value;

            referenceName = toTitleCase(referenceName)
            referenceName = referenceName.replace("And", "and");
            referenceName = referenceName.replace("Of", "of");

            var cardTitle = referenceName;
            var passage = passages[referenceName];

            if (passage) {
                speechOutput = passage;
                cardContent  = passage;
                response.tellWithCard(speechOutput, cardTitle, cardContent);
            } else {
                speechOutput = "I'm sorry, I currently do not know that passage. Please say the book, chapter, and verse when asking for for a passage. What other passage can I read to you?";
                repromptOutput   = "What other passage can I read to you?";
                response.ask(speechOutput, repromptOutput);
            }
        } else {
            speechOutput = "I'm sorry, I currently do not know that passage. Please say the book, chapter, and verse when asking for for a passage. What other passage can I read to you?";
            repromptOutput   = "What other passage can I read to you?";
            response.ask(speechOutput, repromptOutput);
        }
    }

    };
})();
module.exports = scriptureReader;
