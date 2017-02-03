// Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing


function palindrome(str) {
	return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase() ===
	str.replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").reverse().join("");
}


palindrome("A man, a plan, a canal. Panama");