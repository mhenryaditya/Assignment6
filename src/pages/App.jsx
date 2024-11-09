import { useEffect, useState } from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";
import axios from "axios";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import env from "react-dotenv";

function App() {
  const input = useSelector(state => state)
  const [dataAPI, setDataAPI] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isOnline, setOnline] = useState(true)

  const fetchAPI = async () => {
    setLoading(true)
    setOnline(true)
    await axios.get(`https://www.omdbapi.com/?apikey=${env.API_KEY}&s=${input.data}`)
    .then(res => {
      setDataAPI(res.data.Search)
      setLoading(false)   
    }).catch(err => {
      Swal.fire('Error Network Connection!', "Make sure you've connected to the internet.", 'error') 
      setOnline(false)
    })
  }

  useEffect(() => {
    fetchAPI()
  }, [input.data])

  return (
    <div className="d-flex flex-column bg-dark pb-5" style={{minHeight: '100vh'}}>
      <Header title='MyMovie' />
      <div className={"d-flex flex-grow-1" + (isLoading ? ' justify-content-center mt-3' : '')}>
        {isLoading ?
          (isOnline ? <Loading /> : <Loading err={true} />) :
          <Movie data={dataAPI} />
        }
      </div>
    </div>
  );
}

export default App;
