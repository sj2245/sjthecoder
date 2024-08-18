export class User {
  [key: string]: any;
  public name = `sj2245`;
  public link;
  public bio;
  public blog;
  public company;
  public avatar;
  public login;
  public repos = [];
  public reposURL;
  public starred = 0;
  public starredURL;
  public followers = 0;
  public following = 0;
  constructor(userObj: Partial<User>) {
    this.bio = userObj.bio;
    this.name = userObj.name;
    this.blog = userObj.blog;
    this.login = userObj.login;
    this.link = userObj.html_url;
    this.starred = userObj.starred;
    this.company = userObj.company;
    this.avatar = userObj.avatar_url;
    this.repos = userObj.public_repos;
    this.reposURL = userObj.repos_url;
    this.followers = userObj.followers;
    this.following = userObj.following;
    this.starredURL = userObj.starred_url;
  }
}