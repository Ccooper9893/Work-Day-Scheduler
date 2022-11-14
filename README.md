# 05 Third-Party APIs: Work Day Scheduler

## Description
Used mock-up code to add functionality to the calender via Javascript, day.js, and JQuery. Added code to update the colors of the hour containers based off current time. Added save button functionality that will save your notes and save via localStorage. localStorage will fill in previously saved text to the containers when the website is reloaded. What I have learned during this challenge is how to incorporate day.js and take advantage of the usefullness of JQuery.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

## Screenshot
- This image shows the localStorage. The containers are gray because it is in the past. Green will be future and Red will be current time
<img src="Images\WorkdayScreenshot.png" alt="Image of the work day scheduler website">

## Credit
- JQuery Web Api
- day.js Web Api
- Starter code from https://github.com/coding-boot-camp/crispy-octo-meme

## Usage
- Type in your schedule from 9am to 5pm. Click the save button to save your schedule. Grey boxes indicate past hours. Red indicates current hour. Green indicates future hours.
