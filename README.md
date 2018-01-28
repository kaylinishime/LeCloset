
<img src="https://preview.ibb.co/gi2H3b/le_closet_logo.png" alt="le_closet_logo" border="0">


#Le Closet

This web app was designed to help aggregate a consumers favorite clothes from over 200 of their favorite retailers.  Using a custom API and filter features we were able to show the end user outfits that they were likely to purchase within a 1 week sprint.

##Technologies
<!-- <img src="http://i1308.photobucket.com/albums/s612/williampruden/proj3_zpsez7vkmvh.jpg"> -->

| Technologies  | APIs   	| Deployment  |
| ------------- |:-------	| -----------|
| Node.js    	| ShopStyle 		| Heroku	 |
| Express.js 	| Google oAuth  	| MongoLab |
| MongoDB 	|       			|    	   	 |
| jQuery 		|      			|    	   	 |
| AJAX 		| 			      	|    	   	 |
| Underscore	|      			|    	   	 |
| JavaScript 	|      			|    	   	 |
| HTML 5 		|      			|    	   	 |
| CSS 3 		|      			|    	   	 |


##User Model

| Parameters  | Value   	| Description  | Example |
| ----------- | ----------	| ------------ | ------- |
| Name    	| String 		| Account Name from Google| "Billy Pruden" |
| Email 		| String  	| Google Email provided   | "williamprudeniv@gmail.com" |
| Password 	| String    	| No required if logging in through Google   	   	 | "password123" |
| Gender 		| String     	| Male or Female   	   	 | "Male" |
| Retailers 	| Array     	| An array storing Retailer ID's that the user has requested information on| [ 23, 14, 421 ] |
| Products	| Array     	| An array storing Product ID's of the products the user has placed into their closet | [ 443526148, 469079824 ] |
| googleId 	| Number     	| ID' provided by Google's oAuth | 105460793152116688442 |
| CreatedAt 	| Date     	| Date the profile was created | 2016-08-14T22:48:15.387Z |

##Planning and Approach
Tasks were delegated and roles were identified as a mutual team decision. The plan consisted of building the core backend framework and functions using the ShopStyle API and then construct a robust, UX minded Front End. ​

####Team Roles
- Project Manager / Backend Developer - Kayli Nishime
- Backend Developer - Billy Pruden
- API/Research/Filter Functions - Chris Lopez

####Wireframes - Using Sketch

<!-- <img style="width:700px;display:block;margin:0 auto;" src="http://i1308.photobucket.com/albums/s612/williampruden/Screen%20Shot%202016-08-23%20at%207.05.54%20PM_zpsfuy5mx4l.png"> -->

####Challenges

- Using an unfamiliar Oauth
- Using an unfamiliar API
- Managing workload and Github pull/push requests
- Manipulating API to get correct information needed for functionality of the App
