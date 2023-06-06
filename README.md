# Social-Network-API
UConn Bootcamp Chapter 18 NoSQL Challenge

## Description
In this chapter 18 challenge I took my knowledge of NoSQL and used it to create a Social Network API.  I now have a valuable asset to use in my journey towards becoming a web developer as I can use this Social Network API as a part of my coding portfolio.


## Process
* The first thing I did after creating the repository was setting up my package.json as well as adding in empty base files such as 'connection.js' and 'index.js'.
![nosqlbasefilesimg]("")


* The next step was to write the 'connection.js' and the 'index.js'.  Now I had a port and a stable server connection that I could use to test my routes and models on Insomnia.
![nosqlconnectionimg]("")


* Next, I wrote models for Users, Thoughts, and Reactions.  I needed data models so that I could narrow down exactly what I needed to make for each controller.
![nosqlmodelsimg]("")


* The next step was to write the controllers for these models.  Hence, userController.js and thoughtController.js were created.  These were needed to set up routing methods and parameters.
![nosqlcontrollersimg]("")


* Finally, these controllers needed routing files to instantiate them.  So, I wrote 'thoughtRoutes.js' and 'thoughtRoutes.js'.  Without these files, the controllers do absolutely nothing, so this completed the full MVC of this project.
![nosqlroutesimg]("")


## Walkthrough


## Conclusion
Overall, this was a great first NoSQL project.  I enjoyed using 'mongoose' and the action of connecting models together in a database was very interesting to me, as it always is.