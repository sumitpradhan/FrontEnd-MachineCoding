(async function(){
    const response= await fetch("./src/data.json");
    const res = await response.json();
    let empData=res;
    console.log(empData);
    let selectedEmployeeId = empData[0].id;
    let selectedEmployee = empData[0];

    
    const employeeNames= document.querySelector(".employeeNameList")
    const employeeDetail= document.querySelector(".employeeDetail")
    const addEmployeeBtn= document.querySelector(".createEmployee")
    const addEmployeeModal= document.querySelector(".addEmployee")
    const addEmployeeForm= document.querySelector(".addEmployee_create")
    //addEmployee_create
    
    addEmployeeBtn.addEventListener("click",()=>{
        addEmployeeModal.style.display="flex";
    })
    
    addEmployeeModal.addEventListener("click",(e)=>{
        if(e.target.className==="addEmployee")
        {addEmployeeModal.style.display="none";}
    })
    //render list of employees
    const renderEmployeeList=()=>{
        employeeNames.innerHTML="";

        empData.map((emp)=>{
            const employee= document.createElement("span");
            employee.classList.add("employeeNameItem");
            if(parseInt(selectedEmployeeId, 10)===emp.id)
            {
                employee.classList.add("selected");
                selectedEmployee=emp;
            }
            employee.setAttribute("id",emp.id);
            employee.innerHTML=`${emp.firstName} ${emp.firstName} <i class="employeeDelete">❌</i>` ;
            employeeNames.append(employee);
        })
    }
    renderEmployeeList();//rendering list of Employees
    
    //Render Single Employee
    const renderEmployeeInfo=()=>{
        if(selectedEmployeeId===-1)
        {
            employeeDetail.innerHTML="";
            return;
        }
        
        
        employeeDetail.innerHTML = `
        <img src="${selectedEmployee.imageUrl}" />
        <span class="employees__single--heading">
        ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
        </span>
        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>Mobile - ${selectedEmployee.contactNumber}</span>
        <span>DOB - ${selectedEmployee.dob}</span>
    `;
    }
    //Adding Event Listener to employee List 
    employeeNames.addEventListener("click",(e)=>{
        console.log(e.target);
        if(e.target.tagName==="SPAN" && e.target.id!==selectedEmployeeId)
        {
            selectedEmployeeId=e.target.id;
            //selectedEmployee=
            renderEmployeeList();
            renderEmployeeInfo();
        }
        //delete from list
        if(e.target.tagName==="I")
        {
            empData=empData.filter(emp=> String(emp.id)!==e.target.parentNode.id)
            console.log(empData)
            if(String(selectedEmployeeId)==e.target.parentNode.id)
            {
                selectedEmployeeId=empData[0]?.id||-1;
                selectedEmployee=empData[0]||{};
                console.log(selectedEmployeeId);
                renderEmployeeInfo();
            }
            renderEmployeeList();
        }
    })
     
    //Event listener for form submit.
    addEmployeeForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const formData =new FormData(addEmployeeForm);
        const values = [...formData.entries()];
        console.log(values);
        const emp ={};
        values.map((empData)=>{
            emp[empData[0]]=empData[1];
        })
        emp.id = empData[empData.length - 1].id + 1;
          emp.imageUrl =
          emp.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

          empData.push(emp);
          renderEmployeeList();
          addEmployeeForm.reset();
          addEmployeeModal.style.display = "none";
    })
    //render single employee
    if (selectedEmployee) renderEmployeeInfo();
})()