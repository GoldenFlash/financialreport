const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const isDev = require("electron-is-dev")

const fs = require('fs');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration:true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if(isDev){
    mainWindow.loadURL('http://localhost:3000/')
  }else{
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  }
  // and load the index.html of the app.

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


ipcMain.handle('get-folder-files', async (event, folderPath) => {
  const directoryPath = path.join(__dirname, '../assets');  // 替换为你的文件夹路径

  try {
    const files = await fs.promises.readdir(directoryPath);
    return files;  // 返回结果
  } catch (error) {
    console.error('读取文件夹失败:', error);
    throw new Error('无法读取文件夹');
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
