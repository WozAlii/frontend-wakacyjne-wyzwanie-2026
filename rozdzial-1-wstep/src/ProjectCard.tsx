import { useState } from "react";
import Button from "./Button";
interface Technology {
  id: string;
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
}

function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  const [stage, setStage] = useState("W trakcie");

  function handleCLick() {
    setStage(stage == "W trakcie" ? "Ukończony" : "W trakcie");
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      {technologies.map((technology) => (
        <p key={technology.id}>{technology.name}</p>
      ))}

      <p>Status: {stage}</p>

      <Button colorScheme="orange" size="md" onClick={handleCLick}>
        zmień stan projektu
      </Button>
    </div>
  );
}

export default ProjectCard;
