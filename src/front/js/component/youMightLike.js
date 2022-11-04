import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Card from "./subComponent/Card";

const YouMightLike = () => {
  const { store, actions } = useContext(Context);

  const suggestions = 4;
  const [row, setRow] = useState(1);
  const randomSuggestions = () => {
    setRow(Math.floor(Math.random() * store.gallery.length) + 1);
  };
/*   useEffect(() => {
    randomSuggestions();
  }, []); */

  const indexOfTheLastPost = row * suggestions;
  const indexOfTheFirstPost = indexOfTheLastPost - suggestions;
  const currentSuggesstions = store.gallery.slice(
    indexOfTheFirstPost,
    indexOfTheLastPost
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center my-5">
            <h1>Te podria gustar</h1>
          </div>
        </div>

        <div className="row">
          {!!currentSuggesstions &&
            currentSuggesstions.map((post, index) => {
              return <Card key={index} post={post} cardClasses='col-md-3 py-2'/>;
            })}
        </div>
      </div>
    </>
  );
};

export default YouMightLike;
