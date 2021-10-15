require('dotenv').config()
const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const fetch = require('electron-fetch').default


const createWindow = () => {
    
    const win = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')

        },
        autoHideMenuBar: true

    })
    
    win.loadFile(path.join(__dirname, 'index.html'));

   // win.webContents.openDevTools();

}

const createSecondWindow = () => {
    
    const wins = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')

        },
        autoHideMenuBar: true

    })
    
    wins.loadFile(path.join(__dirname, 'login.html'));

   // wins.webContents.openDevTools();

}

/*
const getCredentials = async () => {
    
    console.log("getCredentials")


}
*/
const getCabinsOwned = async () => {
    console.log("getCabinsOwned")

}

const getLogin = async () => {
    
}

const getOrders = async () => {
    
}

const btnClicked = async () => {
    
}
/*
const olenJumala = async () => {
    
}
*/

app.on('ready', createWindow)

app.on('ready', createSecondWindow)

app.on('ready', getCabinsOwned)

app.on('ready', getLogin)

app.on('ready', getOrders)

app.on('ready', btnClicked)






ipcMain.handle('btn-handler', async (event, data) => {
    console.log("click registered in main")
    return 'Main sais hello'
})

/*
ipcMain.handle('credential-handler', async (event, data) => {
    console.log("creduuuuuu")

    return 'creduuuuuu11'
})
*/

// get cabins
ipcMain.handle('get-cabins-owned-handler', async (event, data) => {
    console.log("click registered in main2 nu ricke")

    

    try {
        const response = await fetch('https://pure-tor-40390.herokuapp.com/cabins/owned', {
            headers: {'Authorization' : 'Bearer ' + process.env.CABINS_TOKEN },
            timeout: 5000
        })
        
        cabins = await response.json()
        return cabins

    } catch (error) {
        console.log(error.message)
        return error.message
    }

})


// login
ipcMain.handle('login-handler', async (event, data) => {

    console.log("login click registered in main")

try {

    const data = {/*firstname: "kalle", lastname: "balle", */email: "jon@doe.com", password: "Password123"}

    const response = await fetch('https://pure-tor-40390.herokuapp.com/users/login/', {
        method: "POST",
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(data),
        timeout: 5000
    })

    const login = await response.text()
    console.log(login)
    return login

} catch (error) {
    console.log(error.message)
    return error.message
}



})


// get orders
ipcMain.handle('orders-handler', async (event, data) => {
    
    console.log("orders registered in main")

    try {
        const response = await fetch('https://young-reaches-45720.herokuapp.com/orders', {
            timeout: 5000
        })
        
        orders = await response.json()
        return orders

    } catch (error) {
        console.log(error.message)
        return error.message
    }

})

// get services
ipcMain.handle('services-handler', async (event, data) => {
    
    console.log("services registered in main")

    try {
        const response = await fetch('https://young-reaches-45720.herokuapp.com/services', {
            timeout: 5000
        })
        
        services = await response.json()
        return services

    } catch (error) {
        console.log(error.message)
        return error.message
    }

})


