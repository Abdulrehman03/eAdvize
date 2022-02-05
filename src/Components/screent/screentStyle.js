import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    body: {},

    pageWrapper: {
        paddingTop: '20px',
    },

    contentWapper: {
        marginTop: '5rem',
        marginBottom: '5rem',
        display: 'flex',
        justifyContent: 'center',
    },

    modalBtn: {
        backgroundColor: 'red !important',
    },

    modelWrapper: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        marginTop: '50px',
        borderRadius: '22px',
    },
    mainModal: {
        padding: '50px 50px',
    },

    modalBetween: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    modalTitle: {
        margin: '0',
        color: '#143D66',
        fontSize: '35px',
        lineHeight: '47px',
    },

    modalClose: {
        fontSize: '50px',
    },

    modalContent: {
        overflowY: 'scroll',
    },
    modalContentBody: {
        border: '4px solid #143D66',
        borderRadius: '22px',
        padding: '10px',
    },

    modalData: {
        padding: '30px 20px 0 30px',
        margin: '0',
        height: '70vh',
    },

    modalGroupTitle: {
        fontSize: '24px',
        lineHeight: '27px',
        color: '#143D66',
        fontWeight: '600',
        margin: '0',
        paddingTop: '20px',
    },

    modalGroupParagraph: {
        fontSize: '20px',
        lineHeight: '27px',
        margin: '0',
        paddingTop: '20px',
    },
}));
