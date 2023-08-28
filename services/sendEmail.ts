"use server"

export const sendEmail = async (formData: FormData) => {
    console.log("Running on a server")
    console.log(formData.get("senderName"));
    console.log(formData.get("senderEmail"))
    console.log(formData.get("senderSubject"))
    console.log(formData.get("senderMessage"))
}