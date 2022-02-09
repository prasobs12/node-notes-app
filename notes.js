const fs = require('fs')
const chalk = require('chalk')
const console = require('console')

const getNotes = () => {
    'your notes are here'
}

const addNote = function(title, body){
    const notes = loadNotes()
    //do not add duplicate title

    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note)=>note.title === title)


    if(!duplicateNote){
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
    } else{
        console.log('note not added')
    }
  
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch(e){
        return[]
    }

}

const removeNote = function(title){
    const notes = loadNotes()
    //do not add duplicate title
    console.log('deleting notes'+title)
    const begLength = notes.length

    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length < begLength){
        console.log(chalk.green.bold('sucessfuly removed'))
    } else{
        console.log(chalk.red.bold('nothing removed'))
    }
    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.green.bold('title:' + note.title))
        console.log(chalk.blue('body:'+note.body))
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const toReadNote = notes.find((note)=>note.title === title)

    if(toReadNote){
        console.log(chalk.green.bold('title:'+toReadNote.title))
        console.log(chalk.green('body:'+toReadNote.body))
    } else{
        console.log(chalk.red('no note found'))
    }
  

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}