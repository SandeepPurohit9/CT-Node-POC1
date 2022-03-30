# CT-Node-POC2 

Authentication small login app

## Objective
> Build a small login app, which will store the login info (persist the login so that the user does not have to login again) 😊<br>
> You can use JWT token-based authentication or local Storage using node.<br>
> If the user comes back to the login page, it would redirect to home/details page.<br>
>  add a `middleware function` which will get the current time store it in the request and pass it to the next route using `next()`

## Installation

CT-NG-POC requires Node.js v10+ to run.

checkout to `nodejs-POC-2` branch & install dependencies

```sh
git checkout -b nodejs-POC-2
cd CT-NODE-POC1
npm i 
npm run start
```
Once terminal shows `App listening at port http://localhost:3000`, navigate to `http://localhost:3000` on your browser
