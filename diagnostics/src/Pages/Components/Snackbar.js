// core react modules
import React from 'react';

// material and component modules
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

// snackbar|toaster to show post response
export default function TransitionsSnackbar({ ...props }) {
    const handleClose = () => {
        props.close();
    };

    return (
        <div>
            <Snackbar
                open={props.open}
                onClose={handleClose}
                TransitionComponent={Fade}
                message={props.message}
                autoHideDuration={1000}
            />
        </div>
    );
}
