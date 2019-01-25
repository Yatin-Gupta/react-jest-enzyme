Understanding jest.config.js

1. roots

In it path to directory where all source code for application goes.

2. transform

It tells jest to use ts-jest for ts/tsx files.

3. testReges

It tells jest to look for test in any __tests__ folder AND also any files anywhere that use the (.test|.spec).(ts|tsx) extension e.g. asdf.test.tsx etc.

4. moduleFileExtensions

It tells jest to recognize our file extensions. This is needed as we add ts/tsx into the defaults (js|jsx|json|node).