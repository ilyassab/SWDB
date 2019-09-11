import * as React from 'react';

import './ItemList.css';
import {SwapiService} from "../../services/SwapiService/SwapiService";
import {Spinner} from "../Spinner/Spinner";

interface IState {
    people: any;
    planet: any;
}

interface IProps {
    list: string;
    onResponseRecieved: () => void;
    onClickHandle: (arg0: number) => void;
}

class ItemList extends React.Component<IProps, IState> {

    swapiService = new SwapiService();

    state = {
        people: null,
        planet: null,
    };

    componentDidMount() {

        const {list} = this.props;
        (list === 'people') && this.swapiService.getAllPeople()
            .then((people) => {
                this.props.onResponseRecieved();
                this.setState({
                    people: people,
                    planet: null
                })
            });
        (list === 'planets') && this.swapiService.getAllPlanet()
            .then((planet) => {
                this.props.onResponseRecieved();
                this.setState({
                    people: null,
                    planet: planet
                })
            });
    }

    render() {

        const {people, planet} = this.state;

        if (!people && !planet) {
            return <Spinner/>;
        }

        return (
            <div className='itemlist'>
                {people && this.renderEssence(people)}
                {planet && this.renderEssence(planet)}
            </div>
        );
    }

    renderEssence = (essence: any) => {
        const elems = essence.map((item: any, index: number) => {
            return (
                <React.Fragment key={`${item.name}${index}`}>
                    <div className='itemlist_people'
                         onClick={() => this.props.onClickHandle(index + 1)}>{item.name}</div>
                </React.Fragment>
            );
        });
        return <div className='itemlist_list'>{elems}</div>;
    }

}

export {ItemList};