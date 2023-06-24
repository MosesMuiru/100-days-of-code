
this is how to set up the compile config for tsc

tsc --init 

some features you will find in the config file

target - es2016
module - node commonjs 
rootdir  - the root of ts
outdir - where the .ts will be saved
noEmmit
sourceMap - shows how each file of our typescript matches the js file


//setting out the debbuggin

prelauch task
---------------
for setting up the environment for configuring the typescript
"preLaunchTask": "tsc: build - tsconfig.json", - tells vscode to use the ts compiler to debug the code.
