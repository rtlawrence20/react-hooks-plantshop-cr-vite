import React, { useState } from "react";

/**
 * NewPlantForm component allows users to add a new plant.
 * @component NewPlantForm
 * @param {Object} props
 * @param {Function} props.onAddPlant - Function to call when a new plant is added 
 * @returns {JSX.Element} a form to add a new plant
 */
function NewPlantForm({ onAddPlant }) {

    // Single state object for all form fields
    const [plant, setPlant] = useState({
        name: "",
        image: "",
        price: "",
    });

    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        // Convert price to string
        const newPlant = {
            name: plant.name,
            image: plant.image,
            price: plant.price,
        };

        await onAddPlant(newPlant);

        // Reset form
        setPlant({ name: "", image: "", price: "" });
    }

    // Generic change handler
    function handleChange(event) {
        const { name, value } = event.target;
        setPlant((prevPlant) => ({
            ...prevPlant,
            [name]: value,
        }));
    }

    return (
        <div className="new-plant-form">
            <h2>New Plant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Plant name"
                    value={plant.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={plant.image}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={plant.price}
                    onChange={handleChange}
                />
                <button type="submit">Add Plant</button>
            </form>
        </div>
    );
}

export default NewPlantForm;
