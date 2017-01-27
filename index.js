const Electron = require('electron');

let mainWindow
function createWindow () {
  if (mainWindow) return

  let options = {
    width: 800,
    heigth: 480,
    title: '',
  }
  mainWindow = new Electron.BrowserWindow(options)
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
}

Electron.app.on('ready', () => {
  const electronDevtoolsInstaller = require('electron-devtools-installer');
  const installExtension = electronDevtoolsInstaller.default;
  installExtension(electronDevtoolsInstaller.REACT_DEVELOPER_TOOLS);
  createWindow()
})
