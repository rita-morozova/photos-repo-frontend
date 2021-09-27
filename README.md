# PHOTIFY

## Description

Photify is a photo repository.

#### [Server-side Repository](https://github.com/rita-morozova/photosRepo-backend)

#### [The demo can be viewed on Netlify](https://fall-photify.netlify.app/) 

### Main Features:
* Users can see all photos
* User authentication
* Users can add photos to the repository (secure uploading)
* Users can delete photos from the repository: users can not delete photos from another user (access control)

## Getting Started
- Navigate to the [server-side-repo](https://github.com/rita-morozova/photosRepo-backend), fork and clone it.
- cd to photosRepo-backend
- Run `bundle install` to install all dependencies 
- Run `rails db:create` & `rails db:migrate` to create a database
- Run `rails db:seed` (to seed the database with the test photos) 
- To be able to upload photos, you need to obtain a Cloudinary API key from [Cloudinary](https://cloudinary.com/) and save `'cloud_name'`, `'cloud_api_key'`, and `'cloud_api_secret'` in `application.yml` file (create `application.yml` in `config` folder manually). Also, add `secret_key: 'yourKeyHere' ` to the application.yml for `login authentication`
- Start the server by running `rails s`
- Once the server is running, fork and clone this repo. From the main directory run `npm install` to install all dependencies
- Run `npm start` to start the application

## To Run Tests
- Run `rspec --format documentation`

### Build with
Ruby on Rails & React

### Tools
* PostgreSQL
* BCrypt
* JSON Web Tokens
* Cloudinary - a cloud-based image and video management service, is utilized to handle hosting of user generated images
* Figaro - to secure the configuration of API keys
* Semantic UI for fast and clean UI
 
### Home Page

![Home Page](https://res.cloudinary.com/diexi8g0j/image/upload/v1632770433/1_jqemdj.png)

### User has to signup/login to upload photos

![Signup](https://res.cloudinary.com/diexi8g0j/image/upload/v1632770428/2_mkcuap.png)
![Upload Photos](https://res.cloudinary.com/diexi8g0j/image/upload/v1632770425/5_nkimhx.png)
![Upload Photos](https://res.cloudinary.com/diexi8g0j/image/upload/v1632770420/3_ouu54j.png)

### User can delete photos (user is prevented from deleteing photos that belong to other users)

![Delete Photos](https://res.cloudinary.com/diexi8g0j/image/upload/v1632770434/4_mxuqrw.png)

### Features to implement:
* Search function from an image (search for similar images)
* Users can create collections and add photos to collections
* Add more tests

#### Created By _**Margarita Morozova**_
