'use client'
import { describe } from 'node:test';
import React, { useState } from 'react'

function CreateArticle() {
    const [title,setTitle]=useState('');
    const [description,setDescrption]=useState('');
    const handleCretateArticle=()=>{
        fetch('http://localhost:3003/articles',{
            method:"POST",
            body:  JSON.stringify({
                "id": `${Math.floor(Math.random()*1000)}`,
                "title": title,
                "description": description
              }),
        })

    }

  return (
    <div className='bg-slate-200 py-24 flex flex-col px-8 '>
    <label>title</label>
    <input value={title} onChange={(e)=> setTitle(e.target.value)} type='text'></input>

    <label>description</label>
    <textarea value={description}  onChange={(e)=> setDescrption(e.target.value)}></textarea>

    <button onClick={handleCretateArticle}>
        submit
    </button>
    </div>
  )
}

export default CreateArticle