import { Note } from '../typeScript/types';

export function createNewNote(title, content){
    return new Note(makeid(8),title, content, new Date().toString());
}

function makeid(length) {
    var result           = '';
    var characters       = 'qwertzuiopasdfghjklyxcvbnm0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}