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

});
