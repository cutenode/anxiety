#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const anxieties = fs.readdir(path.join(__dirname, '../data/outputs'), (error, files) => {
  if (error) throw error

  const randomSelection = Math.floor(Math.random() * Math.floor(files.length))

  fs.readFile(path.join(__dirname, '../data/outputs', files[randomSelection]), (error, data) => {
    console.log(data.toString('utf8'))
  })
  
})

