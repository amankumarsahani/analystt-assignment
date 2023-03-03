// import { useEffect } from 'react';
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBox from "./Components/NewsBox";
import jsondata from "./data.json";

function App() {
  // console.log(data.data);
  // const [data, setdata] = useState([]);
  // setdata(jsondata.data);
  // useEffect(()=>{
  //   console.log('hi');
  //   const url='https://inshorts.deta.dev/news?category=science';
  //   fetch(url).then((res)=>{return res.json;console.log(res)}).then((data)=>{console.log(data)}).catch((err)=>{return new Error(err)})
  // },[])
  return (
    <div className="App">
      <Navbar />
      <div class="row row-cols-1 row-cols-md-3 g-4 mx-5 my-1">

        {jsondata.data.map((item, index) => {
          return <NewsBox data={item}/>;
        })}
      </div>
      
    </div>
  );
}

export default App;
