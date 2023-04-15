/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    function callback(element,index,arr){
        if(arr[index]["profession"]=="developer"){
            console.log(element);
        }
    }

    arr.map(callback);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    function callback(element,index,arr){
        if(arr[index]["profession"]=="developer"){
            console.log(element);
        }
    }

    arr.forEach(callback);
  }
  
  function addData() {
    //Write your code here, just console.log
    let object1={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(object1);
    arr.forEach(element=>{
        console.log(element);
    })
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.forEach((element,index)=>{
        if(element.profession=="admin"){
            arr.splice(index,1);
        }
    });
    arr.forEach(element=>{
        console.log(element);
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let concatArray = [
        { id: 5, name: "rishabh", age: "24", profession: "associate consultant" },
        { id: 6, name: "kartik", age: "25", profession: "student" },
        { id: 7, name: "apoorv", age: "26", profession: "data engineer" },
      ];
      let result=arr.concat(concatArray);
      result.forEach(element=>{
        console.log(element);
    })
      
  }