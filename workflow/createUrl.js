#!/usr/bin/osascript

function run(argv) {
    ObjC.import('stdlib')
    const operationMode = getVar('operationMode')
    if (operationMode === 'inbox') {
        return addToInbox();
    } else {
        return addTask()
    }
}

function addToInbox() {
    const inboxMode = getVar('inboxMode')
    if (inboxMode === 'folder') {
        return createNoteInInbox()
    } else {
        return addToInboxNote()
    }
}

function createTextSegment(start, shouldIndent, title, text) {
    const suffix = text === '' ? '' : `%0A${shouldIndent ? encodeAndIdent(text, true) : encodeURIComponent(text)}`
    const prefix = encodeAndIdent(title, false);
    return `&text=${encodeURIComponent(start)}${prefix}${suffix}`
}


const ADD_MODE = 'addMode';
const INBOX_NAME = 'inboxName';
const OPEN_NOTE = 'openNote';
const TEXT = 'text';
const TITLE = 'title';

function addTask() {
    const title = getVar(TITLE);
    const text = getVar(TEXT)
    const openNote = getVar(OPEN_NOTE)
    const addMode = getVar(ADD_MODE)
    const textSegment = createTextSegment('* ', true, title, text);
    const noteSelectorSegment = '&noteDate=today'
    const addModeSegment = `&mode=${addMode}`
    return `noteplan://x-callback-url/addText?openNote=${openNote}${noteSelectorSegment}${addModeSegment}${textSegment}`
}


function createNoteInInbox() {
    const title = getVar(TITLE)
    const text = getVar(TEXT)
    const inboxName = getVar(INBOX_NAME)
    const openNote = getVar(OPEN_NOTE)
    const folderSegment = inboxName === '' ? '' : `&folder=${encodeURIComponent(inboxName)}`
    const textSegment = text === '' ? '' : `&text=${encodeURIComponent(text)}`
    const titleSegment = `&noteTitle=${encodeURIComponent(title)}`
    return `noteplan://x-callback-url/addNote?openNote=${openNote}${folderSegment}${titleSegment}${textSegment}`
}

function addToInboxNote() {
    const title = getVar(TITLE)
    const text = getVar(TEXT)
    const inboxName = getVar(INBOX_NAME)
    const openNote = getVar(OPEN_NOTE)
    const addMode = getVar(ADD_MODE)
    const textSegment = createTextSegment('## ', false, title, text)
    const noteSelectorSegment = inboxName === 'today' ? '&noteDate=today' : `&noteTitle=${encodeURIComponent(inboxName)}`
    const addModeSegment = `&mode=${addMode}`
    return `noteplan://x-callback-url/addText?openNote=${openNote}${noteSelectorSegment}${addModeSegment}${textSegment}`
}

function encodeAndIdent(text, indentFirstLine) {
    const prefix  = indentFirstLine ? '%09' : ''
    return prefix + encodeURIComponent(text).replaceAll('%0A', '%0A%09');
}

function getVar(identifier) {
    return $.getenv(identifier)
}