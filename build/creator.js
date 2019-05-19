const box = require('boxen')
const color = require('chalk')
const fs = require('fs')
const anxieties = require('../data/anxieties.json')

// boxen Option
const options = {
  padding: 3,
  margin: 3,
  borderStyle: 'round',
  float: 'center'
}

const becauseOf = color.cyan('I am anxious because...')

for (var anxity in anxieties) {
  const strinifiedIndex = anxity.toString()
  const output = box(becauseOf + '\n' + anxieties[anxity], options)

  console.log(output)

  fs.writeFileSync('./data/outputs/' + strinifiedIndex, output)
}
