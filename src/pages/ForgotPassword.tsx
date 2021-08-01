import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Image from '../assets/yoga-1-033-copy.png';
import { Box, makeStyles, TextField, Typography } from '@material-ui/core/';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '../components/Button';
import { Theme } from '@material-ui/core/styles';
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
    marginTop: theme.spacing(6),
  },
  text: {
    color: '#9b9b9b',
    marginTop: theme.spacing(6),
  },
  input: {
    marginTop: theme.spacing(4),
  },
  underline: {
    borderBottom: '1px solid #9adcd7',
    '&&&:before': {
      borderBottom: 'none',
    },
    '&::after': {
      borderBottom: 'none',
    },
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
  warning: {
    display: 'flex',
  },
}));

interface EmailProps {
  data: any;
}

const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = ({ data }: EmailProps) => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onSubmit = () => {
    if (regexp.test(email)) {
      localStorage.setItem('Data', JSON.stringify({ ...data, email }));
      history.push('/email-sent');
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <Box className={classes.pageContainer}>
      <Box className={classes.content}>
        <Box className={classes.contentWrapper}>
          <Typography className={classes.title} variant="h6" align="center">
            {t('forgot_password_page.title')}
          </Typography>
          <Typography className={classes.text} variant="subtitle2" align="center">
            {t('forgot_password_page.no_problem_give_your_email')}
          </Typography>
          <TextField
            value={email}
            onChange={onChangeEmail}
            onKeyPress={handleKeyPress}
            classes={{ root: classes.input }}
            InputProps={{
              classes: { underline: classes.underline },
            }}
            label={t('forgot_password_page.label')}
          />
          {error && (
            <Box mt={2} className={classes.warning}>
              <Box mr={1}>
                <WarningIcon />
              </Box>
              <Typography>{t('forgot_password_page.warning_message')}</Typography>
            </Box>
          )}
          <Button
            onClick={onSubmit}
            className={classes.buttonContainer}
            text={t('forgot_password_page.button')}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
