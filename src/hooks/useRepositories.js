import { useMemo } from "react";

export const useSortedRepositories = (repositories, selectedSort) => {
  const sortedRepositories = useMemo(getSortedRepositories, [
    selectedSort,
    repositories,
  ]);

  function getSortedRepositories() {
    if (selectedSort) {
      return [...repositories].sort((a, b) => {
        return a[selectedSort].localeCompare(b[selectedSort]);
      });
    }
    return repositories;
  }

  return sortedRepositories
}

export const useRepositories = (repositories, selectedSort, searchInput) => {
  const sortedRepositories = useSortedRepositories(repositories, selectedSort)
  
  const sortedAndSearchedRepositories = useMemo(() => {
    return sortedRepositories.filter((repository) =>
      repository.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [sortedRepositories, searchInput]);

  return sortedAndSearchedRepositories
}