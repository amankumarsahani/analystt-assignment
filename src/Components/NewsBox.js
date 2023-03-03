import React from "react";

function NewsBox(props) {
  console.log(props);
  const { data } = props;
  return (
    <div>
      <div className="col">
        <div className="card h-100" style={{ height: "100%" }}>
          <img
            src={data.imageUrl}
            className="card-img-top"
            style={{ height: "35vh" }}
            alt={data.imageUrl}
          />
          {/* <span class="position-absolute top-0  end-0  translate-middle badge rounded-pill bg-success">
            {data.date}
          </span> */}
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">
              {`${data.content.slice(0, 400)}...`}
              <a
                href={
                  data.url !== null
                    ? data.url
                    : "https://www.google.co.in/"
                }
                className="readColor"
              >
                read more
              </a>
            </p>
            <div className="d-flex justify-content-end">
                
              <a href={data.readMoreUrl !== null
                    ? data.readMoreUrl
                    : "https://www.google.co.in/"}><img src="https://cdn-icons-png.flaticon.com/512/6741/6741091.png" style={{ height: "35px" }} alt="read full news"/></a>
            
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
              <small className="text-muted mx-2">{data.author}</small>
            </div>
            <div className="d-flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
                className="img-fluid mx-2"
                style={{ height: "25px" }}
                alt="author"
              />
              <small className="text-muted">{data.date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBox;
