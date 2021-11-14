**Prerequisite**
* Install Nodejs

**Steps to run the project**
1. git clone https://github.com/prabhashgupta/omdb-movie-library.git
2. npm i
3. create **.env** file
4. add two variable 
      * APIKEY={add your apikey}
      * OMDBAPIURL=http://www.omdbapi.com/
5. npm run build && node .

**Requirement**

Integrate Movie search API of OMDB

* The results from the API should be saved in the application database for future

* The given keyword should be searched in the OMDB only if the results are not available in the application database

* User can search for a movie by name/genre/director/ - The Genre and Director search will be only at the database level 

User Interface
Search box 
Drop down for search type (title, genre, director)
Results need to be displayed 
Server side rendered template view can be created.
