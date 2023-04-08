# Full-Stack Movie Review Web Application

# Introduction
This is a full-stack web application with java spring boot for the backend and react.js 
for the client. The web application is a movie web app that displays to the user currently stored movies data in the database. 
 
The concepts covered in this app are:
- Creating a spring application
- Creating a java-based APIs
- Using a mongoDB as a database 
- Creating a client application using react.js
- Using axios to access data from a mongoDB database

# Pre-requisites
- Have a foundamental understanding of Java programming language.
- How to create a spring boot project.
- How to add dependencies such as spring security to the pom.xml.
- Have a foundamental understanding of javaScript programming language
- How to create a react.js application with npx
- Understanding of JSX based syntax

#  Creating a Spring project
[Spring initializer is easy and fast way to get started creating a spring project] (https://start.spring.io)
You can add the spring security dependency by clicking the "add dependencies" button the top right side of the page and search for spring security. 

Alternatively, you can manually add the spring dependency in the pom.xml file by searching for spring security dependency in the [maven repository](https://mvnrepository.com), the spring dependency looks like so below:

```
<!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
    <version>3.0.3</version>
</dependency>
```

# Getting Started
1. Download the code
2. Open the project in your favorite editor
3. Run the app
