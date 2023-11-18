/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const AreaCard = ({ imageUrl, name, profession }) => {
    return (
        <Box m={'3px'}>
            <Card sx={{ maxWidth: 1300, position: 'relative' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="220"
                        image={imageUrl}
                        alt="Imagem do Card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {profession}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box >
    );
};

export default AreaCard;
