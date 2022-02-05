import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '30px !important',
        fontFamily: '"Open Sans", sans-serif',
        color: '#143D66',
        fontWeight: 'bolder !important',
    },

    generalColor: {
        color: theme.palette.text.main,
    },
    divider: {
        background: 'transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box',
        height: '7px',
        margin: 'auto',
        borderRadius: '4px',
        marginTop: '10px',
        marginBottom: '25px',
    },
    faqContainer: {
        paddingLeft: '6rem !important',
        paddingRight: '8rem !important',
    },
    faqAccordion: {
        marginBottom: '20px',
        borderRadius: '10px !important',

        '&:before': {
            backgroundColor: 'transparent !important',
            borderRadius: '10px !important',
        },
        '&:after': {
            backgroundColor: 'transparent !important',
            borderRadius: '10px !important',
        },
    },
    Theading: {
        backgroundColor: '#143D66 !important',

        borderTopLeftRadius: '10px !important',
        borderTopRightRadius: '10px !important',
    },
    color: {
        color: 'white !important',
    },
    tabs: {
        fontSize: '30px !important',
        fontWeight: '600 !important',
        color: '#143D66 !important',
        borderBottomColor: 'black !important',
        width: '50%',
    },
}));
