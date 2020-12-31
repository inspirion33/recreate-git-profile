// const keyAccess = {
//     githubConvertedToken: "Your Github Token Here.",
//     githubUserName: "Your Github Username Here.",
// }

const profileInfo = {
    query: `
        query {
        user(login: "inspirion33") {
        name
        bio
        bioHTML
        avatarUrl
        url
        twitterUsername
        repositories(last: 20) {
        nodes {
            id
            name
            createdAt,
                url,
                description,
            updatedAt,
                isFork,
            forkCount
            languages(first:10){
            nodes{
                name
            }
            }
        }
        }
    }
    }`,
};