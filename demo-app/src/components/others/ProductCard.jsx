import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ProgressLoading from "./ProgressLoading"

const ProductCard = () => {
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

    useEffect( () => {
        axios.get('https://dummyjson.com/products/')
            .then(response => {
                setData(response.data)
                setLoading(false)

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

                <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px', margin: 'auto', border: '1px solid #ddd', padding: '16px' }}>
                    <CardMedia
                        component="img"
                        alt={data.title}
                        height="200"
                        image={data.thumbnail}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
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
                    <Button variant="contained" color="primary" sx={{ marginTop: '16px' }}>
                        Add to Cart
                    </Button>
                </Card>
            ) : null}





        </React.Fragment>

    );
};

export default ProductCard;
