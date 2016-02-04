# Contact-list with Node.js and the MEAN stack.

<h4>Windows:</h4>
1-. Download Node.js from  https://nodejs.org/ <br>
2-. Download MongoDB from https://www.mongodb.org <br>
3-. Add mongo to path. <br>
4-. Run mongod (this is the deamon)<br>

<h4>Mac OSX</h4>
1-.Download and install Node.js from:  https://nodejs.org/ (the stable version). At the time of this post was 5.5.0.<br>
  Make sure usr/local/bin is in your path, do this by pasting this in your terminal:<br>
  <code>export PATH = $PATH:/usr/local/bin.</code><br>
2-. Install mongo on your computer, use homebrew you can check how to install homebrew for OSX at http://brew.sh.<br>
    Once you have homebrew installed,navigate to your root and brew mongo.<br>
    <code>User:~/Desktop user$ cd /</code><br>
    <code>User:/ user$ brew install mongodb</code><br>
3-. Make the default directory for mongoDB. <br>
    <code>User:/ user$ mkdir -p /data/db</code><br>
4-. Then run Mongo deamon, (make sure you have the permissions, or use sudo):
    <code>User:/ user$ sudo mongod</code><br>
5-. Open a new Terminal tab (cmd+T) and create the database for this project:<br>
    <code>User:/ user$ mongo //To use mongo console<br></code>
    <br>
6-. Create the database for this project (not required, but in case you have problems...)<br>
    <code>use contactlist</code>
    This last step will create the database contactlist if it hasn't been created before.

<h4>Check if it worked</h4>
It can take some minutes the first time you run it. If you see this, it means you succeeded:<br>
<code>2016-01-30T18:38:05.710-0700 I NETWORK  [initandlisten] waiting for connections on port 27017</code>

<h4>NPM and Run it</h4>
1-.Go to the terminal and navigate to the project folder and do:<br>
  <code>npm install</code><br>
  To install the package.json<br>
2-. Run the server, do:<br>
  <code>node server.js</code>
  <br> Now check http:localhost:3000
  
