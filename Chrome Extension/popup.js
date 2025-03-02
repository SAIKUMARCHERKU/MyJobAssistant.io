document.getElementById("saveJob").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getJobDetails
    }, (results) => {
      if (results && results[0].result) {
        saveJobApplication(results[0].result);
      }
    });
  });
});

function getJobDetails() {
  // Extract job details from the current page.
  const jobTitle = document.querySelector("h1.job-title")?.innerText || "Unknown Job Title";
  const jobDescription = document.querySelector(".job-description")?.innerText || "No description available";
  const jobUrl = window.location.href;

  return { title: jobTitle, description: jobDescription, url: jobUrl };
}



function saveJobApplication(jobData) {
  fetch('http://127.0.0.1:5000/api/saveJob', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Job saved successfully:', data);
    alert('Job saved!');
  })
  .catch((error) => {
    console.error('Error saving job:', error);
    alert('Failed to save job.');
  });
}


