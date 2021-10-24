const {app, BrowserWindow } = require('electron');

const html = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sample App</title></head><body><h1>Hello world</h1><p>This is an Electron sample app</p></body></html>'

function createWindow (){
    let win = new BrowserWindow({
        width: 1000,
        height: 800,
    });
    win.loadFile('index.html');

    let child = new BrowserWindow({
        width: 350,
        height: 200,
        parent: win,
        frame: false,
        modal: true
    });
    child.loadFile('sub.html');
}

app.whenReady().then(createWindow);