# Golang Vue Boilerplate (golang, mysql, vue)
##### Golang - REST API
##### Vue - Frontend
  
# REST API
Installing project with go get and install dependencies
```sh
go get -u github.com/xyingsoft/golang-vue

go get -u github.com/go-sql-driver/mysql
go get -u github.com/subosito/gotenv
go get -u github.com/gorilla/mux
```

Editing .env file for app db configuration
```sh
export APP_URL=http://localhost
export APP_PORT=3000
export APP_ENV=development

export DB_USERNAME=root
export DB_PASSWORD=
export DB_HOST=localhost
export DB_PORT=3306
export DB_DATABASE=store

```

Seeding sample data to database
```sh
$ cd $GOPATH/src/path/to/project/root
go run seeds/main.go
```

Running project
```sh
$ cd $GOPATH/src/path/to/project/root
go run main.go
```

# Frontend
Setting API Endpoint. Edit path-to-project-root/client/src/config.js
```sh
export const API_BASE_URL = 'http://localhost:3000/'
```

Running project
```sh
$ cd $GOPATH/src/path/to/project/root
cd client
npm install
npm start
```
bring browser up and browse http://localhost:8080