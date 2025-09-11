import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ItemCount from "./ItemCount"

function ItemDetail({product}) {

    return ( 
        <div className="flex-2/12">
            <Card className="w-full max-w-sm" key={product?.id} >
                <CardHeader>
                    <CardTitle>{product?.title}</CardTitle>
                    <CardDescription>{product?.category}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img src={product?.thumbnail} />
                    <p>{product?.description}</p>
                    <p>${product?.price}</p>
                    <p>Brand: {product?.brand}</p>
                    <p>Return Policy: {product?.returnPolicy}</p>
                </CardContent>
                <ItemCount/>
            </Card>
        </div>
     )
}

export default ItemDetail