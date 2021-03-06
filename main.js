const {app, BrowserWindow, dialog} = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

function createMainWindow() {
  mainWindow = new BrowserWindow({width: 1250, height: 700})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.setResizable(false)
  mainWindow.setFullScreenable(false)
  mainWindow.on('close', function(event) {
    let choice = dialog.showMessageBox(this, {
      type: 'question',
      buttons: ['Yes', 'No'],
      title: 'Confirm',
      message: 'Are you sure you want to quit?'
    })
    if(choice == 1){
      event.preventDefault()
    }
  })
}

app.on('ready', createMainWindow)