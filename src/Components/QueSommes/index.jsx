import React from 'react';
import { useTheme } from '@mui/styles';
import { useStyles } from './QueSommes';
import { Grid } from '@mui/material';
import qui from '../../Assests/qui.png';
const Qui = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>
            <div className={classes.headerWrapper}>
                <div className={classes.headerContent}>
                    <div className={classes.headingTitle}>
                        <h2 className={classes.headingContent}>Qui sommes-nous?</h2>
                    </div>
                    <div className={classes.contentWrapper}>
                        <Grid container alignItems="center" justifyContent="center">
                            <Grid item md={4}>
                                <div>
                                    <img style={{ width: '60%' }} src={qui} />
                                </div>
                            </Grid>
                            <Grid item md={8}>
                                <p className={classes.featuredParagraph}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            </Grid>
                        </Grid>
                        <div className={classes.ParagraphContent}>
                            <Grid>
                                <p className={classes.featuredParagraph}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Qui;
