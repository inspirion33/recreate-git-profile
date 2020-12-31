This project was built with HTML, CSS JavaScript and GraphQL API.

Project Purpose
The intent of this project is to display the first 20 respository on your Github profile which was achieved with the code right in this repository :D.
First, I created the code structure with HTML, styled the page with css, and added demo content. After this I needed have to my real respository data appear on the webpage without having to manually input it so I created a Github API to fetch all my data from my github account and integrated it into the code.

Requirements
To fetch data from your Git repository, you need two things which are;
1. Your Github Token access. <a href="https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token">Tip to create your personal token</a>
2. Github username.

This would authenticate your fetch API to access to your github information.


GraphQL is a Query Language just SQL. I used GraphQL to fetch data from my Github. I also utilized the GraphQL Explorer to test my API and be sure I was getting the right data :D. <a href="https://docs.github.com/en/free-pro-team@latest/graphql/overview/explorer" target="_blank">Link to Github Explorer</a>



<strong>HOW TO USE THIS CODE</strong>

Everything is set and nothing much to change.

* Head over to ./app/app.js and update the token and username variable to yours.

const openSource = {
    githubConvertedToken: "YOUR ACCESS TOKEN HERE",
    githubUserName: "YOUR USER NAME HERE",
};