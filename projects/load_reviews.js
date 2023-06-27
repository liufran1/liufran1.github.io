function loadWebsite() {
    var urlInput = document.getElementById("urlInput");
    var url = urlInput.value;

    var previewContainer = document.getElementById("previewContainer");
    previewContainer.innerHTML = `<iframe src="${url}"></iframe>`;


    var outputContainer = document.getElementById("reviewSummary");
    outputContainer.innerHTML = `
        <div class="spinning-wheel"></div>
      `;

    // var progressBar = document.querySelector(".progress-bar .progress");
    var spinningWheel = document.querySelector(".spinning-wheel");

      // Set a timeout to show the spinning wheel after 10 seconds
    // var timeoutId = setTimeout(() => {
    //     progressBar.style.width = "100%";
    //     progressBar.style.transition = "";
    //     spinningWheel.style.display = "inline-block";
    //   }, 10000);
      // Make an API call to retrieve the data asynchronously
    fetch("https://cb09ahz069.execute-api.us-east-2.amazonaws.com/get_reviews?input_url=" + encodeURIComponent(url))  
        .then(response => response.text())
        .then(data => {
          outputContainer.innerHTML = `<p align="left">${data}</p>`;
        })
        .catch(error => {
          outputContainer.innerHTML = "We ran into an error while getting reviews, try again in a bit.";
          console.error(error);
        });



    }
