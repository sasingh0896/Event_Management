// let storage = multer.diskStorage({
//     destination:(req, file, cb)=>{
//         console.log("-----here")
//         cb(null, 'imageUploads/')
//     },
//     filename : (req, file , cb)=>{
//         cb(null,Date.now()+file.filename)
//     }
// })

// var upload = multer({
//     storage : storage
// })

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.send('uuuuuuuu')
//  console.log(req.file)
//  })
