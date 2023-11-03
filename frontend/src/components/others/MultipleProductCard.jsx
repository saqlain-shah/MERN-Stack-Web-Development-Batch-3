import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ProgressLoading from "./ProgressLoading"
import SingleProductCard from "./SingleProductCard"
const ProductCard = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([{
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
    }])

    const handleButtonClick = (index) => {

        <>

            {console.log("Index Value", index + 1)}
            <SingleProductCard index={index + 1} />
        </>
        navigate('/product-detail');
    };

    const cardStyle = {
        display: 'inline-block', // Display cards in a row
        maxWidth: '300px',       // Set maximum card width
        margin: '8px',           // Adjust margin to create space between cards
        border: '1px solid #ddd',
        padding: '16px',
    };

    useEffect(() => {
        axios.get('https://dummyjson.com/products/')
            .then(response => {
                setData(response.data)
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

                    {
                        data.products.map((item, index) => (
                            <Card key={index} style={cardStyle}
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px', margin: 'auto', border: '1px solid #ddd', padding: '16px' }}>
                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height="200"
                                    image={item.thumbnail}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6" component="div">
                                        {index + 1}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="h6" color="text.primary">
                                        ${item.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.discountPercentage}% off
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <StarIcon color="primary" sx={{ marginRight: '4px' }} />
                                        {item.rating}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        In Stock: {item.stock} items
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Brand: {item.brand}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Category: {item.category}
                                    </Typography>
                                </CardContent>
                                <div sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                                    {item.images && item.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            style={{ width: '80px', marginRight: '8px', marginBottom: '8px' }}
                                        />
                                    ))}
                                </div>
                                <Button variant="contained"
                                    onClick={() => handleButtonClick(index)}>
                                    More Detail
                                </Button>
                            </Card>

                        ))

                    }
                </div>

            ) : null}





        </React.Fragment>

    );
};

export default ProductCard;
