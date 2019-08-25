# Answers to general questions
## About you
### Tell us about one of your commercial projects with Vue.js or AngularJS.
The last project I worked on was to rewrite dashboard in Pepper.
It was a team of a front-end developer (me) and other 5 back-end developers. We communicated on API structures and have completed many tasks on pair (FE + BE) in every sprint.
We used scrum and jira to grab new tasks defined by our project manager. I collaborated with him and the designer to make UI/UX decisions and changes.
The project was scaffolded by a senior front-end developer and was passed on to me to add features to it. Technologies in use were mainly Vue, Vuex, Vuetify.

<hr>

## General
### 2.1. What kind of front end projects do you enjoy working on? Why?
The same as questions number 3 and 4. I want to be involved the UI and work with pixels, also work on the functional parts (the web app).

### 2.2. Which are your favorite features of HTML5? How have you used them before?
Mostly input types and attributes. Semantic tags are also nice for developer to work with and better SEO.
In the past we were using jQuery or vanilla js custom implementations to cover form input validations to enforce input types, value lengths, required, regex for emails addresses, etc. definitely a big relief to use native html5 to achieve the same.

### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.
I had to Google it; so today I learnt that createElement preserves references and event handlers, as seen here https://stackoverflow.com/a/2947012/1325665

### 2.4. Compare two-way data binding vs one-way data flow.
in one way data binding we work on the same variable to read and apply changes to it directly, more in control as it's single source of truth.
in two way data binding we preserve immutability of the variable and create a new one on every single change. the data flows in one direction.

### 2.5. Why is asynchronous programming important in JavaScript?
basically in synchronous programming the code is blocking, meaning any network requests or I/O interaction would put the program to halt until the request gets resolved. this is not ideal when working with UI or a node.js server. we don't want to wait for every single action to queue up one after each other, we need them to run simultaneously for a smooth UI interaction or a fast server response.
async means running codes without blocking, that is important because we code run multiple network requests or be responsive to users' requests while the awaiting interactions get resolved and trigger the event loop to run once again on each completion.
