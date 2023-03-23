# The Domain Name Generator

Finding a domain name is hard, why not automate it? :)

## Before starting
Install the packages by typing: npm install.

## How do I run my website to see live changes?
Type on the command line $ npm run start and type localhost on the browser.

## 📝 Instructions

Create a script that generate all the possible domain name combinations
from a list of pronouns, adjectives and nouns, for example:

```js
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
```

Should generate something like:

```bash
thegreatjogger.com
thegreatracoon.com
ourgreatjogger.com
ourgreatracoon.com
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com
```

### 💡Hint

You'll need to use nested for loops in order to mix the different values together.

Your tools: For loop, string concatenation.

## 😎 Feeling confident?

- Add several types of extensions: .com, .net, .us, .io, etc.
- Add domain hacks, for example: instead of `lastOfUs.com` you can use the `.us` domain like this: `lastOf.us`

## Technologies used

Javascript for the project.
There is a html and css file but nothing was changed from the boilerplate template.
