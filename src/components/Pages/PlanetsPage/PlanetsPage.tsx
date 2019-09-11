import * as React from "react";
import {withRouter} from 'react-router-dom';
import {Essence} from "../../Essence/Essence";
import {ItemList} from "../../ItemList/ItemList";
import {PlanetDetails} from "../../PlanetDetails/PlanetDetails";

const PlanetsPage = ({history, match}: any) => {
    return (
        <Essence
            LeftComponent={ItemList}
            RightComponent={PlanetDetails}
            onItemSelected={(id) => {
                history.push(`${id}`)
            }}
            id={Number(match.params.id)}
            list={'planets'}
        />);
};

export default withRouter(PlanetsPage);