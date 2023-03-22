let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainArray = [];

function generateDomain(pronounArr, adjArr, nounArr) {
  let domain = "";
  for (let i = 0; i < adjArr.length; i++) {
    for (let j = 0; j < pronounArr.length; j++) {
      for (let k = 0; k < nounArr.length; k++) {
        domain = `${pronounArr[j]}${adjArr[i]}${nounArr[k]}.com`;
        domainArray.push(domain);
      }
    }
  }
  return domainArray;
}

console.log(generateDomain(pronoun, adj, noun));
