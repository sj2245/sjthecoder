export class Repository {
  [key: string]: any;
  public name;
  public link;
  public created;
  public owner;
  public topics;
  public license;
  public updated;
  public deploymentsURL;
  public language = ``;
  public homepage;
  public description;  
  constructor(repoObj: Partial<Repository>) {
    this.name = repoObj.name;
    this.owner = repoObj.owner;
    this.link = repoObj.html_url;
    this.topics = repoObj.topics;
    this.license = repoObj.license;
    this.language = repoObj.language;
    this.homepage = repoObj.homepage;
    this.created = repoObj.created_at;
    this.updated = repoObj.updated_at;
    this.description = repoObj.description;
    this.deploymentsURL = repoObj.deployments_url;
  }
}