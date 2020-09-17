import React, {  Fragment } from 'react';
import MyContext from '../contexts'

const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>Cars:</h4>
                { Object.keys(context.cars).map(carID => (
                    <Cars
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);

export default Cars;