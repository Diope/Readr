
// Modules
const {app, BrowserWindow} = require('electron');

// BrowserWindow instance
exports.win

exports.createWindow = () => {
  this.win = new BrowserWindow({
    width: 500,
    height:650,
    minWidth: 350,
    minHeight: 310,
    maxWidth: 650
  })

  // Development Tools
  this.win.webContents.openDevTools()

  // Main win content
  this.win.loadURL(`file://${__dirname}/renderer/main.html`)

  this.win.on('closed', () => {
    app.quit();
    this.win = null;
  })
}
