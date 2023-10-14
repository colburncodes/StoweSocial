import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import PropTypes from 'prop-types';

const PageTitle = props => {
  const {title} = props;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: 24,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PageTitle;
