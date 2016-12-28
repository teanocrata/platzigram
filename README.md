# platzigram
Curso definitivo de Javascript

Utilizamos [materializecss](http://materializecss.com/) como framework web front-end basado en Material Design

Para desarrollar necesitamos tener instalado [Nodejs](https://nodejs.org/en/) y [npm](https://www.npmjs.com/) como gestor de paquetes

Para empezar a desarrollar hemos ejecutado
```npm init```
que inicializa el proyecto para js y crea el manifest, en este caso el package.json. Como vamos a utilizar js del lado del servidor pondremos como main el server.js

Utilizamos [express](http://expressjs.com/) para hacer nuestro servidor web, lo incluimos en las dependencias con:
```npm install --save express``

Como gestor de paquetes utilizamos [npm](https://www.npmjs.com/) en lugar de [bower](https://bower.io/) o [duojs](http://duojs.org/), este último puede ser bastante interesante para proyectos pequeños.

Como ensamblador de paquetes utilizamos [browserify](http://browserify.org/) en lugar de otros como [webpack](https://webpack.github.io/) a pesar de que este último se está convirtiendo prácticamente en un estandar, pero browserify es un poco más simple y para el caso nos sirve mejor. Estos ensambladores lo que hacen es básicamente generar un js final que es el que utilizaremos.

Como automatizadore de tareas utilizamos [gulp](http://gulpjs.com/). También existen otros como [grunt](http://gruntjs.com/) pero gulp es más paso a paso.

Utilizamos también como preprocesador de css [sass-lang](http://sass-lang.com/). Existen otros como [less](http://lesscss.org/) o [stylus](http://stylus-lang.com/). Básicamente facilitan el trabajo con css escribiendo menos código, permiten usar variables, etc en desarrollo. Luego todo se pasa a css normal.

Por tanto incluimos materialize-css:
```npm install --save materialize-css```

Y tanto gulp como gulp-sass sólo para desarrollo:
```npm install --save-dev gulp gulp-sass```

En gulp básicamente creamos un gulpfile donde vamos especificando las tareas necesarias, le decimos copia esto aquí,etc.

Instalamos gulp globalmente para poder usarlo desde cualquier sitio. Para eso hacemos
```npm install --global gulp```

A partir de ese momento desde la raiz ejecutamos
```$ gulp```
que se encarga de copiar lo necesario y para arrancar el servidor:
```$ node server.js```

El proyecto se vasa en una single page aplication que tiene html muy pequeño y el resto del html se carga con js.

Hoy en día las aplicaciones son muy ricas del lado del cliente en js.

Para generar los favicon usamos [Favicon & App Icon Generator](http://www.favicon-generator.org/) que nos da a partir de una imagen todos los favicon necesarios y el código para la web.

Además usamos [babel](https://babeljs.io/) que nos va a permitir utilizar el último js pero siendo compatible con navegadores antiguos. Lo utilizaremos a través de browserify con babelify:
```npm i --save-dev browserify babelify```

Además utilizamos pug a través del que renderizamos el código html de las páginas:
```npm install --save pug```
