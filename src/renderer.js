
const getCabinsOwned = async () => {
   // console.log("getCabinsOwned renderer");

    const cabinsOwned = await window.electron.getCabinsOwned();

   console.log(cabinsOwned);

   cabinsOwned.forEach(element => {

       document.querySelector('#cabinsOwned').innerHTML += `<div>${element.adress}</div>`;
       
   });

}

const getOrders = async () => {
    // console.log("getCabinsOwned renderer");
 
     const orders = await window.electron.getOrders();
 
    console.log(orders);
 
    orders.forEach(element => {
 
        document.querySelector('#orders').innerHTML += `<div>${element.service}</div>`;
        
    });
 
 }

 const getServices = async () => {
    // console.log("getCabinsOwned renderer");
 
    const services = await window.electron.getServices();
 
    console.log(services);
 
    services.forEach(element => {
 
        document.querySelector('#services').innerHTML += `<div>${element.service}</div>`;
        
    });
 
 }

 const getLogin = async () => {

    const reply = await window.electron.getLogin("hello from login");
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    console.log('login requested')
    console.log(email);
    console.log(password);

   // document.querySelector('#form').remove()
   // return email, password;
 
}
/*
const olenJumala = async () => {

    console.log("jumalaaaaa");

    const win = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')

        },
        autoHideMenuBar: true

    })
    
    win.loadFile(path.join(__dirname, 'index1.html'));

    win.webContents.openDevTools();

}
*/


//freddes button
document.querySelector('#btn').addEventListener('click', async () =>{

    console.log('clicked');

    const reply = await window.electron.btnClicked("hello from browser");
    console.log(reply);

});



//login
document.querySelector('#submit').addEventListener('click', async () =>{

    getLogin();
  //  olenJumala();

});

//get cabins
document.querySelector('#cabins-btn').addEventListener('click', async () =>{

    getCabinsOwned();

});

document.querySelector('#orders-btn').addEventListener('click', async () =>{

    console.log("clicked")

    getOrders();

});

document.querySelector('#services-btn').addEventListener('click', async () =>{

    console.log("clicked serv")

    getServices();

});





/*
const getCredentials = (email, password) => {
    // console.log("getCabinsOwned renderer");

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    console.log('login requested')

    console.log(email);
    console.log(password);


    const getCredentials = await window.electron.getCredentials();
    
    console.log("credentialas" + getCredentials)

    const reply = await window.electron.getLogin("hello from login");

    return email, password;

 
}

*/

/*
const email = document.querySelector('#email').value
const password = document.querySelector('#password').value

    getCredentials(email,password);
*/ 