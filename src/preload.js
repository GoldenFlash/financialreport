// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// const fs = require('fs');
// let filePath = '/path/to/your/file.txt';

// fs.readFile(filePath, {encoding: 'utf-8'}, (err, res) => {
// if(err){
// console.log(err);
// } else {
// // 在这里，可以将文件内容res发送到渲染进程
// mainWindow.webContents.send('showFileContent', filePath, res);
// }
// });

const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../assets');  // 替换为你的文件夹路径
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('无法读取目录:', err);
    return;
  }
  console.log('文件夹中的文件:', files);
});
