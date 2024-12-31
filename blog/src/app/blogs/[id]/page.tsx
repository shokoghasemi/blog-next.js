import Container from '@/app/components/Container'
import React from 'react'
import { IGetArticles } from '../page';

interface IArticleProps{
 params:Promise<{id:string}>,
 searchParams:Promise<{}>,
}

async function Article(props:IArticleProps) {
  const {id}= await props.params;

    const result = await fetch(`http://localhost:3003/articles/${id}`);
    const data = (await result.json()) as IGetArticles;
    console.log(data)
  return (
    <Container>
        <div>
            <h2 className='text-2xl font-bold mb-4'>{data.title}</h2>
            <p> {data.description}</p>
        </div>

    </Container>
  )
}

export default Article