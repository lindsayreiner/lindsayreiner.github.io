import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ProjectCard({ imageLink, title, description, role, technologies, websiteLink, gitLink }) {
    return (
        <div>
            <Card className="cardCont" sx={{ maxWidth: 345 }}>
                <CardMedia className="cardImg"
                    component="img"
                    alt="app_photo"
                    height="140"
                    image={imageLink}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>{description}</p>
                        <p><b>Role:</b> {role}</p>
                        <p><b>Technologies used:</b> {technologies}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={websiteLink}><Button size="small">Visit Website</Button></a>
                    <a href={gitLink}><Button size="small">GitHub Repo</Button></a>
                </CardActions>
            </Card>
        </div>
    )
}
