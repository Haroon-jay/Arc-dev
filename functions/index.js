const functions = require("firebase-functions");
const admin=require("firebase-admin")
const nodeMailer=require("nodemailer")
const config=functions.config()
admin.initializeApp()



const transporter=nodeMailer.createTransport({
    service:"Gmail",
    auth:{
        user:config.user.email,
        pass:config.user.password
    }
})

let mailOptions={
    from:"Arc Development",
    to:"haroonjawad6@gmail.com",
    subject:"Testing Nodemailer -- Firebase Functions",
    text:"Test Successful"
}
 // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
transporter.sendMail(mailOptions)
//   response.send("Hello from Firebase!");
});
