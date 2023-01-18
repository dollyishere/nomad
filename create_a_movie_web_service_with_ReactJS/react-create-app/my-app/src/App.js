import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const re
  }
  useEffect(() => {
    fetch(
      ``
    )
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies)
      setLoading(false)
    })
  }, [])
  return(
    <div>
      {loading ?
      <h1>Loading...</h1>:
      null
      }
    </div>
  )
}

export default App;