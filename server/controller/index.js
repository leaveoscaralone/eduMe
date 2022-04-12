const numToWords = require('./translator')

exports.translateNumber = async (req, res) => {
    try {
        const { number } = req.params;
        const wordList = numToWords(number);
        res.status = 200;
        res.send(wordList);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}