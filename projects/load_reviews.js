function loadWebsite() {
    var urlInput = document.getElementById("urlInput");
    var url = urlInput.value;
    // var reviewText = `Getting reviews for ${url}`

    var previewContainer = document.getElementById("previewContainer");
    previewContainer.innerHTML = `<iframe src="${url}"></iframe>`;


    var outputContainer = document.getElementById("reviewSummary");
    outputContainer.innerHTML = `
        <div class="progress-bar">
          <div class="progress"></div>
        </div>
        <div class="spinning-wheel"></div>
      `;

    var progressBar = document.querySelector(".progress-bar .progress");
    var spinningWheel = document.querySelector(".spinning-wheel");

      // Set a timeout to show the spinning wheel after 10 seconds
    var timeoutId = setTimeout(() => {
        progressBar.style.width = "100%";
        progressBar.style.transition = "";
        spinningWheel.style.display = "inline-block";
      }, 10000);

      // Make an API call to retrieve the data asynchronously
      
      var delayInMilliseconds = 10000; // mock a delay
      setTimeout(function() {
      // fetch("https://run.mocky.io/v3/5ffdb194-a376-4451-9ed3-4ab18b3ca074")
      fetch("http://3.141.28.170:8080/reviews?input_url=" + encodeURIComponent(url))  // replace with custom url
        .then(response => response.text())
        .then(data => {
          outputContainer.innerHTML = `<p align="left">${data}</p>`;
        })
        .catch(error => {
          outputContainer.innerHTML = "Error occurred while fetching data.";
          console.error(error);
        });
    }, delayInMilliseconds);


    }
