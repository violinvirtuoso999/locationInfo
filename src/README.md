# locationInfo
An app using electron to pull up a map of a location. Will eventually include weather and forecast info.

## How to Use

### Setting Up the Directories
First clone the repository to a directory. Then create a config file and place it in a folder that is above the source folder called config. For example, you would have locationInfo/config and locationInfo/src. Config holds your config.js file and src holds all of the src files.

### Running the app
You must first npm install all of the dependencies listed below. Then you should go into the terminal, cd to your src directory and run 'electron app.js' to open the UI.

## Dependencies
All dependencies should be updated to the latest version:
jquery
fs
http
node-geocoder