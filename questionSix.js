function createPlaylist(playlistName) {
    var playlist = {
        name: playlistName,
        songs: [],
        artists: [],
        number: 0
    };

    return {
        addSong: function(song, artist) {
            playlist.songs.push(song);
            playlist.artists.push(artist);
            playlist.number += 1;
        },

        listSongs: function() {
            console.log(playlist.name, "playlist:");
            for (var i = 0; i < playlist.number; i++) {
                console.log(playlist.songs[i], "by", playlist.artists[i]);
            }
        }
    };
}

const myPlaylist = createPlaylist("My Favourites");
myPlaylist.addSong("Song1", "Artist1");
myPlaylist.addSong("Song2", "Artist2");
myPlaylist.addSong("Song3", "Artist3");

myPlaylist.listSongs();
