import {useEffect,useState} from "react";
import styled from "styled-components";

function Popular() {

    const [popular,setPopular] = useState([])
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=f3bf7a5d0429424baae3198eaed90aa2&number=9`);
        const data = await api.json();
        setPopular(data.recipes)
    }
    return (
        <div>
            {popular.map((recipes) =>{
                return(
                    <div key={recipes.id}>
                        <p>
                            {recipes.title}
                        </p>
                    </div>

                )
            })
            }
        </div>
    )
}

export default Popular