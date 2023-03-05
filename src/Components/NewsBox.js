import React from "react";

function NewsBox(props) {
  const { data } = props;
  // console.log(`${data.content}...`);
  const currDate=new Date().toISOString();
  return (
    <div>
      <div className="col">
        <div className="card h-100" style={{ height: "100%" }}>
          <img
            src={data["urlToImage"]!==null?data["urlToImage"]:"https://source.unsplash.com/random"}
            className="card-img-top"
            style={{ height: "35vh" }}
            alt={data["urlToImage"]!==null?data["urlToImage"]:"https://source.unsplash.com/random"}
          />
          <span className="position-absolute top-0  end-0  translate-middle badge  bg-success">
            {data["source"]["name"]!==null?data["source"]["name"]:"Unknown"}
          </span>
          <div className="card-body">
            <h5 className="card-title">{data["title"]!==null?`${data["title"].slice(0,75)}...`:"News Not Found"}</h5>
            <p className="card-text">
              {`${
                data.content!== null
                  ? data.content.slice(0, 400)
                  : "Unable to Load Content...Please Click on read more"
              }`}
              {/* {`${data['content'].slice(0,400)}...`} */}
              {/* <a
                href={
                  data.url !== null
                    ? data['url']
                    : "https://www.google.co.in/"
                }
                className="readColor"
              >
                read more
              </a> */}
            </p>
            <div className="d-flex justify-content-end">
              <a
                href={
                  data["url"] !== null
                    ? data["url"]
                    : "https://www.google.co.in/"
                }
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6741/6741091.png"
                  style={{ height: "35px" }}
                  alt="read full news"
                />
              </a>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <div className="d-flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7069/7069148.png"
                className="img-fluid "
                style={{ height: "25px" }}
                alt="author"
              />
              <small className="text-muted mx-2">{data["author"]!==null?data["author"]:'Unknown'}</small>
            </div>
            <div className="d-flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
                className="img-fluid mx-2"
                style={{ height: "25px" }}
                alt="author"
              />
              <small className="text-muted">{`${new Date(
                data["publishedAt"]!==null?data["publishedAt"]:currDate
              ).toDateString()}`}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBox;
