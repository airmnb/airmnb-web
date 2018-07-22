import { push } from 'react-router-redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBabies } from './actions';
import { Link } from 'react-router-dom';
import { H1, Loader, SquareBtn} from '../../shared';
import { BabyIcon } from './babyIcon';
import { Baby } from './babiesList.styles'

class BabiesList extends Component {

    componentWillMount() {
        this.props.fetchBabies();
    }

    editBaby( babyId ) {
        const { push, match } = this.props;
        push(`${match.path}/${babyId}`)
    }

    render() {
        const { babies: {fetchBabiesInProgress, list}, match } = this.props;
        return (<div>
            <H1>My Babies</H1>
            {
                fetchBabiesInProgress && <Loader size='25' />
            }
            {!fetchBabiesInProgress && <div>
                <Baby><Link to={`${match.path}/register`}><SquareBtn>+</SquareBtn></Link></Baby>
                {
                    list && list.map(({babyId, gender, nickName, avatarImageId, deleteInProgress}, id) => {
                        return (<Baby key={babyId}><Link to={`${match.path}/${babyId}`}><BabyIcon avatarImageId={avatarImageId} gender={gender}/></Link></Baby>)
                        })
                }
            </div>}
        </div>);
    }
}

const mapState = ({ babies }) => ({
    babies
})

const mapDispatch = {
    fetchBabies,
    push
}

export default connect(mapState, mapDispatch)(BabiesList);