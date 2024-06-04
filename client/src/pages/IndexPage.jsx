import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const IndexPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);
  return (
    <div>
      This is index page


    </div>
  )
}

export default IndexPage