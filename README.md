# @codesfromshad/num-to-bengali-words

> 🧮 A utility to convert numbers to Bengali (Bangla) words.

## 📦 Installation

```bash
npm install @codesfromshad/num-to-bengali-words
````

or with Bun:

```bash
bun add @codesfromshad/num-to-bengali-words
```

## 🚀 Usage

```ts
import numberToBengaliWords from "@codesfromshad/num-to-bengali-words";

console.log(numberToBengaliWords(42)); //"বিয়াল্লিশ"
```

You can also use the named export:

```ts
import { numberToBengaliWords } from "@codesfromshad/num-to-bengali-words";
```

## 🧠 Supported Range

Supports integers from `0` to `9007199254740991` or `Number.Number.MAX_SAFE_INTEGER`.

## 📚 Example

```ts
numberToBengaliWords(123); // "এক শত তেইশ"
numberToBengaliWords(100000); // "এক লক্ষ"
numberToBengaliWords(0); // "শূন্য"
```

## 📄 License

MIT © [codesfromshad](https://github.com/codesfromshad)