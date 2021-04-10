import React, {useState} from 'react';
import getCommerce from '../utils/commerce';
import makeStyles from '../styles/styles';

import Link from 'next/link';
import Layout from '../components/Layout';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';


export default function Home(props) {
  if (global.window) {
    var tokenLogin = localStorage.getItem("myLogin");
    if(tokenLogin === null) {
      console.log('There is no token');
      window.location.replace('/Login');
      return <h1>Return to login page...</h1>
    } else {
      console.log('there is a token');
    }
  }

  const { products } = props;
  const classes = makeStyles();
  return (
    <Layout title="Home" commercePublicKey={props.commercePublicKey}>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Grid container spacing={10}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} lg={3}>
                    <Card className={classes.root}>
                      <Link href={`/products/${product.permalink}`}>
                      <CardActionArea>
                      <CardMedia className={classes.media} image={product.media.source} alt={product.name} />
                      <CardContent>
                      <div className={classes.cardContent}>
                        <Typography variant="body2" component="p">
                          {product.name}
                        </Typography>
                        <Typography>
                          {product.price.formatted_with_symbol}
                        </Typography>
                      </div>
                      </CardContent>
                      </CardActionArea>
                      </Link>
                    </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}
