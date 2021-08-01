This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.messa

## Usage

With this app users can create channels and message one another

To start the application visit https://messaging-app-71ede.web.app/ . Here you will see this page where you can log in with Google OAuth.

![Settings Window](https://github.com/drewhollis/messaging-app/blob/main/Messaging%20App%20Screenshots/Sign%20In.png)

After signing in you will land on this view. The application dynamically pulls in your Google profile photo in the upper left hand corner

![Settings Window](https://github.com/drewhollis/messaging-app/blob/main/Messaging%20App%20Screenshots/Main%20View.png)

Clicking "Add Channel" allows users to create new channels. State within new channels is handled with Redux

![Settings Window](https://github.com/drewhollis/messaging-app/blob/main/Messaging%20App%20Screenshots/Create%20Channel.png)

Click on the newly created channel to enter and share messages. The name of the channel is dynamically pulled into the messaging bar at the bottom of the screen

![Settings Window](https://github.com/drewhollis/messaging-app/blob/main/Messaging%20App%20Screenshots/Test%20Message.png)

New messages are pushed into a Firebase NoSQL database 

![Settings Window](https://github.com/drewhollis/messaging-app/blob/main/Messaging%20App%20Screenshots/Firebase%201.png)

![Settings Window](https://github.com/drewhollis/messaging-app/blob/main/Messaging%20App%20Screenshots/Firebase%202.png)
