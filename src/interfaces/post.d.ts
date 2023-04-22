   export interface IPost {
    id: string;
    name: string;
    category: string,
    Status: "published" | "draft" | "rejected";
  }
  
  export interface ICategory {
    id: string;
    name: string;
    posts: string;
  }   