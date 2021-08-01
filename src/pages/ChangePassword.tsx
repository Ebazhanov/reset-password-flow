import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, TextField, Typography } from '@material-ui/core/';
import Image from '../assets/yoga-1-033-copy.png';
import Button from '../../src/components/Button';
import { useHistory } from 'react-router-dom';
import WarningIcon from '@material-ui/icons/Warning';
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
  text: {
    color: '#9b9b9b',
    marginTop: theme.spacing(4),
  },
  input: {
    marginTop: theme.spacing(3),
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

interface PassProps {
  data: any;
}

const ChangePassword = ({ data }: PassProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const [state, setState] = useState({
    newPassword: '',
    confirmNewPassword: '',
  });
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (state.newPassword === state.confirmNewPassword) {
      history.push('/success');
      localStorage.setItem('Data', JSON.stringify({ ...data, password: state.newPassword }));
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Box className={classes.pageContainer}>
      <Box className={classes.content}>
        <Box className={classes.contentWrapper}>
          <Typography variant="h6" align="center">
            {t('change_password_page.title')}
          </Typography>
          <Typography className={classes.text} variant="subtitle1" align="center">
            {t('change_password_page.message')}
          </Typography>
          <TextField
            type="password"
            name="newPassword"
            value={state.newPassword}
            onChange={handleChange}
            classes={{ root: classes.input }}
            InputProps={{
              classes: { underline: classes.underline },
            }}
            label={t('change_password_page.new_password_label')}
          />
          <TextField
            type="password"
            name="confirmNewPassword"
            value={state.confirmNewPassword}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            classes={{ root: classes.input }}
            InputProps={{
              classes: { underline: classes.underline },
            }}
            label={t('change_password_page.confirm_new_password_label')}
          />
          {error && (
            <Box display="flex" justifyContent="center" mt={2}>
              <WarningIcon />
              <Typography>{t('change_password_page.warning_message')}</Typography>
            </Box>
          )}
          <Button
            styles={{
              color: state.newPassword === state.confirmNewPassword ? '#fff' : 'red',
            }}
            onClick={handleClick}
            className={classes.buttonContainer}
            text={t('change_password_page.button')}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
