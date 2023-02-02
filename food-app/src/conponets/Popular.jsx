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
                    <Wrapper>
                        <h3>Popular Pick</h3>
                        {popular.map((recipes)=>{
                            return(
                                <Card>
                                    <p>{recipes.title}</p>
                                </Card>
                            )
                        })}
                    {/*// <div key={recipes.id}>*/}
                        <p>
                            {recipes.title}
                        </p>
                    </Wrapper>

                )
            })
            }
        </div>
    )
}
const Wrapper=styled.div`
margin:4rem 0rem
`
const Card=styled.div`
min-height:25rem;
border-radius:2rem
`

export default Popular