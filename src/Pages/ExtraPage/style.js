import { makeStyles, createStyles } from '@mui/styles';

export const useStyle = makeStyles(theme =>
    createStyles({
        root: {
            position: 'relative',
            backgroundColor: '#E4F0F8',
        },
        container: {
            backgroundColor: '#fff',
            margin: 'auto',
            padding: '16px',
        },
        innerContainer: {
            width: '80%',
            margin: 'auto',
        },
        title: {
            color: '#143D66',
            width: '100%',
            margin: 'auto',
            fontSize: 25,
            fontWeight: 'bold',
        },
        line: {
            height: 7,
            background: 'transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box',
            marginTop: 10,
            borderRadius: 4,
            marginBottom: 25,
            width: 34,
        },
        titleimg: {
            width: '25px',
        },
        inputbox: {
            margin: '10px 0px',
        },
        inputLabel: {
            color: '#143D66',
            fontSize: 20,
            display: 'block',
            lineHeight: '15px',
            padding: '10px 0',
            fontWeight: 'bold',
        },
        input1: {
            backgroundColor: '#EAFFF9',
            border: '1px solid #01E3A6',
            borderRadius: '6px',
            width: '100%',
            lineHeight: '2rem',
            padding: '0 6px',
        },
        textarea: {
            width: '100%',
            padding: '6px',
            borderRadius: '6px',
        },
        rowscontain: {
            margin: 'auto',
            padding: '10px 0px',
        },
        leftbox: {
            // width: '100%',
            backgroundColor: '#143D66',
            padding: '8px',
            fontWeight: '600',
            color: '#fff',
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
        },
        inputs: {
            width: '100%',
            lineHeight: '1.9rem',
            padding: '0 6px',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
        },
        tagContainer: {
            width: '100%',
            border: '1px solid black',
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: 34,
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            paddingLeft: 27,
            borderLeft: 0,
        },
        tagbtn: {
            border: '1px solid black',
            borderRadius: '6px',
            margin: '4px 0px',
            padding: ' 3px 6px',
            fontSize: '14px',
            marginRight: 10,
        },
        btn: {
            backgroundColor: '#01E3A6',
            color: '#000',
            padding: '8px 16px',
            border: '0px',
        },
    }),
);
