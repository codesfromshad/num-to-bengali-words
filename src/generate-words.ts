import {
  NEGATIVE,
  ONE_HUNDRED,
  ONE_THOUSAND,
  ONE_LAKH,
  ONE_CRORE
} from "./constants";
import { num2BnWordMap } from "./num-to-bn-word-map";

function generateWords(number: number, words?: string[]): string {

  let remainder = 0;
  let word = "";

  if(number === 0){
    return !words ? (num2BnWordMap.get(0) ?? "শূন্য") : words.join(" ").replace(/,$/, "");
  }

  if (!words) {
    words = [];
  }

  if (number < 0) {
    words.push(NEGATIVE);
    number = Math.abs(number);
  }

  if (number < ONE_HUNDRED) {
    remainder = 0;
    word = num2BnWordMap.get(number) ?? "[unknown]";
  } 
  else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = (num2BnWordMap.get(Math.floor(number / ONE_HUNDRED)) ?? "[unknown]") + num2BnWordMap.get(ONE_HUNDRED);
  }
  else if (number < ONE_LAKH) {
    remainder = number % ONE_THOUSAND;
    word = num2BnWordMap.get(Math.floor(number / ONE_THOUSAND)) + " " + num2BnWordMap.get(ONE_THOUSAND);
  }
  else if (number < ONE_CRORE) {
    remainder = number % ONE_LAKH;
    word = num2BnWordMap.get(Math.floor(number/ONE_LAKH)) + " " + num2BnWordMap.get(ONE_LAKH);
  } else {
    remainder = number % ONE_CRORE;
    word = generateWords(Math.floor(number / ONE_CRORE)) + " " + num2BnWordMap.get(ONE_CRORE);
  }

  words.push(word);

  return generateWords(remainder, words);
}

export { generateWords };
