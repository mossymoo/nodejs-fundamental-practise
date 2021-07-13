const fs = require('fs')
const path = require('path')

// By default is asynchronous

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err) throw err
//     console.log('Folder created...')
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', {}, (err) => {
//     if(err) throw err
//     console.log('File written to...')

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Second Line', {}, (err) => {
//         if(err) throw err
//         console.log('Send line append...')
//     })
// })

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), {encoding: 'utf8'}, (err, data) => {
//     if(err) throw err
//     console.log(data)
// })

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if(err) throw err
    console.log('Rename successfull...')
})
