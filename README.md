# CRUD OPERATION by Padre Shelby

Thia API create, read, update and delete a person

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the API Locally](#running-the-api-locally)
  - [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

- Click on the link of the source
- Get the code in order to clone it

### Prerequisites

List the software and dependencies that need to be installed before running the API. Include links to installation guides if necessary.

- Node.js (Version 18.15.0>=)
  if you do have node , This is installation guide for node js

### Windows

1. Download Node.js: Visit the official Node.js website: https://nodejs.org/.
2. Choose the LTS version (Long Term Support). This version is stable and recommended for most users. Click on the "LTS" download button to download the installer.
3. Run the Installer:

- Open the downloaded installer.
- Follow the installation wizard instructions.
- You can accept the default settings.

4. Verify Installation: Open your command prompt or PowerShell and run the following commands to check if Node.js and npm were installed successfully:

```sh
node -v
npm -v
```

### macOS

1. Install Homebrew (if not already installed): If you don't have Homebrew installed, open Terminal and run the following command:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install Node.js and npm: Once Homebrew is installed, you can install Node.js and npm using the following command:

```sh
brew install node
```

3. Verify Installation: Open Terminal and run the following commands to verify the installation:

```sh
node -v
npm -v
```

You should see the versions of Node.js and npm printed to the console.

### Linux (Ubuntu/Debian):

1. Update Package Lists: Open a terminal and run the following commands to update your package lists:

```sh
sudo apt update
sudo apt upgrade
```

2. Install Node.js and npm: You can install Node.js and npm using the following commands:

```sh
sudo apt install nodejs
sudo apt install npm
```

3. Verify Installation:

To verify the installation, run:

```sh
node -v
npm -v

```

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-api.git
   ```

2. Navigate to the project directory:

```sh
cd your-api
```

3. Install the required npm packages:

```sh
npm install
```

4. Configure environment variables :

- create .env file
- provide MONGO_URL key if you have one in order to be connected in Mongo DB

### Usage

- Running the API Locally

```sh
npm start
```

By default, the API will be available at `http://localhost:5200`.

### API EndPoints

### Create Person

- URL : `/api`
- Method: `POST`
- Request Body:

```sh
{
  "name": "Mark Essien",
  "country": "USA",
  "track": "Backend Development"
}
```

- Response:

```sh
{
  "message": "Person created successfully",
  "person": {
    "name": "Mark Essien",
    "country": "USA",
    "track": "FullStack Development",
    "_id": "6501164fb9d45fa5a0a46e11",
    "__v": 0
  }
}
```

### Read a person

- URL: `/api/:user_id`
- Method: `GET`
- Response:

```sh
{
  "person": {
    "_id": "6501164fb9d45fa5a0a46e11",
    "name": "Mark Essien",
    "country": "USA",
    "track": "FullStack Development",
    "__v": 0
  }
}
```

### Update a person

- URL: `/api/:user_id`
- Method: `PATCH`
- Request Body:

```sh
{
  "country": "Canada"
}
```

- Response:

```sh
{
  "message": "person modified",
  "person": {
    "_id": "6501164fb9d45fa5a0a46e11",
    "name": "Mark Essien",
    "country": "Canada",
    "track": "FullStack Development",
    "__v": 0
  }
}
```

### Delete a person

- URL: `/api/:user_id`
- Method: `DELETE`
- Response:

```sh
{
  "message": "person deleted",
  "person": {
    "_id": "6501164fb9d45fa5a0a46e11",
    "name": "Mark Essien",
    "country": "Canada",
    "track": "FullStack Development",
    "__v": 0
  }
}
```

### Testing

- Use postman or install thunder client on vscode
- use different url for each operation by taking base url like this : `http://localhost:5200/`
