import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardCategoryLink } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Categories = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span>
            Looking for content{' '}
            <span className="text-highlighted">creators</span>
          </span>
        }
        subtitle={
          <span>
          Help us in creating engaging content and make a difference today!{' '}
          <span className="text-highlighted">apply at info@explearning.io</span>
          </span>
        }
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardCategoryLink
              variant="outlined"
              align={isMd ? 'left' : 'center'}
              liftUp
              title={item.title}
              subtitle={item.subtitle}
              href="#"
              fontIconClass={item.icon}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;
