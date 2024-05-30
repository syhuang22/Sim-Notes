# My Notes App

A React application for creating, managing, and deleting notes. This app uses hooks for state management and simulates a server with a `db.json` file.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Server Simulation](#server-simulation)
## Introduction

My Notes App is a simple React-based application that allows users to add, view, and delete notes. Each note includes content, date, and time. The application uses hooks for managing state and simulates a server using `json-server`.

## Features

- Add a note with content, date, and time.
- Delete a note.
- UI logic implemented using React hooks.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/my-notes-app.git
2. cd my-notes-app:
   ```sh
   cd my-notes-app
3. Install dependencies:
   ```sh
   npm install

## Usage

Start the React application:
```sh
npm start
```
## Server Simulation
The application uses json-server to simulate a backend server. The db.json file serves as the database.

```sh
{
  "data": []
}
```

To start the server, run:
```sh
npm run server
```