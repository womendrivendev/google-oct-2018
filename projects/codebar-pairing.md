# Improve codebar's pairing process through automation

## About

* Who is it for?

codebar: https://codebar.io/

codebar is a nonprofit organisation whose primary aim is to facilitate the growth of a more diverse tech community. We run regular free programming workshops and all day events for individuals underrepresented in the tech industry, to make coding more accessible to them and to expand their career opportunities. There are currently 20 codebar chapters around the world with 11,000 members, including students and mentors.

We've run over 900 workshops since starting in 2013. At our workshops we pair students and mentors one to one or two to one depending on the numbers of students and coaches attending each workshop and the level of difficulty of the projects being worked on.

* What problem is it trying to solve?

Our current process of organising our signed in student list (in preparation for pairing students with coaches) is almost entirely manual and quite time consuming, even small gains in automation would be beneficial.

To that end, see:
https://github.com/codebar/planner/pull/823

* What was the motivation behind?

Over the last year, the number of attendees at our weekly Wednesday central London workshops has been steadily increasing. This is an intentional shift, as we have opened up more places for each workshop, and it's great to be able to accommodate more individuals at each workshop, but it has made our current pairing process feel quite hectic.

When students signup for a codebar workshop they also indicate what language or type of project they would like to work on (beginning HTML, their own JS app, etc). Within the codebar planner app, the organisers can see, for each workshop, the names of the individuals signed-up to attend and what they have indicated they would like to work on. There is also a tick box next to their name, which we check off as individuals arrive. You can see an example in the PR referenced above (which shows entirely fake people and the fields for what they are working on are blank, but it gives you a general idea of what the sign-in page contains).

Then for actually grouping the students (for later pairing with coaches), we use a Google Doc that we have prepopulated with the names of the signed-up students and what they have indicated they would like to work on. We also create a blank field with a header of 'Signed-in Students'. Then as students arrive we welcome them, tick them off on the planner app, double check what they would like to work on, go to the Google Doc, find their name, edit what they are working on if need be, then copy and paste their info into the Signed-in Students area of the Doc. We also start rough grouping the students into pairs (so students working on say React will be grouped together, CSS together, etc). In general, we group students in pairs or keep them as singles, and this is determined by the ratio of students to coaches we have signed-in for the workshop.

## What we would like to accomplish

When we tick in a student on the codebar planner app their name and what they are working on will be posted via XHR request to a Google Sheet. Maybe the individual should appear at the bottom (or top) of the Sheet, in a 'Not Yet Sorted Category', so that the organisers can easily find the newly added person and update what they are working on if need be.

Also, to have the counter numbers for signed-in students and coaches displayed on the Google Sheet and updating as students and coaches are ticked as being signed-in on the planner app. (Note: Coach names do not need to be added to the Google Sheet.) We should have a field on the Google Sheet where additional coaches from the hosting company (just a number, not names) can be added, and a total number given for coaches present. Then display how many pairs of students we need to make (and how many we can leave as singles) given the number of coaches and students currently signed-in.

We could consider having fields listing basic areas of study: HTML, CSS, JS, Ruby, Python, etc. We also need an 'Other' field (for the students who would like to work on an Android app, Kotlin, or C, etc).

As a stretch goal it would be great to have some sort of weighting assigned to the different languages/technologies being studied and to write a (rough)
sorting algorithm for the students dependant on what they are planning to study.

Also, graphs of what technologies students are studying. :bar_chart:

## Links

The codebar planner app that we use for managing workshops and signing in students and coaches can be found here: https://github.com/codebar/planner

## Acknowledgement

It is likely that Google Sheets will be quite helpful in making the codebar pairing process smoother and easier.

Here is an interesting talk on Google Sheets delivered recently at Google Cloud Next London :cloud: : https://cloud.withgoogle.com/next18/london/sessions/session/243742

Also, for more info on Sheets:
https://developers.google.com/sheets/

## Contributors

Last, but not least, names of the proud contributors please!

| Name | GitHub | Twitter | Medium | Other |
| :--- | :--- | :--- | :--- | :--- |
| Kara de la Marck | @MarckK | @KaraMarck | @karadelamarck | --- |
