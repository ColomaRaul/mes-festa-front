This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Install on Docker
First of all, you need install [docker](https://docs.docker.com/get-docker/)

After that, you can install Docker Desktop in MacOs.

## Initial configuration
Once Docker is installed, launch the following command in the root of the project in your terminal:
```bash
# install all dependencies
make start
```

If there is no problem, the Front is launched on the ```localhost:3000```

You must need up the API project first

## Running and stop app
For run or stop the app, launch the following commands in your root repository in your terminal
```bash
# run app
make start

# stop app
make stop
```
