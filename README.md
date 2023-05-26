<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

OPTIONAL SECTIONS:
- FAQ

After you're finished please remove all the comments and instructions!
-->

<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->
  <img src="https://static.vecteezy.com/system/resources/previews/008/040/410/original/school-logo-design-template-free-vector.jpg" alt="logo" width="80"  height="auto" />
  <h2>Nextview</h2>
  <br/>

  <h3><b> Second Capstone project</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[Second Capstone project\] ](#-second-capstone-project-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [API Key Generation](#api-key-generation)
  - [**Endpoints**](#endpoints)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🤝 Contributors ](#-contributors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [Second Capstone project] <a name="about-project"></a>

**[Second Capstone project]** is a Html , Css & javascript based project

## 🛠 Built With <a name="built-with"></a>

1- HTML.
2- CSS.
3- Javascript.
4- webpack.

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">HTML</a></li>
    <li><a href="https://reactjs.org/">CSS</a></li>
    <li><a href="https://reactjs.org/">Javascript</a></li>
      <li><a href="https://reactjs.org/">webpack</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Webpack used
- APIs used
- Live update like and comments

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

> [🎉 see live ](https://ankitt26.github.io/Second-Capstone-project/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

1. Web browser
2. Code editor.
3. git-smc.

### Setup

Clone this repository to your desired folder:

_Run this command:_

```sh
  cd my-project
  git clone git@github.com:ankitt26/Second-Capstone-project.git
```

### Install

Install this project with:

_Example command:_

```sh
  cd my-project
  npm install
```

--->

### Usage

To run the project, execute the following command:

```sh
cd my-project
npm run start
```

## API Key Generation

To fetch movies and show data use this API 🔗

```sh
`https://api.tvmaze.com/shows`
```

To fetch Likes and comments data use this API 🔗

```sh
`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`
```

## **Endpoints**

**/apps/**

Allowed actions:

- **POST** to create a new app

Parameters:

- No parameters required

Return value: unique identifier for the app

```
abc234
```

➡️ **/apps/:app_id/likes/**

Allowed actions:

- **POST** to create a new like for the given item
- **GET** to get a list of items with its respective likes

Parameters for POST action:

URL parameters:

- **app_id**: unique identifier of the app (mandatory)

Request **body**: a JSON object with the key: `item_id` (mandatory)

Example of request body:

```
{
    "item_id": "item1"
}
```

URL example: `/apps/abc234/likes`

Return value for POST action: 201 status (created)

Parameters for GET action:

URL parameters:

- **app_id**: unique identifier of the app (mandatory)

URL example: `/apps/abc234/likes`

Return value for GET action: array of objects

```sh
[
    {
        "likes": 5,
        "item_id": "item1"
    }
]
```

➡️ **/apps/:app_id/comments**

Allowed actions:

- **POST** to create a new comment for the given item
- **GET** to get a list of items with its respective comments

Parameters for POST action:

URL parameters:

- **app_id**: unique identifier of the app (mandatory)

Request **body**: a JSON object with the following keys: `item_id`, `username`, `comment` (mandatory)

Example of request body:

```
{
    "item_id": "item1",
    "username": "Jane",
    "comment": "Hello"
}
```

URL example: `/apps/abc234/comments`

Return value for POST action: 201 status (created)

Parameters for GET action:

URL parameters:

- **app_id**: unique identifier of the app (mandatory)

Query parameters:

- **item_id**: unique identifier of the item (mandatory)

URL example: `/apps/abc234/comments?item_id=item1`

Return value for GET action: array of objects

```
[
    {
        "comment": "This is nice!",
        "creation_date": "2021-01-10",
        "username": "John"
    },
    {
        "comment": "Great content!",
        "creation_date": "2021-02-10",
        "username": "Jane"
    }
]
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Run tests

Jest🧪

```
$ npm run test
```

### Deployment

```
$ npm run build
$ npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Ankit**

- GitHub: [@ankitt26](https://github.com/ankitt26)
- Twitter: [@ankit26k](https://twitter.com/ankit26k)
- LinkedIn: [ankit26k](https://www.linkedin.com/in/ankit26k/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributors <a name="authors"></a>

👤 **Kelvin**

- GitHub: [@Unleashedicon](https://github.com/Unleashedicon)
- Twitter: [@KipkuruiKelvin3](https://twitter.com/KipkuruiKelvin3)
- LinkedIn: [Kelvin-Kipkurui](https://www.linkedin.com/in/Kelvin-Kipkurui-7b50b8252/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- reservation popup
- Display TV shows

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give it a star.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thanks microverse .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
