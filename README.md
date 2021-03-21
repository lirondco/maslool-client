# Maslool

Live app: // pending //

## API Documentation

Full API Documentation can be found here: https://github.com/lirondco/maslool-server

## Summary

This web app is my culminating capstone project for the Software Engineering Program at Thinkful. Maslool is the Hebrew word for "path", as in the path that we take when we are aimlessly wandering in nature. I have decided to create a forum-like website in order to create a tight-knit community of outdoor enthusiasts. It is designed to be very straightforward and interactive. It features a comprehensive search and filtre feature for all trails available, a rating feature, and a comment feature that is designed to be friendly to all sorts of user. It is also designed with plenty of staff interaction in mind, where users can flag comments that they think are inappropriate, and send messages to moderators to suggest new content and features, give feedback, report issues, etc. There are added features for moderators such as the ability to add, delete, and edit trails, ban and unban users, unflag comments, receive messages from users, retrieve all users with a comprehensive search feature, edit and delete everyone's comments, and best of all an opportunity to help expand the scope of our web app.

## Skills and Technologies Used

I specifically chose to go this way with my capstone project in order to create a website that I could realistically build in three weeks and extensively demonstrates all the skills, techniques,and technologies that I have learned in the program.

The skills and techniques that I used for this project are:
* Proper DOM Manipulation
* Database creation and management
* Proper organisation of data
* Testing of both the server and client sides
* Breaking down my codes into several files and components
* Creating helper files in order not to repeat the same codes over and over again.
* Keeping accessibility in mind and making sure that my project is easy on the eyes and readable with a screen reader.
* Graphics design for my logo and error components

The technologies that I used are:
* Jest and Enzyme
* ReactJS
* HTML as JSX
* CSS
* NodeJS
* Express
* PostgreSQL
* Javascript
* BcryptJs
* Helmet, Knex, and Morgan
* Chai, Mocha, Nodemon, and Supertest

## How to Use

### As A New User ... 

At first visit I see the website's landing page with a detailed information about the site ...

![Landing page screenshot](/screenshots/home.png "Landing Page")

And then I go to the register page to enter my credentials ... 

![Registration page screenshot](/screenshots/register.png "Registration Page")

Uh oh ... 

![Password isn't matching screenshot](/screenshots/passwordmatch.png "Password not matching")

And once registered I am automatically redirected to their rules page and more tabs became available for me to use ...

![Users rules page screenshot](/screenshots/welcomeuser.png "User welcome and rules page")

And now I'm in the fun part! I am given several options to search and filtre the results. Let's leave it blank first ...

![Search trail page that is blank screenshot](/screenshots/blanksearchtrail.png "Black search form on trails page")

All trails are returned as expected, in alphabetical name order ...

![All trails list screenshot](/screenshots/alltrails.png "All trails list")

I am a beginner hiker from California and I want something with a canyon and a rating of at least 4 ...

![Specific trails search screenshot](/screenshots/searchtrail.png "Searching with specific criteria")

Oh, I guess not... 

![Trail search returns nothing screenshot ](/screenshots/trailnotfound.png "Search result returned empty")

Let me lower my standards to a rating of 3 and above ... 

![Search query returned a trail screenshot](/screenshots/searchreturn.png "Trail search returned a trail")

Here is the trail's main description and safety information ...

![Trail description screenshot](/screenshots/trailmain.png "Trail description page")
![Trail safety screenshot](/screenshots/trailsafety.png "Trail safety page")

Here are the comments. Looks like someone got banned ... 

![Comments screenshot](/screenshots/comments.png "Comments page")

And I posted my first comment! I can edit and delete it too, but oddly (and rightfully so!) I can't flag my own comment ... 

![Comment posted screenshot](/screenshots/postcomment.png "User posted a comment")

I gave it a five star rating ...

![rating screenshot](/screenshots/rating.png "User gave a rating")

Now moving on ... how about I contact the admins? It's so cool how it loaded my own message upon submission too!

![contact admin screenshot](/screenshots/contactadmin.png, "User is writing to admins")
![contact admin sent success](/screenshots/contactadmin.png "User has written to admins")

And here's where I can find my user credentials including an ability to change my email address ...

![user info screenshot](/screenshots/userinfo.png "User info page with user's details")

And I clicked log out and I'm back to the home page that non-users see! And when I logged back in, I got redirected straight to the trail search page and not the rules!

 ### As a Moderator

 I get tab options accessible to site administrators only ...

 ![admin banner screenshot](/screenshots/adminnavs.png "Admin's header with all links")

 I can edit, delete, and unflag comments ... 

 ![comments with admin features screenshot](/screenshots/admincomment.png "Comment but with admin features")

I can add, edit, and delete trails ... 

![add trail screenshot](/screenshots/addtrail.png "Add trail page")
![edit and delete screenshot](/screenshots/edittrail.png "Edit trail landing page")

I can view messages from users ... 

![message list screenshot](/screenshots/messagelist.png "Viewing all messages page")
![message page screenshot](/screenshots/messagepage.png "Viewing a page showing the entirety of just one message")

I can see all alerts from the entire site on one page ...

![flagged comments screenshot](/screenshots/flaggedcomments.png "Viewing all flagged comments")

I can view all users or filter by username ...

![users list screenshot](/screenshots/userslist.png "Users list page showing all users" )

### Error Handling

Error messages displaying generated errors and loading displays are present all throughout the app. There are also two generalised error pages that may appear that are just so cute you may wanna force an error from time to time (just kidding!):

404 Error: When you visit a webpage that does not exist or tried to force a data query that is not allowed. 

![404 page photo](/screenshots/DANGER.png "error page when page is not found")

General Error: This is what you see when there's an error in the code itself. This is not supposed to happen! Though if it does, rest assured that we are already working to fix the issue. 

![Error page photo](/screenshots/error.png "error page when there's a site error")

### Attributions

I would like to thank [Thinkful](https://www.thinkful.com) for all the knowledge and expertise that they have taught me in the last many many months. This is an opportunity that I never thought would ever come to my life and I am grateful for it.

I would also like to thank my friends especially Doug, Emily, Dims, and Yuval for helping me with finding sample trails to include and agreeing to test my app, and Sivan, Tzvi, Shira, Elisheva, Mya, and Veronica for the encouragement, moral support, and listening to me try to figure some codes out.

And lastly, I would like to thank Jeff V. for being an amazing person and supporting me through my journey at Thinkful, and providing me with a great slogan for this web app. 