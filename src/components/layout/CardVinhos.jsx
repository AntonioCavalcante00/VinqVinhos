/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './CardVinhos.module.css'


const AreaCard = ({ imageUrl, Title, Continent, Price }) => {

    const [isFilled, setIsFilled] = useState(true);

    const handleClick = () => {
        setIsFilled(!isFilled);
    };


    return (
        <>
            <Card className={s.Container}>
                <CardMedia
                    component="img"
                    height="370"
                    image={imageUrl}
                    alt="Imagem do Card" />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {Title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {Continent}
                    </Typography>
                    <Typography variant='h5' marginTop='1em'>
                        R$ {Price}
                    </Typography>
                    <div className={s.CardBuy}>
                        <button className={s.Button}>
                            <Link className={s.NameButton} to='/vinhos'>Comprar</Link>
                        </button>
                        <CardActions onClick={handleClick}>
                            {isFilled ? (
                                <button className={s.Favorite}><FavoriteBorderIcon /></button>
                            ) : (
                                <button className={s.Favorite}><FavoriteIcon /></button>
                            )}
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default AreaCard;
