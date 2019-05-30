var WordSearch = require('../app/WordSearch');

describe("WordSearch", function() {
	var exampleWordField = "U,M,K,H,U,L,K,I,N,V,J,O,C,W,E\nL,L,S,H,K,Z,Z,W,Z,C,G,J,U,Y,G\nH,S,U,P,J,P,R,J,D,H,S,B,X,T,G\nB,R,J,S,O,E,Q,E,T,I,K,K,G,L,E\nA,Y,O,A,G,C,I,R,D,Q,H,R,T,C,D\nS,C,O,T,T,Y,K,Z,R,E,P,P,X,P,F\nB,L,Q,S,L,N,E,E,E,V,U,L,F,M,Z\nO,K,R,I,K,A,M,M,R,M,F,B,A,P,P\nN,U,I,I,Y,H,Q,M,E,M,Q,R,Y,F,S\nE,Y,Z,Y,G,K,Q,J,P,C,Q,W,Y,A,K\nS,J,F,Z,M,Q,I,B,D,B,E,M,K,W,D\nT,G,L,B,H,C,B,E,C,H,T,O,Y,I,K\nO,J,Y,E,U,L,N,C,C,L,Y,B,Z,U,H\nW,Z,M,I,S,U,K,U,R,B,I,D,U,X,S\nK,Y,L,B,Q,Q,P,M,D,F,C,K,E,A,B";

	var exampleWordFieldLowerCase = "u,m,k,h,u,l,k,i,n,v,j,o,c,w,e\nL,L,S,H,K,Z,Z,W,Z,C,G,J,U,Y,G\nH,S,U,P,J,P,R,J,D,H,S,B,X,T,G\nB,R,J,S,O,E,Q,E,T,I,K,K,G,L,E\nA,Y,O,A,G,C,I,R,D,Q,H,R,T,C,D\nS,C,O,T,T,Y,K,Z,R,E,P,P,X,P,F\nB,L,Q,S,L,N,E,E,E,V,U,L,F,M,Z\nO,K,R,I,K,A,M,M,R,M,F,B,A,P,P\nN,U,I,I,Y,H,Q,M,E,M,Q,R,Y,F,S\nE,Y,Z,Y,G,K,Q,J,P,C,Q,W,Y,A,K\nS,J,F,Z,M,Q,I,B,D,B,E,M,K,W,D\nT,G,L,B,H,C,B,E,C,H,T,O,Y,I,K\nO,J,Y,E,U,L,N,C,C,L,Y,B,Z,U,H\nW,Z,M,I,S,U,K,U,R,B,I,D,U,X,S\nK,Y,L,B,Q,Q,P,M,D,F,C,K,E,A,B";
	var exampleWordFieldNonAlphabetic = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E\nL,L,S,H,K,Z,Z,W,Z,C,G,J,U,Y,G\nH,S,U,P,J,P,R,J,D,H,S,B,X,T,G\nB,R,J,S,O,E,Q,E,T,I,K,K,G,L,E\nA,Y,O,A,G,C,I,R,D,Q,H,R,T,C,D\nS,C,O,T,T,Y,K,Z,R,E,P,P,X,P,F\nB,L,Q,S,L,N,E,E,E,V,U,L,F,M,Z\nO,K,R,I,K,A,M,M,R,M,F,B,A,P,P\nN,U,I,I,Y,H,Q,M,E,M,Q,R,Y,F,S\nE,Y,Z,Y,G,K,Q,J,P,C,Q,W,Y,A,K\nS,J,F,Z,M,Q,I,B,D,B,E,M,K,W,D\nT,G,L,B,H,C,B,E,C,H,T,O,Y,I,K\nO,J,Y,E,U,L,N,C,C,L,Y,B,Z,U,H\nW,Z,M,I,S,U,K,U,R,B,I,D,U,X,S\nK,Y,L,B,Q,Q,P,M,D,F,C,K,E,A,B";
	var exampleWordFieldNonOrthogonal = "U,M,K,H,U,L,K\nI,N,V,J,O,C,W,E,L,L,S,H,K,Z,Z,W,Z,C,G,J,U,Y,G\nH,S,U,P,J,P,R,J,D,H,S,B,X,T,G\nB,R,J,S,O,E,Q,E,T,I,K,K,G,L,E\nA,Y,O,A,G,C,I,R,D,Q,H,R,T,C,D\nS,C,O,T,T,Y,K,Z,R,E,P,P,X,P,F\nB,L,Q,S,L,N,E,E,E,V,U,L,F,M,Z\nO,K,R,I,K,A,M,M,R,M,F,B,A,P,P\nN,U,I,I,Y,H,Q,M,E,M,Q,R,Y,F,S\nE,Y,Z,Y,G,K,Q,J,P,C,Q,W,Y,A,K\nS,J,F,Z,M,Q,I,B,D,B,E,M,K,W,D\nT,G,L,B,H,C,B,E,C,H,T,O,Y,I,K\nO,J,Y,E,U,L,N,C,C,L,Y,B,Z,U,H\nW,Z,M,I,S,U,K,U,R,B,I,D,U,X,S\nK,Y,L,B,Q,Q,P,M,D,F,C,K,E,A,B";

	var exampleWordList = "BONES,KHAN,KIRK,SCOTTY,SPOCK,SULU,UHURA";

	var exampleWordListLowerCase = "Bones,Khan,Kirk,Scotty,Spock,Sulu,Uhura";
	var exampleWordListNonAlphabetic = "B0N35,KH4N,K1RK,5C077Y,5P0CK,5ULU,UHUR4";
	var exampleWordListTruncated = "B,K,K,S,S,S,U";

	var wordSearch;
	beforeEach(function() {
		wordSearch = new WordSearch();
	});

	// Begin word field loading tests using word field format defined in project requirements

	it("should load a valid word field", function() {
		var loadWordField = function() {
			return wordSearch.setWordField(exampleWordField);
		};
		expect(loadWordField()).toBeTruthy();
		expect(wordSearch._wordField).toEqual("UMKHULKINVJOCWELLSHKZZWZCGJUYGHSUPJPRJDHSBXTGBRJSOEQETIKKGLEAYOAGCIRDQHRTCDSCOTTYKZREPPXPFBLQSLNEEEVULFMZOKRIKAMMRMFBAPPNUIIYHQMEMQRYFSEYZYGKQJPCQWYAKSJFZMQIBDBEMKWDTGLBHCBECHTOYIKOJYEULNCCLYBZUHWZMISUKURBIDUXSKYLBQQPMDFCKEAB");
	});
	it("should fail to load word field with lowercase letters", function() {
		var loadWordField = function() {
			return wordSearch.setWordField(exampleWordFieldLowerCase);
		};
		expect(loadWordField).toThrow();
		expect(wordSearch._wordField).toEqual(null);
	});
	it("should fail to load word field with non-alphabetic characters", function() {
		var loadWordField = function() {
			return wordSearch.setWordField(exampleWordFieldNonAlphabetic);
		};
		expect(loadWordField).toThrow();
		expect(wordSearch._wordField).toEqual(null);
	});
	it("should fail to load non-orthogonal word field", function() {
		var loadWordField = function() {
			return wordSearch.setWordField(exampleWordFieldNonOrthogonal);
		};
		expect(loadWordField).toThrow();
		expect(wordSearch._wordField).toEqual(null);
	});

	// End word field loading tests

	// Begin word list loading tests using word list format defined in project requirements

	it("should load a valid word list", function() {
		var loadWordList = function() {
			return wordSearch.setWordList(exampleWordList);
		};
		expect(loadWordList()).toBeTruthy();
		expect(wordSearch._wordList).toEqual(["BONES","KHAN","KIRK","SCOTTY","SPOCK","SULU","UHURA"]);
	});
	it("should fail to load a word list with lowercase letters", function() {
		var loadWordList = function() {
			return wordSearch.setWordList(exampleWordListLowerCase);
		};
		expect(loadWordList).toThrow();
		expect(wordSearch._wordList).toEqual(null);
	});
	it("should fail to load a word list with non-alphabetic characters", function() {
		var loadWordList = function() {
			return wordSearch.setWordList(exampleWordListNonAlphabetic);
		};
		expect(loadWordList).toThrow();
		expect(wordSearch._wordList).toEqual(null);
	});
	it("should fail to load a word list with a word shorter than 2 characters", function() {
		var loadWordList = function() {
			return wordSearch.setWordList(exampleWordListTruncated);
		};
		expect(loadWordList).toThrow();
		expect(wordSearch._wordList).toEqual(null);
	});

	// End word list loading tests

	// Begin full puzzle loading tests using format defined in project requirements

	it("should load a full valid puzzle", function() {
		var loadPuzzle = function() {
			return wordSearch.setPuzzle(exampleWordList + "\n" + exampleWordField);
		};
		expect(loadPuzzle()).toBeTruthy();
		expect(wordSearch._wordField).toEqual("UMKHULKINVJOCWELLSHKZZWZCGJUYGHSUPJPRJDHSBXTGBRJSOEQETIKKGLEAYOAGCIRDQHRTCDSCOTTYKZREPPXPFBLQSLNEEEVULFMZOKRIKAMMRMFBAPPNUIIYHQMEMQRYFSEYZYGKQJPCQWYAKSJFZMQIBDBEMKWDTGLBHCBECHTOYIKOJYEULNCCLYBZUHWZMISUKURBIDUXSKYLBQQPMDFCKEAB");
		expect(wordSearch._wordList).toEqual(["BONES","KHAN","KIRK","SCOTTY","SPOCK","SULU","UHURA"]);
	});
	it("should fail to load a full puzzle without a word list", function() {
		var loadPuzzle = function() {
			return wordSearch.setPuzzle(exampleWordField);
		};
		expect(loadPuzzle).toThrow();
	});
	it("should fail to load a full puzzle with only a word list", function() {
		var loadPuzzle = function() {
			return wordSearch.setPuzzle(exampleWordList);
		};
		expect(loadPuzzle).toThrow();
	});
	it("should fail to load an full puzzle with an invalid component", function() {
		var loadPuzzle = function() {
			return wordSearch.setPuzzle(exampleWordListLowerCase + "\n" + exampleWordField);
		};
		expect(loadPuzzle).toThrow();
	});

	// End full puzzle loading tests

	// Begin puzzle utility tests - make sure everything returns correct values using contrived data

	it("should return word direction 1 for horizontal-right orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.horizontal_right)).toEqual(1);
	});
	it("should return word direction 1 for vertical-down orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.vertical_down)).toEqual(1);
	});
	it("should return word direction 1 for diagonal-right-down orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.diagonal_right_down)).toEqual(1);
	});
	it("should return word direction 1 for diagonal-left-down orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.diagonal_left_down)).toEqual(1);
	});
	it("should return word direction -1 for horizontal-left orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.horizontal_left)).toEqual(-1);
	});
	it("should return word direction -1 for vertical-up orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.vertical_up)).toEqual(-1);
	});
	it("should return word direction -1 for diagonal-left-up orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.diagonal_left_up)).toEqual(-1);
	});
	it("should return word direction -1 for diagonal-right-up orientation", function() {
		expect(wordSearch._deriveWordDirection(wordSearch._orientations.diagonal_right_up)).toEqual(-1);
	});

	it("should return correct regex for ABC horizontal-right in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.horizontal_right)).toEqual(/^((?:.{5})*.{0,2})A.{0}B.{0}C/);
	});
	it("should return correct regex for ABC vertical-down in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.vertical_down)).toEqual(/^((?:.{5})*.{0,4})A.{4}B.{4}C/);
	});
	it("should return correct regex for ABC diagonal-right-down in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.diagonal_right_down)).toEqual(/^((?:.{5})*.{0,2})A.{5}B.{5}C/);
	});
	it("should return correct regex for ABC diagonal-left-down in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.diagonal_left_down)).toEqual(/^((?:.{5})*.{2,4})A.{3}B.{3}C/);
	});
	it("should return correct regex for ABC horizontal-left in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.horizontal_left)).toEqual(/^((?:.{5})*.{0,2})C.{0}B.{0}A/);
	});
	it("should return correct regex for ABC vertical-up in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.vertical_up)).toEqual(/^((?:.{5})*.{0,4})C.{4}B.{4}A/);
	});
	it("should return correct regex for ABC diagonal-left-up in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.diagonal_left_up)).toEqual(/^((?:.{5})*.{0,2})C.{5}B.{5}A/);
	});
	it("should return correct regex for ABC diagonal-right-up in a 5x5 puzzle", function() {
		wordSearch._rowLength = 5;
		expect(wordSearch._buildRegex("ABC", wordSearch._orientations.diagonal_right_up)).toEqual(/^((?:.{5})*.{2,4})C.{3}B.{3}A/);
	});

	it("should return correct coordinates for a 3-letter word found in horizontal-right orientation beginning at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.horizontal_right)).toEqual([ [ 2, 2 ], [ 3, 2 ], [ 4, 2 ] ]);
	});
	it("should return correct coordinates for a 3-letter word found in vertical-down orientation beginning at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.vertical_down)).toEqual([ [ 2, 2 ], [ 2, 3 ], [ 2, 4 ] ]);
	});
	it("should return correct coordinates for a 3-letter word found in diagonal-right-down orientation beginning at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.diagonal_right_down)).toEqual([ [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] ]);
	});
	it("should return correct coordinates for a 3-letter word found in diagonal-left-down orientation beginning at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.diagonal_left_down)).toEqual([ [ 2, 2 ], [ 1, 3 ], [ 0, 4 ] ]);
	});
	it("should return correct coordinates for a 3-letter word found in horizontal-left orientation ending at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.horizontal_left)).toEqual([ [ 4, 2 ], [ 3, 2 ], [ 2, 2 ] ]);
	});
	it("should return correct coordinates for a 3-letter word found in vertical-up orientation ending at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.vertical_up)).toEqual([ [ 2, 4 ], [ 2, 3 ], [ 2, 2 ] ]);
	});
	it("should return correct coordinates for a 3-letter word found in diagonal-left-up orientation ending at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.diagonal_left_up)).toEqual([ [ 4, 4 ], [ 3, 3 ], [ 2, 2 ] ]);
	});
	it("should return correct coordinates for a 3-letter word found in diagonal-right-up orientation ending at (2,2)", function() {
		expect(wordSearch._calculateCoordinates(2, 2, 3, wordSearch._orientations.diagonal_right_up)).toEqual([ [ 0, 4 ], [ 1, 3 ], [ 2, 2 ] ]);
	});
	
	// End puzzle utility tests

	// Begin tests with actual provided sample data

	beforeEach(function() {
		wordSearch.setPuzzle(exampleWordList + "\n" + exampleWordField);
	});

	it("should solve the word BONES", function() {
		expect(wordSearch._solveWord("BONES")).toEqual([ [ 0, 6 ], [ 0, 7 ], [ 0, 8 ], [ 0, 9 ], [ 0, 10 ] ]); // vertical-down
	});
	it("should solve the word KHAN", function() {
		expect(wordSearch._solveWord("KHAN")).toEqual([ [ 5, 9 ], [ 5, 8 ], [ 5, 7 ], [ 5, 6 ] ]); // vertical-up
	});
	it("should solve the word KIRK", function() {
		expect(wordSearch._solveWord("KIRK")).toEqual([ [ 4, 7 ], [ 3, 7 ], [ 2, 7 ], [ 1, 7 ] ]); // horizontal-left
	});
	it("should solve the word SCOTTY", function() {
		expect(wordSearch._solveWord("SCOTTY")).toEqual([ [ 0, 5 ], [ 1, 5 ], [ 2, 5 ], [ 3, 5 ], [ 4, 5 ], [ 5, 5 ] ]); // horizontal-right
	});
	it("should solve the word SPOCK", function() {
		expect(wordSearch._solveWord("SPOCK")).toEqual([ [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ], [ 6, 5 ] ]); // diagonal-right-down
	});
	it("should solve the word SULU", function() {
		expect(wordSearch._solveWord("SULU")).toEqual([ [ 3, 3 ], [ 2, 2 ], [ 1, 1 ], [ 0, 0 ] ]); // diagonal-left-up
	});

});
