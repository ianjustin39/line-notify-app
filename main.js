// 引入electron並建立一個Browserwindow
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// 保持window物件的全域性引用,避免JavaScript物件被垃圾回收時,視窗被自動關閉.
let mainWindow

function createWindow() {
  //建立瀏覽器視窗,寬高自定義具體大小你開心就好
  mainWindow = new BrowserWindow({ width: 800, height: 600 })


  //載入應用-----  electron-quick-start中預設的載入入口
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // 載入應用----適用於 react 專案
  // mainWindow.loadURL('http://localhost:3000/');

  // 開啟開發者工具，預設不開啟
  // mainWindow.webContents.openDevTools()

  // 關閉window時觸發下列事件.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// 當 Electron 完成初始化並準備建立瀏覽器視窗時呼叫此方法
app.on('ready', createWindow)

// 所有視窗關閉時退出應用.
app.on('window-all-closed', function () {
  // macOS中除非使用者按下 `Cmd + Q` 顯式退出,否則應用與選單欄始終處於活動狀態.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS中點選Dock圖示時沒有已開啟的其餘應用視窗時,則通常在應用中重建一個視窗
  if (mainWindow === null) {
    createWindow()
  }
})

// 你可以在這個指令碼中續寫或者使用require引入獨立的js檔案.   