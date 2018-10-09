# vforge-stateful-auth
Stateful authentication using two maven submodules with Spring Boot 2.0.5, Spring Security and Angular6

## Build packaged war
To build a war file launch under rest-api folder

    mvn clean package
    
 ## Build indipendent project
You can run the project as a frontend server and backend rest-api

on `web-ui` launch `ng-serve` and go to `http://localhost:4200/`

If you have not installed `angular-cli` you can install it with `npm install -g @angular/cli`

On `vforge-stateful-auth` launch `mvn clean install` then under `rest-api` project `mvn spring-boot:run`

This way you can acces your frontend application with live reload

