import { getGithubData } from '../../../server';
import { useContext, useEffect, useState, useRef } from 'react';

export default function GithubProjects({username}) {
  let initialLoad = useRef(false);
  if (!username) username = `sj2245`;
  let [loaded, setLoaded] = useState(false);
  let [githubUser, setGithubUser] = useState<any>(null);
  let [githubProjects, setGithubProjects] = useState<any>([]);

  const getGithubDataFromServer = async (username) => {
    let { user, repositories } = await getGithubData(username);

    console.log(`From Component`, {
      user,
      repositories,
    })

    setGithubUser(user);
    setGithubProjects(repositories);
  }

  // When the component first loads in
  useEffect(() => {
    let firstLoad = !initialLoad.current;
    if (firstLoad) {
      // Logic for when component first loads
      getGithubDataFromServer(username);
      setLoaded(true);
    }
  }, [])

  return <>
    <div className={`githubProjects textbox`}>
      <h1>{username}'s {githubProjects.length} Github Projects</h1>
      <div className={`githubProjectsContainer`}>
        {githubProjects.length > 0 ? githubProjects.map((pr, prIndex) => {
          return (
            <div key={prIndex} className={`githubProject`}>
              {pr.name} - Created at: {new Date(pr.created).toLocaleString(`en-US`)}
            </div>
          )
        }) : <>No Projects</>}
      </div>
    </div>
  </>
}