---
title: "ES6 Module in NodeJS"
date: 2020-12-29
published: true
author: "puji"
images: 'es6.jpeg'
---  

![ajax](./es6.jpeg)  

Assalamualaikum, sobat digital dimanapun berada, salam baca. Semoga kalian semua selalu dalam keadaan sehat selalu, kali ini gout mau sedikit berbagi, yaitu berupa tips trick dan tutorial, kali ini gout akan membahas mengenai Syntax Module EcmaScript6(ES6) Di NodeJS.  


Seperti yang telah kalian semua tau sebelumnya, dalam syntax penulisan NodeJS sebelumnya kita menuliskan syntax code untuk membangun aplikasi kita seperti ini :  

contohnya :  

```javascript
const express = require('express')
const cors = require('cors')
const path = require('path')
```  
selain penggunaan syntax diatas ternyata kita bisa menggunakan format syntax yang dipakai oleh EcmaScript dalam hal ini ES6.  
kita bisa mengubah syntax diatas menjadi seperti ini :  

```javascript
import express from 'express'
import cors from 'cors'
import path, {dirnam} from 'path'
import {fileURLToPath} from 'url'
```  
untuk menggunakan module-module yang terdefinisi, masih sama seperti syntax NodeJS sebelumnya :  

```javascript
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())
```  
Tapi sebelum kalian menjalankan aplikasi NodeJS kalian, kalian harus menambahkan key berikut saat menjalankan perintah start aplikasi :  

```bash
nodemon --experimental-module
```  
Untuk menggunakannya dalam package aplikasi, kalian bisa menambahkan key tersebut ke file ```package.json``` :  

```json
"type": "module",
"scripts" : {
  "start": "nodemon --experimental-module-json fileaplikasikalian.js"
}
```  
field ```fileaplikasikalian.js``` bisa diganti dengan nama file utama kalian, biasanya file utama itu adalah : ```index.js``` ```app.js``` atau ```server.js```  

![promise]('./es6.png')  

ok sekian dulu dari saya untuk artikel kali ini, nanti kita lanjutkan lagi artikel mengenai tips and trick seputar pemrogramman khususnya web programming  
... see the next articles 

bye :) 


***Salam***

**Puji Ermanto**
