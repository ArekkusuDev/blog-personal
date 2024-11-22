---
title: 'Unidad 3: Sistemas de archivos - Práctica 2'
published: 2024-11-14
description: 'Práctica que consiste en la verificación de los sistemas de archivos en Linux (permisos, propietarios, etc.)'
tags: ['Sistemas Operativos', 'Blogging', 'TecMotul']
category: 'Sistemas Operativos'
draft: false
---

## Verificación del propietario y grupo de /etc/passwd

Primero debemos crear en nuestro directorio inicial un subdirectorio llamado "copia" y ahora copiamos dentro de éste el archivo /etc/passwd.
Primero nos ubicamos en el directorio de usuario

```bash
# nos aseguramos de estar en el directorio del usuario logueado
cd $HOME

# ahora creamos el directorio copia
mkdir copia
```

Ahora para realizar una copia del archivo `/etc/passwd` en el directorio `copia` usamos el comando `cp` de la siguiente manera:

```bash
# copiamos el archivo /etc/passwd al directorio copia
cp /etc/passwd ./copia/
```

### ¿Quién es ahora el propietario del archivo y cuál es su grupo?

Para verificar el propietario y grupo del archivo `/etc/passwd` y su copia en el directorio `copia` usamos el comando `ls` con la opción `-l` de la siguiente manera especificando el archivo:

```bash
# verificamos el propietario y grupo del archivo /etc/passwd
ls -l /etc/passwd

# verificamos el propietario y grupo del archivo copia/passwd
ls -l copia/passwd
```

Como resultado de los comandos ejecutados anteriormente se nos mostrará el propietario y grupo de los archivos, en mi caso el propietario es `root` y el grupo es `root` para el archivo `/etc/passwd` y para la copia en `$HOME/copia/passwd` el usuario y el grupo son el nombre del usuario que actualmente tiene sesión iniciada, en mi caso, tanto para el usuario como el grupo el valor es `salazar`.

## Crear subdirectorio llamado "prueba" en el directorio /etc

```bash
# nos movemos al directorio /etc
cd /etc

# creamos el directorio prueba
mkdir prueba
```

### ¿Que ocurre?

Si intentamos crear el directorio `prueba` en el directorio `/etc` se nos mostrará un mensaje de error indicando que no tenemos permisos para realizar esta operación, ya que el directorio `/etc` es un directorio del sistema y solo el usuario `root` tiene permisos para realizar operaciones en él.

:::tip
Tambíen podemos crearlo usando nuestro usuario actual si usamos el comando `sudo` para ejecutar el comando `mkdir` con permisos de superusuario. El comando anterior nos quedaría de la siguiente manera: `sudo mkdir prueba`
:::

### ¿Qué derechos tienes en el directorio /etc?

Para verificar los permisos que tenemos en el directorio `/etc` usamos el comando `ls` con la opción `-l` de la siguiente manera:

```bash
# verificamos los permisos del directorio /etc
ls -l /etc
```

Por defecto, el directorio `/etc` tiene permisos de lectura y ejecución para todos los usuarios, pero solo el usuario `root` tiene permisos de escritura en el directorio.

## Crear un subdirectorio llamado “.oculto” en el directorio inicial (Home).

Para crear un subdirectorio llamado `.oculto` en nuestro directorio inicial usamos el comando `mkdir` de la siguiente manera:

```bash
# creamos el subdirectorio .oculto en el directorio inicial
mkdir .oculto
```

### ¿Qué ocurre si intentamos visualizar el nuevo subdirectorio?

Si intentamos visualizar el nuevo subdirectorio llamado `.oculto` en nuestro directorio inicial usando el comando `ls` no se mostrará en la lista de archivos y directorios, ya que los archivos y directorios que comienzan con un punto `.` son considerados como archivos ocultos en Linux.

### ¿Qué opción tendremos que emplear para visualizarlo?

Para visualizar los archivos y directorios ocultos en Linux usamos el comando `ls` con la opción `-a` de la siguiente manera:

```bash
# visualizamos los archivos y directorios ocultos
ls -a
```

## Crear directorio D1 en el directorio inicial.

Para crear un directorio llamado `D1` en nuestro directorio inicial usamos el comando `mkdir` de la siguiente manera:

```bash
# creamos el directorio D1 en el directorio inicial
mkdir $HOME/D1
```

### ¿Con qué permisos se crea?

Por defecto, el directorio `D1` se crea con los permisos de lectura, escritura y ejecución para el usuario actual y el grupo al que pertenece el usuario.

#### Denegar la ejecución usando umask

Para denegar los permisos de ejecución en el directorio `D1` usamos el comando `umask` de la siguiente manera:

```bash
# denegamos los permisos de ejecución en el directorio D1
umask 0117
```

### Crear otro directorio hermano de D1 llamado D2

Para crear un directorio llamado `D2` en el mismo directorio que `D1` usamos el comando `mkdir` de la siguiente manera:

```bash
# creamos el directorio D2 en el mismo directorio que D1
cd $HOME/D1
mkdir D2

# tambíen podemos crearlo en una sola línea
# mkdir $HOME/D1/D2
```

#### ¿Qué permisos tiene?

Por defecto, el directorio `D2` se crea con los mismos permisos que el directorio `D1`, es decir, sin permisos de ejecución.
