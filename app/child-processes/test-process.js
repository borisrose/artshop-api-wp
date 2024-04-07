process.stdin.on('data', (data) => {
    console.log('into test child process')
    const jsonData = JSON.parse(data);
    console.log('Données reçues du middleware de test :', jsonData);
    // Effectuer une requête HTTP ou tout autre traitement avec les données
    // Ici, vous pouvez utiliser des bibliothèques comme axios pour envoyer les données à une API externe
    // Exemple :
    // axios.post('URL_API_EXTERNE', jsonData)
    //     .then(response => console.log(response.data))
    //     .catch(error => console.error(error));
});