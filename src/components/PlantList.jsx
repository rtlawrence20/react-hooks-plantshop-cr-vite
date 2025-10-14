import React from "react";
import PlantCard from "./PlantCard";

/**
 * PlantList component displays a list of plants.
 * @component PlantList
 * @param {Object} props
 * @param {Array} props.plants - Array of plant objects to display
 * @param {boolean} props.loading - Loading state to show loading message
 * @returns {JSX.Element} a list of PlantCard components
 */
function PlantList({ plants, loading }) {
    return (
        <ul className="cards">
            {loading ? <p>Loading...</p> : null}
            {plants.map(plant =>
                <PlantCard
                    key={plant.id}
                    plant={plant} />
            )}
        </ul>
    );
}

export default PlantList;
