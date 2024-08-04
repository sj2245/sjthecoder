export default function Project({project}) {
  return <>
    <div className="project gradientBorder">
      <a href={project.link} className="link nx-text-primary-600" target={`_blank`}>
        <h3 className={`projTitle`}>
          {project.title}
        </h3>
        <img alt={`Project Image`} className="projImg" src={project.image} />
      </a>
      <div className="projDes">
        <p>{project.text}</p>
      </div>
    </div>
  </>
}