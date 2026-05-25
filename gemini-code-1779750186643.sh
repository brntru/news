# Force remove the stale index lock file
rm -f .git/index.lock

# Retry your git command sequence
git add -A
git commit -m "Update lockfile and push changes"
git push origin main