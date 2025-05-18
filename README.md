# inst377-finalproject

## README

Title of Project: The Hunter's Records

Description: This project has one main function: Being able to look up monsters and weapons from the video game "Monster Hunter World". Users can select which they want to search for with a drop-down menu. On the home page, users can also submit their favorite monster from the game and the most voted for monster is shown on the website.

Target Browsers: My target browser was web browsers on computer like Google Chrome. Though I haven't tested the project on phones, I believe that it would still work well on those platforms as there are a lot of dynamic elements that are based on the size of the screen. I made sure these dynamic elements worked by increasing and decreasing the size of the screen.

[Developer Manual](#developer-manual)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



























## Developer Manual

Dependencies: In order for the application to work properly, npm, node, nodemon, express, body-parser, and @supabase/supabase-js are required.
In order to install these extensions, you must install npm first. This can be done in PowerShell or any sort of console terminal. After installing
npm, all other extensions must be installed by simply inputting "npm install (extension)" into a console terminal. 

How to Run: The application can be used through Vercel, but if you want to run it from your own console,
you must use "npm start" in the console and follow the link that is provided. It runs the application
on port 3000, so make sure that port isn't being used already!

All API Calls: There are four API calls used throughout this assignment, specifically in records_home.js
and records_search.js. The main API used for the application's main functionality (records_search) is the
Monster Hunter World API. The documentation for this API can be found at https://docs.mhw-db.com/
The first API endpoint used is https://mhw-db.com/monsters?q={"name":"${inputName}"}
which is used to return any monsters from the API database that match the name input by the user.
The second API endpoint used is https://mhw-db.com/weapons?q={"name":"${inputName}"}
which is used to return any weapons that match the name input by the user.
The two other API calls made are used to fetch the contents of a table from supabase.
The first API call, found in createUser: ${host}/user
fetches the table and then posts the user's input from the user form at the bottom of records_home into the table
The second API call, found in getFavorites: ${host}/users
fetches the table and then iterates through it (alongside another function, mostVoted) in order to find the most common monster from the table and then show it on the home page.

Known Bugs and Future Development: There are two main bugs with the application currently that need work.
The first bug is related to the infoDiv in records_search. When there are multiple objects for a category
in monster search, the last object with have a comma at the end. 
The second bug is related to annyang functionality. The microphone does not pick up the user's voice
when they are asking to look up a monster or weapon, though the other functionality still works.
For future development, I would want to fix these bugs. Besides bug fixes, I would also want to add more options
to search for, like armor or items from the game. I would also want to use a different API that includes more
from the Monster Hunter series as a whole instead of just World. The API has issues related to certain weapon
searches. At first, I thought it was just because I called the API incorrectly, but it seems as though
some weapons that are in the game just aren't in the database. In order to return data that is more
accurate to the game, finding a more comprehensive API or making one myself is something I would like to do.
For the home screen, there is no way to validate if the monster that the user input is actually from the game.
This means that someone could input something completely unrelated and it would show up as the most
popular monster. I would want to create some sort of validation script that makes sure that the monster
inputted is actually from the database/game, though this might require scrapping the API.
