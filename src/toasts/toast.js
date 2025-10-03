import { toast } from 'react-toastify'

const github = "https://github.com/Sadri199"

export const notifyWarn = () => toast.warn(`Cannot add more of this product to the Cart, you can edit the quantity directly in the cart!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })

export const notifySuccess = (quantity, name) => toast.success(`Adding ${quantity} of ${name} to the cart!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })

export const notifyClear = () => toast.info(`Your cart was erased!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })

export const notifyDelete = (name) => toast.info(`You erased ${name} from your cart!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })

export const notifyEdit = (name) => toast.info(`You changed the quantity of ${name} correctly!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })

export const notifyNewOrder = (id) => toast.success(`Congratulations, you created the order ${id}! For other projects, check out my Github ${github}`, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        })

export const notifyDBError = (error) => toast.error(`Oh no, something went wrong with the connection to the database, here is the error: ${error}`, {
        position: "top-center",
        hideProgressBar: false,
        autoClose: false,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
