let projectList=[];

function init() {
    addNewProject("Project one","Java",35,"06/11/2021");
    addNewProject("Project two","CSS",25,"15/12/2021");
    addNewProject("Project three","CSS",15,"02/02/2022");
    addNewProject("Project four","CSS",15,"02/02/2022");
    addNewProject("Project five","CSS",15,"02/02/2022");
}

function addNewProject(name,type,wage,dueDate) {
    projectList.push({name,type,wage,dueDate});
}

function populateTable() {
    let tableBody = $('#project-table-body');

    for(let i=0;i<projectList.length; i++){
        let newTr = $('<tr>');
        newTr.addClass("table-row");

        let newTh = $('<th>');
        newTh.attr('scope','row');
        newTh.html(i+1);
        newTr.append(newTh);

        let newCol1 = $('<td>');
        newCol1.html(projectList[i].name);
        newTr.append(newCol1);
        let newCol2 = $('<td>');
        newCol2.html(projectList[i].type);
        newTr.append(newCol2);
        let newCol3 = $('<td>');
        newCol3.html("$"+projectList[i].wage);
        newTr.append(newCol3);
        let newCol4 = $('<td>');
        let strDate = moment(projectList[i].dueDate,"DD/MM/YYYY").format("MMM Do,YYYY");
        newCol4.html(strDate);
        newTr.append(newCol4);
        let newCol5 = $('<td>');
        let diffDays = moment(projectList[i].dueDate,"DD/MM/YYYY").diff(moment(),'days');
        newCol5.html(diffDays);
        newTr.append(newCol5);
        let newCol6 = $('<td>');
        let earned = 8 * projectList[i].wage * diffDays;
        newCol6.html("$"+earned.toLocaleString("en-US"));
        newTr.append(newCol6);
        let newCol7 = $('<td>');
        newCol7.html("X");
        newCol7.on("click", function(){deleteProject(i);});
        newTr.append(newCol7);

        tableBody.append(newTr);
    }
    
    
}

function deleteProject (index) {
    console.log("Here: "+index);
	projectList.splice(index, 1);
    console.log(projectList);
    populateTable();
}; 

init();
populateTable();
