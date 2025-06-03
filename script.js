
    const songsData = {
        Retro: [
            { name: "o mere dil ke chain", src: "o mere dil ke chain - Mere Jeevan Saathi 128 Kbps.mp3", img: "o mere dil ke chain.jpg" },
            { name: "Jab Koi Baat", src: "Jab Koi Baat Bigad Jaye - Jurm 128 Kbps.mp3", img: "jab koi baat.jpg" },
            { name: "neele neele amber", src: "old_Kalakaar-Neele Neele Ambar.mp3", img: "neele neele amber.jpg" },
       ] ,
    
        Rap: [
            { name: "Rap God", src: "Eminem - Rap God .mp3", img: "rapgod.jpg" },
            { name: "Believer", src: "Believer .mp3", img: "beliver.jpg" },
            { name: "Venom", src: "venom.mp3", img: "venom.jpg" },
        ],
        Classical: [
            { name: "Mile Sur Hamara", src: "Mile-Sur-Mera-Tumhara.mp3", img: "mile.jpg" },
            { name: "Raga Jog", src: "Raag Jog - Dahek 128 Kbps.mp3", img: "raga jog.jpg" },
            { name: "Bharat Hamko Jaan Se Pyara", src: "Bharat Humko Jaan Se Pyara Hai - Roja 128 Kbps (1).mp3", img: "bharat.jpg" },
        ],
    };

    let currentCategory = "";
    let currentSongIndex = 0;
    const playingArea = document.getElementById("playingArea");
    const playingImg = document.getElementById("playingImg");
    const playingTitle = document.getElementById("playingTitle");
    const audioPlayer = document.getElementById("audioPlayer");

    function toggleSongs(category) {
        const list = document.getElementById(category);
        list.innerHTML = "";

        if (list.classList.contains("hidden")) {
            Object.keys(songsData).forEach(cat => {
                document.getElementById(cat).classList.add("hidden");
            });

            songsData[category].forEach((song, index) => {
                const songItem = document.createElement("div");
                songItem.className = "song-item";
                songItem.innerHTML = `
                    <a href="#" onclick="loadSong('${category}', ${index})">
                        <img src="${song.img}" alt="${song.name}">
                        <p>${song.name}</p>
                    </a>
                `;
                list.appendChild(songItem);
            });
            list.classList.remove("hidden");
        } else {
            list.classList.add("hidden");
        }
    }

    function loadSong(category, index) {
        currentCategory = category;
        currentSongIndex = index;
        const song = songsData[category][index];
        audioPlayer.src = song.src;
        playingTitle.innerText = "Now Playing: " + song.name;
        playingImg.src = song.img;
        playingArea.style.display = "flex";
        audioPlayer.play();
    }

    function closePlayingArea() {
        playingArea.style.display = "none"; 
    }

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    function nextSong() {
        if (currentCategory && songsData[currentCategory]) {
            currentSongIndex = (currentSongIndex + 1) % songsData[currentCategory].length;
            loadSong(currentCategory, currentSongIndex);
        }
    }

    function previousSong() {
        if (currentCategory && songsData[currentCategory]) {
            currentSongIndex = (currentSongIndex - 1 + songsData[currentCategory].length) % songsData[currentCategory].length;
            loadSong(currentCategory, currentSongIndex);
        }
    }

    function toggleRepeat() {
        audioPlayer.loop = !audioPlayer.loop;
        alert(audioPlayer.loop ? "Repeat Mode On" : "Repeat Mode Off");
    }
