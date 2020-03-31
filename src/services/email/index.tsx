const functionUrl = 'https://us-central1-retrotool-ba494.cloudfunctions.net/sendMail'

export const invitationRequestUrl = (email: string, userId: string) => `${functionUrl}/?dest=${email}&userId=${userId}`
