/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PageTitle from './components/PageTitle/PageTitle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import GroupStory from './components/GroupStory/GroupStory';
import InterestStory from './components/InterestStory/InterestStory';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  const groupStories = [
    {
      id: 1,
      title: 'Coffee',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 2,
      title: 'ReactJS',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 3,
      title: 'Business',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 4,
      title: 'Urban',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 5,
      title: 'IT Career',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 6,
      title: 'STL Meet',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 7,
      title: 'JSConf',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      title: 'BBM',
      image: require('./assets/images/default_profile.png'),
    },
    {
      id: 9,
      title: 'STL JS',
      image: require('./assets/images/default_profile.png'),
    },
  ];

  const interestPills = [
    {
      id: 1,
      name: 'Hiking',
    },
    {
      id: 2,
      name: 'Yoga',
    },
    {
      id: 3,
      name: 'Business',
    },
    {
      id: 4,
      name: 'Mathmatics',
    },
    {
      id: 5,
      name: 'Reading',
    },
    {
      id: 6,
      name: 'Wine',
    },
    {
      id: 7,
      name: 'Fitness',
    },
    {
      id: 8,
      name: 'Mathmatics',
    },
    {
      id: 9,
      name: 'Reading',
    },
    {
      id: 10,
      name: 'Wine',
    },
    {
      id: 11,
      name: 'Fitness',
    },
  ];
  const pageSize = 4;
  const [userStoriesPage, setUserStoriesPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currPage, count) => {
    const startIndx = (currPage - 1) * count;
    const endIdx = startIndx + pageSize;
    if (startIndx >= database.length) {
      return [];
    }

    return database.slice(startIndx, endIdx);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(groupStories, 1, userStoriesPage);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <View style={globalStyle.header}>
          <PageTitle title={'Hornets Nest'} />
          <TouchableOpacity style={globalStyle.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
            <View style={globalStyle.messageNumberContainer}>
              <Text style={globalStyle.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.groupStoryContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserStories) {
                return;
              }

              setIsLoadingUserStories(true);

              const contentToAppend = pagination(
                groupStories,
                userStoriesPage + 1,
                pageSize,
              );

              if (contentToAppend.length > 0) {
                setUserStoriesPage(userStoriesPage + 1);
                setUserStoriesRenderedData(prev => [
                  ...prev,
                  ...contentToAppend,
                ]);
              }
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={userStoriesRenderedData}
            renderItem={({item}) => (
              <GroupStory key={item.id} title={item.title} image={item.image} />
            )}
          />
        </View>
        <View style={globalStyle.interestContainer}>
          <Text style={globalStyle.interestHeader}>Your Interest</Text>
          <FlatList
            horizontal={true}
            data={interestPills}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <InterestStory title={item.name} />}
          />
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
export default App;
