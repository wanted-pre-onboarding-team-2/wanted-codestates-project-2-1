import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

function RepoSave({ savedRepos, setSavedRepos }) {
  const handleDeleteRepo = name => {
    const newRepo = savedRepos.filter(item => item !== name);
    setSavedRepos(newRepo);
  };

  return (
    <S.RepoSave>
      <ul>
        {savedRepos.map((val, idx) => {
          const [owner, repo] = val.split("/");
          return (
            <li key={idx}>
              <Link to={`/issues/${owner}-${repo}`}>{val}</Link>
              <button onClick={() => handleDeleteRepo(val)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </S.RepoSave>
  );
}

export default RepoSave;
