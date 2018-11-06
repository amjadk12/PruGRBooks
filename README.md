## Deployment steps to heroku

1. Setup an account with heroku
2. Install the hero CLI
3. Login heroku
4. Create an app using
   > heroku create prubook
5. This will create an app - https://prubook.herokuapp.com/ | https://git.heroku.com/prubook.git
6. Set to your app
   > heroku git:remote -a prubook
7. To push your changes to heroku
   > git push herku master
8. To set the AppKey to heroku
   > heroku config:set REACT_APP_API_KEY=<ApiKey>

## Deployment steps to your local environment

1. Clone the repo
   > git clone https://github.com/amjadk12/PruGRBooks.git
2. Install the npm dependencies - (Pre-requesite - all development dependencies should be in place)
   > npm install
3. Run application
   > npm start
4. Run the test for testing
   > npm test
