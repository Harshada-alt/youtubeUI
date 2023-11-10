// Dummy JSON array with video details
const videoData = [
    {
        thumbnail: 'path_to_thumbnail1.jpg',
        channelAvatar: 'path_to_avatar1.jpg',
        videoTitle: 'Video Title 1',
        channelName: 'Channel 1',
        numViews: '1.5k views',
        timeUploaded: '1 day ago'
    },
    {
        thumbnail: 'path_to_thumbnail2.jpg',
        channelAvatar: 'path_to_avatar2.jpg',
        videoTitle: 'Video Title 2',
        channelName: 'Channel 2',
        numViews: '2.2k views',
        timeUploaded: '2 days ago'
    },
    // Add more video details as needed
];

// Function to create single_video element
function createSingleVideoElement(video) {
    const singleVideo = document.createElement('div');
    singleVideo.classList.add('single-video');

    // Create video thumbnail
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('video-thumbnail');
    thumbnail.style.backgroundImage = `url(${video.thumbnail})`;
    singleVideo.appendChild(thumbnail);

    // Create video info section
    const videoInfoSection = document.createElement('div');
    videoInfoSection.classList.add('video-info-section');

    // Create channel avatar
    const channelAvatar = document.createElement('div');
    channelAvatar.classList.add('channel-avatar');
    channelAvatar.style.backgroundImage = `url(${video.channelAvatar})`;
    videoInfoSection.appendChild(channelAvatar);

    // Create video info text section
    const videoInfoTextSection = document.createElement('div');
    videoInfoTextSection.classList.add('video-info-text-section');

    // Create video title
    const videoTitle = document.createElement('div');
    videoTitle.classList.add('video-title');
    videoTitle.textContent = video.videoTitle;
    videoInfoTextSection.appendChild(videoTitle);

    // Create channel name
    const channelName = document.createElement('div');
    channelName.classList.add('channel-name');
    channelName.textContent = video.channelName;
    videoInfoTextSection.appendChild(channelName);

    // Create stats section
    const stats = document.createElement('div');
    stats.classList.add('stats');

    // Create num views
    const numViews = document.createElement('div');
    numViews.classList.add('num-views');
    numViews.textContent = video.numViews;
    stats.appendChild(numViews);

    // Create time uploaded
    const timeUploaded = document.createElement('div');
    timeUploaded.classList.add('time-uploaded');
    timeUploaded.textContent = video.timeUploaded;
    stats.appendChild(timeUploaded);

    videoInfoTextSection.appendChild(stats);
    videoInfoSection.appendChild(videoInfoTextSection);
    singleVideo.appendChild(videoInfoSection);

    return singleVideo;
}

// Function to dynamically add single_video items
function addVideoItems() {
    const videosGrid = document.getElementById('videos-grid');

    videoData.forEach(video => {
        const singleVideo = createSingleVideoElement(video);
        videosGrid.appendChild(singleVideo);
    });
}

// Call the function to add video items
addVideoItems();
const hideSidebarIcon = document.querySelector('.hide_sidebar_icon');
const leftSectionContainer = document.querySelector('.left_section_container');
const bottomSection = document.querySelector('.bottom_section');
const rightSectionContainer = document.querySelector('.right_section_container');

let sidebarHidden = false; // Variable to track sidebar state

// Function to toggle the sidebar
function toggleSidebar() {
    sidebarHidden = !sidebarHidden;

    if (sidebarHidden) {
        // Hide nav_item_text in left_section_container
        const navItemTextElements = document.querySelectorAll('.nav_item_text');
        navItemTextElements.forEach((element) => {
            element.style.display = 'none';
        });

        // Hide bottom_section
        bottomSection.style.display = 'none';

        // Expand right_section_container
        leftSectionContainer.style.width = '50px';
        rightSectionContainer.style.width = 'calc(100% - 50px)';
    } else {
        // Restore original positions
        const navItemTextElements = document.querySelectorAll('.nav_item_text');
        navItemTextElements.forEach((element) => {
            element.style.display = 'block';
        });

        bottomSection.style.display = 'block';

        leftSectionContainer.style.width = '25%';
        rightSectionContainer.style.width = '75%';
    }
}

// Add click event listener to the hide_sidebar_icon
hideSidebarIcon.addEventListener('click', toggleSidebar);
const leftSectionContainer = document.querySelector('.left_section_container');
const rightSectionContainer = document.querySelector('.right_section_container');

let isLeftScrolling = false;
let isRightScrolling = false;

// Function to handle scrolling in the left section
function handleLeftScroll() {
    isLeftScrolling = true;
    isRightScrolling = false;
}

// Function to handle scrolling in the right section
function handleRightScroll() {
    isLeftScrolling = false;
    isRightScrolling = true;
}

// Add scroll event listeners to left and right sections
leftSectionContainer.addEventListener('scroll', handleLeftScroll);
rightSectionContainer.addEventListener('scroll', handleRightScroll);

// Function to handle scrolling in one section at a time
window.addEventListener('scroll', () => {
    if (isLeftScrolling) {
        rightSectionContainer.scrollTop = 0;
    } else if (isRightScrolling) {
        leftSectionContainer.scrollTop = 0;
    }
});

