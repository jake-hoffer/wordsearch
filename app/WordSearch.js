class WordSearch {
	constructor() {
		// Initialize orientation configs
		//	horizontalShift:	which direction does the word move horizontally?
		//	verticalShift:		which direction does the word move vertically?
		this._orientations = {
			horizontal_right:	{ horizontalShift: 1,	verticalShift: 0	},
			vertical_down:		{ horizontalShift: 0,	verticalShift: 1	},
			diagonal_right_down:	{ horizontalShift: 1,	verticalShift: 1	},
			diagonal_left_down:	{ horizontalShift: -1,	verticalShift: 1	},

			horizontal_left:	{ horizontalShift: -1,	verticalShift: 0	},
			vertical_up:		{ horizontalShift: 0,	verticalShift: -1	},
			diagonal_left_up:	{ horizontalShift: -1,	verticalShift: -1	},
			diagonal_right_up:	{ horizontalShift: 1,	verticalShift: -1	}
		};

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
	_deriveWordDirection(orientationConfig) {
		return (orientationConfig.verticalShift == 0 ? orientationConfig.horizontalShift : orientationConfig.verticalShift) >= 0 ? 1 : -1;
	}
	_buildRegex(word, orientationConfig) {
		let wordDirection = this._deriveWordDirection(orientationConfig);

		return new RegExp(
			'^(' // Initialize offset capture group, anchored to beginning of wordfield
				+ '(?:.{' + this._rowLength + '})*' // Begin offset with any number of full rows

				+ '.{' // Once at the desired row, offset any number of columns that would allow the word to be found in the correct orientation without wrapping around
					+ (orientationConfig.horizontalShift * wordDirection < 0 ? word.length - 1 : 0) // If the match moves right-to-left horizontally (-1), there needs to be enough horizontal room ahead of the first matched letter to accommodate the previous letters without wrapping; otherwise, no extra lead is required.
				+ ','
					+ (orientationConfig.horizontalShift * wordDirection > 0 ? this._rowLength - word.length : this._rowLength - 1) // If the match moves left-to-right horizontally (1), there needs to be enough horizontal room after of the first matched letter to accommodate the subsequent letters without wrapping; otherwise, no extra lag is required.
				+ '}'

			+ ')' // Close offset capture group

			+ (wordDirection > 0 ? word.split('') : word.split('').reverse()) // Use the appropriate word orientation
				.join('.{' + (orientationConfig.verticalShift * wordDirection * this._rowLength - (1 - orientationConfig.horizontalShift * wordDirection)) + '}') // Look for letters separated by N characters
					/*
					explanation: how many characters apart will subsequent letters be in the wordfield-converted-to-string?

					this is visualized in the below grid (rowLength = 3); as read naturally (ltr-writing systems):
					
						A,B,C
						D,E,F
						G,H,I
					
					B and E are separated by 2 characters (3 - 1)
					B and F are separated by 3 characters (3 - 0)
					B and D are separated by 1 character (3 - 2)

					of course, if the word is oriented such that the final letter is encountered first in a regular expression, it needs to be searched in reverse (thus the computation and use of wordDirection)
					*/
		);
	}
	_calculateCoordinates(startColumn, startRow, wordLength, orientationConfig) {
		let coordinates = []; // Initialize coordinates list
		let wordDirection = this._deriveWordDirection(orientationConfig);

		for (let letterIdx = 0; letterIdx < wordLength; letterIdx++) {
			let coordinate = [
				(startColumn + (letterIdx * orientationConfig.horizontalShift * wordDirection)), // Add horizontal delta from original column, based on configured horizontal orientation
				(startRow + (letterIdx * orientationConfig.verticalShift * wordDirection)) // Add vertical delta from original row, based on configured vertical orientation
			];

			if (wordDirection > 0) {
				coordinates.push(coordinate); // If we found the word forwards, the next coordinate comes logically after the previous one.
			}
			else {
				coordinates.unshift(coordinate); // If we found the word backwards, the next coordinate comes logically before the previous one.
			}
		}
		return coordinates;
	}
	_solveWord(word) {
		if (!this._wordField) {
			throw new Error("Word field is empty");
			return false;
		}

		if (word.length > this._rowLength) {
			// Do not throw an error; this is not illegal behavior, but we'll never find a match for this word.
			return false;
		}
		for (let orientation in this._orientations) {
			let regex = this._buildRegex(word, this._orientations[orientation]);

			if (regex.test(this._wordField)) { // Do we have a match?
				let matches = this._wordField.match(regex); // Get matched components
				let offset = matches[1].length; // Substring from start until position of first character is stored in first capture group

				let startRow = Math.floor(offset / this._rowLength); // On which row does the offset occur?
				let startColumn = offset % this._rowLength; // In which column of that row does the offset occur?
				
				return this._calculateCoordinates(startColumn, startRow, word.length, this._orientations[orientation]);
			}
		}
		return false;
	}
	_solvePuzzle() {
		if (!this._wordList) {
			throw new Error("Word list is empty");
			return false;
		}

		let solution = {};
		this._wordList.forEach(function(word) {
			solution[word] = this._solveWord(word);
		}, this);
		return solution;
	}
}
module.exports = WordSearch
