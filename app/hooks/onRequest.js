const onRequest = (request, reply, next) => {

    console.log("Getting a Request");
    next();
      
}

module.exports = onRequest