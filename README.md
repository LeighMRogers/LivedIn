# LivedIn: A Rating App for Renters

### Creator
Leigh Rogers, Nashville Software School UI/UX Capstone

## Project Overview

Have you ever rented an apartment only to find it was nothing like the advertisement? Or realized that the landlord was a slumlord and never fixed any problems? Or had nightmare neighbors? Why can’t you read reviews about rentals before you sign the lease?

Often, renters have nowhere to turn when their living conditions are not what they seem:

* Calling a 411 hotline goes nowhere;
* Contacting a landlord or property manager puts the onus on renters to keep following up;
* Contacting representatives is fruitless if they are in the pockets of real estate lobbyists and developers;
* Housing courts favor powerful landlords over tenants.

Because of these challenges, tenants often lack access to information about specific rental units and their potential landlords until they become victims of terrible living situations.

This app aims to provide these users, tenants and landlords alike, with a platform that specifies reviews and ratings of individual rental units.
With these two main functionalities, I hope to create a product that offers users a helpful tool to make informed decisions on where to live and provide public feedback on their living conditions.

## Challenge Statement

How might we empower and inform the rental community by creating a platform for users to rate and review rental units with the ultimate goal of transparency?

## Research Plan

### Competitive Analysis

When one searches for a rental unit on common websites like Craigslist, Zillow, they don’t come with reviews or context of those who have lived in the unit before them. The most ubiquitous ratings app, Yelp, does not incorporate real estate into its reviewed businesses.

There are a few smaller websites that are not yet well known that offer rental searches with reviews:

![ApartmentRatings](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/ApartmentRatings.png)

* ApartmentRatings.com and Apartments.com: These sites are rental search platforms under the same guise as Zillow or but also includes reviews based on the unit and building. They serve as a platform for both tenants and landlords to build greater transparency about rental units. Search functionality is location-based. Their review forms are a very useful model.

![WhoseYourLandlord](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/WhoseYourLandlord.png)

* WhoseYourLandlord.com: A more justice-centric platform, this site organizes units and buildings by location where a user can rate their landlord. The focus on landlords rather than units means it is an equity-building platform rather than a real estate business platform.

Traditional, global rating websites and apps are useful for the purposes of UI inspiration, review form structure, and review organization:

* Glassdoor: The job and company ratings site offers a model for displaying reviews in an organized and efficient way. By tying reviews to jobs and companies, it matches the relationships of units to buildings.
* Yelp: The mecca of review sites, the site and app offers appealing UI and inspiration for displaying reviews and other content.

![Capstone Initial Wireframe](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/LivedInWireframes.jpg)

### Users and Customers

The ideal user would be any of the following:

* Renters looking for a new home
* Renters moving to a new area
* Current and former tenants
* Landlords seeking feedback on their units

## Project Goals
* Building out a robust UI/UX research and design plan;
* Coding a CRUD-functionality portion of the app, particularly the add/view/edit/delete a review.

These goals are set against the constraints of time - I had less than 1 week to research users, design, and user test the lo-fi and hi-fi mockups - and only 2 weeks to code ahead of Nashville Software School graduation. I was also learning new APIs and dependencies in the process, such as Leaflet, Mapbox, and Cloudinary.

### User Goals
* Provide a functioning app that allows users to create, edit, and delete reviews tied to a specific rental unit, the landlord, and rental building.
* Allow users to search for reviews based on the building, unit, or landlord.

### Personal Goals
* To develop a functioning CRUD app.
* To grow my understanding of React.
* To successfully incorporate React Ratings dependency.

## Technology
* ReactJS
* ReactStrap
* JSON Server
* Leaflet API
* Mapbox
* Cloudinary
* Moment.js

## Personas

Based on my user interviews and research, one type of person who expressed a need for this app is the "serial renter." These people aren't interested in homeownership (at the moment) because they are cultural nomads interested in traveling and taking advantage of risky but rewarding opportunities. They typically are concentrated in urban environments and work in "creative class" industries like marketing, advertising, and digital publishing. Maggie has the type of personality and life experience suitable for the app: on the move, techy, and confident in her decisions if she has the right tools to help her.

![Safe Trip App Persona Aid Worker](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/RateRentalPersona.png)

## Empathy Map

![Empathy Map](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/EmpathyMap.jpg)

## Low Fidelity Mockups

![LoFi Wireframes](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/LivedInWireframes.jpg)

![Capstone Mockup](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/LivedInFigmaViews.png)

## Usability Testing

After constructing my lo-fi mockups, usability testing showed me where users expected to add a new review. In earlier paper mockups, an "Add" button asked users to add a review on the landing page, before they would have even searched. Users showed that this was too high up, and they expected to add a review once they found the unit listing, whether by searching on the map or scrolling through the list of buildings.

## Design system

Safe Trip uses [Reactstrap](https://reactstrap.github.io/) as its design foundations for styling forms, cards, input fields, and buttons.

### Color palette
An app trying to entice users to contribute content requires a bold, robust color palette. Rich purples and blues and bright green and magenta intend to draw eyes toward calls to action on the screen.

While saturated, the dark and light colors balance each other out against the mostly white background.

![LivedIn Color Palette](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/LivedInColorPalette.png)

### Typography
To match the soft curves of the house on the logo, the feature font also is a sans-serif with curved tips and few hard angles. The feature display font on the logo is [Comfortaa](https://fonts.google.com/specimen/Comfortaa), and the body font is  [Montserrat](https://fonts.google.com/specimen/Montserrat), which plays to the spirit of Comfortaa but is more legible in small text.

## Lessons Learned

Throughout the UI/UX process, I've learned to never make assumptions about what users want or don't want - let them test and find out. Also, do as many usability tests on different people as you possibly can. It can only help you make a better app.

### How to Run this App

#### Follow these steps exactly

1. `clone` this repository.
2. `cd` into the directory it creates.
3. Make a `database.json` file in the `api` directory.
4. Run `npm install` and wait for all dependencies to be installed.
5. Run `npm start` to verify that installation was successful.

### Entity Relationship Diagram

Below outlines the relationship between entities in the app:

![LivedIn ERD](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/UI_UXCapstoneERD-Updated.png "LivedIn Capstone ERD")
