// Regular Expression in javascript
/*
A regular expression is a sequence of characters that forms a search pattern.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.
*/
// Defining a Regular Expression in JavaScript
var rgx=/^[1-9][1-9]\S+[EEE]*|[019]$/gi;
// console.log(rgx);

// with new keyword;

var rgx1 = new RegExp('EEE') 
 
let pattern = /a/;
console.log(pattern.test("The best things in life are free!")); // true
pattern=/c/;
console.log(pattern.test("The best things in life are free!")); // false

/*
Matching a Specific Set of Characters
The following sequences can be used to match a specific set of characters.

\w — Matches all the words characters. Word characters are alphanumeric (a-z, A-Z characters, and underscore).
\W — Matches non-word characters. Everything except alphanumeric characters and underscore.
\d — Matches digit characters. Any digit from 0 to 9.
\D — Matches non-digit characters. Everything except 0 to 9.
\s — Matches whitespace characters. This includes spaces, tabs, and line breaks.
\S — Matches all other characters except whitespace.
. — Matches any character except line breaks.
[A-Z] — Matches characters in a range. For example, [A-E] will match A, B, C, D, and E.
[ABC] — Matches a character in the given set. For example, [AMT] will only match A, M, and T.
[^ABC] — Matches all the characters not present in the given set. For example, [^A-E] will match all other characters except A, B, C, D, and E.
{min,max}-
*-all with 0
+- all with 1
\-escaping
?-optional
*/
var sId='3233'
var regex=/(^[1-9]{2}[E]{3}0[0-9]{2})/g;
// method of RegExp
const match=sId.match(regex);
console.log(match);
const replace=sId.replace("True")
console.log(match?replace:"False");
const search=sId.search(regex);
console.log(search);
const test=regex.test(regex);
console.log(test);
//  email validation example
var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// pass validation example
var pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;


 