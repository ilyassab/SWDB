import * as React from "react";
import {withRouter} from 'react-router-dom';
import {Essence} from "../../Essence/Essence";
import {ItemList} from '../../ItemList/ItemList';
import {PersonDetails} from "../../PersonDetails/PersonDetails";

const PeoplePage = ({history, match}: any) => {
    return (
        <Essence
            LeftComponent={ItemList}
            RightComponent={PersonDetails}
            onItemSelected={(id) => {
                history.push(`${id}`)
            }}
            id={Number(match.params.id)}
            list={'people'}
        />);
};
export default withRouter(PeoplePage);