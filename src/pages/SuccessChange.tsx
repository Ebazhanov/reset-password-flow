import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Hidden, Typography } from '@material-ui/core/';
import Image from '../assets/yoga-1-033-copy.png';
import Logo from '../assets/keleya-logo.png';
import Button from '../../src/components/Button';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  pageContainer: {
    backgroundImage: `url(${Image})`,
    maxWidth: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
  },
  content: {
    boxSizing: 'border-box',
    paddingTop: theme.spacing(6),
    height: '60%',
    width: '100%',
    background: 'rgba(255, 255, 255, .8)',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '490px',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginTop: theme.spacing(3),
  },
  text: {
    color: '#9b9b9b',
    marginTop: theme.spacing(4),
  },
  image: {
    width: '25%',
    marginTop: theme.spacing(13),
    alignSelf: 'center',
  },
  buttonContainer: {
    background: '#9adcd7',
    color: '#ffffff',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: theme.spacing(4),

    [theme.breakpoints.down('xs')]: {
      marginTop: 'auto',
      margin: '0 -20px',
      width: 'calc(100% + 40px)',
    },
  },
}));

const SuccessChange = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const handleClick = () => history.push('/');

  return (
    <Box className={classes.pageContainer}>
      <Box className={classes.content}>
        <Box className={classes.contentWrapper}>
          <div>
            <Typography className={classes.title} variant="h5" align="center">
              {t('success_change_page.title')}
            </Typography>
            <Typography className={classes.text} variant="subtitle1" align="center">
              {t('success_change_page.message')}
            </Typography>
          </div>
          <Hidden xsDown>
            <img className={classes.image} src={Logo} alt="logo" />
          </Hidden>
          <Hidden smUp>
            <Button
              className={classes.buttonContainer}
              onClick={handleClick}
              text={t('success_change_page.button')}
            />
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessChange;
