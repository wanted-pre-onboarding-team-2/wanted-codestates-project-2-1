import React from "react";
import { useParams } from "react-router-dom";

function Issues() {
  const { repoInfo } = useParams();
  return <div>Repo Owner {repoInfo}</div>;
}

export default Issues;
