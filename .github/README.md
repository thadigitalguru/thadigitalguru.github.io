# GitHub Workflows

This directory contains automated workflows for maintaining the Jekyll site.

## Workflows

### 1. Jekyll Site CI (`jekyll-check.yml`)

**Triggers:**
- Push to `master` branch
- Pull requests to `master` branch

**What it does:**
- ✅ Builds the Jekyll site
- ✅ Checks HTML validity
- ✅ Verifies internal links
- ✅ Uploads build artifact (available for 7 days)
- ✅ Generates build summary

**Purpose:** Ensures every commit builds successfully and has no broken internal links.

### 2. External Link Check (`external-links.yml`)

**Triggers:**
- Scheduled: Every Monday at 9:00 AM UTC
- Manual: Can be triggered from Actions tab

**What it does:**
- 🔗 Checks all external links in the site
- 🔗 Excludes social media links (to avoid rate limiting)
- 🔗 Creates GitHub issue if broken links are found

**Purpose:** Weekly monitoring of external links to catch when referenced sites go down or change URLs.

### 3. Dependabot (`dependabot.yml`)

**Schedule:**
- Ruby dependencies: Weekly (Mondays)
- GitHub Actions: Monthly

**What it does:**
- 📦 Automatically creates pull requests for dependency updates
- 📦 Keeps Jekyll and plugins up to date
- 📦 Updates GitHub Actions versions

**Purpose:** Maintains security and keeps dependencies current.

## Manual Workflow Triggers

You can manually trigger the External Link Check workflow:

1. Go to the **Actions** tab in GitHub
2. Select **External Link Check**
3. Click **Run workflow**
4. Choose the branch and click **Run workflow**

## Viewing Results

- **Build artifacts:** Click on any workflow run, scroll to "Artifacts" section
- **Link check results:** View the workflow logs in the Actions tab
- **Issues:** Broken external links will create issues automatically with the `link-check` label

## Troubleshooting

### Build fails with "Page build failed"
- Check the workflow logs for specific errors
- Verify Jekyll configuration in `_config.yml`
- Ensure all required plugins are in `Gemfile`

### Link check reports false positives
- Edit the workflow file to add URLs to ignore list
- Adjust timeout settings if sites are slow to respond

### Dependabot not creating PRs
- Check repository settings: Settings → Security → Dependabot
- Ensure Dependabot has permissions to create PRs
