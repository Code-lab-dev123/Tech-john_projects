      //----------------------INTRA PAGES--------------------// 
     var initialDisplayStates = {};
        
     function togglePage(pageId) {
       var selectedPage = document.getElementById(pageId);
        
     
       var pages = document.querySelectorAll('.inner-page');
       for (var i = 0; i < pages.length; i++) {
         if (pages[i] !== selectedPage) {
           if (!(pages[i].id in initialDisplayStates)) {
             initialDisplayStates[pages[i].id] = pages[i].style.display;
           }
           pages[i].style.display = initialDisplayStates[pages[i].id];
         }
       }
       if (selectedPage) {
         selectedPage.style.display = (selectedPage.style.display === 'none' ||
selectedPage.style.display === '') ? 'block' : 'none';
       }
     }


   
   
   
//-------------------SCHEDULE--------------------//
     function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dateTimeInput = document.getElementById("dateTimeInput");
    const taskList = document.getElementById("taskList");
    const errorFeedback = document.getElementById("errorFeedback");

    const task = taskInput.value;
    const dateTime = new Date(dateTimeInput.value);

    taskInput.classList.remove("form-error");
    errorFeedback.classList.remove("active");

    if (!task || isNaN(dateTime.getTime())) {
      
        taskInput.classList.add("form-error");
        errorFeedback.classList.add("active");
        return;
    }

  
    taskInput.classList.remove("form-error");
    errorFeedback.classList.remove("active");

    const listItem = document.createElement("ul");
    listItem.className = "list-group";

    const taskDetails = document.createElement("button");
    taskDetails.textContent = `Task: ${task}, Date and Time: ${dateTime.
toLocaleString()}`;

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "btn btn-danger delete-btn";
    deleteBtn.textContent = "Delete"  
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(taskDetails);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    

    const now = new Date();


    const timeDiff = dateTime.getTime() - now.getTime();

   
    setTimeout(() => {
  
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");
        toast.setAttribute("aria-atomic", "true");

        const toastBody = document.createElement("div");
        toastBody.className = "toast-body";
        toastBody.textContent = `<button class="added">Task reminder: ${task}, Date and Time: $
{dateTime.toLocaleString()}</button>`;

        toast.appendChild(toastBody);

        document.body.appendChild(toast);

        new bootstrap.Toast(toast).show();

       
        setTimeout(() => {
            document.body.removeChild(toast);
            listItem.classList.add("disabled-task");
        }, 30000);

    }, timeDiff);

    taskInput.value = "";
    dateTimeInput.value = "";
  }
  function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
};

//----------GREETING-----------------//

var greeting;
var time = new Date().getHours();
if (time < 12) {
    greeting = "GOOD MORNING";
} 
else if (time < 15) {
    greeting = "GOOD AFTERNOON";
} 
else if (time < 19) {
   greeting = "GOOD EVENING";
} 
else {
    greeting = "GOOD NIGHT";
}
document.getElementById("demo").innerHTML = greeting;



//----------------DATE AND TIME----------------//

function updateButtons() {
  const currentDateAndTime = new Date();
  const options = {
  month: 'long',
  day: '2-digit',
  year: 'numeric', 
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true ,
 };
  const formattedDate = currentDateAndTime.toLocaleDateString('en-US', options);
  document.getElementById('dateBtn').textContent = formattedDate;

  document.getElementById('dateBtn2').textContent = 
  formattedDate;
  
}
setInterval(updateButtons, 1000);

updateButtons()

//------------------LOGOUT---------------//

function removePage() {
  
let element = document.getElementById("page5");
if (element) {
  element.remove();
}
else {
  console.error("page not found")

}
}


//------------------------GRADES & REPORT--------------------//

function create() {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const taskList = document.getElementById("taskList");
  const errorFeedback = document.getElementById("errorFeedback");

  const name = nameInput.value;
  const email = emailInput.value;

  nameInput.classList.remove("form-error");
  emailInput.classList.remove("form-error");
  errorFeedback.classList.remove("active");

  if (!name || !email) {
    nameInput.classList.add("form-error");
    emailInput.classList.add("form-error");
    errorFeedback.classList.add("active");
    return;
  }

  nameInput.classList.remove("form-error");
  emailInput.classList.remove("form-error");
  errorFeedback.classList.remove("active");

  const listItem = document.createElement("ul");
  listItem.className = "list-group";

  const detailsDiv = document.createElement("ul");
  detailsDiv.textContent = `Name: ${name}, Email: ${email}`;

  listItem.appendChild(detailsDiv);
  taskList.appendChild(listItem);

  nameInput.value = "";
  emailInput.value = "";
}




//---------------------ADMIN--CHART--RANGE--JS--------------------------//






google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Create data for the histogram (bar chart)
  var histogramData = new google.visualization.DataTable();
  histogramData.addColumn('string', 'X');
  histogramData.addColumn('number', 'Histogram');
  histogramData.addColumn({type: 'string', role: 'style'}); // Add a column for style
  var histogramChartData = [];
  for (var i = 1; i <= 50; i++) {
    var randomValue = Math.random() * 100;
    var color = (randomValue > 50) ? 
    'color: rgb(224, 165, 165);' : 'color: rgb(119, 119, 193);'; // Default color
    if (randomValue > 75) {
      color = 'color:rgb(219, 180, 108) ;'; // Change color if value is above 75
    }
    histogramChartData.push(['Bar ' + i, randomValue, color]); // Random values for demonstration
  }
  histogramData.addRows(histogramChartData);

  // Options for the histogram chart
  var options = {
    title: 'Histogram Chart with Styled Bars',
    legend: { position: 'none' },
    width: '100%', // Set the chart width to 100%
    height: 500,
    bars: 'vertical',
    vAxis: { title: 'Value' },
    hAxis: { title: 'Bar', showTextEvery: 50 } // Adjust this value to show fewer or more labels
  };

  // Create the histogram chart
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(histogramData, options);
}








  













