const regex = /^\/usuario\/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

console.log(regex.test("/usuario/efrahimtks@hotmail.com"));