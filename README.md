# Bikery - roll the HEL out of here!

This is a project based on a dataset which consisted of three months of lovely bike journeys around Helsinki. The
collection of the documents is about 3 000 000, so you can easily learn some patterns in paths in the city and
always be on trend.

## Available Scripts

Bikery should work without any issues both on Windows and UNIX-based systems.

!IMPORTANT!
Backend is in separate repo and to make it all works you should go and install all the backend.
Open [https://github.com/StanEffy/back-bikery](https://github.com/StanEffy/back-bikery) and clone repo the same way
with `npm i` afterwards.

"CT0I nVZa YVGi s5Y1" - it is a password to a db. Delete all backspaces and add it to config.env file to connect to
mongodb.
Also you can write me in telegram @Holydonk

In the project directory, you can run:

### `npm i`

This allows you to install all dependencies and continue with your two-wheels trip.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Suppose to run test but they have not been written because repo's owner doesn't know how to write meaningful test
and Solita recommended not to write meaningless tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Bikery description

The project is still under construction and many other features are going to be implemented.

But it has some interesting stuff to be observed and pondered upon...

![Map](https://iili.io/gdoemN.md.jpg)

It has a map based on MapBox with pins of all the stations we got from the dataset. All the pins are clickable and
lead you to the page belonged to the station

![Single station view](https://iili.io/gdovII.md.jpg)

Here you can learn some statistics about station, but remember: the bigger monitor you have, the better info you get
(up to some limit of course).
There is a table which consist of some trips started from this station with covered distance and duration.

![Single station view](https://iili.io/gdoOep.md.jpg)

Also there is a page where you can have a look on every single station, click on the row and go straight to this
station.

[![filters.jpg](https://i.postimg.cc/MpdLzF41/filters.jpg)](https://postimg.cc/18VBHJyz)
You can go to Journeys page and use its' rather primitive filtering system. I promise it is going to become bigger and
easier to use. For now, you can select one station and look for specifically long/short trips or observe all of them
at once.

## Tech used

For the project I used classic MERN stack with Typescript on frontend and javascript on back.
Also MUI was used for the UI, simply because I wanted to have one more training with others code and also feel way
more comfortable when I write css myself: coding is not about always being comfortable with technologies.

Mongo deployed to Atlas, backend to EC2.

## To do

Soon I am going to add:

-   Filtering on trips
-   Add new journey
-   Add new station
-   Registration (without any reason, just because I want to)
-   deployment
