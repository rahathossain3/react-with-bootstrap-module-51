import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {

    const products = [
        { id: 1, name: 'laptop Pro', price: 5000 },
        { id: 2, name: 'laptop Cro', price: 5000 },
        { id: 3, name: 'laptop Gro', price: 5000 }
    ]
    return (
        <div>
            {/* import form react bootstrap Card Group */}
            <CardGroup>
                {
                    products.map(product => <Card2
                        key={product.id}
                        product={product}
                    ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;