import getData from "./get-data"

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments"

interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

getData<IComment[]>(COMMENTS_URL)
  .then((data) => {
    data.forEach(item => {
      console.log(`ID: ${item.id}, Email: ${item.email}`)
    })
  })
