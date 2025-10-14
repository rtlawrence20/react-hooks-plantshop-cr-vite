import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

/**
 * PlantPage component manages the state and logic for displaying and adding plants.
 * 
 * @component PlantPage
 * @returns {JSX.Element} the main plant page with form, search, and plant list
 */
function PlantPage() {

    // State variables
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    /**
     * Fetch all plants or add a new plant.
     * If `newPlant` is provided, adds it via POST.
     * If no arguments, fetches all plants via GET.
     * 
     * @param {Object|null} newPlant - The new plant to add, or null to fetch all plants
     * @returns {Promise<void>}
     */
    async function handleAddPlant(newPlant = null) {
        try {
            setLoading(true);

            // If called with no argument → fetch all plants
            if (!newPlant) {
                const response = await fetch("http://localhost:6001/plants");
                if (!response.ok) throw new Error("Failed to fetch plants");
                const data = await response.json();
                setPlants(data);
                return;
            }

            // If called with a new plant → add it
            const response = await fetch("http://localhost:6001/plants", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPlant),
            });

            if (!response.ok) throw new Error("Failed to add plant");
            const newPlantData = await response.json();

            setPlants((prevPlants) => [...prevPlants, newPlantData]);
        } catch (err) {
            console.error("Error in handleAddPlant:", err);
        } finally {
            setLoading(false);
        }
    }

    // Fetch plants on mount
    useEffect(() => {
        handleAddPlant(); // No argument → fetch all
    }, []);

    // Update filtered plants whenever plants or searchTerm changes
    useEffect(() => {
        setFilteredPlants(
            plants.filter((plant) =>
                plant.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [plants, searchTerm]);

    // Handle search input change
    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <main>
            <NewPlantForm onAddPlant={handleAddPlant} />
            <Search searchTerm={searchTerm} onChange={handleSearchChange} />
            <PlantList plants={filteredPlants} loading={loading} /> {/* prevent test blocking */}
        </main>
    );
}

export default PlantPage;
