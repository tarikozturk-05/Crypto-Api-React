import React, { memo } from "react";

const Main = ({ data }) => {
  return (
    <div className="d-flex justify-content-center align-items-center  flex-wrap gap-3 " style={{
    //  backgroundColor:"rgb(89, 176, 226)"
    }} >
      {data.map((data) => {
        return (
          <div className="bg-info d-flex justify-content-center align-items-center gap-2 flex-wrap card my-3 "
            key={data.id}
            style={{
              display: "flex",
              flexDirection: "column",
              // border: "1px solid red",
              width: "250px",
              height: "350px",
              backgroundColor:"aqua",
              borderRadius:"10px",
              fontSize:"1rem"
            }}
          >
            <div  >
              <img
                src={data.image}
                width="70px"
                height="70px"
                alt={data.symbol}
              />
            </div>

            <div className="title">
              <h1>{data.name}</h1>$ {data.current_price}
            
              <span
              
                style={{
                  display: "block",
                }}
              >
                {data?.price_change_percentage_24h.toFixed(2)}%
              </span>
              <p
                style={{
                  textAlign: "center",
                  color:"red"
                }}
              >
                Market Cap Rs <br />
                <span>
                  {data.market_cap
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  .00
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Main);