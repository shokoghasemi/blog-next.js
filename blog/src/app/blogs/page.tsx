import React from "react";
import Container from "../components/Container";
import Article from "../components/Article";
import Link from "next/link";

export interface IGetArticles {
  id?: number;
  title: string;
  description: string;
}

async function Blogs(){

  const result = await fetch("http://localhost:3007/articles");
  const data = await result.json() as IGetArticles[];
console.log(data);
    return(
        <Container>
          <div className="grid grid-cols-4 gap-4 py-16">
            {data.map((item) => (
              <Link href={`/blogs/${item.id}`} key={item.id}>
                  <Article {...item}  />
              </Link>
         
            ))}
          </div>
        </Container>
    )
}

export default Blogs

