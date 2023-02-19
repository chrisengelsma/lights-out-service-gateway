# OGD Marketing Dashboard Server

This project contains the server-side code for the OGD marketing dashboard.

Readme last updated: May 8, 2020 by Chris Engelsma <chris.engelsma@ogdllc.com>

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node Package Manager (npm)
* MongoDB Community Edition

----

#### Mac users:

I recommend using [Homebrew](https://brew.sh/) to install all necessary dependencies.
Install this by running the following command in a terminal window:

```shell script
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Once you've installed Homebrew, install npm by running:

```shell script
$ brew install npm
```

Verify node and npm installed by typing

```shell script
$ node -v
$ npm -v
```

Install MongoDB Community Edition using homebrew:

```shell script
$ brew tap mongodb/brew
$ brew install mongodb-community@4.2
```

To run MongoDB as a macOS service, run the following:

```shell script
brew services start mongodb-community@4.2
```

----

#### Windows users:

Go to the [Nodejs download page](https://nodejs.org/en/download/) and download the Windows installer.

Open a command prompt and verify node installed by running the following command:

```Batchfile
C:\> node -v
C:\> npm -v
```

To install MongoDB, download the [MSI installer](https://www.mongodb.com/download-center/community?tck=docs_server).

----

#### Debian Linux users:

Install npm and node through apt:

```shell script
$ sudo apt install nodejs
$ sudo apt install npm
```

Verify it installed by running the following commands:

```shell script
$ node -v
$ npm -v
```

To install MongoDB, first import the public key used by the package management system:

```shell script
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```

Create a list file using the following command:

```shell script
$ echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
```

Reload the package database:

```shell script
$ sudo apt-get update
```

Install the MongoDB packages:

```shell script
$ sudo apt-get install -y mongodb-org
```

Start the MongoDB service by running the following commands:

```shell script
$ sudo systemctl daemon-reload
$ sudo systemctl start mongod
```

----

#### Red Hat Linux users:

Enable the Nodejs yum repository in your system by running the following commands:

```shell script
$ sudo dnf install -y gcc-c++ make
$ curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
```

Then install the Nodejs package by running the following command:

```shell script
$ sudo dnf install nodejs
```

Verify it installed by running the following commands:

```shell script
$ node -v
$ npm -v
```

To install MongoDB, first configure the package management system by creating a `/etc/yum.repos.d/mongodb-org-4.2.repo` file and populate it with the following:

```
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
```

Then run the following command:

```shell script
$ sudo yum install -y mongodb-org
```

Launch the MongoDB server by running:

```shell script
$ sudo systemctl daemon-reload
$ sudo systemctl start mongod
```

## Installing

To install the client, run:

```shell script
$ npm install
```

Once it is finished installing, create the build-info file by running the script:

```shell script
$ npm run build:info
```

## Launching

To launch the client, run:

```shell script
$ npm run start
```

