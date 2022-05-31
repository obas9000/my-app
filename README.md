// Does work
nvm use 14.15
npm i
npm link @libs/my-lib
ng serve

// Does not work
nvm use 16.15
npm i
npm link @libs/my-lib
ng serve
