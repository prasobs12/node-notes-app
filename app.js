
const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')


//  console.log(getNotes()+msg)

// console.log(validator.isURL('http.example.com'))

// console.log(chalk.red.bold('Error!'))

// console.log(process.argv)

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create remove command
yargs.command({
    command: 'list',
    describe: 'Remove a note',
    handler () {
        notes.listNotes()
    }
})

// Create remove command
yargs.command({
    command: 'read',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()


// console.log(yargs.argv)



// const add = require('./utils')
// console.log(add(5,6))