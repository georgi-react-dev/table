

interface IComment {
    id: number,
    name: string,
    body: string,
    email: string
}

interface IFilterItem {
    _id:number,
    name:string
}

interface IUser {
    name: string,
    username: string,
    email: string,
    company: {
      name:string
    }
}

interface IPost {
    title: string,
    body: string,
    author: string,
}