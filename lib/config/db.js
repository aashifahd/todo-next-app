import mongoose from "mongoose"

export const ConnectDB = async () =>{
 await mongoose.connect('mongodb+srv://imashahddev:pCpn57Goc8UOJ17B@cluster0.rxgo9yh.mongodb.net/')
    console.log('DB Connected')
}