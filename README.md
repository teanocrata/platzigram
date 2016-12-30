# platzigram
Curso definitivo de Javascript

Para desarrollar necesitamos tener instalado [Nodejs](https://nodejs.org/en/) y [npm](https://www.npmjs.com/) como gestor de paquetes

Como gestor de paquetes utilizamos [npm](https://www.npmjs.com/) en lugar de [bower](https://bower.io/) o [duojs](http://duojs.org/), este último puede ser bastante interesante para proyectos pequeños.

Para empezar a desarrollar hemos ejecutado
```npm init```
que inicializa el proyecto para js y crea el manifest, en este caso el package.json. Como vamos a utilizar js del lado del servidor pondremos como main el server.js

A partir de este momento todo lo que utilicemos se irá reflejando en el archivo package.json. Si lo usamos solo para desarrollar lo añadiremos con `--save-dev`, si se utiliza en el código con `--save`.

Utilizamos [materializecss](http://materializecss.com/) como framework web front-end basado en Material Design: `npm install --save materialize-css`

Utilizamos [express](http://expressjs.com/) para hacer nuestro servidor web, lo incluimos en las dependencias con:
```npm install --save express``

Como ensamblador de paquetes utilizamos [browserify](http://browserify.org/) en lugar de otros como [webpack](https://webpack.github.io/) a pesar de que este último se está convirtiendo prácticamente en un estandar, pero browserify es un poco más simple y para el caso nos sirve mejor. Estos ensambladores lo que hacen es básicamente generar un js final que es el que utilizaremos.

Como automatizadore de tareas utilizamos [gulp](http://gulpjs.com/). También existen otros como [grunt](http://gruntjs.com/) pero gulp es más paso a paso.

Utilizamos también como preprocesador de css [sass-lang](http://sass-lang.com/). Existen otros como [less](http://lesscss.org/) o [stylus](http://stylus-lang.com/). Básicamente facilitan el trabajo con css escribiendo menos código, permiten usar variables, etc en desarrollo. Luego todo se pasa a css normal.

Tanto gulp como gulp-sass lo añadimos sólo para desarrollo:
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
```npm install --save-dev babel-preset-es2015```

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

A gulp le vamos a decir que esté pendiente de algunos archivos para que si se cambian se haga la build de nuevo. Para ello usaremos [watchify](https://github.com/substack/watchify), añadiremos dos tipos de tarea a nuestro gulpfile una para hacer la build y otra para quedar escuchando que definiremos para npm con el startdev de forma que escuche si hay cambios y tenga el servidor en pie.

Para poder ejecutar los dos procesos concurrentemente (el watch y el server) utilizamos [concurrently](https://www.npmjs.com/package/concurrently) que se encarga de que todo funcione bien.

## Agregando interfaces de usuario con [yoyo](https://www.npmjs.com/package/yo-yo)

Es una librería que sigue la filosofía de react. Nos va a permitir enriquecer mucho la aplicación del lado del cliente.
```npm intall --save yo-yo```

yo-yo utiliza los Templates String de ecmascript 6 para introducir los elementos del DOM.

Al establece el contenido de un elemento HTML desde un string tretado por yo-yo lo que hacemos es un appendChild, pero esto deja lo que teníamos antes. Para que no pase esto utilizamos [empty-element](https://www.npmjs.com/package/empty-element) que es una librería muy simple que vacía el contenido del elemento del DOM previamente.
```npm intall --save empty-element```

## Modularizando nuestro proyecto

## Agregando la página de sign in

## Cambiando el título de la página

Como no recargamos lás páginas la navegar, el título no cambia y necesitamos otra librería para que lo haga, usamos para ello [title](https://www.npmjs.com/package/title) ```npm install --save title```

## Internacionalización

Para poder mostrar los textos traducidos utilizaremos [formatjs](http://formatjs.io/), inicialmente estábamo utilizando momentJS pero ahora utilizamos formatJS inicialmente para las fechas y posteriormente paratodos los textos.

Para fechas la parte que usamos es [Intl RelativeFormat](https://github.com/yahoo/intl-relativeformat)  mientras que para los mensajes usaremos [Intl MessageFormatl](https://github.com/yahoo/intl-messageformat).

La librería nos da todo lo necesario para traducir toda la aplicación, mensajes, números, etc.


## Obteniendo una respuesta del servidor con Superagent

Podríamos utilizar por ejemplo jquery para ejecutar las peticiones al servidor pero en nuestro caso vamos a usar [superagent](https://github.com/visionmedia/superagent) que hace uso de callbacks

Recibimos como primer parámetro el posible error y luego la respuesta.

```
npm i --save superagent
```

## Obteniendo una respuesta del servidor con [Axios](https://github.com/mzabriskie/axios)

Esta es otra manera de hacer request pero esta vez con el uso de promesas. Las promesas surgen para resolver el callback hell, callbacks dentro de callbacks y crecimiento horizontal.
