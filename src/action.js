const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);

    const { context = {} } = github;
    const { pull_request } = context.payload;

    await octokit.issues.createComment({
        owner: "sumanthgitty",
        issue_number: pull_request.number,
        body: 'Thank you for submitting a pull request! we will review it as soon as we can'
    })

}


run();