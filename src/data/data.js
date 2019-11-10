const articles = {};

articles["1233"] = { title: "one", content: "something real!" };
articles["1234"] = { title: "two", content: "something more real!" };

console.log(JSON.stringify(articles));
console.log(typeof articles);
for (var item of articles) {
  console.log(item);
}
