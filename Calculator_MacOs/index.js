const { app, BrowserWindow } = require('electron')

// 애플리케이션 생성
let scale = 1;
app.on('ready', () => {
  // 메인 창 생성
  const mainWindow = new BrowserWindow({
    width: 232 * scale,
    height: 322 * scale, 
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true // 렌더러 프로세스에서 Node.js 사용 가능하게 설정
    }
  })

  // 메인 창 설정
  mainWindow.loadFile('index.html')

  // 이벤트 처리
  mainWindow.on('closed', () => {
    app.quit()
  })
})
