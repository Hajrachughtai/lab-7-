async function loadData() {

    //🎵 ASIM AZHAR SONG API
    const musicRes = await fetch("https://itunes.apple.com/search?term=asim+azhar&media=music&limit=25" );
    const musicData = await musicRes.json();
    

    const randomSong = musicData.results[Math.floor(Math.random() * musicData.results.length)];

    document.getElementById("cover").src = randomSong.artworkUrl100.replace("100x100", "300x300");
    document.getElementById("songName").textContent = randomSong.trackName;
    document.getElementById("albumName").textContent = randomSong.collectionName;
    document.getElementById("audio").src = randomSong.previewUrl;

document.getElementById("flower").src = "https://source.unsplash.com/random/?flower&t=" + Math.random();

} 