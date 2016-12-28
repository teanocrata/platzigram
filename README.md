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

Además utilizamos pug a través del que renderizamos el código html de las páginas:
```npm install --save pug```

## Agregando javascript en el cliente

Javascript se apoya sobre ecmascript que va evolucionando (versión 6 de 2015) pero los navegadores no implementan todas las funcionalidades a la vez. Para ello usamos [babel](https://babeljs.io/). Lo instalamos como dependencias de desarrollo porque solo lo usamo en ese momento. babelify es la herramienta que vamos a utilizar para usar babel con browserify.
```npm i --save-dev browserify babelify```

[source](https://www.npmjs.com/package/vinyl-source-stream) nos va a transformar lo que devuelve el bundle a algo que entiende gulp para que gulp pueda continuar procesando el archivo.
```npm i --save-dev vinyl-source-stream```

## Agregando navegación con Page.js

Desde html5 los navegadores pueden cambiar de página sin necesidad de recargar la página completa. Esto lo hace [page](https://github.com/visionmedia/page.js), va navegando cambiando solo el contenido que cambia y no toda la página:
```npm i --save page```

## Automatizando la build

Ahora mismo cada vez que hacemos un cambio para poder probarlo tenemos que:
1. Parar el servidor
1. Ejecutar ```$ gulp```
1. Arrancar el servidor ```$node server.js```
Vamos a automatizar esto. La domumentación está en https://docs.npmjs.com/misc/scripts. Es interesante ver todo.

Nuestra build la estamos haciendo con gulp que se encarga de todo. build no es algo que npm tenga por defecto así que para llamarlo tenemos que hacer `npm run build`. Sin embargo `start` si que es un comando por defecto y ejecuta por defecto el `node server.js` con lo que simplemente con `npm start` ya funciona correctamente. Esto se puede ver en la documentación en [default values](https://docs.npmjs.com/misc/scripts#default-values).

A gulp le vamos a decir que esté pendiente de algunos archivos para que si se cambian se haga la buil de nuevo. Para ello usaremos [watchify](https://github.com/substack/watchify), añadiremos dos tipos de tarea a nuestro gulpfile una para hacer la buil y otra para quedar escuchando que definiremos para npm con el startdev de forma que escuche si hay cambios y tenga el servidor en pie.
