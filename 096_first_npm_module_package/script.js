// yarn is alternate of npm
// => npm install
// above mentioned command is used to install node_modules
/** 
 * tip: we don't commit/push node_modules folder on git. 
 * bcz, it's bigger in size and 
 * user can easily install node_modules by above mentioned command.
 * details of the node_modules(dependencies) always there in package.json file.
 */ 
console.log("working with first npm package");

//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("./096_first_npm_module_package/index.html", "utf8");
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Akash Prajapati</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};
var users = [
    {
      name: "Akash",
      age: "23",
    },
    {
      name: "Shruti",
      age: "19",
    },
    {
      name: "Disha",
      age: "23",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./096_first_npm_module_package/output.pdf",
    type: "",
  };
  // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.
  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
