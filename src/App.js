// import logo from './logo.svg';
import './App.css';
import Header from './header';
import RegistrationForm from './FormValidationExample';
import axios from "axios";
import React from "react";



//const baseURL = "https://jsonplaceholder.typicode.com/posts";
const baseURL = "https://staging-gil.gujarat.gov.in/HRMSMicroservice/api/v1/AccountMaster?LoginUsername=8888888888&Password=Abc%24%24123&Type=2&loggedinUserId=0&languageId=0&requestId=0";
function App() {
  const [post, setPost] = React.useState(null);

  const config = {
    headers:{
      "accept": " application/json",
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,observe"
    }
  };
  React.useEffect(() => {
    
    axios.get(baseURL,config).then((response) => {
      console.log("Success");
      //setPost(response.data);
    });
  }, []);


  if (!post) return "No post!"


   return (
     <div className="App">
       <Header/>
       <RegistrationForm/>
     
     </div>
   );
}

export default App;