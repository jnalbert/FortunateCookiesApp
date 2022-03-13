import * as functions from "firebase-functions";
import { SENDGRID_API_KEY } from '../key';

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


exports.sendRewardEmail = functions.https.onCall(async (data, context) => {
   

  console.log('Sending email...');
  
    // console.log(data)
  
    const msg = {
      to: data.toEmail, // Change to your recipient
      from: 'fortunatecookiesrewards@gmail.com', // Change to your verified sender
      template_id: "d-5fb97f496b4a41d1a853d1072eafb02c",
      dynamic_template_data: {
        first_name: data.firstName,
        last_name: data.lastName,
      }
    }

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error: any) => {
        console.error(error)
      })
  });
