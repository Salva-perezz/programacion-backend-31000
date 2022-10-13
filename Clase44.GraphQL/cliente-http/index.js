import axios from "axios";

const graphqlQuery = {
  query: `{
    getPersona(id: "118d2d1d4ea9c1d8e0cf") {
        nombre edad
    }
  }`,
};

const options = {
  url: "http://localhost:3000/graphql",
  method: "POST",
  data: graphqlQuery,
};

const response = await axios(options);

console.log(response.data);

/*
mutation crearPepe {
        createPersona(datos: { nombre: "Pepe", edad: 35}) {
          id nombre edad
        }
}



{
    getPersona(id: "19bkjdscbakld") {
        nombre edad id
    }
}


*/
