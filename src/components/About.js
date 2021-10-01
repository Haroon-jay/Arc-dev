import React from 'react'
import { makeStyles,useTheme } from "@material-ui/core/styles"
import { useMediaQuery,Grid,IconButton,Typography } from '@material-ui/core';

import history from "../assets/history.svg"
const useStyles=makeStyles(theme=>({
    missionStatement:{
        fontStyle:"italic",
        fontWeight:300,
        fontSize:"1.5em"
        ,maxWidth:"50em"
        ,lineHeight:1.4
    },
    rowContainer:{
        padding: "0em 5em 2em 5em",
        [theme.breakpoints.down("sm")]:{
            padding:"1em 2em 5em 2em"
        }}
}))
const About = () => {
    const classes=useStyles()
    const theme=useTheme()
    const matchesMd=useMediaQuery(theme.breakpoints.down("md"))
    const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop:"2em"}}>
                <Typography variant="h2">About Us</Typography>
            </Grid>
            <Grid item container justifyContent="center" className={classes.rowContainer}>
              <Typography align="center" variant="h4" className={classes.missionStatement}>Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.</Typography>
            </Grid>
            <Grid container alignItems={matchesMd?"center":undefined} direction={matchesMd?"column":"row"} item style={{marginTop:"8em"}} className={classes.rowContainer}>
                <Grid item container  direction="column" lg style={{maxWidth:"35em",textAlign:matchesMd?"center":""}}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>History</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph style={{fontWeight:"700",fontStyle:"italic"}}>
                            We're the New kid on the Block
                        </Typography>
                        <Typography paragraph variant="body1">
                        Founded in 2019, we’re ready to get our hands on the world’s business problems.


                        </Typography>
                        <Typography paragraph variant="body1">
                        It all started with one question: Why aren’t all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.


</Typography>
<Typography paragraph variant="body1">
We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.


</Typography>
<Typography paragraph variant="body1">
All this change can be a lot to keep up with, and that’s where we come in.


</Typography>
                    </Grid>
                </Grid>
            <Grid item container justifyContent="center" lg>
                <img src={history} style={{maxHeight:"22em",maxWidth:matchesSm&&"320px"}} alt="quill"/>
            </Grid>
            </Grid>
            <Grid direction="column" className={classes.rowContainer} item container>
              
            </Grid>
        </Grid>
    )
}

export default About
