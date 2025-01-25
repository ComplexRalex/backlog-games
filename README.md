# Backlog Games

A very simple "Game CRUD" for your *backlogged* games.

![Backlog Games logo](/assets/backlog-games.png "Backlog Games logo")

## How to?

So you want to store games, right? Just click this repo's website and you can start! Better yet, [click here!](https://complexralex.github.io/backlog-games/)

This app is hosted by **GitHub pages**.

## Purpose

The only purpose of this project was to practice clean architecture with Next.js and React.js.

## *Hey*

At the *momento*, the project persists data with LocalStorage.

However, if you want to use **PocketBase** as this project was intended before...

1. Clone this repo.
2. Install and start running PocketBase. [Click here for more info!](https://pocketbase.io/)
3. Import the data schemas from `pb_schema.json`. This file contains the only collection defined on this app: **games**.
4. Go to `gameCollectionController.tsx` file, and toggle the commented code between **PocketBase** and **LocalStorage** implementation.

```tsx
// * This is a implementation for PocketBase
import { GameCollectionPB } from "../data/gameCollectionPB";
const gameCollectionRepo = new GameCollectionPB();

// * This is a implementation for LocalStorage
// import { GameCollectionLS } from "../data/gameCollectionLS";
// const gameCollectionRepo = new GameCollectionLS();
```

5. Create the `.env.local` file. You can copy it from the given template `.env.local.template`, replacing `SERVER_URL` with your PB's server.

```shell
# Here goes you PocketBase server url
NEXT_PUBLIC_PB_REST_API=SERVER_URL
```

6. Init and run the project. You can run it directly from `dev`, or first `build`ing it and then `start`ing it.

```shell
npm i
npm run dev
```

## Structure

You can find the project structure in these files: `tree-en.txt` for *English*, and `tree-es.txt` for *Spanish*.

## Disclaimer

I made this project with Next.js 12. However, the implementation doesn't actually use most of this framework's features. That's why I consider this as a "React.js project" instead.

It's very possible that there are many and better implementations out there on the internet, so you should check them out!

On the whole, this app is a combination of a bunch of ideas and implementations using clean architecture.
