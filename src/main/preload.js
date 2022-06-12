const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
	toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
	system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('ffmpeg', {
	get: (type) => ipcRenderer.invoke('load-ffmpeg:get', type)

})
ipcRenderer.on('get-ffmpeg:result', function (evt, data) {
	console.log('get-ffmpeg-data')
	console.log(data)
});