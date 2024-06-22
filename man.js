let menuIcon = document.querySelector('.menu-icon');
let sidebar =  document.querySelector('.sidebar')
let container = document.querySelector('.container');
const searchBox = document.getElementById("mySearch")

const API_key = 'AIzaSyCsC-FsHrnEZzVrwgDwzhnevtrXtHxPWz8';

menuIcon.onclick = function(){
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container')

    searchBox.addEventListener('click', () => {
        const query = searchBox.value;
        searchVideos(query);
    });
    
    function searchVideos(query) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_key}`)
            .then(response => response.json())
            .then(data => {
                displayVideos(data.items);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }
    

}
function displayVideos(videos) {
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-card');
        videoElement.innerHTML = `
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}">
            <h3>${video.snippet.title}</h3>
        `;
        videoContainer.appendChild(videoElement);
    });
}




