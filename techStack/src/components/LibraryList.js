import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { FlatList } from 'react-native';
class LibraryList extends React.Component {
  renderItem(libraries) {
    return <ListItem key={libraries.index} library={libraries.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={library => library.id + ''}
      />
    );
  }
}
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
