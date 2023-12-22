// importing json-sever dependency/package
const jsonServer=require('json-server')

// create server
const sever=jsonServer.create()

// create middleware
const middleware=jsonServer.defaults()

// initializing router with resource
const router=jsonServer.router('db.json')

// implememting middleware to server
sever.use(middleware)

// implementing router to sever
sever.use(router)

// defining PORT number
const PORT=process.env.PORT || 4000

// activating server into listening for requests
sever.listen(PORT,()=>
console.log("sever is running in PORT:",PORT)
)