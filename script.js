function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

        button.addEventListener("click", event => {
          paragraph.innerHTML = 'Houston, we have liftoff!';
        });
        missionAbort.addEventListener("mouseover", function (event){
          event.target.style.backgroundColor ="red";
        });        
        missionAbort.addEventListener("mouseout", function (event){
          event.target.style.backgroundColor ="";
        });
        missionAbort.addEventListener('click', event => {
          let response = window.confirm('Are you sure you want to abort the mission?')
          if (response){
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.'
          }else{
            paragraph.innerHTML = 'The shuttle is on the ground'
          }
        });
                                  
    
    // Put your code for the exercises here.
    
}

window.addEventListener("load", init);