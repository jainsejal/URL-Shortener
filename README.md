# URL-Shortner Project

## The front-end of the project is created using create-react-app. 
One of the main file index.js has App.js as sub components.  

And App.js has many other sub components that are listed in /component folder.

Run this code in two seperate terminals: one for back and other for front.  
**Type npm i to install the dependencies in front folder.  
Then type npm start in the terminal.**


## The back-end of URL shortner consists of majorly two sections: Reduction function and creating database for saving the hash for the same.

So, reduction function and further separated into Hash and unhash function.  
So hash function takes if as argument and returns alphanumeric  
hash whereas unhash function takes hash and returns id.   
        * for example, hash(1)= c9c9a,   
                     * unhash(c9c9a)= 1.  
                   
And for creating and saving ids and hash to database I use sqlite. So it gets the URL from the user and then check the URL in the database if it  
is found then it will return hash for the URL and if it is not found then it will insert the URL and hash and update the database with new one.   
This database will be created whenever the server is UP.  

**Type npm i to install the dependencies in back folder.  
Then type npm run dev in the terminal.**
