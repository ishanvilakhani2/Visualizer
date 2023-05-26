document.addEventListener("DOMContentLoaded", function() {
    var calendar = document.getElementById("calendar");
  
    // Create the day labels
    var daysOfWeek = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (var i = 0; i < daysOfWeek.length; i++) {
      var dayLabel = document.createElement("div");
      dayLabel.classList.add("day-label");
      dayLabel.textContent = daysOfWeek[i];
      calendar.appendChild(dayLabel);
    }
  
    // Create the hour labels and cells
    for (var hour = 0; hour < 24; hour++) {
      for (var day = 0; day < daysOfWeek.length - 1; day++) {
        if (day === 0) {
          var hourLabel = document.createElement("div");
          hourLabel.classList.add("hour-label");
          hourLabel.textContent = hour.toString().padStart(2, "0") + ":00";
          calendar.appendChild(hourLabel);
        }
  
        var hourCell = document.createElement("div");
        hourCell.classList.add("hour");
        hourCell.setAttribute("data-hour", hour);
        hourCell.setAttribute("data-day", day);
        calendar.appendChild(hourCell);
      }
    }
  
    // Add event listener for hour cells
    var hourCells = document.querySelectorAll(".hour");
    hourCells.forEach(function(cell) {
      cell.addEventListener("click", function() {
        var hour = this.getAttribute("data-hour");
        var day = this.getAttribute("data-day");
        var existingEvent = this.querySelector(".event");
        var eventText = prompt("Enter event details:", existingEvent ? existingEvent.textContent : "");
        if (eventText !== null) {
          if (existingEvent) {
            existingEvent.textContent = eventText;
          } else {
            var eventDiv = document.createElement("div");
            eventDiv.classList.add("event");
            eventDiv.textContent = eventText;
            this.appendChild(eventDiv);
          }
        }
      });
    });
  });