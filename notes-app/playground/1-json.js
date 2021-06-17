const fs = require("fs");

const book = {
  title: "mockingbird",
  author: "hawa",
};

const data1 = JSON.stringify(book);

fs.writeFileSync("1-json.json", data);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data1.title);
console.log(data1.author);

//onst jsonfile = require("./1-json.json");

const bufferData = fs.readFileSync("1-json.json");
const jsonData = bufferData.toString();
const parsed = JSON.parse(jsonData);

parsed.age = 19;
parsed.name = "Hawa";

const newObj = JSON.stringify(parsed);
console.log(newObj);

fs.writeFileSync("1-json.json", newObj);

console.log(JSON.parse(jsonData));
