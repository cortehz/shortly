import React from "react";
import axios from "axios";

const ShortenerSection = ({
  data,
  setData,
  query,
  setQuery,
  idNumber,
  setIdNumber,
}) => {
  const api = axios.create({
    baseURL: "https://rel.ink/api/links/",
  });
  async function loadApi(e) {
    e.preventDefault();

    // setSearch(query);

    const expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

    const regex = new RegExp(expression);

    if (query === "" || !query.match(regex)) {
      alert("Link not available");
    } else {
      const response = await api.post(`https://rel.ink/api/links/`, {
        url: query,
      });

      setData([
        ...data,
        {
          shortedLink: `https://rel.ink/${response.data.hashid}`,
          link: `${response.data.url}`,
          id: idNumber,
        },
      ]);

      window.localStorage.setItem("myArr", JSON.stringify(data));
      setIdNumber(idNumber + 1);

      // setSearch();
    }
  }

  const newArr = JSON.parse(window.localStorage.getItem("myArr"));

  return (
    <div>
      <div className="input-container">
        <form onSubmit={loadApi}>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Shorten it!</button>
        </form>
      </div>

      <ul>
        {newArr.map((data) => (
          <li key={data.id}>
            <a href={data.shortedLink}>{data.shortedLink}</a> <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShortenerSection;
