import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core/';
import BalkonMobile from '../assets/Balkon_smoothie_2773.jpeg';
import BalkonDesktop from '../assets/balkon-smoothie-2773.png';
import Button from '../../src/components/Button';
import Logo from '../assets/keleya-logo.png';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  emailContainer: {
    height: '100vh',
  },
  imageContainer: {
    '@media (max-width:780px)': {
      backgroundImage: `url(${BalkonMobile})`,
      height: 'calc(100vh - 70%)',
      width: '100vw',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    '@media (min-width:780px)': {
      backgroundImage: `url(${BalkonDesktop})`,
      height: 'calc(100vh - 45%)',
      width: '100vw',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  image: {
    width: 85,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  header: {
    marginTop: theme.spacing(3),
    color: '#4a4a4a',
  },

  logo: {
    textAlign: 'center',
  },
  title: {
    marginTop: theme.spacing(3),
  },
  text: {
    color: '#9b9b9b',
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    background: '#e97db5',
    height: theme.spacing(5),
    display: 'flex',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid transparent',
    borderRadius: 5,
    marginTop: theme.spacing(5),
    cursor: 'pointer',
  },
  closeIcon: {
    color: '#9b9b9b',
    position: 'absolute',
    right: '20px',
    top: '20px',
    background: '#fff',
    opacity: '0.7',
    border: '1px solid transparent',
    borderRadius: 30,
  },
}));
const Email = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => {
    history.push('/change-password');
  };

  return (
    <Box className={classes.emailContainer}>
      <Box className={classes.imageContainer}>
        <CloseIcon className={classes.closeIcon} />
      </Box>
      <Box textAlign={'center'}>
        <img className={classes.image} src={Logo} alt="logo" />
      </Box>
      <Container maxWidth="sm">
        <Typography className={classes.title} variant="h6" align={'center'}>
          {t('new_password_page.title')}
        </Typography>
        <Typography className={classes.text} variant="subtitle2" align={'center'}>
          {t('new_password_page.body_message_one')}
        </Typography>
        <Typography className={classes.text} variant="subtitle2" align={'center'}>
          {t('new_password_page.body_message_two')}
        </Typography>
        <Button
          onClick={handleClick}
          text={t('new_password_page.button')}
          className={classes.buttonContainer}
        />
      </Container>
    </Box>
  );
};

export default Email;
