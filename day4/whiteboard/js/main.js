// declarations for song values
let song;
let playSong;

// spotifiy client creds
const clientId = "612e6d7349bd4f5ba92f87867cb186f2"
const clientSecret = "8e9ccbc597bf4c1da1139aeb816b9627"

// function to get token from spotify
const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    return data.access_token;
}

// function to trigger on click

/**
 * @param figId
 * 
 * function to trigger getting and playing song from spotify
 */

const clickedEvent = async (figId) => {
    let img_index = parseInt(figId.slice(-1)) - 1;
    let songInfo = document.getElementsByTagName('img')[img_index].attributes[2].value
    let track = songInfo.split(' - ')[0]
    let artist = songInfo.split(' - ')[1]
    console.log(track, artist);

    let song = await searchSong(track, artist);
    if(playSong){
        stopSnippet()
    }

    songSnippet(song);
};

/**
 * @param track
 * @param artist
 * 
 * Function gets song from spotify using the track and artist as query params
 * returns the song from preview_url
 */

const searchSong = async(track, artist) => {
    let token = await _getToken();

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `Bearer ${token}`]
    ])

    let request = new Request(`https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();
    console.log(response)
}

/**
 * @param url
 * 
 * Function will return an audio 
 */

const songSnippit = (url) => {
    playSong = new Audio(url);
    return playSong.play();

}

/**
 * No params
 * Function returns event to stop song snippet
 */

const stopSnippet = () => {
    playSong.pause();
}