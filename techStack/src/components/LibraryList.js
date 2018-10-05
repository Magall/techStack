import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem'
import {FlatList} from 'react-native';
class LibraryList extends React.Component {
    
    renderItem(libraries){
        return <ListItem library={libraries} />;
    }
    
    render () {
        return(

            <FlatList 
            data ={this.props.libraries}
            renderItem = {this.renderItem}
            keyExtractor= {(library) =>library.id}
            /> 
        );
    }
}
const mapStateToProps =  state => {
    return{libraries: state.libraries};
  };
  
  
export default connect(mapStateToProps)(LibraryList);