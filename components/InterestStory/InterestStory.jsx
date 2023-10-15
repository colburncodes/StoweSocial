import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {Badge, BadgeText} from '@gluestack-ui/themed';

const InterestStory = props => {
  const {title} = props;
  return (
    <View style={styles.storyContainer}>
      <TouchableOpacity style={styles.badgeIcon}>
        <Badge action={'success'} size="sm" variant="solid" ml="$1">
          <BadgeText>
            <Text>{title}</Text>
          </BadgeText>
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

InterestStory.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  storyContainer: {
    height: 70,
    width: 90,
    position: 'relative',
    margin: 'auto',
    display: 'flex',
  },
  title: {
    color: '#022150',
    fontSize: 12,
    fontFamily: getFontFamily('Inter', 500),
    marginTop: 8,
    textAlign: 'center',
  },
  badgeIcon: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InterestStory;
