# <Creating Weather Dashboard: Week-6-Challenge (Server-side APIs)>

## Description

The idea behind this project was to create a work day scheduler so that users can add events to specific hour time blocks to help them plan out their day between business hours (9AM-5PM). It allows users to dynamically update and add to their schedule through the use of JavaScript. Each time block is color coordinated in relation to the current time of day (past hours are denoted with a gray color, the present hour is denoted by a red color, and future hours are denoted with a green color). This gives a nice visual representation to each user of where they are within their work day. It allows each user to save events within each time block to local storage which allows their events to persist on page reload. This way, they will not loose their scheduled events if they leave the work day scheduler page. Through building this application I learned the importance of structuring your html in an organized way so that implementing your dynamic elements with JavaScript or JQuery can be made much easier. I also learned by application of conditionals, iteration, and event listeners how to save data to local storage, and then how to re-append that data to the page when it is reloaded. Something new to me which was implemented on this application was the use of adding CDNs (both DayJS and Moment) to the page so that certain classes persist based on the current time.

## Live URL

https://rmessett15.github.io/Work-Day-Scheduler/

## Screenshot

![Screenshot-Weekly-Challenge-5](https://user-images.githubusercontent.com/120127903/224795456-a4266236-8b3b-46ab-a1af-8b655b0a2912.png)

## Technologies Used

This project utilizes HTML, CSS, JavaScript, Materialize........ Fontawesome.com, Google Fonts, DayJS CDN, and Moment CDN

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/Weather-Dashboard.git

2. Open in VS Code. If you do not have VS code you must install it.

## Credits

Worked with a a variety of students to complete this challenge (ie. Brian Hamlin & Chris McNamara), as well as a friend within the developer community (Brian Dillman). My tutoring session with Phillip Loy helped finalize re-appending my locally stored data back to the page.

## Features

Features of this page include the users ability to save added events to local storage and the application re-appending the saved data to the application on page reload. It also utilizes two different CDN's to display the current time which were utilized and then passed through an iteration and conditional statement giving rise to the color coordinated time blocks the user sees.

## How to Contribute

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.