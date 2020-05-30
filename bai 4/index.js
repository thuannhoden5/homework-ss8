const timeSheetData = document.getElementById('timeSheetData');
const enterProject = document.getElementById('Enter_project');
const enterTask = document.getElementById('Enter_task');
const project = document.getElementById('project');
const click_ne = document.getElementById('click_ne');
const timeSpent = document.getElementById('timeSpent')
function add (){
    timeSheetData.insertAdjacentHTML('beforeend',`<tr><td>${enterProject.value}</td><td>${enterTask.value}</td><td>${timeSpent.value}</td></tr>`)
}
click_ne.addEventListener('click',()=>{
    add();
;})