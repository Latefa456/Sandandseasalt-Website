//License by Louis Surmilo//
document.addEventListener('DOMContentLoaded', function () {
    
    var recentContentData = [
        { title: 'New Content Item 1', description: 'Description for New Content Item 1 goes here.' },
        { title: 'New Content Item 2', description: 'Description for New Content Item 2 goes here.' }
    ];

    function updateRecentContent() {
        var contentList = document.getElementById('contentList');

        contentList.innerHTML = '';

        recentContentData.forEach(function (item) {
            var contentItem = document.createElement('div');
            contentItem.classList.add('content-item');

            var titleElement = document.createElement('h3');
            titleElement.textContent = item.title;

            var descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;

            contentItem.appendChild(titleElement);
            contentItem.appendChild(descriptionElement);

            contentList.appendChild(contentItem);
        });
    }

    updateRecentContent();

    setInterval(updateRecentContent, 10000);
});

//License by Louis Surmilo//

//FM//