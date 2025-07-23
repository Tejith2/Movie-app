import Moviecard from "../assets/components/moviecard";
import { searchMovies,getPopularMovies } from "../services/api";
import "../css/Home.css"
import { useState,useEffect} from "react";
function Home(){
    const [searchquery,setsearchquery]=useState("")
   const [movies,setMovies]=useState([])
   const [error,setError]=useState(null)
   const [loading,setLoading]=useState(true)
   useEffect(()=>{
    const loadPopularMovies=async()=>{
        try{
            const popularMovies=await getPopularMovies();
            setMovies(popularMovies)
        }
        catch(err){
             setError("Failed to load the Movie")
        }
        finally{
            setLoading(false)
        }
   
    }
    loadPopularMovies();
   },[])
    const handlesearch=async(e)=>{
    e.preventDefault();
    if(!searchquery.trim()) return
    if(loading) return
    setLoading(true)
    try {
        const movieresults=await searchMovies(searchquery)
        setMovies(movieresults)
        setError(null)
        
    } catch (error) {
        setError("Failed to Search Movie")
    }
    finally{
        setLoading(false)
    }
    }
return (
<div className="home">
    <form onSubmit={handlesearch} className="search-form">
        <input type="text" placeholder="Search..." className="search-input" value={searchquery}
        onChange={(e)=>setsearchquery(e.target.value)}/>
        <button type="submit" className="search-button">Search</button>
    </form>
<div className="movies-grid">
  { movies.map((movie)=>(
    (< Moviecard movie={movie} key={movie.id}/>
  )))}
</div>
</div>
);
}
export default Home