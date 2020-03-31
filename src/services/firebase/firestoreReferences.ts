import Firebase from './index'

export const db = Firebase.firestore()

export const userReference = (userId: string) => db.collection('users').doc(userId)

export const adminReference = (adminId: string) => db.collection('admins').doc(adminId)

export const companyReference = (companyId: string) => db.collection('companies').doc(companyId)

export const retrosReference = () => db.collection('retros')

export const answersReference = () => db.collection('answers')

export const usersReference = () => db.collection('users')
