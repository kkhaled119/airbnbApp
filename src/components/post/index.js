import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from '../../components/post/style';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/*Image */}

      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />

      {/*Bad and Bedrom */}

      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/*type and description */}

      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* oldPrice and newPrice */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{post.oldPrice} </Text>
        <Text style={styles.price}> {post.newPrice} </Text>
        /night
      </Text>

      {/* totalPrice */}

      <Text style={styles.totalPrice}>{post.totalPrice}</Text>
    </View>
  );
};

export default Post;
