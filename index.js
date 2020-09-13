const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

const locked = app.requestSingleInstanceLock();
if (!locked)
    app.quit();

let newWindow = function() {
    let w = new BrowserWindow({
        width: 550,
        height: 600,
        alwaysOnTop: true,
        skipTaskbar: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    w.loadURL(url.format({
        pathname: path.join(__dirname, 'res/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    w.center();

    w.on('blur', () => {
        w.close();
    });
}

app.on('ready', newWindow);