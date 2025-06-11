import { DECIMAL } from "./constants";
import { generateWords } from "./generate-words";
import { num2BnWordMap } from "./num-to-bn-word-map";
import { isInt, isSafeNumber } from "./utils";

/**
 * This function converts an ASCII number to Bengali words.
 * 
 * @param number - A number to convert to Bengali words.
 * @returns A string of Bengali words.
 * 
 * @example
 * //Convert an integer to Bengali words
 * console.log(toBengaliWords(123)); // Outputs: "একশ তেইশ"
 *
 * // Convert a floating-point number to Bengali words
 * console.log(toBengaliWords(45.67)); // Outputs: "পঁয়তাল্লিশ দশমিক ছয় সাত"
 *
 * // Convert a negative number to Bengali words
 * console.log(toBengaliWords(-200)); // Outputs: "ঋণাত্মক দুইশ"
 */
const numberToBengaliWords = function(
  number: number, 
): string {
  let words = "";

  if (!isFinite(number)) {
    throw new TypeError(
      "Not a finite number: " + number + " (" + typeof number + ")"
    );
  }
  if (!isSafeNumber(number)) {
    throw new RangeError(
      "Input is not a safe number, it’s either too large or too small."
    );
  }

  const num = parseInt(number.toString(), 10);
  words = generateWords(num);

  if (!isInt(number)) {
    const point = number.toString().split(".")[1];
    if (point) {
      words += DECIMAL;
      for (const digit of point) {
        words += " " + num2BnWordMap.get(+digit);
      }
    }
  }

  return words;
};

export default numberToBengaliWords;
