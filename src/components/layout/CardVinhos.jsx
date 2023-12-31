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
                    component="image"
                    image={imageUrl}
                    alt="Imagem do Card"
                    className={s.Cards} />
                <CardContent las>
                    <Typography gutterBottom component="div">
                        <div className={s.Title}>
                            {Title}
                        </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <div className={s.Continent}>
                            {Continent}
                        </div>
                    </Typography>
                    <Typography marginTop='1em'>
                        <div className={s.Price}>
                            R$ {Price}
                        </div>
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
