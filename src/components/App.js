// create your App component here
import { useEffect, useState } from "react"
function App() {
    const [dogImage, setDogImage] = useState([])
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then((data) => {
                setDogImage(data.image)
            })
    }, [])

    return (
        <div>
            <p>Loading...</p>
            <img src={dogImage} alt="A Random Dog" />
        </div>

    )
}

export default App