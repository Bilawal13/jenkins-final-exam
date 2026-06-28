
const http = require("http");

http.createserver( (req , res ) {
	res.writehead(200);
	res.end("Hello from jenkins!);
}).listen(3000 , () => console.log("Running on port 3000));
