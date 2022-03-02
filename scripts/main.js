function read_display_Quote(){
    //get into the right collection
    db.collection("quotes").doc("tuesday")
    .onSnapshot(tuesdayDoc => {
        console.log(tuesdayDoc.data());
        document.getElementById("quote_goes_here").innerHTML=tuesdayDoc.data().quote;
    })
}

read_display_Quote();

function insertName(){
    //console.log("heyhey inside the insertName")
    // to check if the user is logged in:
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log(user.uid); //let me to know who is the user that logged in to get the UID
            currentUser = db.collection("users").doc(user.uid); // will to the firestores and 
            currentUser.get().then(userDoc => {
                // get the user name
                var user_Name = userDoc.data().name;
                console.log(user_Name)
                document.getElementById("name_goes_here").innerText = user_Name
            })
        }
    })
}

insertName();