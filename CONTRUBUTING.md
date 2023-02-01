# CONTRUBUTING

### When you start working on a task you need:
- Create a new branch. Use only a-z0-9 and dash (`-`) characters:
  - for a feature -> `feature/t123-foo-bar`
  - for a bug -> `bug/t456-baz-quux`
- Move the ticket to `In Progress` in Trello

### When you work with commits you should respect commitlint convention:
- All commits must start with one of type: `feat`, `fix`, `chore`, `style`, `docs`, `test`, etc. We use default configuration. Read more here https://github.com/conventional-changelog/commitlint
- All commits must have a scope with task number: `t123`. Where 123 is number of the task in Trello
- Commit message should be short, clean and not very large, up to 50-70 characters. Please read this [guideline](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) to know more how you need to write your commit messages

### When a task is ready you need
- Open a new PR request and add @killmenot to reviewers
- PR's name should follow commitlint convention also because we use squash and merge
- Move the ticket to `For Review` in Trello

### Once a PR is approved you need
- Sync with latest changes in develop branch and merge it to your branch, resolve any possible conflicts and do needed checks:
  - `npm run lint`
  - Test the app in sections where were conflicts
- Use GitHub interface to merge PR to develop and delete the branch.**You must use Squash and merge.** 
- Move the ticket to `For Deploy` in Trello
