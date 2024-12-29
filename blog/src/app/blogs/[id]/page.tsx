import Container from '@/app/components/Container'
import React from 'react'

async function Article() {
    const result = await fetch("http://localhost:3007/articles/1");
    const data = await result.json();
    console.log(data)
  return (
    <Container>
        <div>
            <h2 className='text-2xl font-bold mb-4'>title</h2>
            <p> description description description description description description</p>
        </div>

    </Container>
  )
}

export default Article