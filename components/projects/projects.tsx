import { portfolioProjects } from "../../server";
import Project from "./project/project";

export default function Projects() {
  return <>
    <div className={`textbox`}>
      <section className={`projectsSection`}>
        <div className="textbox">
          <h2 className="subtitle">Projects</h2>
        </div>
        <div className={`projectsContainer`}>
          {portfolioProjects.map((prj, prjIndex) => {
            return (
              <Project project={prj} key={prjIndex} />
            )
          })}
        </div>
      </section>
    </div>
  </>
}