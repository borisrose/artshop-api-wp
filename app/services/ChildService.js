const { spawn } = require('child_process');
const path = require('path');

class ChildService {
    static exec({ event, data}, childProcessName){


        console.log('into exec function of ChildProcess', childProcessName)
        const dataToTransmit = {event, data};
        const filePath = path.resolve("./app/child-processes",childProcessName)
        const childProcess = spawn('node', [filePath], {
            cwd: process.cwd()
        });

        if (!filePath) {
            console.error('Chemin du fichier du processus enfant invalide');
            return;
        }
        childProcess.on('error', (error) => {
            console.error('Erreur lors de la création du processus enfant :', error);
        });

        childProcess.stdout.on('data', (outputData) => {
            console.log('Sortie du processus enfant :', outputData.toString());
        });

        // Envoyer les données au processus enfant
        childProcess.stdin.write(JSON.stringify(dataToTransmit));
        childProcess.stdin.end();
    }

}

module.exports = ChildService