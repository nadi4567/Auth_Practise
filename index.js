import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
console.log("Username:", process.env.USERNAME);
console.log("Password:", process.env.PASSWORD);

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername ="Nadi";
const yourPassword = process.env.PASSWORD;
const yourAPIKey = process.env.API_KEY;
const yourBearerToken = process.env.BEARER_TOKEN;


app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const response = await axios.get(`${API_URL}random`);
    console.log("API response is "+ response);
    const result = JSON.stringify(response.data);
    console.log(result)
    res.render("index.ejs",{content:result});
  }catch(error){
    console.log("failed to request api: "+error.message);
    res.render("index.ejs",{error:error.message})
  }
});

app.get("/basicAuth", async (req, res) => {
  
  try{
    const response = await axios.get(`${API_URL}all?page=2`,{
      auth:{
        username:yourUsername ,
        password:yourPassword,
      }
    });
    const result = JSON.stringify(response.data);
    console.log("rsponse type is "+ typeof(result))

    console.log("basicauth result is "+ result);
    res.render("index.ejs",{content:result});
  }catch(err){
     console.log("Failed to fetch data: "+ err);
     res.render("index.ejs",{error:err.message})
  }
});

app.get("/apiKey", async (req, res) => {
  try{
    const apiResponse = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`);
    const result = JSON.stringify(apiResponse.data);
    console.log("rsponse type is "+ typeof(result))

    res.render("index.ejs",{content:result});
  }catch(err){
     console.log("Failed to fetch : "+err);
     res.render("index.ejs",{error:err.message})
  }
  

  
});

app.get("/bearerToken", async(req, res) => {
  
   try{
    const response = await axios.get(`${API_URL}secrets/42`,{
      headers:{
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    const result = JSON.stringify(response.data);
    console.log("rsponse type is "+ typeof(result))

    res.render("index.ejs",{content:result})
   }catch(err){
     console.log("Failed to fetch data: "+ err.message);
     res.render("index.ejs",{error:err.message})
   }
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
