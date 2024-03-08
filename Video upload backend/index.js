// import jsonserver
const jsonserver=require('json-server')

// create server
const server=jsonserver.create()

//create middle ware
const middleware=jsonserver.defaults()

// set router
const router=jsonserver.router("db.json")


// create port
const PORT=process.env.PORT || 4000


// use middlware use in server
server.use(middleware)

// use router
server.use(router)

// to run server
server.listen(PORT,()=>{
    console.log("media player started at port:"+PORT);
})