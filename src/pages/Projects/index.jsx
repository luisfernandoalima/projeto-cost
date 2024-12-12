import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Message } from "../../components/layouts/Message";
import { Container } from "../../components/layouts/Container";
import { LinkButton } from "../../components/layouts/LinkButton";
import { ProjectCard } from "../../components/Project/Card";
import { Loading } from "../../components/layouts/Loading";

import styles from "./Projects.module.css";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err));
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton text="Novo Projeto" to="/newproject" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados</p>
          )}
        {/* <p>Projetos...</p> */}
      </Container>
    </div>
  );
};
