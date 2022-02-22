import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Issues() {
  const { repoInfo } = useParams();
  useEffect(() => {});

  return <div>Repo Info {repoInfo}</div>;
}

export default Issues;
