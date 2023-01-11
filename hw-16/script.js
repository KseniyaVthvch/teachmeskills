const posts = [15, 23, 7, 3]


const getPosts = (id) => {
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(data => data.json())
      .then(data => console.log(data))
}
const getData = (data) => {
   data.forEach(id => {
      getPosts(id)
   });
}

getData(posts)

const postsTwo = [1, 16, 25, 13]

const GetPostsTwo = async (id) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await response.json()
   console.log(data)
}

const getDataTwo = (data) => {
   data.forEach(id => {
      GetPostsTwo(id)
   })
}
getDataTwo(postsTwo)




