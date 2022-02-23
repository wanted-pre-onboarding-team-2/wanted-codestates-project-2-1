const verifyRepoCount = savedRepos => {
  if (savedRepos.length >= 4) {
    alert("4개까지 저장할 수 있습니다.");
    return false;
  }
  return true;
};

const verifyDuplicateRepo = (savedRepos, willAddRepo) => {
  const existRepo = savedRepos.find(repoName => repoName === willAddRepo);
  if (existRepo) {
    alert("이미 저장한 레포입니다.");
    return false;
  }
  return true;
};

export const verifySaveRepo = (savedRepos, willAddRepo) => {
  const isNotOverflowStore = verifyRepoCount(savedRepos);
  if (!isNotOverflowStore) return false;

  return verifyDuplicateRepo(savedRepos, willAddRepo);
};
