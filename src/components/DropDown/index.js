import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';



class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
    }
    reset = () => {
        this.refs.dropDown.select(-1)
    }
    render() {
        const { options, defaultValue, onSelect,reset } = this.props
        return (

            <ModalDropdown
                style={{ width: '100%',borderWidth:1,borderColor:'#000',backgroundColor:'#ddd',marginBottom:10,height:50,justifyContent:'center',paddingHorizontal:5 }}
                options={options}
                defaultValue={defaultValue}
                dropdownStyle={{ width: '74%',alignSelf:'center',alignItem:'center',justifyContent:'center',marginLeft:-5 }}
                onSelect={onSelect}
                textStyle={{fontSize:15}}
    
                {...this.props}
            />

        );
    }
}

export { DropDown };