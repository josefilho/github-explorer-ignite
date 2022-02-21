import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Unform repository",
  link: "https://github.com/unform/unform",
}

export function RepositoryList() {

  return (
    <section>
      <h1>Lista de repositórios</h1>

      <ul>        
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}