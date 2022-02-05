import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useStyles } from './tabsStyle';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import Heart from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TabPanelMissions from './TabPanelMissions';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const RightDiv = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [value, setValue] = React.useState(0);
    const [description, setDescription] = React.useState(false);

    let developers = [
        {
            skill: 'Développeur Javascript',
            type: 'Capgemini',
            tags: ['#Javascript', '#Node JS', '#Front End'],
            moreTags: ['TJM 350€/j.', 'Durée 3 et 6 mois.', 'Dispo Temps Plein.', 'Requis 1 à 3 ans.', ' Lieu Toulouse', 'Télétravail  Non.', 'Secteur Immobilier'],
            timing: 'Il y a 2 Jours ',
            candidator: true,
            descriptionActive: 'Description',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque ut laudantium, ex, similique saepe hic deleniti suscipit autem neque ab optio dolorem sit voluptatum ea reprehenderit molestiae esse voluptatibus.',
            description2:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque ut laudantium, ex, similique saepe hic deleniti suscipit autem neque ab optio dolorem sit voluptatum ea reprehenderit molestiae esse voluptatibus.',
            description3:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque ut laudantium, ex, similique saepe hic deleniti suscipit autem neque ab optio dolorem sit voluptatum ea reprehenderit molestiae esse voluptatibus.',
        },
        {
            skill: 'Chef de Projet Agile',
            type: 'Anonyme',
            tags: ['#Javascript', '#Node JS', '#Front End'],
            moreTags: ['TJM 350€/j.', 'Durée 3 et 6 mois.', 'Dispo Temps Plein.', 'Requis 1 à 3 ans.', ' Lieu Toulouse', 'Télétravail  Non.', 'Secteur Immobilier'],
            timing: 'Il y a 2 Jours ',
        },
        {
            skill: 'UX / UI Designer',
            type: 'Orange',
            tags: ['#Javascript', '#Node JS', '#Front End'],
            moreTags: ['TJM 350€/j.', 'Durée 3 et 6 mois.', 'Dispo Temps Plein.', 'Requis 1 à 3 ans.', ' Lieu Toulouse', 'Télétravail  Non.', 'Secteur Immobilier'],
            timing: 'Il y a 2 Jours ',
        },
    ];
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={<div className={classes.tabTitle}>Rechercher</div>} {...a11yProps(0)} />
                    <Tab label={<div className={classes.tabTitle2}>Missions Enregistrées</div>} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            endAdornment: <SearchIcon />,
                        }}
                    />
                </div>
                <div className={classes.flex}>
                    <div className={classes.classer}>85 missions disponibles</div>
                    <div style={{ width: '50%', display: 'flex' }}>
                        <div className={classes.classer}>Classer</div>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            className={classes.searchDiv}
                            fullWidth
                            InputProps={{
                                endAdornment: <CloseIcon />,
                            }}
                        />
                    </div>
                </div>
                {developers.map(item => {
                    return (
                        <>
                            <div className={classes.flexDiv}>
                                <div className={classes.flexDiv1}>
                                    <p className={classes.developer}>
                                        {item.skill}{' '}
                                        <span onClick={() => setDescription(!description)}>
                                            <ArrowCircleRightIcon />{' '}
                                        </span>
                                    </p>
                                    <p className={classes.type}>{item.type}</p>
                                    <p>
                                        <Stack direction="row" spacing={2} className={classes.tags}>
                                            {item.tags.map((item, key) => {
                                                return <Chip label={item} key={key} />;
                                            })}
                                        </Stack>
                                        <Stack direction="row" flexWrap={'wrap'} spacing={0} mt={3} className={classes.moreTags}>
                                            {item.moreTags.map((item, key) => {
                                                return <Chip label={item} className={classes.chip} key={key} />;
                                            })}
                                        </Stack>
                                    </p>
                                </div>
                                <div className={classes.flexDiv2}>
                                    <div style={{ display: 'flex' }}>
                                        <div className={classes.timing}>{item.timing} &nbsp;</div>
                                        <div>
                                            <Heart className={classes.heart} />
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
                                        <img src="./src/public/archor.png" />
                                    </div>
                                </div>
                            </div>
                            {description && (
                                <div>
                                    <h3 className={classes.descriptionHeadingDeveloper}>{item.descriptionActive}</h3>
                                    <p>{item.description}</p>
                                    <p>{item.description2}</p>
                                    <p>{item.description3} </p>
                                    {item.candidator && (
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '30%' }}>
                                            <Button variant="contained" color="success">
                                                candidator
                                            </Button>
                                            <Button variant="contained" color="success">
                                                <FavoriteBorderIcon />
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                            <hr />
                        </>
                    );
                })}
                <Button
                    variant="outlined"
                    style={{
                        borderRadius: '50px',
                        border: '1.5px solid',
                        marginTop: '1rem',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'Open Sans',
                    }}>
                    Charger plus de résultats
                </Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabPanelMissions />
            </TabPanel>
        </Box>
    );
};

export default RightDiv;
