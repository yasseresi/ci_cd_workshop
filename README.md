# CI/CD Workshop — Express + Jest + GitHub Actions

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Tests-Jest-C21325?logo=jest)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

Demo repository for a hands-on CI/CD workshop I ran for the **ByteCraft** club. A tiny Express API shows the full loop: write a test, push, let GitHub Actions run it, and deploy automatically to Vercel when it passes.

## What it shows

- Express app split into `app.js` (routes) and `index.js` (server), so it can be tested without opening a port
- Unit and HTTP tests with Jest + Supertest
- `ci.yaml` — runs tests on every push and pull request
- `ci_cd.yaml` — runs tests, then deploys to Vercel on `main`

## 🚀 Run locally

```bash
npm install
npm run dev     # nodemon
npm test        # jest
```

---

## 👤 Author

**Yasser Korzane** — Flutter & Go developer · [GitHub](https://github.com/yasseresi) · [LinkedIn](https://www.linkedin.com/in/korzane-yasser)
