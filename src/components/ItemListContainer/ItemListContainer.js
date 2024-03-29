import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.js"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config.js"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        //1. referencia
        const productosRef = collection(db, "productos")
        const q = categoryId
                  ? query(productosRef, where("category", "==", categoryId) )
                  : productosRef
        //2. peticion asincronica
        
        getDocs(q)
          .then((resp) => {
            setProductos(resp.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id
              }
            }))
          })
          .finally(() => {
            setLoading(false)
          })
    },[categoryId])

    
    return (
      <div>
        {
          loading
            ?<h2>Cargando...</h2>
            :<ItemList productos={productos}/>
        }
      </div>
    );
}

export default ItemListContainer