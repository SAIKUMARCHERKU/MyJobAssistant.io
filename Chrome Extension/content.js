function getJobDetails() {
    let jobTitle = document.querySelector("h1")?.innerText || "Not Found";
    let company = document.querySelector(".topcard__org-name-link")?.innerText || "Unknown";
    let description = document.querySelector(".description__text")?.innerText || "No description available";
    let url = window.location.href;

    return { jobTitle, company, description, url };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getJobDetails") {
        let details = getJobDetails();
        sendResponse(details);
    }
});
