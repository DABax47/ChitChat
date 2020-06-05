Chit Chat
Description:real time topic based chat rooms
technologies::
--> BACKEND
	 express, oauth or JWT, sessions, cookies, node path and node http, mongoDB, mongoose, moment.js, concurrently, nodemon
--> FRONTEND
		React, sass
-----------------------------------------------

***********STEP1:: Figma WIREFRAME and HTML prototype*****************
Build quick FIGMA wireFrame and HTML prototype to add css
--name css/html components[ie id's and classes] the same as the react components
Make a git repo
***********STEP2:: REST API and Mongo connect**********************

start developing backend REST API
[postman to test endpoints]
Connect to the DB via mongoose and add one placeholder user


***********STEP3::*****************


create server to work with socket io


~~~~~~~~~~User Flow~~~~~~~~~~~~~~~~~
register for an account
Schema::
	--> UserName: string (not used for login credentials// can be changed in user dashboard)
	--> email: String
	--> password: String

>>>>>>NEXT>>>>>>>>>>

create or Join a chat room

if Create Room::
--> add topic the room will be about and total number of accepted participants(ie if numOfSockers > setParticipantLimit)
--> open room
--> begin chatting
[Anyone can leave however only the room create can delete the room.]
