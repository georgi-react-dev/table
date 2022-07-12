
export {};
export interface IComment {
    id: number,
    name: string,
    body: string,
    email: string
}

export interface IFilterItem {
    _id:number,
    name:string
}

export interface IUser {
    name: string,
    username: string,
    email: string,
    company: {
      name:string
    }
}

export interface IPost {
    title: string,
    body: string,
    author: string,
}