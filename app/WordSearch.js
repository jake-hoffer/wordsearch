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

		let rows = inputWordField.split('\n'); // Split into array by newline

		this._rowLength = rows[0].replace(/,/g, '').length;
		this._wordField = rows.join('').replace(/,/g, '');

		return true;
	}
}
module.exports = WordSearch
