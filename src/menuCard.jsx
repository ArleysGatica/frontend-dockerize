import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import React, { useState } from 'react'
import {postFactura} from "./servicesFactura"

const MenuCard = (props) => {
    const {info,classes}=props
    const apiUrl = "https://localhost:44347/";
    const fechaD = new Date();
    
  console.log(info);
    const handleFactura=()=>{
       const facturaDetalles={productoID:info.productoID,CatidadProductosVendido:parseFloat(2)};
      const Factura={ClienteID:"d4319550-9481-4632-bb4d-ae96f27646c5",Total:info.precio,Fecha:`${fechaD.getFullYear()}-${
        parseInt(fechaD.getMonth()) + 1
      }-${fechaD.getDate()}`,facturaDetalles}
      console.log(Factura)
      postFactura(Factura);
    }

    return ( <>
             <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    alt={info.nombre}
                    image={`${apiUrl}${info.imagen}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {info.Producto}
                    </Typography>
                    <Typography>{`C$ ${info.precio}`}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {info.descripcion}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <AddShoppingCartIcon  />
                  </Button>
                  <Button size="small" color="primary">
                    <strong>Leer más</strong>
                  </Button>
                </CardActions>
              </Card>
          </>
         );
}
 
export default MenuCard;