# Like or Dislike Photos.

Welcome to the random photo generator. This small application was built using the **Unsplash API, JavaScript, HTML, and CSS**. The idea came from wanting to practice API data retrieval and I have used Unsplash many times in the past and I was curious if they had an API.

[Link to Project](https://astraughn5.github.io/Photo-Generator/)

## Functionality
A random photo will automatically load. To see another, like or dislike it. As you go through the photos, your like and dislike count will go up.

### Caution
Since this is a public API and free, I only have so many data requests per month. If the site does not retrieve a photo, this is most likely the case. To create your own API key, see below for details.

![alt text](https://github.com/astraughn5/Photo-Generator/blob/main/imgs/photo_generator_thumnail.png)


## Creating your own Unsplash Photo Generator
### 1. Clone the repo

#### 2. Get your own API key to paste into config_sample.js
1. Create an Unsplash developer account at [Unsplash](https://unsplash.com/developers)
2. Create a new application with your desired title i.e Random Photo Generator 
3. Copy your access key and paste it into the config_sample.js where my current API key is.
4. Copy your secret key and paste it where my current secret API key is.
``` javascript
var configKey = {
	MY_API_TOKEN : 'YOUR API TOKEN',
	SECRET_API_KEY : 'YOUR SECRET API KEY',
}
```
5. Save your file and main_sample.js will assign a token variable to the token in config_sample.js

