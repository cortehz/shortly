import React, { useRef, useState } from "react";
import axios from "axios";
import "./shortener.scss";
import Copy from "../Copy/Copy";

const ShortenerSection = ({
  data,
  setData,
  query,
  setQuery,
  idNumber,
  setIdNumber,
}) => {
  //text copying const [copySuccess, setCopySuccess] = useState('');
  // const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const api = axios.create({
    baseURL: "https://api.shrtco.de/v2/",
  });

  async function loadApi(e) {
    e.preventDefault();

    // setSearch(query);

    const expression =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

    const regex = new RegExp(expression);

    if (query === "" || !query.match(regex)) {
      alert("Link not available");
    } else {
      try {
        const response = await api.post(
          `https://api.shrtco.de/v2/shorten?url=${query}`,
          // set cors for axios header
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            },
          }
        );
        setData([
          ...data,
          {
            shortedLink: `${response.data.result.full_short_link}`,
            link: `${response.data.original_link}`,
            id: idNumber,
          },
        ]);
        setQuery("");
        window.localStorage.setItem("myArr", JSON.stringify(data));
        setIdNumber(idNumber + 1);
      } catch (e) {
        console.log(`Error: ${e}`);
      }

      // setSearch();
    }
  }

  window.localStorage.setItem("myArr", JSON.stringify(data));

  const newArr = JSON.parse(window.localStorage.getItem("myArr"));

  return (
    <div className="shortener-main">
      <div className="input-container">
        <div className="form-container">
          <form onSubmit={loadApi}>
            <input
              type="text"
              placeholder="http://example.com"
              value={query}
              onChange={(event) => setQuery(event.target.value.toLowerCase())}
            />

            <button type="submit" disabled={!!!query}>
              Shorten it!
            </button>
          </form>
        </div>
      </div>
      <ul className="link-list-container">
        {newArr.map((data) => (
          <li key={data.id}>
            <a href={data.link} className="shortlink" target="_blanck">
              {data.link}
            </a>
            <a
              href={data.shortedLink}
              ref={textAreaRef}
              className="clipped-link"
              target="_blanck"
            >
              {data.shortedLink}
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(data.shortedLink);
              }}
            >
              copy
            </button>
          </li>
        ))}
      </ul>

      <Copy />
    </div>
  );
};
export default ShortenerSection;
