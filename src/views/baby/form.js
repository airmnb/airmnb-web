import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormValidator } from '../../services/formValidator';
import { Title, InputControl, FormButtonsGroup, RadioButtonGroupControl, DateControl, TextareaControl, Loader, RoundBtn, DeleteBtn } from '../../shared';
import UploadFile from '../generics/uploadFile'
import { saveBaby, fetchBaby, deleteBaby } from './actions';
import { gender as genderEnum } from '../../enums';
import c from './config';
import PropTypes from 'prop-types';
import { makeGetBabyState } from './selector';
import { Container, InfoCol, Form, Header, ButtonGroup } from './form.styles';
import { BabyIcon } from './babyIcon';

class BabyForm extends Component {

    submitted = false;
    validator = new FormValidator(c);

    static contextTypes = {
        t: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        const { baby, user: { userId } } = props;
        this.state = {
            payload: {
                creatorId: userId,
                nickName: '',
                fullName: '',
                gender: '1',
                dob: '',
                info: '',
                ...baby
            },
            validation: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleCancelForm = this.handleCancelForm.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            payload: nextProps.baby
        })
    }

    componentWillMount() {
        const babyId = this.props.match.params.babyId;
        if (babyId && !this.state.payload.babyId) {
            this.props.fetchBaby(babyId);
        }
    }

    handleInputChange(name, value) {
        this.setState((prevState) => ({
            ...prevState,
            payload: {
                ...prevState.payload,
                [name]: value
            }
        }), this.validate);
    }

    handleCancelForm() {
        this.props.push('/platform/babies');
    }

    validate(cb) {
        if (!this.submitted) {
            return;
        }
        this.setState({ validation: this.validator.validate(this.state.payload) }, cb)
    }

    render() {
        const { validation, payload, } = this.state;
        const { match, baby, deleteBaby } = this.props;

        if (!baby && match.params.babyId) {
            return <Loader size='25' />
        } else {
            return (
                <div>
                    <Header>
                        <Title>{`${payload.nickName || 'Add a new Baby'}`}</Title>
                        <ButtonGroup>
                            {payload.babyId && <DeleteBtn
                                confirmMessage={`Are you sure you want to delete ${payload.nickName}'s account?`}
                                onConfirmClick={deleteBaby.bind(this, baby.babyId)}
                            />}
                            <RoundBtn onClick={this.handleCancelForm}>Cancel</RoundBtn>
                        </ButtonGroup>
                    </Header>

                    <Container>
                        <InfoCol>
                            <UploadFile name="avatarImageId" onChange={this.handleInputChange}>
                                <BabyIcon avatarImageId={payload.avatarImageId} gender={payload.gender} />
                            </UploadFile>
                        </InfoCol>
                        <Form>
                            <form onSubmit={this.submit}>
                                <InputControl config={c.nickName} validation={validation.nickName} onChange={this.handleInputChange} type="text" name="nickName" value={payload.nickName} />
                                <InputControl config={c.fullName} validation={validation.fullName} onChange={this.handleInputChange} type="text" name="fullName" value={payload.fullName} />
                                <DateControl config={c.dob} onChange={this.handleInputChange} name='dob' type='text' value={payload.dob} />
                                <RadioButtonGroupControl config={c.gender} onChange={this.handleInputChange} name='gender' items={genderEnum} value={payload.gender} />
                                <TextareaControl config={c.info} onChange={this.handleInputChange} name='info' value={payload.info} />
                                <FormButtonsGroup
                                    primaryLabel='Save'
                                    disablePrimary={false}
                                    secondaryLabel='Cancel'
                                    disableSecondary={false}
                                    loadingPrimary={baby && baby.saveBabyInProgress}
                                    onSecondaryClick={this.handleCancelForm}
                                />
                            </form>
                        </Form>
                    </Container>
                </div>
            )
        }
    }

    submit(ev) {
        ev.preventDefault();
        this.submitted = true;
        this.validate(() => {
            if (!this.state.validation.isValid) {
                return
            }
            this.props.saveBaby(this.state.payload);
        });
    }

}

const makeMapStateToProps = () => {
    const getBabyState = makeGetBabyState();
    const mapStateToProps = (state, props) => {
        const { auth: { user }} = state;
        return {
          baby: getBabyState(state, props),
          user
        }
      }
    return mapStateToProps
}

const mapDispatch = {
    saveBaby,
    fetchBaby,
    deleteBaby,
    push
};

export default connect(makeMapStateToProps, mapDispatch)(BabyForm);