import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBox from "./Components/NewsBox";
import { Spinner } from "./Components/Spinner";

function App() {
  const api_Key = process.env.REACT_APP_API_KEY;
  const [data, setdata] = useState([]);
  const [dataType, setDataType] = useState("home");
  
  const handleClick = (event) => {
    const category = event.target.innerHTML;
    console.log(category);
    setDataType(category.toLowerCase());
  };

  const url = `https://newsapi.org/v2/top-headlines?${
    dataType === "home" ? "country=us" : `category=${dataType}&language=en`
  }&apiKey=${api_Key}&page=1&pageSize=100`;

  const fetchNews = async (url) => {
    console.log(url);
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result.articles);
        setdata(result["articles"]);
      })
      .catch((err) => {
        return new Error(err);
      });
  };


  
  useEffect(() => {
    fetchNews(url);
  }, [url]);

  return (
    <div className="App container">
      <Navbar handleClick={handleClick} />
      <div
        className=" row row-cols-1 row-cols-md-3 g-4 d-flex align-items-center  justify-content-center "
        style={{
          marginTop: "4rem",
          height: "100vh",
        }}
      >
        {data.length === 0 ? (
          <Spinner />
        ) : (
          data.map((item, index) => {
            return <NewsBox key={index} data={item} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
