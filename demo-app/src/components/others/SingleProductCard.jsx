import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ProgressLoading from "./ProgressLoading"

const SingleProductCard = ({ index } ) => {
    console.log("Product ID", index)

    const [productID, setProductID] = useState(index)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState({
        id: '',
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: '',
        brand: ' ',
        category: '',
        thumbnail: '',
        images: '',
    })
    console.log("Product ID", productID)

    const cardStyle = {
        display: 'inline-block', // Display cards in a row
        maxWidth: '300px',       // Set maximum card width
        margin: '8px',           // Adjust margin to create space between cards
        border: '1px solid #ddd',
        padding: '16px',
    };

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productID}`)
            .then(response => {
                setData(data)
                setLoading(false)
                console.log("state variable value", response.data)

            })
            .catch(err => {
                console.log(err)
                setError(err)
            })

    }, [])
    return (

        <React.Fragment>

            {loading ? (
                <ProgressLoading />

            ) : error ? (
                <p>Error: {error.message}</p>
            ) : data ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Card style={cardStyle}
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px', margin: 'auto', border: '1px solid #ddd', padding: '16px' }}>
                        <CardMedia
                            component="img"
                            alt={data.title}
                            height="200"
                            image={data.thumbnail}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="div">

                            </Typography>
                            <Typography variant="h6" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {data.description}
                            </Typography>
                            <Typography variant="h6" color="text.primary">
                                ${data.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.discountPercentage}% off
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <StarIcon color="primary" sx={{ marginRight: '4px' }} />
                                {data.rating}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                In Stock: {data.stock} items
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Brand: {data.brand}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Category: {data.category}
                            </Typography>
                        </CardContent>
                        <div sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                            {data.images && data.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    style={{ width: '80px', marginRight: '8px', marginBottom: '8px' }}
                                />
                            ))}
                        </div>

                    </Card>
                </div>
            ) : null}





        </React.Fragment>

    );
};

export default SingleProductCard;
