# LivedIn: A Rating App for Renters

### Creator
Leigh Rogers, Nashville Software School Front-End Capstone

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

## Mockups

![LoFi Wireframes](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/LivedInWireframes.jpg)

<!-- ![Capstone Mockup](https://github.com/LeighMRogers/rent-rate/blob/master/public/images/capstoneWireframe2.jpg) -->

## Ideation and Usability Testing

When conceptualizing the app, I wanted to ensure I was creating something that would have a clear purpose and serve a current need. I polled former colleagues at a relief organization and they validated the need for a travel app that builds itineraries with recurringly updated country advisories.

Later, I sent images of lo-fi mockups to them. Their main feedback: Searching for countries was within the context of building itineraries, so having a separate country search was redundant. Upon development, I made sure the calls to action were clear: create itineraries and add countries to them, not the other way around.

## Design system

Safe Trip uses [Reactstrap](https://reactstrap.github.io/) as its design foundations for styling forms, cards, input fields, and buttons. This app purposely does not incorporate too many design elements like icons, illustrations, modals, color palettes, or typefaces because they were not missed during user testing.

### Color palette
The main design color palette consists of Google-like look/feel from Reactstrap: their "Primary" color of blue, light gray, and white. All interactive elements have this color scheme in order to make user interaction as seamless and distractionless as possible.

![My Itineraries](https://github.com/LeighMRogers/safe-trip-capstone/blob/master/public/images/SafeTripMyItineraries.png)

![Itinerary Cards](https://github.com/LeighMRogers/safe-trip-capstone/blob/master/public/images/SafeTripItineraryCards.png)

There are some other colors to appear on the app:

A light blue navigation and airplane logo symbolize the blue skies of air travel.

![Safe Trip Landing Page](https://github.com/LeighMRogers/safe-trip-capstone/blob/master/public/images/SafeTripLanding.png)

On country details, country cards are colored based on the advisory score: less than a score of 3 is green, 3 or greater but less than 5 is yellow, and 5 is red. For each color I selected a lightly saturated version so viewing these stark colors is easier on the eye.

![Country Details Green](https://github.com/LeighMRogers/safe-trip-capstone/blob/master/public/images/SafeTripCountryDetailsGreen.png)

![Edit Form](https://github.com/LeighMRogers/safe-trip-capstone/blob/master/public/images/SafeTripEditFormYellow.png)

![Country Details Red](https://github.com/LeighMRogers/safe-trip-capstone/blob/master/public/images/SafeTripCountryDetailsRed.png)

### Typography
The feature font for the logo was [Racing Sans One](https://fonts.google.com/specimen/Racing+Sans+One), and the body font is a basic sans-serif. I used these particular fonts because

* Racing Sans One represented a font that was on the move, like a traveler, with its forward-angled italics.
* A sans-serif font is perfect for readability and legibility, especially smaller text.

### How to Run this App

#### Follow these steps exactly

1. `clone` this repository.
2. `cd` into the directory it creates.
3. Make a `database.json` file in the `api` directory.
4. Run `npm install` and wait for all dependencies to be installed.
5. Run `npm start` to verify that installation was successful.

### Entity Relationship Diagram

Below outlines the relationship between entities in the app:

![Safe Trip App ERD](https://github.com/LeighMRogers/safe-trip-capstone/blob/master/public/images/Front-EndCapstoneUpdated.png "Safe Trip App ERD")
