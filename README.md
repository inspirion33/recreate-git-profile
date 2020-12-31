This project was built with HTML, CSS JavaScript and GraphQL API.
<br><br>
<strong>Project Purpose</strong>
The intent of this project is to display the first 20 respository on your Github profile which was achieved with the code right in this repository :D.
First, I created the code structure with HTML, styled the page with css, and added demo content. After this I needed have to my real respository data appear on the webpage without having to manually input it so I created a Github API to fetch all my data from my github account and integrated it into the code.
<br><br>
<strong>Requirements</strong>
<br>
To fetch data from your Git repository, you need two things which are;<br>
1. Your Github Token access. <a href="https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token">Tip to create your personal token</a><br>
2. Github username.<br>
<br><br>
This would authenticate your fetch API to access to your github information.
<br><br>
GraphQL is a Query Language just SQL. I used GraphQL to fetch data from my Github. I also utilized the GraphQL Explorer to test my API and be sure I was getting the right data :D. <a href="https://docs.github.com/en/free-pro-team@latest/graphql/overview/explorer" target="_blank">Link to Github Explorer</a>
<br><br>

<strong>HOW TO USE THIS CODE</strong>
<br>
Everything is set and nothing much to change.
<br><br>
* Head over to ./app/app.js and update the token and username variable to yours.
<br><br>
const openSource = {
<br>
    githubConvertedToken: "YOUR ACCESS TOKEN HERE",
<br>
    githubUserName: "YOUR USER NAME HERE",
<br>
};