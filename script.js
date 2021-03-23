const count = 10;
const apiKey = 'Lc8rKNOSLA00JZ3ikIZNaSkoV9fhTKq6GpdLRztbmd0';

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
    }
    catch(error) {
    alert('error');
    }
}

getPhotos();