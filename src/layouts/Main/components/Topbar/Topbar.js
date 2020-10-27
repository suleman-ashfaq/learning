import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
  colors,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, pages, ...rest } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body1"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textSecondary"
              onClick={handleClose}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={company} />
          <MenuGroup item={contact} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={settings} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signup} />
          <MenuGroup item={signin} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  const renderPages = id => {
    if (id === 'landing-pages') {
      return <LandingPages />;
    }
    if (id === 'supported-pages') {
      return <SupportedPages />;
    }
    if (id === 'account') {
      return <AccountPages />;
    }
  };

  return (
    <AppBar
      {...rest}
      position="relative"
      className={clsx(classes.root, className)}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <a href="/" title="thefront">
            <Image
              className={classes.logoImage}
              src="/images/exp.svg"
              alt="thefront"
              lazy={false}
            />
          </a>
        </div>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <List className={classes.navigationContainer}>
            {[landings].map((page, i) => (
              <div key={page.id}>
                <ListItem
                  aria-describedby={page.id}
                  onClick={e => handleClick(e, page.id)}
                  className={clsx(
                    classes.listItem,
                    openedPopoverId === page.id ? classes.listItemActive : '',
                  )}
                >
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={clsx(classes.listItemText, 'menu-item')}
                  >
                    {page.title}
                  </Typography>
                  <ListItemIcon className={classes.listItemIcon}>
                    <ExpandMoreIcon
                      className={
                        openedPopoverId === page.id ? classes.expandOpen : ''
                      }
                      fontSize="small"
                    />
                  </ListItemIcon>
                </ListItem>
                <Popover
                  elevation={1}
                  id={page.id}
                  open={openedPopoverId === page.id}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  classes={{ paper: classes.popover }}
                >
                  <div>{renderPages(page.id)}</div>
                </Popover>
              </div>
            ))}
            <ListItem className={classes.listItem}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.listItemText}
                component="a"
                target="blank"
                href="https://explearning.io/"
              >
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
            {/*  <Button
                size="large"
                variant="contained"
                color="primary"
                component="a"
                target="blank"
                href="https://material-ui.com/store/items/the-front-landing-page/"
                className={classes.listItemButton}
                disabled
              >
                Buy Now
              </Button> */}
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            onClick={onSidebarOpen}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
