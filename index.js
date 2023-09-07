//get the elements that we want to add fxnality to
const currDate = document.getElementById("curr_date");
const utctime = document.getElementById("utc_time");

function getCurrUTCTime() {
	const currentDate = new Date();

    // create hours, minutes, seconds, and milliseconds, to aid in displaying a formated version

	const hours = currentDate.getUTCHours().toString().padStart(2, "0");
	const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
	const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
	const milliseconds = currentDate.getUTCMilliseconds().toString().padStart(3, "0");
	currDate.textContent = new Intl.DateTimeFormat("en-US", {
		weekday: "long",
	}).format(currentDate);
	utctime.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}

// Call the getCurrUTCTime func and set an interval for it to refresh every 1 second

getCurrUTCTime();
setInterval(getCurrUTCTime, 1000);
