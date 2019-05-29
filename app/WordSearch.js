class WordSearch {
	constructor() {
		this._wordField = null;
		this._wordList = null;

		return this;
	}
	setWordField(inputWordField) {
		// re-initialize these in case setWordField has been called more than once
		this._wordField = null;
		this._rowLength = null;

		let wordFieldLineCount = (inputWordField.match(/\n/g) || []).length;
		if (!(typeof inputWordField === 'string' && (new RegExp('^(([A-Z],){' + wordFieldLineCount + '}[A-Z]\\n){' + wordFieldLineCount + '}(([A-Z],){' + wordFieldLineCount + '}[A-Z])$')).test(inputWordField))) {
			throw new Error("Word field should be a square of uppercase characters that is horizontally comma-separated and vertically newline-separated, as such:\n\tA,B,C\n\tD,E,F\n\tG,H,I");
			return false;
		}

		let rows = inputWordField.split('\n'); // Split into array by newline

		this._rowLength = rows[0].replace(/,/g, '').length;
		this._wordField = rows.join('').replace(/,/g, '');

		return true;
	}
	setWordList(inputWordList) {
		// re-initialize this in case setWordField has been called more than once
		this._wordList = null;

		this._wordList = inputWordList.split(',');

		return true;
	}
}
module.exports = WordSearch
