import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Detail(){
  const {id} = useParams()
  const getMovie = async() => {
    const json = await fetch(``
    ).json()
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <h1>Detail</h1>
  )
}

export default Detail