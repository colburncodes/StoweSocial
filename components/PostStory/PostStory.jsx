import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {getFontFamily} from '../../assets/fonts/helper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays, faUser} from '@fortawesome/free-regular-svg-icons';
import {faLocation} from '@fortawesome/free-solid-svg-icons';

const PostStory = props => {
  const {title, location, image, attending, date} = props;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} />
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faUser} />
          <Text style={styles.attending}> {attending} |</Text>
          <FontAwesomeIcon icon={faLocation} />
          {location && <Text style={styles.location}> {location} | </Text>}
          <FontAwesomeIcon icon={faCalendarDays} />
          <Text style={styles.attending}> {date}</Text>
        </View>
      </View>
    </View>
  );
};

PostStory.propTypes = {
  title: PropTypes.string.isRequired,
  attending: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {justifyContent: 'center', marginBottom: 5},
  location: {
    color: '#79869F',
    fontSize: 12,
    fontFamily: getFontFamily('Inter', 400),
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  attending: {
    color: '#79869F',
    fontSize: 12,
    fontFamily: getFontFamily('Inter', 400),
    marginBottom: 20,
    marginRight: 5,
  },
});

export default PostStory;
