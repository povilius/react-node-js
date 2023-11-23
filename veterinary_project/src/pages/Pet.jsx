import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Pet = () => {
  const { id } = useParams(); // parametras visada grįžta kaip string, todel nepamirškite castint i number (jei reikia)
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setTimeout(() => {
          setPet(response);
        }, 1000);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  if (!pet) {
    return <div>Pet loading...</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString()
  }

  return (
    <div>
      <h1>{pet.name}: Health records</h1>
      <button onClick={goBack}>Go back to user list</button>
      <p>Status: {pet.status ? pet.status : "None"}</p>
      <p>Description: {pet.description ? pet.description : "None"}</p>
      <p>{formatDate(pet.dob)}</p>
    </div>
  );
};

export default Pet