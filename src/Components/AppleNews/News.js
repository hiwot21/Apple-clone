import React, { useEffect, useState } from "react";


function News() {
  const [AppleNews, setAppleNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2021-07-14&to=2021-07-14&sortBy=popularity&pageSize=6&apiKey=7005727256aa4e97ba856e2b1187cdac"
    )
      
      .then((res) => res.json())
      .then((data) => setAppleNews(data.articles));
  }, []);
  console.log(AppleNews);
  return (
    <div>
      <div className="allnews-wraper">
        <div className="news">Apple News</div>
        <div className="container-fluid row ">
          {AppleNews.map((AppleNew, id) => {
            const newswraper = (
              <div className="col-sm-12 col-md-6">
                <div
                  key={id}
                  className="row justify-content-center text-center h-100"
                >
                  <div className="singelNews">

                  <div className="title">
                    <a href={AppleNew.url} target="_blank">
                      {AppleNew.title}
                    </a>
                    {/* </div> */}
                    <div className="description">{AppleNew.description}</div>
                    <div className="url">
                      <h6>{AppleNew.url}</h6>
                    </div>
                  </div>
                  {/* <div className="col-sm-12 col-md-6"> */}
                  <div className="urlToImage">
                    <a href={AppleNew.url} target="_blank">
                      <img src={AppleNew.urlToImage} />
                    </a>
                  </div>
                </div>
              </div>
               </div>
            );
            return newswraper;
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
