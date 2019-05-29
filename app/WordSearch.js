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
		// re-initialize this in case setWordList has been called more than once
		this._wordList = null;

		if (!(typeof inputWordList === 'string' && (new RegExp('^[A-Z][A-Z]+(,[A-Z][A-Z]+)*$')).test(inputWordList))) {
			throw new Error("Word list should comprise a set of 1 or more comma-separated uppercase words of minimum 2 characters");
			return false;
		}

		this._wordList = inputWordList.split(',');

		return true;
	}
	setPuzzle(inputPuzzle) {
		let rows = inputPuzzle.split('\n');

		let inputWordList = rows.shift();
		let inputWordField = rows.join("\n");

		if (!(this.setWordField(inputWordField) && this.setWordList(inputWordList))) {
			return false;
		}

		return true;
	}
}
module.exports = WordSearch
