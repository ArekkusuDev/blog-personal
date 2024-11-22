---
title: 'Unidad 3: Sistemas de archivos - Práctica 3'
published: 2024-11-21
description: 'Prácticas relaciondas al manejo de los ficheros y directorios en sistemas operativos linux y windows (enlaces simbólicos, compresión de ficheros, etc)'
tags: ['Sistemas Operativos', 'Blogging', 'TecMotul']
category: 'Sistemas Operativos'
draft: false
---

## Creación de directorios y ficheros

Para esta práctica se nos indica que primero debemos crear un subdirectorio llamado `practica3` dentro del directorio en el que nos encontramos actualmente, lo cual podemos saber usando el comando `pwd`, el directorio se nos crea con las siguientes propiedades:

| Permisos  | Propietario | Grupo   |
| --------- | ----------- | ------- |
| rwxr-xr-x | salazar     | salazar |

Dentro de este directorio se nos pide crear tres subdirectorios más, `dir.uno`, `dir2` y `dir_3`, cada uno con las siguientes propiedades:

- **¿Has tenido algún problema por usar los caracteres “.” o “\_” en los nombres de carpetas?**<br />
  No, no he tenido problemas al usar estos caracteres en los nombres de las carpetas.

Eliminamos el subdirectorio `dir_3` con el comando `rmdir` ya que se encuentra vacío, si el directorio tuviera algún fichero dentro, tendríamos que usar el comando `rm -r` para eliminarlo.

Creamos un fichero llamado `datos_personales` en `dir.uno` el cual contendrá la siguiente información:

- Nombre
- Apellidos
- Fecha
- Dedicación

Podemos crearlo con el comando `nano datos_personales` y escribir la información solicitada, para hacerlo más rápido se creará con el comando `echo` y se redirigirá la salida al fichero:

```bash
echo -e "Victor\nSalazar López\n24 de Noviembre de 2024\nEstudiante" > datos_personales
```

En el directorio `dir2` se nos pide crear dos ficheros más y realizar una copia del archivo `datos_personales` en el directorio `dir2` con el nombre `datos_personales.copia`, para ello podemos usar el comando `cp` y el argumento `-p` para mantener los permisos del archivo original:

```shell
# creamos dos archivos con contenido distinto en el directorio dir2
echo 'Texto del fichero 1' > prueba1
echo 'Contenido del archivo prueba2' > prueba2

# creamos una copia del archivo datos_personales que se encuentra en dir.uno
cp ../dir.uno/datos_personales ./datos_personales.copia
# creamos una copia oculta
cp datos_personales.copia .datos_personales

# comprobamos los archivos creados en el directorio
ls -la
```

## Uso del comando cp

El comando cp nos permite copiar ficheros y directorios, su sintaxis es la siguiente:

```shell
# copiar un fichero a un directorio
# sintaxis: cp <fichero> <destino>
cp fichero.txt $HOME/Documentos/

# Copiar un directorio y su contenido a otro directorio
# sintaxis: cp -r <directorio> <destino>
cp -r directorio $HOME/Documentos/
```

El argumento `-r` es necesario para copiar directorios y su contenido, si no se usa este argumento y se intenta copiar un directorio, se mostrará un error.
También se puede cambiar el nombre del fichero o directorio al copiarlo, para ello se debe especificar el nombre del fichero o directorio en el destino.

Si utilizamos un `.` al inicio de la ruta del fichero o del directorio, de origen o destino, se copiará el fichero o el directorio en el directorio actual, ejemplos:

```shell
# copiar fichero del directorio actual a otro directorio
cp ./fichero.txt ~/Documentos/

# copiar un directorio al directorio actual
cp -r ~/Documentos/directorio-ejemplo ./
```

:::tip
Si se utiliza `..` se hará referencia al directorio padre del directorio actual, por ejemplo, el comando `cp ../fichero.txt ~/Documentos/` copiará el fichero `fichero.txt` del directorio padre respecto al directorio donde nos encontremos al directorio `Documentos` del inicio del usuario.
:::

## Uso del comando mv

El comando `mv` nos permite mover ficheros y directorios, su sintaxis es similar a la del comando `cp`:

```shell
# mover un fichero a un directorio
# sintaxis: mv <fichero> <destino>
mv fichero.txt $HOME/Documentos/

# Mover un directorio y su contenido a otro directorio
# sintaxis: mv -r <directorio> <destino>
mv -r directorio $HOME/Documentos/
```

El argumento `-r` es necesario para mover directorios y su contenido, si no se usa este argumento y se intenta mover un directorio, se mostrará un error.

El comando `mv` también se puede usar para cambiar el nombre de un fichero o directorio, para ello se debe especificar el nuevo nombre en el destino, por ejemplo, `mv fichero.txt nuevo_nombre.txt` cambiará el nombre del fichero `fichero.txt` a `nuevo_nombre.txt`.

De igual manera, también se puede hacer uso de `.` y `..` para mover ficheros y directorios al directorio actual o al directorio padre respectivamente.

## Diferencias entre cp y mv

La principal diferencia entre los comandos `cp` y `mv` es que `cp` copia el fichero o directorio en el destino, mientras que `mv` lo mueve, se podría decir que lo elimina del origen y lo coloca en el destino.

Otra diferencia significativa son los permisos que se tengan entre los directorios de origen y destino, por ejemplo, si nuestro directorio o fichero de origen solo tiene permiso de lectura, podremos copiarlo pero no moverlo, ya que al moverlo se eliminará del origen y se necesitarán permisos de escritura.

Esto se puede observar al momento de trabajar sobre el directorio `/usr/games`, el cual tiene permisos de lectura y ejecución para todos los usuarios, pero no de escritura, por lo que no podremos mover ficheros o directorios de este directorio, pero si podremos copiarlos.
