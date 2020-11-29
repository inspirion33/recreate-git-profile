const openSource = {
    githubConvertedToken: "2f38608b5eb927f066c9ee6afb361691dd1680e5",
    githubUserName: "inspirion33",
};

// const fetch = require("node-fetch");
// var fs = require("fs");

const query_pr = {
    query: `
        query {
        user(login: "${openSource.githubUserName}") {
        name
        login
        bio
        bioHTML
        location
        avatarUrl
        websiteUrl
        url
        twitterUsername
        repositories(first: 20) {
        nodes {
            id
            name
            createdAt,
                url,
                description,
            updatedAt,
            stargazerCount,
                isFork,
            forkCount,
            primaryLanguage {
                id,
                name,
                color
            },
            languages(first:1){
                nodes{
                    name,
                    color
                }
            },
        }
        }
    }
    }`,
};


const baseUrl = "https://api.github.com/graphql";


const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + openSource.githubConvertedToken,
};

let detail;

fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query_pr),
  })
    .then((response) => response.json() )
    .then((data) => { 

        function timeDifference(current, previous) {
    
            var msPerMinute = 60 * 1000;
            var msPerHour = msPerMinute * 60;
            var msPerDay = msPerHour * 24;
            var msPerMonth = msPerDay * 30;
            var msPerYear = msPerDay * 365;
            
            var elapsed = current - previous;
            
            if (elapsed < msPerMinute) {
                 return Math.round(elapsed/1000) + ' seconds ago';   
            }
            
            else if (elapsed < msPerHour) {
                 return 'Updated ' + Math.round(elapsed/msPerMinute) + ' minutes ago';   
            }
            
            else if (elapsed < msPerDay ) {
                 return 'Updated ' + Math.round(elapsed/msPerHour ) + ' hours ago';   
            }
        
            else if (elapsed < msPerMonth) {
                 return 'Updated ' + Math.round(elapsed/msPerDay) + ' days ago';   
            }
            
            else if (elapsed < msPerYear) {
                 return 'Updated ' + Math.round(elapsed/msPerMonth) + ' months ago';   
            }
            
            else {
                 return 'Updated ' + Math.round(elapsed/msPerYear ) + ' years ago';   
            }
        }
        // TIME VARIABLES
        let current;
        let today = new Date();
        let date = today.getFullYear()+', '+(today.getMonth()+1)+', '+today.getDate();
        let time = today.getHours() + ", " + today.getMinutes() + ", " + today.getSeconds();
        let dateTime = date+' '+time;
        current = today;
        
        // TEST DATA - IRRELEVANT
        detail = data;
        
        // DOM ELEMENTS
        const fullName = document.getElementById('name');
        const additionalName = document.getElementById('adName');
        const bioInfo = document.getElementById('mybio')
        const profileImage = document.getElementById('profile-image');
        const websiteUrl = document.getElementById('website-url');
        const myLocation = document.getElementById('location');
        const myTwitter = document.getElementById('twitter');
        const allLinks = document.getElementById('lwt');
        const repoCount = document.getElementById('repo-count');
        const repoCount2 = document.getElementById('repo-count2');
        const listRepositories = document.getElementById('myrepositories');


        // PASSING VALUES INTO HTML
        fullName.innerHTML = detail.data.user.name;
        additionalName.innerText = detail.data.user.login;
        bioInfo.innerHTML = detail.data.user.bioHTML
        profileImage.innerHTML = `<img style="height:auto;" alt="" width="260" height="260" class="avatar avatar-u width-full border bg-white" src="${detail.data.user.avatarUrl}">`;
        myLocation.innerHTML = `<svg class="icon icon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg><span class="p-location">${detail.data.user.location}</span>`;
        websiteUrl.innerHTML = `<svg class="icon icon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg><a rel="nofollow me" class="gray-link" href="http://${detail.data.user.websiteUrl}">${detail.data.user.websiteUrl}</a>`;
        myTwitter.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" class="icon"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg><a rel="nofollow me" class="dgray-link " href="http://twitter.com/${detail.data.user.twitterUsername}">@${detail.data.user.twitterUsername}</a>`;

        repoCount.innerText = detail.data.user.repositories.nodes.length;
        repoCount2.innerText = detail.data.user.repositories.nodes.length;
        starCount = document.getElementById('star-num');

        let repoList = detail.data.user.repositories.nodes.map(function(repo, i){

            return `<div class="repo-item col-flex px-24">
            <div class="col-r75">
                <div class="repo-name-container">
                    <h3 class="repo-name"><a href="${repo.url}">${repo.name}</a></h3>
                </div>
                <!-- Description -->
                ${repo.description ? `
                <div class="repo-description ib mb-8 pr-24">
                    <p id="repo-desc">${repo.description}</p>
                </div>
                ` : ""}
                <div class="repo-detail-content mt-8">
                    <span class="">
                        <!-- Show color if language color exist -->
                        ${repo.languages.nodes.map(function(col){
                            return `<span class="repo-lang-color" style="background-color:${col.color};"></span>`;
                        })}
                        
                        <!-- Show Language name if Language exists -->
                        ${repo.languages.nodes.map(function(lang){
                            return `<span class="repo-prog-lang mr-16">${lang.name}</span>`;
                        })}
                    </span>
                    <!-- Star Link -->
                    ${repo.stargazerCount ? `
                    <a id="star-num" class="detail-link mr-16" href="#">
                        <svg aria-label="star" class="icon icon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>

                        ${repo.stargazerCount}
                      </a>
                    ` : ""}
                    
                    <!-- Fork Link -->
                    ${repo.forkCount ? `
                    <a class="detail-link mr-16" href="#">
                        <svg aria-label="fork" class="icon icon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                        ${repo.forkCount}
                    </a>
                    ` : ""}
                    <!-- Update link -->
                    <span>
                    ${timeDifference(current, new Date(`${repo.updatedAt}`))}
                    </span>
                </div>
            </div>

            <div class="col-r25">
                <div class="col-right">
                    <button class="btn star-btn">
                        <svg class="icon icon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                        Star
                    </button>
                </div>
            </div>
        </div>
            `;
        }).join("");
        listRepositories.innerHTML = repoList;
    } )
    .catch(err => console.log(err))


// fetch(baseUrl, {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(query_pr),
//     })
//     .then((response) => response.json() )
//     .then((data) => {
//         console.log(data);
//         return data;
//     } ).catch(err => console.log(err));