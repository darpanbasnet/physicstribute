const Physicists = [
    {
        name: 'Aristotle',
        dateOfBirth: '384 BCE',
        dateOfDemise: '322 BCE',
        image: './assets/images/aristotle.jpg',
        workDescription: {
            point1: ` Theory of Motion: Aristotle classified motion into natural (inherent to objects) and violent (caused by external force), providing a foundation for understanding physics.`,
            point2: `Theory of Causes: Aristotle proposed four causes (material, formal, efficient, and final) to explain the existence and behavior of objects, offering a systematic approach to understanding physical phenomena.`,
            point3: `Study of Natural Philosophy: Aristotle explored various aspects of natural philosophy, including the nature of matter, principles of change, properties of motion, and celestial behavior, contributing to the development of physics.`,
            point4: `Cosmology: Aristotle formulated a geocentric model of the universe, placing the Earth at the center and celestial bodies within concentric spheres, influencing cosmological understanding for centuries.`,
            point5: `Philosophy of Nature: Aristotle's physics integrated with his philosophical framework, emphasizing teleology (objects having inherent purposes) and influencing scientific inquiry and the development of physics.`
        }
    },
    {
        name: 'Nicolaus Copernicus',
        dateOfBirth: '19 February 1473',
        dateOfDemise: '24 May 1543',
        image: './assets/images/nicolaus.jpg',
        workDescription: {
            point1: ` Heliocentric Model: Copernicus is best known for proposing the heliocentric model of the solar system, which placed the Sun at the center and suggested that Earth and other planets orbited around it. This groundbreaking idea challenged the prevailing geocentric model and laid the foundation for modern understanding of planetary motion.`,
            point2: `Copernican Revolution: Copernicus's heliocentric model triggered a scientific revolution, known as the Copernican Revolution, that revolutionized our understanding of the universe. It sparked a shift from a geocentric worldview to a heliocentric one and paved the way for future astronomical discoveries.`,
            point3: `De Revolutionibus Orbium Coelestium: Copernicus's seminal work, "De Revolutionibus Orbium Coelestium" (On the Revolutions of the Celestial Spheres), published in 1543, presented his heliocentric model and provided detailed mathematical calculations and observations to support it. This book became a cornerstone of modern physics and astronomy.`,
            point4: `Influence on Kepler and Galileo: Copernicus's ideas influenced other prominent scientists, such as Johannes Kepler and Galileo Galilei, who further developed and expanded upon his work. Kepler's laws of planetary motion and Galileo's telescopic observations provided empirical evidence for the heliocentric model.`,
            point5: `Paradigm Shift in Scientific Thinking: Copernicus's contributions challenged prevailing dogma and initiated a profound shift in scientific thinking. His heliocentric model introduced a new way of understanding the cosmos, emphasizing observation, mathematics, and empirical evidence. It marked a significant departure from the authority of ancient Greek and medieval scholars, setting the stage for the scientific method and the progress of physics as a discipline.`
        }
    },
    {
        name: 'Galileo Galilei',
        dateOfBirth: '15 February 1564',
        dateOfDemise: '8 January 1642',
        image: './assets/images/galileo.jpeg',
        workDescription: {
            point1: ` Observations and Experiments: Galileo made telescopic observations, discovered Jupiter's moons, and supported the heliocentric model of the solar system.`,
            point2: `Laws of Motion: Galileo's experiments led to principles of classical mechanics, including inertia and predictable motion patterns`,
            point3: `Pendulum Clock: Galileo's study of pendulums contributed to the development of accurate time measurement.`,
            point4: `The Law of Falling Bodies: Galileo showed that all objects fall at the same rate of acceleration regardless of their mass.`,
            point5: `Conflict with the Church: Galileo's support for heliocentrism led to his trial and house arrest by the Catholic Church, symbolizing the clash between science and religious authority.`
        }
    },
    {
        name: 'Sir Isaac Newton',
        dateOfBirth: 'January 4, 1643',
        dateOfDemise: 'March 31, 1727',
        image: './assets/images/newton.jpg',
        workDescription: {
            point1: ` Observations and Experiments: Galileo made telescopic observations, discovered Jupiter's moons, and supported the heliocentric model of the solar system.`,
            point2: `Laws of Motion: Galileo's experiments led to principles of classical mechanics, including inertia and predictable motion patterns`,
            point3: `Pendulum Clock: Galileo's study of pendulums contributed to the development of accurate time measurement.`,
            point4: `The Law of Falling Bodies: Galileo showed that all objects fall at the same rate of acceleration regardless of their mass.`,
            point5: `Conflict with the Church: Galileo's support for heliocentrism led to his trial and house arrest by the Catholic Church, symbolizing the clash between science and religious authority.`
        }
    },
    
]
let body = document.querySelector('body');
// let image = document.getElementById('hero-image');
// let intro = document.getElementById('intros');
// let workList = document.getElementById('work-list');
let bigContainer = document.createElement('div');
let bigAtt = document.createAttribute('class');
bigAtt.value = 'big-container';
bigContainer.setAttributeNode(bigAtt);
body.appendChild(bigContainer); 

Physicists.forEach(element=>{
    let container = document.createElement('div');
    let containerAttC = document.createAttribute('class'); 
    containerAttC.value ='container';
    container.setAttributeNode(containerAttC);
    bigContainer.appendChild(container);
    
    let image =  document.createElement('div');
    let imageClass= document.createAttribute('class');
    imageClass.value= 'image';
    image.setAttributeNode(imageClass);
    container.appendChild(image);

    let imgSrc = document.createAttribute('src');
    imgSrc.value = element.image;
    let imgAlt = document.createAttribute('alt');
    imgAlt.value = element.name;
    let img = document.createElement('img');
    img.setAttributeNode(imgSrc);
    img.setAttributeNode(imgAlt);
    image.appendChild(img);

    let intro =  document.createElement('div');
    let introClass= document.createAttribute('class');
    introClass.value= 'intro';
    intro.setAttributeNode(introClass);
    container.appendChild(intro);

    let name = document.createElement('h2');
    let nameId = document.createAttribute('id');
    nameId.value = 'name';
    name.textContent = element.name
    intro.appendChild(name);
    
    let dateWrapper = document.createElement('div');
    let wrapperClass = document.createAttribute('class');
    wrapperClass.value = 'date-wrapper';
    dateWrapper.setAttributeNode(wrapperClass);
    intro.appendChild(dateWrapper);
   
    
    let span1 = document.createElement('span');
    let span1Id = document.createAttribute('id');
    span1Id.value = 'birth';
    span1.setAttributeNode(span1Id);
    span1.textContent = element.dateOfBirth;
    dateWrapper.appendChild(span1);

    let span2 = document.createElement('span');
    let span2Id = document.createAttribute('id');
    span2Id.value = 'death';
    span2.setAttributeNode(span2Id);
    span2.textContent = element.dateOfDemise;
    dateWrapper.appendChild(span2);

    let workcont =  document.createElement('div');
    let workcontClass= document.createAttribute('class');
    workcontClass.value= 'work-container';
    workcont.setAttributeNode(workcontClass);
    container.appendChild(workcont);

    let workList = document.createElement('ul');
    let worklistatt = document.createAttribute('class');
    worklistatt.value= 'work-list';
    workList.setAttributeNode(worklistatt);
    workcont.appendChild(workList);

       for (const key in element.workDescription) {
        let workli = document.createElement('li');
        let workP = document.createElement('p');
        let workCLass = document.createAttribute('class');
        workCLass.value = 'work-list-item';
        workli.setAttributeNode(workCLass);
        workP.textContent = element.workDescription[key];
        workList.appendChild(workli);
        workli.appendChild(workP);
       }

})