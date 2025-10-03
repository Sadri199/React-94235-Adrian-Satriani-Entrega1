import { getFirestore, 
        collection, 
        getDocs, 
        query, 
        where, 
        or, 
        doc, 
        getDoc,
        addDoc } from "firebase/firestore"
import { notifyNewOrder, notifyDBError } from "../toasts/toast"
import { app } from "./config"

const db = getFirestore(app)

export const getAllDocs = async (firebaseCollection) => {
    const documents = []

    try{
        const querySnapshot = await getDocs(collection(db, firebaseCollection))

        querySnapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
        })
    } catch (error){
        notifyDBError(error)
    }

    return documents
}

export const filterProducts = async (param) => {
    const dashForSpace = param.replaceAll('-', ' ')

    const queryAll = query(collection(db, "acParts"), 
        or (where("category", "==", dashForSpace), where("brand", "==", param)))
    const documents = []

    try{
        const querySnapshot = await getDocs(queryAll)
    
        querySnapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
        })
    } catch (error){
        notifyDBError(error)
    }

    return documents
}

export const getSingleProduct = async (id) => {

    const docRef = doc(db, "acParts", id)
    try{
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
        return {...docSnap.data(), id: docSnap.id}
        } else {
        notifyDBError("We couldn't find that product!")
        }
    } catch (error){
        notifyDBError(error)
    }
}

export const postOrder = async (order) => {
    try{
        const docRef = await addDoc(collection(db, "orders"), {order})
        notifyNewOrder(docRef.id)
        return true
    } catch (error){
        notifyDBError(error)
        return false
    }
}