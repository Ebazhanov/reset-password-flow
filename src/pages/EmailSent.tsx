import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core/';
import Logo from '../assets/keleya-logo.png';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  pageContainer: {
    maxWidth: '100%',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: theme.spacing(15),
    height: 'calc(100vh - 70%)',
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    width: '30%',
  },
  title: {
    marginTop: theme.spacing(5),
    textAlignLast: 'center',
  },
  textBody: {
    color: '#9b9b9b',
    marginTop: theme.spacing(3),
  },
  closeIcon: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    height: 'calc(100vh - 90%)',
    alignSelf: 'flex-end',
  },
}));

const EmailSent = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const handleClick = () => history.push('/choose-new-password');

  return (
    <Box className={classes.pageContainer}>
      <CloseIcon onClick={handleClick} className={classes.closeIcon} />
      <Box className={classes.imageContainer}>
        <img className={classes.image} src={Logo} alt="logo" />
      </Box>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="body2">
          {t('email_sent_page.title')}
        </Typography>
        <Typography className={classes.textBody} variant="subtitle1" align="center">
          {t('email_sent_page.message')}
        </Typography>
      </Container>
    </Box>
  );
};

export default EmailSent;
