Armwrestlingbook 2022

Small forum,blog,info web app about armwrestling.
Using Angular for front-end, Firebase as backend,css files for styling.

Short info and functionalities:

Components:

- Authentication: auth module - contains Login, Register and MyTopics components.
- Contests: contest module - contains AllTopics,Comments,Create,Details,Edit,Search and TopicTemplate components.

  - AllTopics - logic and implementation for loading all topics in app;
  - Create - logic,form and implementation for creation of new topic;
  - Edit - logic,form and implementation for editing a topic;
  - Details - shows details of a topic(likes,comments,additional info for the topic) and likes logic and implementation.
  - Comments - logic,form and implementation for additing and deleting of the comments;
  - Search - logic,search bar and implementation for the searching;
  - TopicTemplate - template of the topic;

- Core: core module - contains Footer ,Header components and guards.
- Home: home module - contains Home and TopicCard components.
- Pages: page module - contains PageNotFount component.
- Shared: shared module - contains date-transform pipe.
- Others:
  - interfaces - Topic interface,
  - services - authService and topicService

Visitors can see:

- latest topics on home page.
- all topics on all topics page.
- also can searching topics on search page.
- See additional info for the topic(with hovering on the picture).
- login/register theirselves.

Registered / Logged-in Users can also:

- Add topics and edit/delete their topics.
- See all comments; add/delete their comments below each post.
- Like topic and cancel their likes for the topic.
- See their own topics(my-topics).
- Search topics by title.
- Logout theirselves.
