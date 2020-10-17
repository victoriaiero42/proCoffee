import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       // hidden={value !== index}
//       // id={`wrapped-tabpanel-${index}`}
//       // aria-labelledby={`wrapped-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     // backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function TabsWrappedLabel() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('one');

//   return (
//     <div className={classes.root}>

//       <TabPanel value={value} index="one">
//         Item One
//       </TabPanel>

//     </div>
//   );
// }
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {

    // flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "#424242",
    // textColor: "black",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "10px"

  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body2">
            <Paper className={classes.paper}> guides</Paper>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
