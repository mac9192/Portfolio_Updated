"use server"
import React from 'react'
import { Resend } from 'resend'
import {  validateString, getErrorMessage } from '../services/utils'
import ContactFormEmail from '../email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)
 
 

export const sendEmail = async (formData: FormData) => {

    const senderName = formData.get('senderName')
    const senderEmail = formData.get('senderEmail')
    const senderSubject = formData.get('senderSubject')
    const senderMessage = formData.get('senderMessage')


    //Simple Server-Side Validation
    if(!validateString(senderName, 500)){
        return {
            error: "Invalid Sender Name"
        }
    }
    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid Sender Email"
        }
    }
    if(!validateString(senderSubject, 500)){
        return {
            error: "Invalid Sender Subject"
        }
    }
    if(!validateString(senderMessage, 5000)){
        return {
            error: "Invalid Sender Message"
        }
    }

 
    console.log("Running on a server")
    console.log(formData.get("senderName"));
    console.log(formData.get("senderEmail"))
    console.log(formData.get("senderSubject"))
    console.log(formData.get("senderMessage"))

    let data;
    
    try {
    data=await resend.emails.send({
        from:"Portfolio Contact Form <onboarding@resend.dev>",
        to:"miguelcolmenares96@gmail.com",
        subject:"Message from contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            senderName: senderName as string,
            senderEmail: senderEmail as string,
            senderSubject: senderSubject as string,
            senderMessage: senderMessage as string
        })
        // text: senderMessage as string
    })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
 
}
 return {
     data,
 }
}