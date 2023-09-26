switch (new Date().getDay()) {
	case 0:
		console.log("Azi este duminica");
		break;
	case 1:
		console.log("Azi este luni");
		break;
	case 2:
		console.log("Azi este marti");
		break;
	case 3:
		console.log("Azi este miercuri");
		break;
	case 4:
		console.log("Azi este joi");
		break;
	case 5:
		console.log("Azi este vineri");
		break;
	case 6:
		console.log("Azi este sambata");
		break;
	default:
		console.error("Ceva ne to...");
		break;
}

const str = "str";
const lungimeaStr =
	str > 10 ? "lungimea este mai mare de 10" : "lungimea este mai mica de 10";
console.log(lungimeaStr);
const majStr = str.toUpperCase();
console.log(majStr);
const minStr = str.toLowerCase();
console.log(minStr);

// First method
const fiveWords = "unu doi trei patru cinci"; //type string
const arrayOfFiveWords = fiveWords.split(" "); //type array
const thirdWord = arrayOfFiveWords[2]; //starts at 0
console.log(thirdWord);

//Second method
const firstSpace = fiveWords.indexOf(" ");
const secondSpace = fiveWords.indexOf(" ", firstSpace + 1);
const thirdSpace = fiveWords.indexOf(" ", secondSpace + 1);
const thirdWordNd = fiveWords.substring(secondSpace + 1, thirdSpace);
console.log(thirdWordNd);
