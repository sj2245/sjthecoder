import { portfolioProjects } from "../../server";

export default function Projects() {
  return <>
    <div className={`textbox`}>
      <section className={`projectsSection`}>
        <div className="textbox">
          <h2 className="subtitle">Projects</h2>
        </div>
        <div className={`projectsContainer`}>
          {portfolioProjects.map((prj, prjIndex) => {
            return <>
              <div key={prjIndex} className="project">
                <a href={prj.link} className="link nx-text-primary-600" target={`_blank`}>
                  <h3 className={`projTitle`}>
                    {prj.title}
                  </h3>
                  <img className="ProjImg" src={prj.image} />
                </a>
                <div className="projDes">
                  <p>{prj.text}</p>
                </div>
              </div>
            </>
          })}
        </div>
      </section>
    </div>
  </>
}