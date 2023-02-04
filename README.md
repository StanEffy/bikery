# Bikery - roll the HEL out of here!

http://52.47.173.43:8080/ - this is where you can have a look on a working app. (Combined node + react deployed to AWS EC2)

This is a project based on a dataset which consisted of three months of lovely bike journeys around Helsinki. The
collection of the documents is about 3 000 000, so you can easily learn some patterns in paths in the city and
always be on trend.

## Available Scripts

Bikery should work without any issues both on Windows and UNIX-based systems.

!IMPORTANT!
Backend is in separate repo and to make it all works you should go and install all the backend.
Open [https://github.com/StanEffy/back-bikery](https://github.com/StanEffy/back-bikery) and clone repo the same way
with `npm i` afterwards.

# BUT

The easiest way might be just to pull the image from dockerhub 

`docker pull holydonk/bickery:final`

And then do something like
`docker run -t -i -p 3002:3002 holydonk/bickery:final`

Voila! App is running on your localhost 3002

[http://localhost:3002/](http://localhost:3002/)

You can write me in telegram @Holydonk to get a pass to a db. 

In the project directory, you can run:

### `npm i`

This allows you to install all dependencies and continue with your two-wheels trip.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

It will run tests. You can find all the written tests in coverage folder

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

[![addstation1.jpg](https://i.postimg.cc/JhL4pSYz/Add-Station1.jpg)](https://postimg.cc/fV8NLqhG)

By clicking on a button in right bottom corner you can go and add a draggable pin on the map. Whenever map is moving 
it is always in the center of it.

[![addstation2.jpg](https://i.postimg.cc/7Z7ZMqVR/Add-Station2.jpg)](https://postimg.cc/pmWvPb3Q)

When you are settled with the place for your new business you can go to next step and summon a dialog. There is 
nothing much you can do with it, just address and name of your station. Later I am going to add menu with three cities.

[![addstation3.jpg](https://i.postimg.cc/158tXGNs/Add-Station3.jpg)](https://postimg.cc/nCtZwQkP)

So if you filled it in correctly, you can send request to a server and your map will reappear on the map. For now it 
is a bit bugged, so you have to reload the page. But soon enough all will be fixed with error boundaries

![Single station view](https://iili.io/gdovII.md.jpg)

Here you can learn some statistics about station, but remember: the bigger monitor you have, the better info you get
(up to some limit of course).
There is a table which consist of some trips started from this station with covered distance and duration.

![Single station view](https://iili.io/gdoOep.md.jpg)

Also there is a page where you can have a look on every single station, click on the row and go straight to this
station.

On single station view you can also learn the most popular routes to and from just by clicking on accordion 

[![Single station view](https://i.postimg.cc/DyhcZq4h/Screenshot-from-2023-02-04-18-47-06.png)](https://postimg.cc/23HW9Lx9)

[![filters.jpg](https://i.postimg.cc/MpdLzF41/filters.jpg)](https://postimg.cc/18VBHJyz)
You can go to Journeys page and use its' rather primitive filtering system. I promise it is going to become bigger and
easier to use. For now, you can select one station and look for specifically long/short trips or observe all of them
at once.

[![filters.jpg](https://i.postimg.cc/65FQv8dR/Add-New-Trip.jpg)](https://postimg.cc/ppYxNXcX)
You can easily add new trip by selecting from which to which station trip has been done and then send request to a 
server with some randomized (based on real trips duration and length) data. Date of the trip is starting from now 
and finishes somewhere seconds in the future. I could do the opposite, but I like future from the first episode of 
Futurama seen by me.


## Tech used

For the project I used classic MERN stack with Typescript. Simply because it is one of the most used one. 
MUI was used for the UI, simply because it was an important thing to work with the other approach towards css (I really adored BEM, even though it is not a thing anymore).
I am going to dive even deeper and create flexibility and may be theming. 

Mongo deployed to Atlas, backend to EC2.

## To do

- ~~Filtering on trips~~
    
Partly done. Need to change functionality on backend to make it possible observe trips not only from/to one 
  station to another/any, but make several options from station. And also create limiter to top something trips
- ~~Add new journey~~
    
Done. Need to fix when there are no examples from one station to another to randomize distance and time properly
- ~~Add new station~~
    
Done. Need to redirect to map on success.
- Registration (without any reason, just because I want to)
- ~~deployment~~
- Update statistics on adding new trip and then listen to it
    
Back deployed, front waiting.
