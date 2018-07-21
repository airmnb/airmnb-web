import React, { Component, createRef } from "react";
import { uploadFile } from './actions';
import { connect } from 'react-redux';
import { makeGetUploadedFile } from "./selector";
import uuid from "uuid/v1";
import { Input, Container } from "./index.style";
import { Loader, LoaderContainer } from "../../../shared";

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.input = createRef();
        this.handleSelectfile = this.handleSelectfile.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { file } = nextProps;
        if( file && file.imageId ) {
            this.props.onChange(this.props.name, file.imageId);
        }
    }

    handleChangeFile(event) {
        const file = event.target.files[0];
        this.props.uploadFile(this.props.uuid, file);
    }

    handleSelectfile() {
        this.input.click();
    }

    handleOnChange(ev) {
        const { name, value } = ev.target;
        if(this.props.onChange)
            this.props.onChange(name, value);
    }

    render() {
        const { children, file } = this.props;
        return (<Container onClick={this.handleSelectfile}>
            {children}
            <Input type="file" onChange={this.handleChangeFile.bind(this)} innerRef={(input) => this.input = input}/>
            { file && file.inProgress && <LoaderContainer><Loader color='white'/></LoaderContainer> }
        </Container>)
    }
}

const makeMapStateToProps = () => {
    const getBarState = makeGetUploadedFile();
    const mapStateToProps = (state, props) => ({
        file: getBarState(state, props)
    });
    return mapStateToProps;
}

const mapDispatchToProps = {
    uploadFile
};

const createUploadFileInput = (WrappedComponent) => {
    return class extends Component {
        render() {
            return <WrappedComponent uuid={uuid()} {...this.props}/>
        }
    }
}


export default createUploadFileInput(connect(makeMapStateToProps, mapDispatchToProps)(UploadFile));