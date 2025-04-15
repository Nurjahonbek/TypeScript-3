
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <Grid container spacing={4} sx={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: '12px' }}>
            <CardActionArea component={Link} to={`/product/${product.id}`}>
              <CardMedia
                component="img"
                height="200"
                image={`https://picsum.photos/seed/${product.id}/500/300`}
                alt={product.name}
                sx={{ objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Lora' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Lora' }}>
                  {product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                  ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsPage;
