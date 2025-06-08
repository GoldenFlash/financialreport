// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// const fs = require('fs');
// let filePath = '/path/to/your/file.txt';

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myFile', {
  getFolderFiles: (path) => ipcRenderer.invoke('get-folder-files', path),
})



