import * as fs from "fs/promises";
import * as http from "http";

http
.createServer((request, response)=>{
    response.writeHead(200,{"Content-Type": "text/plain"});
    
    fs.readFile(`./en.txt`).then((en) => {
      fs.readFile(`./translation.json`, "utf8").then((json) => {
        console.log(json);
        const array = JSON.parse(json);
        console.log(array);
        for (let i = 0; i < array.length; i++) {
          if (array[i][en]) {
            fs.writeFile("./he.txt", array[i][en]);
          }
        }
      });
    });
    
    response.end ();
}). listen(8000);


