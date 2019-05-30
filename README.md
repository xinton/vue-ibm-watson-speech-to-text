# vue-ibm-watson-speech-to-text

## Server setup
1. Create a Speech-To-Text Service on IBM Cloud
1. Go to /server
1. Create a .env file with this:
    ```
    STT_API_KEY=<API_KEY>
    ```
1. Start the server
    ```
    npm start
    ```
 

## Vue Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Server Adress
- You can change the server adress on the file `src/services/transcript`