import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const GroupStory = props => {
  const {title, image} = props;
  return (
    <View style={styles.storyContainer}>
      <View style={styles.groupImageRim}>
        <Image style={styles.image} source={image} alt="Group Image" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

GroupStory.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  title: {
    color: '#022150',
    fontSize: 14,
    fontFamily: getFontFamily('Inter', 500),
    marginTop: 8,
    textAlign: 'center',
  },
  groupImageRim: {
    borderColor: '#DEB239',
    borderWidth: 1,
    padding: 3,
    borderRadius: 65,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 5,
  },
});

export default GroupStory;
