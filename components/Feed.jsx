'use client'

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick}) => {
    return (
      <div className="mt-16 prompt_layout">
        {data?.map((post)=>(
          <PromptCard 
            key={post._id} 
            post={post} 
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {

  }

  useEffect(()=>{
    const fetchPosts = async () =>{
      try{
        const res = await fetch("/api/prompt")
        const data = await res.json()
        setPosts(data)
        
      }catch(err){
        console.log(err)
      }
    }
    fetchPosts()
  },[])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text"
          value={searchText}
          placeholder="Search for a tag or a username"
          onChange={handleSearchChange} 
          className="search_input peer"
        />
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick={()=>{}}

      />

    </section>
  )
}

export default Feed
