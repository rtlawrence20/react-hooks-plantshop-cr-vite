import React from "react";

/**
 * PlantCard component displays information about a single plant.
 * @component PlantCard
 * @param {Object} props
 * @param {Object} props.plant - The plant object to display
 * @returns {JSX.Element} a card displaying plant details
 */
function PlantCard({ plant }) {
    const [inStock, setInStock] = React.useState(true);

    // Toggle the inStock state
    function handleToggleInStock() {
        setInStock((inStock) => !inStock);
    }

    return (
        <li className="card" data-testid="plant-item">
            <img src={plant.image} alt={plant.name} />
            <h4>{plant.name}</h4>
            <p>Price: {plant.price}</p>
            {inStock ? (
                <button className="primary" onClick={handleToggleInStock}>In Stock</button>
            ) : (
                <button onClick={handleToggleInStock}>Out of Stock</button>
            )}
        </li>
    );
}

export default PlantCard;
