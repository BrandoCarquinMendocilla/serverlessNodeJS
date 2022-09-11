# serverlessNodeJS

Actualmente el Swagger funciona con nodejs 12
Ejecute estos comandos en su cmd(No olvidar que es recomendable ejecuarlo como administrador)
nvm install 12  
nvm use 12.22.12

Insatalacion global de serverless
npm install -g serverless

Crecion de repositorio
serverless create --template aws-nodejs --path serverless-nodejs-swagger
cd serverless-nodejs-swagger/

Serverless-offline para una ejecucion local
Serverless-offline 6.5.0

INSTALACION DE SWAGGER
npm i serverless-auto-swagger@1.2.1 --save-dev

Agregar plugin despues de SERVERLESS-OFFLINE
plugins:
  - serverless-auto-swagger
  
Agregar estas lineas para habilitar el autogenerado de la carpeta swager:
custom:
    autoswagger:
        generateSwaggerOnDeploy: true
  
Actualmente para visualizar la doc swagger ingrese : localhost:3000/dev/swagger
todos los servicios cuentas con una estructura de ejemplo

![Swagger serverless](https://user-images.githubusercontent.com/102432675/189546437-667a3fe0-6868-4779-aec0-c7e2ccad7343.png)

![POST registrar personaje a una tabla de MySQL](https://user-images.githubusercontent.com/102432675/189546459-f094343b-5bbe-4da1-a13c-5d77f5d6c08b.png)

![POST buscarPlanetas Response](https://user-images.githubusercontent.com/102432675/189546462-3af182f8-5cb7-4b51-a302-58c65e48a420.png)


Para realizar el deploy a un servidor aws ingrese:
SLS CONFIG CREDENTIALS --PROVIDER AWS --KEY (ACCESS KEY ID) --SECRET (SECRET ACCESS KEY) --PROFILE DEPLOY-AWS

TREE C:\Users\ BrandoJavier.aws\credentials

EN EL SERVER AGREGAR #profile: deploy-aws

Firma Digital

![FirmaBrandoCarquin](https://user-images.githubusercontent.com/102432675/189546206-a4e538f1-7acf-4185-84f3-33e119668752.png)
