import http from "http";
import path from 'path';
import fs from 'fs';

const __dirname = (() => {
    let x = path.dirname(decodeURI(new URL(import.meta.url).pathname)); 
    return path.resolve( (process.platform == "win32") ? x.substr(1) : x ); 
})();

const index = fs.readFileSync(path.resolve(__dirname, "index.html"));

http.createServer((req, res) => {
    res.writeHead(200);
    res.end(index);
}).listen(9193, () => console.log("App is running"));

