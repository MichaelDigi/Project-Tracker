function printproject(name, type, duedate, hourlyrate ) {
    let tablerow = document.createElement("tr");
    let tdname = document.createElement("td");
    let tdtype = document.createElement("td");
    let tdduedate = document.createElement("td");
    let tdhourlyrate = document.createElement("td");
    tdname.textContent = name;
    tdtype.textContent = type;
    tdduedate.textContent = duedate;
    tdhourlyrate.textContent = hourlyrate;
    let tddaysuntil = document.createElement("td");
    let daysdifffernce = moment(duedate,'MM/DD/YYYY').diff(moment(),'days');
    tddaysuntil.textContent = daysdifffernce;
    let potentialearnings = document.createElement("td");
    let earnings = hourlyrate * daysdifffernce * 8;
    potentialearnings.textContent = earnings
    tablerow.append(
        tdname, tdtype, tdduedate, tdhourlyrate, tddaysuntil, potentialearnings
    );
}