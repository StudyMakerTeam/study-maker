import { styled } from '@mui/material/styles';
import {Button} from "@mui/material";

export const CustomButton = styled(Button)(() => ({
    '&.MuiButton-root': {
        justifyContent: 'flex-start'
    },
    marginBottom: '0.5em',
    //'&.focusVisible': {
    //  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    //  outline: none;
    //},
}));




