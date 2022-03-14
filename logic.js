const projects =[
    {
        "name": "Video Lecture Assistant",
        "image": "https://user-images.githubusercontent.com/55645993/153707497-778678d6-3baf-4e00-af3b-0dfbea4aea67.png",
        "desc":"1st Place Winner UW DSC X CSC 2021 🏆 Search Relevant Timeframes in Video Lectures",
        "link": "https://github.com/TanvirDeol/Video-Lecture-Assistant"
    },
    {
        "name": "Monopoly AI",
        "image": "https://user-images.githubusercontent.com/55645993/158095059-ed3d3b6f-06f6-4a4c-98da-9f8617aba71f.png",
        "desc":"Play against an AI Monopoly player in real-time 💰 - Uses Monte Carlo Tree Search",
        "link": "https://github.com/TanvirDeol/Monopoly-AI"
    },
    {
        "name": "Ride Optimizer",
        "image": "https://user-images.githubusercontent.com/55645993/158095762-35a33b20-6c81-47c8-a4ee-28ab9ca3fbec.png",
        "desc":"Winner of Most Efficient Code Design @ STEMFest 2021 🚕 Optimize Rides to Cut Emissions",
        "link": "https://github.com/TanvirDeol/Ride-Optimizer"
    },
    {
        "name": "FlashRecall",
        "image": "https://img.youtube.com/vi/3RyHrGA5uO0/0.jpg",
        "desc":"Using Flashcards to Automate Active Recall 📚 @ HTN 2021",
        "link": "https://github.com/TanvirDeol/Flash-Recall"
    },
];
var index =0;

function fadeIn(){
    document.getElementById("main").classList.remove("text-black");
    document.getElementById("main").classList.add("text-white");
    setTimeout(increment_fade,700,"resume_link");
    setTimeout(increment_fade,800,"github_link");
    setTimeout(increment_fade,900,"linkedin_link");
    setTimeout(increment_fade,1000,"email_link");
    dot_render();
}

function increment_fade(id){
    document.getElementById(id).classList.remove("text-black");
    document.getElementById(id).classList.remove("text-xs");
    document.getElementById(id).classList.add("text-white");
    document.getElementById(id).classList.add("text-xl");
}

function change_image(diff){
    var prevIndex = index;
    if(index > 0 && diff===-1)index-=1;
    else if(index< projects.length-1 && diff===1)index+=1;
    else if(index===0 && diff===-1)index=projects.length-1;
    else if(index===projects.length-1 && diff===1)index=0;
    document.getElementById("proj_title").innerText = projects[index].name;
    document.getElementById("proj_desc").innerText = projects[index].desc;
    document.getElementById("proj_link").href = projects[index].link;
    document.getElementById("proj_image").src = projects[index].image;


    document.getElementById("dot"+String(prevIndex)).classList.remove("text-white");
    document.getElementById("dot"+String(prevIndex)).classList.add("text-gray-700");
    document.getElementById("dot"+String(index)).classList.remove("text-gray-700");
    document.getElementById("dot"+String(index)).classList.add("text-white");
    
}


function dot_render(){
    for(var i=0;i<projects.length;i++){
        console.log("hi");
        document.getElementById("dots").innerHTML+="<p class=\"p-2 text-gray-700 transition-all duration-300\" id=\"dot"+String(i)+"\">●</p>";
    }
    document.getElementById("dot0").classList.remove("text-gray-700");
    document.getElementById("dot0").classList.add("text-white");
}