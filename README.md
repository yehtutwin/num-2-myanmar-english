# num-2-myanmar-english

A Node.js package that will request numbers and convert it to require Myanmar or English language

## Usage

First, install the package using npm:

    npm i num-2-myanmar-english

Then, require the package and use it like so:

    const {num2mm, num2en} = require('num-2-myanmar-english');

Logging the result

    const mm = num2mm('54321')
    const en = num2en('၁၂၃၄၅')
    console.log(mm, en)

## License

MIT
