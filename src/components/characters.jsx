import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacterAction, nextCharacterAction, previousCharacterAction } from "../redux/Duck"
import { Button, Typography, Grid, makeStyles, Card, CardMedia, CardContent } from "@material-ui/core";

const useStyle = makeStyles({
    container_button: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: "auto",
        paddingBottom: "50px",
        paddingTop: "30px"
    },
    container_grid: {
        width: '90%',
        margin: "auto",
    },
    title: {
        marginTop: "30px"
    }
})

const Characters = () => {

    const dispatch = useDispatch()

    const characters = useSelector(store => store.characters.array)

    const styles = useStyle()
    return (
        <>
            <Typography variant="h3" align="center" className={styles.title}>Rick And Morty</Typography>
            <div className={styles.container_button}>
                <Button variant="contained" color="primary" onClick={() => dispatch(getCharacterAction())}>
                    get characters
                </Button>
                <Button variant="contained" color="primary" onClick={() => dispatch(previousCharacterAction())}>
                    Previous characters
                </Button>
                <Button variant="contained" color="primary" onClick={() => dispatch(nextCharacterAction())}>
                    Next characters
                </Button>
            </div>
            <div className={styles.container_grid}>
                <Grid container spacing={2} >
                    {
                        characters.map(character => (
                            <Grid item sm={3} key={character.id}>
                                <Card >
                                    <CardMedia component="img" image={character.image} alt={character.name} />
                                    <CardContent>
                                        <Typography variant="h6" align="left">{character.name}</Typography>
                                        <Typography variant="body1" align="left"> {`Status:  ${character.status}`}</Typography>
                                        <Typography variant="body1" align="left"> {`Species:  ${character.species}`}</Typography>
                                        <Typography variant="body1" align="left"> {`Gender:  ${character.gender}`}</Typography>
                                        <Typography variant="body1" align="left"> {`Origin:  ${character.origin.name}`}</Typography>
                                        <Typography variant="body1" align="left"> {`Location:  ${character.location.name}`}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </>
    )
}

export default Characters