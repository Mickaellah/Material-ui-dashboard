import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

export default function CardItem({fruit, price, description, buttonText}) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <b>Fruit name:</b> {fruit}
            </Typography>
            <Typography variant="h5" component="div">
                <b>Fruit price:</b> ${price}
            </Typography>
            <Typography>
                <b>Description:</b> {description}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">{buttonText}</Button>
            </CardActions>
        </Card>
    )
}