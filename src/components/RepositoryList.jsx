import { useEffect, useState } from "react/cjs/react.production.min";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/josefilho/repos')
    .then( response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section>
      <h1>Lista de repositórios</h1>

      <ul>        
        {repositories.map(repository => 
          <RepositoryItem key={repository.name} repository={repository} />
        )}
      </ul>
    </section>
  );
}