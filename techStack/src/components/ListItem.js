import React from 'react';
import { Text } from 'react-native';
import { CardSection, Card } from './common';
class ListItem extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>{this.props.library.title}</Text>
        </CardSection>
      </Card>
    );
  }
}

export default ListItem;
