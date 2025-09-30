import { getFirestore, collection, getDocs } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getAllDocs = async (firebaseCollection) => {
    const querySnapshot = await getDocs(collection(db, firebaseCollection))
    const documents = []

    querySnapshot.forEach((doc) => {
    documents.push({...doc.data(), id: doc.id})
    })

    return documents
}

//Realizar query para filtrar productos por categorias y brands