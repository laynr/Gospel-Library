'use strict';

var textHelper = (function () {

    return {

        myAPP_ID:                	'amzn1.echo-sdk-ams.app.268d3d86-4a04-47e5-8840-d7d8d5f20d6c',

        onLaunchSpeechOutput:     	'Welcome to Scripture Reader. You can ask me to quote a scripture passage by saying the book, chapter, and verse.  For example you can say, Read Alma Chapter seven Verse eleven. ... What would you like me to read?',

        onLaunchRepromptSpeech:    	'For instructions on what you can say, please say help me.',

        helpIntentSpeechOutput:    	'You can ask me to quote a scripture passage by saying the book, chapter, and verse.  For example you can say, read John chapter three verse sixteen, read Luke chapter two verse seven, or you can say exit... What would you like me to read?',

        helpIntentRepromptSpeech:  	'You can say things like, read Luke Chapter two Verse seven, or you can say exit... What would you like me to read?',

        stopIntentSpeechOutput:  	'Goodbye.',

        allBooks:                   "Reference any Chapter and Verse of the following Books: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, 1st Samuel, 2nd Samuel, 1st Kings, 2nd Kings, 1st Chronicles, 2nd Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, Solomon's Song, Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi, Matthew, Mark, Luke, John, Acts, Romans, 1st Corinthians, 2nd Corinthians, Galatians, Ephesians, Philippians, Colossians, 1st Thessalonians, 2nd Thessalonians, 1st Timothy, 2nd Timothy, Titus, Philemon, Hebrews, James, 1st Peter, 2nd Peter, 1st John, 2nd John, 3rd John, Jude, Revelation, 1st Nephi, 2nd Nephi, Jacob, Enos, Jarom, Omni, Words of Mormon, Mosiah, Alma, Helaman, 3rd Nephi, 4th Nephi, Mormon, Ether, Moroni, Doctrine and Covenants, Moses, Abraham, Joseph Smith Matthew, Joseph Smith History, and Articles of Faith.", 

        cancelIntentSpeechOutput:   'Goodbye.'
    };
})();
module.exports = textHelper;
