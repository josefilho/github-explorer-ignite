import { useEffect, useState } from "react/cjs/react.production.min";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: "unform",
  description: "Unform repository",
  link: "https://github.com/unform/unform",
}

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
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}