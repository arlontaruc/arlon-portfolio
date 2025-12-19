yes| curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
curl -fsSL https://claude.ai/install.sh | bash
npm i -g @openai/codex
npm install -g @google/gemini-cli@preview
yes | npx sv create statue-site --template minimal --types ts --no-add-ons --install npm && cd statue-site && npm install statue-ssg && npx statue init && npm install && npm run build
git commit . && git commit -m "statue setup" && git push