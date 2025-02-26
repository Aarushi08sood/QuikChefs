# QuikChefs Project

Welcome to the QuikChefs project! This repository contains the backend and frontend code for the QuikChefs application. Below, you'll find instructions on how to set up and run the project locally.


## Prerequisites

Before running the project, ensure you have the following:

1. **Twilio Account**: 
   - Create a Twilio account and obtain your `accountSid` and `authToken` and replace these tokens with your credentials in index.js
   - Enable the WhatsApp sandbox and follow the instructions to link your WhatsApp number.

2. **MongoDB URI**: 
   - Replace `MONGO_URI` in `index.js` with your MongoDB connection string.

3. **Email Credentials**:
   - Add your email address and the 16-character App Password (not your Gmail password) in `index.js`.

4. **Uploads Folder**:
   - Ensure that the `server` folder contains a folder named `uploads`. (This folder was accidentally deleted during a Git update.)

---

## Setup Instructions

### Backend Setup

to run the backend
cd server
node index.js

and the backend port is 5002

###Fronted Setup 
the fronted is working on localhost:3000

### run the project
npm install
npm start

