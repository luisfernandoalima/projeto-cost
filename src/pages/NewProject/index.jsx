import { useNavigate } from "react-router-dom";

import { ProjectForm } from "../../components/Project/Form";

import styles from "./NewProject.module.css";

export const NewProject = () => {
  const navigate = useNavigate();

  const createProject = (project) => {
    // initialize cost and services

    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project)
    })
      .then((response) => response.json())
      .then((data) =>
        navigate("/project", { message: "Projeto criado com sucesso!" })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto" handleSubmit={createProject} />
    </div>
  );
};
