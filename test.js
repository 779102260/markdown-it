const MarkdownIt = require('./index')
// const MarkdownIt = require('./dist/markdown-it.min.js')

const md = new MarkdownIt()

const str = md.render('# webpack5 入门1——起步')

console.log(str)