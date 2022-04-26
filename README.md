# Photo-Generator
Photo Generator is a front end website that generates a random photo from Unsplash everytime the page reloads

## Usage
### Clone the repo
1. Use config_sample.js and paste your Unsplash API keys

#### Get your own API key
1. Create an Unsplash developer account at [Unsplash](https://unsplash.com/developers)
2. Create a new application with your desired title i.e Random Photo Generator 
3. Copy your access key and paste it into the config_sample.js where it says 'YOUR API TOKEN'
4. Copy your secret key and paste it where it says 'YOUR SECRET API KEY'
``` javascript
var configKey = {
	MY_API_TOKEN : 'YOUR API TOKEN',
	SECRET_API_KEY : 'YOUR SECRET API KEY',
}
```
5. Save your file and main_sample.js will assign a token variable to the token in config_sample.js
