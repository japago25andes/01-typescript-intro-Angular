interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    autor: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        autor: 'Ed Sheeran',
        year: 2005
    }
}


const song = 'New song';

//const { song:anotherSong, songDuration:duration} = audioPlayer;
//const { details: { autor } } = audioPlayer;
const {autor:autor} = audioPlayer.details;


//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Autor: ', autor);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks = dbz[3] || 'No existe';


console.error('Personaje: ', trunks);















export {}