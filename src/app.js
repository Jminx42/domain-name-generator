let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

function generateDomain(pronounArr, adjArr, nounArr, extensionsArr) {
  let domain = "";
  let array = [];
  for (let i = 0; i < adjArr.length; i++) {
    for (let j = 0; j < pronounArr.length; j++) {
      for (let k = 0; k < nounArr.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          domain = `${pronounArr[j]}${adjArr[i]}${nounArr[k]}${extensionsArr[l]}`;
          array.push(domain);
        }
      }
    }
  }
  return array;
}

const domainArray = generateDomain(pronoun, adj, noun, extensions);

domainArray.forEach(element => console.log(element));
// console.log(domainArray);
