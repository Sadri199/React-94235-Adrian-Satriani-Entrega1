import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CornerDownRight } from "lucide-react"


import { Button } from "./ui/button"

function ItemList({products}) {

    return (
        <div className="flex-2/12">
            {products.map((product) => 
                    <Card className="w-full max-w-sm" key={product.id} >
                        <CardHeader>
                            <CardTitle>{product.title}</CardTitle>
                            <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={product.thumbnail} />
                        </CardContent>
                        <Button>
                            <CornerDownRight />More info
                        </Button>
                    </Card>
                )}  
        </div>
    )
}

export default ItemList