# WordSearch Kata
WordSearch Kata implemented as a JavaScript class.

## Background

This class locates words in 2 directions on 4 axes within a square field of newline-separated rows of comma-separated characters.

### Input assumptions and improvements

- "The first line of the text file will consist of the list of words to be found."
- "The following lines will consist of a list of single characters, A-Z."
	- Based on the input example given in the kata definition, commas are required between the letters.
- "All lines in the file except the first will have the same length, and the number of rows will match the number of characters in a line. This input represents the square grid of the word search.
- "The grid will always be square and all words in the list will always be present in the grid."
- "Words may be located horizontally, vertically, diagonally, and both forwards and backwards. Words will never 'wrap' around the edges of the grid."
- "Words will be a minimum of two letters long, and will always fit within the grid along the axis on which it can be located."

### Output requirements

- "The output of the program is the location of each word found, each on a separate line. The location will be represented as a series of x,y coordinates, where both x and y start at zero at the top-left of the grid. From this position both x and y will increase, i.e. they will never be negative."
- Not specified in the output requirements was a format for a not-found word. In such cases, "not found" is printed.

## Usage

- Create an empty directory, and clone git://github.com/jake-hoffer/wordsearch into that directory
- Initialize jasmine-node using `npm install jasmine-node`
- Run `npm test` to view the jasmine test output.

### Notes

- Tested using node v11.14.0 and jasmine-node (Ubuntu 18.04)
- Truly "private" methods are not possible within classes in JavaScript. However, a Google search about this issue reveals that a common strategy is to prepend an `_` to methods that are not expected to be called from outside the class itself. In this implementation, validation is not performed on arguments to such methods, as they are intended for internal use, and any data given to them has already been pre-validated. Additionally, having all methods exposed allows more in-depth testing.
- Words can theoretically exist more than once within a grid. In these cases, only one instance is returned (in order of axis and then position in the grid).
