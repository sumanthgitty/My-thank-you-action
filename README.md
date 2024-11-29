### WelcomePR
This GitHub Action automatically posts a thank-you comment on newly opened pull requests on your repository!.

#### Modules Used
- @actions/core: Handles inputs, outputs, and error management in the GitHub Actions environment.
- @actions/github: A wrapper around GitHub’s API using Octokit to interact with repository data.

#### Workflow Configuration
Create a workflow file (e.g., .github/workflows/thank-you.yml).
Trigger it on the pull_request event.
Use the action in the workflow:
```yaml
uses: sumanthgitty/My-thank-you-action@v1
with:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

#### References
[GitHub REST API](https://octokit.github.io/rest.js/v21/#issuess)
