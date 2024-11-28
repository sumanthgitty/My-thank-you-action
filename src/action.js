const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
        const octokit = github.getOctokit(GITHUB_TOKEN);

        const { context } = github;
        const { pull_request } = context.payload;

        if (!pull_request) {
            throw new Error('This action is intended to run on pull_request events only.');
        }

        await octokit.issues.createComment({
            owner: sumanthgitty,
            repo: My-thank-you-action, // Correctly specifying the repository name
            issue_number: pull_request.number,
            body: 'Thank you for submitting a pull request! We will review it as soon as we can.',
        });

        console.log('Comment added successfully!');
    } catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`);
    }
}

run();
