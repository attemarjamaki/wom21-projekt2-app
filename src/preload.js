const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    
    btnClicked: async (data) => {
        console.log('click registered in preload.js')
        return await ipcRenderer.invoke('btn-handler', data)
    },

    getCabinsOwned: async (data) => {
        console.log('getCabinsOwned preload.js')
        return await ipcRenderer.invoke('get-cabins-owned-handler', data)
    },

    getLogin: async (data) => {
        console.log('getLogin preload.js')
        return await ipcRenderer.invoke('login-handler', data)
    },
    
    getOrders: async (data) => {
        console.log('order preload.js')
        return await ipcRenderer.invoke('orders-handler', data)
    },

    getServices: async (data) => {
        console.log('getservices preload.js')
        return await ipcRenderer.invoke('services-handler', data)
    },
/*
    olenJumala: async (data) => {
        console.log('jumala preload.js')
        return await ipcRenderer.invoke('window-handler', data)
    },
*/


    /*
    getCredentials: async (data) => {
        console.log('credential preload.js')
        return await ipcRenderer.invoke('credential-handler', data)
    }
    */
})