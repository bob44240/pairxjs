1 - Open a command prompt in the project root dir.

2 - Run the angular-cli build command. Do not use the default 'dist' directory. Use 
the pre-configured 'server' directory as follows...

ng build --output-path=server

2a - Copy server.js to the 'server' directory.

3 - Change to the 'server' directory and open a command prompt.

4 - Run the node 'express' server. You should see 'Server is listening on localhost:8080'.

5 - Point your browser to http://localhost:8080.

notes...
ng build -prod --output-path=server
ng build --base-href server --prod
ng version --verbose
