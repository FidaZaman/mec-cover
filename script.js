// Teachers (Updated List - Divided into name and designation)
const teachers = {
    prof_Dr_Engr_Md_Mizanur_Rahman: { name: 'Prof. Dr. Engr. Md. Mizanur Rahman', des: 'Professor (CE) & Principal (Additional Charge)', dept: 'CE' },
    Abdur_Rouf: { name: 'Abdur Rouf', des: 'Associate Professor (CSE) & Academic Incharge', dept: 'CSE' },
    Md_Rafiqul_Islam: { name: 'Md. Rafiqul Islam', des: 'Associate Professor (Mathematics)', dept: 'Mathematics' },
    Dr_Atikur_Rahman_Baizid: { name: 'Dr. Atikur Rahman Baizid', des: 'Associate Professor (Physics) and Head of Department (Non-Tech)', dept: 'Physics' },
    Md_Shahid_Iqbal: { name: 'Dr. Md. Shahid Iqbal', des: 'Associate Professor (EEE)', dept: 'EEE' },
    SM_Anowarul_Haque: { name: 'S. M. Anowarul Haque', des: 'Associate Professor and Head of Department (EEE)', dept: 'EEE' },
    Rownak_Ara_Chowdhury: { name: 'Rownak Ara Chowdhury', des: 'Associate Professor & Head of Department (CSE)', dept: 'CSE' },
    Muhammad_Abdus_Sattar_Titu: { name: 'Muhammad Abdus Sattar Titu', des: 'Assistant Professor (Mathematics)', dept: 'Mathematics' },
    Jebunnesa_Roma: { name: 'Jebunnesa Roma', des: 'Assistant Professor (Physics)', dept: 'Physics' },
    Mrinal_Kanti_Roy: { name: 'Mrinal Kanti Roy', des: 'Assistant Professor (Chemistry)', dept: 'Chemistry' },
    Rabeya_Akter: { name: 'Rabeya Akter', des: 'Assistant Professor (EEE)', dept: 'EEE' },
    Md_Nuruzzaman: { name: 'Md. Nuruzzaman', des: 'Assistant Professor and Head of Department (CE)', dept: 'CE' },
    Ozifatun_Jannat_Akhi: { name: 'Ozifatun Jannat Akhi', des: 'Assistant Professor (CSE)', dept: 'CSE' },
    Md_Ashraful_Alam: { name: 'Md. Ashraful Alam', des: 'Lecturer (EEE)', dept: 'EEE' },
    Sabrina_Sattar_Setu: { name: 'Sabrina Sattar Setu', des: 'Lecturer (CSE)', dept: 'CSE' },
    Jenia_Shultana: { name: 'Jenia Shultana', des: 'Lecturer (CE)', dept: 'CE' },
    Susanta_Dev_Nath: { name: 'Susanta Dev Nath', des: 'Lecturer (EEE)', dept: 'EEE' },
    Utpal_Goswami: { name: 'Utpal Goswami', des: 'Workshop/Laboratory Incharge', dept: 'Workshop' },
    Abdul_Wahed: { name: 'Abdul Wahed', des: 'Lecturer (EEE)', dept: 'EEE' },
    A_B_M_Noushad_Bhuiyan: { name: 'A. B. M. Noushad Bhuiyan', des: 'Lecturer (EEE)', dept: 'EEE' },
    Muhammad_Saqibul_Amin: { name: 'Muhammad Saqibul Amin', des: 'Lecturer (Social Scince)', dept: 'Social Science' },
    Muaz_Bin_Ali: { name: 'Muaz Bin Ali', des: 'Lecturer (CE)', dept: 'CE' },
    Yasin_Edmam_Iman: { name: 'Yasin Edmam Iman', des: 'Lecturer (CE)', dept: 'CE' },
    Md_Ismail_Hossen: { name: 'Md. Ismail Hossen', des: 'Lecturer (CSE)', dept: 'CSE' },
    A_K_M_Mahfuzur_Rahman: { name: 'A.K.M Mahfuzur Rahman', des: 'Lecturer (CSE)', dept: 'CSE' }
};

// Get form and elements for displaying the cover page details
const form = document.getElementById('cover-page-form');
const departmenttt = document.getElementById('department-2');
const coursecode = document.getElementById('ccode');
const courdename = document.getElementById('cname');
const expno = document.getElementById('expNo');
const expname = document.getElementById('expName');
const nameee = document.getElementById('name-2');
const reginooo = document.getElementById('regiNo');
const sessionnn = document.getElementById('session-2');
const rolll = document.getElementById('roll-2');
const batchhh = document.getElementById('batch-2');
const cteacherrr = document.getElementById('cTeacher');
const subdate = document.getElementById('subDate');
const expdateee = document.getElementById('expDate');
const expdatblank = document.getElementById('mainH2');

// Add event listener to the form to handle submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Get form data
    const formData = new FormData(form);
    
    // Extract data from the form
    const department = formData.get('department');
    const courseCode = formData.get('course-code');
    const courseName = formData.get('course-name');
    const expNo = formData.get('experiment-no');
    const expName = formData.get('experiment-name');
    const name = formData.get('name');
    const regiNo = formData.get('registration');
    const session = formData.get('session');
    const roll = formData.get('roll');
    const batch = formData.get('batch');
    const cTeacher = formData.get('course-teacher');
    const tNameExtra = formData.get('teacher-name'); 
    const tDesExtra = formData.get('teacher-des');   
    const subDate = formData.get('submission-date');
    const expDate = formData.get('experiment-date');

    // Update the cover page with form data
    departmenttt.innerHTML = `${department}`;
    coursecode.innerHTML = `${courseCode}`;
    if(coursecode.innerHTML == ""){
        coursecode.style.marginRight = "400px"
    }
    else{
        coursecode.style.marginRight = "0px"
    }
    courdename.innerHTML = `${courseName}`;
    if(courdename.innerHTML == ""){
        courdename.style.marginRight = "400px"
    }
    else{
        courdename.style.marginRight = "0px"
    }
    expno.innerHTML = `${expNo}`;
    expname.innerHTML = `${expName}`;
    if(expname.innerHTML == ""){
        expname.style.width = "600px"
        expname.style.height = "85px"
    }
    else{
        expname.style.width = "auto"
        expname.style.height = "auto"
    }
    nameee.innerHTML = `${name}`;
    reginooo.innerHTML = `${regiNo}`;
    sessionnn.innerHTML = `${session}`;
    rolll.innerHTML = `${roll}`;
    batchhh.innerHTML = `${batch}`;
    
    // --- UPDATED TEACHER SUBMISSION LOGIC ---
    if (tNameExtra && tDesExtra) {
        // Always prioritize whatever is in the text boxes (whether typed or auto-filled)
        cteacherrr.innerHTML = `${tNameExtra} <br> ${tDesExtra} <br> <span style="font-size:14px;">Mymensingh Engineering College</span>`;
    } else if (cTeacher && teachers[cTeacher]) {
        // Safety fallback just in case the boxes are empty
        cteacherrr.innerHTML = `${teachers[cTeacher].name} <br> ${teachers[cTeacher].des} <br> <span style="font-size:14px;">Mymensingh Engineering College</span>`;
    } else {
        cteacherrr.innerHTML = "Please provide the teacher's name and designation.";
    }
    // -----------------------------------------
    
    subdate.innerHTML = `${subDate}`;
    if(expDate == ""){ 
        expdatblank.style.display = "none";
    }else{
        expdateee.innerHTML = `${expDate}`;
    }
});

function preview() {
    const departmentSelect = document.getElementById('department');
    const departmentValue = departmentSelect.value;

    if (departmentValue) {
        document.getElementById('popup').style.transform = "translatex(50px)";
    } else {
    }
}

//not using thisfor now 
function showMecAlert(message) {
    let overlay = document.getElementById('mec-alert-overlay');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'mec-alert-overlay';
        overlay.style.cssText = [
            'position: fixed',
            'inset: 0',
            'display: none',
            'align-items: center',
            'justify-content: center',
            'padding: 16px',
            'background: rgba(15, 23, 42, 0.45)',
            'backdrop-filter: blur(4px)',
            'z-index: 99999'
        ].join('; ') + ';';

        const box = document.createElement('div');
        box.style.cssText = [
            'width: min(92vw, 360px)',
            'border-radius: 18px',
            'background: #ffffff',
            'box-shadow: 0 20px 60px rgba(15, 23, 42, 0.25)',
            'border: 1px solid rgba(148, 163, 184, 0.25)',
            'padding: 22px 20px 18px',
            'text-align: center',
            'font-family: inherit'
        ].join('; ') + ';';

        const title = document.createElement('div');
        title.textContent = 'Notice';
        title.style.cssText = 'font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 10px;';

        const text = document.createElement('div');
        text.id = 'mec-alert-text';
        text.style.cssText = 'font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 18px;';

        const okBtn = document.createElement('button');
        okBtn.type = 'button';
        okBtn.textContent = 'OK';
        okBtn.style.cssText = [
            'min-width: 92px',
            'border: none',
            'border-radius: 999px',
            'background: linear-gradient(135deg, #0f766e, #2563eb)',
            'color: #fff',
            'font-size: 14px',
            'font-weight: 600',
            'padding: 10px 18px',
            'cursor: pointer'
        ].join('; ') + ';';
        okBtn.addEventListener('click', hideMecAlert);

        box.appendChild(title);
        box.appendChild(text);
        box.appendChild(okBtn);
        overlay.appendChild(box);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) hideMecAlert();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') hideMecAlert();
        });

        document.body.appendChild(overlay);
    }

    document.getElementById('mec-alert-text').textContent = message;
    overlay.style.display = 'flex';
}

function hideMecAlert() {
    const overlay = document.getElementById('mec-alert-overlay');
    if (overlay) overlay.style.display = 'none';
}

function hide() {
    document.getElementById('popup').style.transform = "translatex(2000px)";
}

document.getElementById('saveAsPdfBtn').addEventListener('click', function () {
    var element = document.getElementById('content');
    
    var opt = {
        margin: 0.5,
        filename: `${coursecode.innerHTML}_cover_page.pdf`,
        image: { type: 'jpeg', quality: 1 }, 
        html2canvas: { 
            scale: 1, 
            useCORS: true, 
            logging: false, 
        },
        jsPDF: { 
            unit: 'in', 
            format: 'A4', 
            orientation: 'portrait', 
            compress: true, 
        }
    };
    
    html2pdf().from(element).set(opt).save();
    console.log("PDF generated and saved.");
});

// --- UPDATED AUTO-FILL LOGIC ---
document.getElementById('course-teacher').addEventListener('change', function() {
    const selectedTeacher = this.value;
    
    // Target the DIV wrappers to show/hide them
    const teacherNameDiv = document.getElementById('teacher-name-exs');
    const teacherDesDiv = document.getElementById('teacher-des-exs');
    
    // Target the actual INPUT fields to fill the text
    const teacherNameInput = document.getElementById('teacher-name-ex');
    const teacherDesInput = document.getElementById('teacher-des-ex');

    if (selectedTeacher && teachers[selectedTeacher]) {
        // Fill the input boxes directly from the split object
        teacherNameInput.value = teachers[selectedTeacher].name;
        teacherDesInput.value = teachers[selectedTeacher].des;
        
        // Show the div wrappers so the inputs become visible
        teacherNameDiv.style.display = 'block';
        teacherDesDiv.style.display = 'block';
    } else {
        // Clear them if "Select Teacher" is chosen
        teacherNameInput.value = '';
        teacherDesInput.value = '';
    }
});

// --- UPDATED CHECK FUNCTION ---
function check() {
    // Target the DIV wrappers
    const teacherNameDiv = document.getElementById('teacher-name-exs');
    const teacherDesDiv = document.getElementById('teacher-des-exs');
    const extTeacher = document.getElementById('ext-teacher');

    if (extTeacher.checked) {
        teacherNameDiv.style.display = 'block';
        teacherDesDiv.style.display = 'block';
    }
    else {
        teacherNameDiv.style.display = 'none';
        teacherDesDiv.style.display = 'none';
    }
}

function mecCpg2ShowPopup() {
    document.getElementById('mec-cpg-popup').style.display = 'block';
}

function mecCpg2HidePopup() {
    document.getElementById('mec-cpg-popup').style.display = 'none';
}

function toggleLabels() {
    const labReportRadio = document.getElementById('lab-report');
    const assignmentRadio = document.getElementById('assignment');
    const expNoLabel = document.querySelector('label[for="experiment-no"]');
    const expNameLabel = document.querySelector('label[for="experiment-name"]');
    const workNoDiv = document.querySelector('.exa');
    const workNmDiv = document.querySelector('.worknm');

    if (labReportRadio.checked) {
        expNoLabel.innerHTML = 'Experiment No.:';
        expNameLabel.innerHTML = 'Experiment Name:';
        workNoDiv.innerHTML = 'Experiment no: <span id="expNo"></span>';
        workNmDiv.innerHTML = 'Experiment Name:';
    } else if (assignmentRadio.checked) {
        expNoLabel.innerHTML = 'Assignment No.:';
        expNameLabel.innerHTML = 'Assignment Name:';
        workNoDiv.innerHTML = 'Assignment no: ';
        workNmDiv.innerHTML = 'Assignment Name:';
    }
}

document.getElementById('lab-report').addEventListener('change', toggleLabels);
document.getElementById('assignment').addEventListener('change', toggleLabels);

function openPopupPrivacyTerms() {
    const popup = document.getElementById("popupPrivacyTerms");
    popup.style.display = "block";
    popup.classList.remove("fadeOut", "slideUp");
    popup.classList.add("fadeIn", "slideDown");
}

function closePopupPrivacyTerms() {
    const popup = document.getElementById("popupPrivacyTerms");
    popup.classList.remove("fadeIn", "slideDown");
    popup.classList.add("fadeOut", "slideUp");
    setTimeout(() => {
        popup.style.display = "none";
    }, 50);
}

document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const category = this.value;

        if (category === "Regular") {
            document.querySelectorAll('#mainH').forEach(element => {
                element.style.display = 'none';
            });
            document.querySelectorAll('#mainS').forEach(element => {
                element.style.display = 'block';
            });
        } else {
            document.querySelectorAll('#mainH').forEach(element => {
                element.style.display = ''; 
            });
            document.querySelectorAll('#mainS').forEach(element => {
                element.style.display = '';
            });
        }
    });
});


// Realtime log currently selected title/type and category radios
function updateSelectedInfoRealtime() {
    const labchecked = document.querySelector('input[name="type"]:checked')?.value;
    const categorychecked = document.querySelector('input[name="category"]:checked')?.value;
    const mainCoverTitle = document.getElementById('main_cover_title');
    // const expdfa = document.getElementById('expdfah');

    if (!mainCoverTitle) return;

    if (categorychecked === "Regular") {
        if (labchecked === "Lab Report") {
            mainCoverTitle.innerHTML = "Lab Report";
        } else if (labchecked === "Assignment") {
            mainCoverTitle.innerHTML = "Assignment";
            // expdfa.style.display = "none";
        }
    } else if (labchecked === "Lab Report") {
        mainCoverTitle.innerHTML = "Lab Report";
    } else if (labchecked === "Assignment") {
        mainCoverTitle.innerHTML = "Assignment";
            // expdfa.style.display = "none";
    }
}

document.querySelectorAll('input[name="type"], input[name="category"]').forEach(input => {
    input.addEventListener('change', updateSelectedInfoRealtime);
});

// Initial sync
updateSelectedInfoRealtime();

// --- MASSIVE COURSE AUTO-FILL DICTIONARY ---
const courseData = {
  "EEE": {
    "EEE1101": "Electrical Circuit I",
    "EEE1102": "Electrical Circuit I Sessional",
    "CSE1101": "Computer Programming",
    "CSE1102": "Computer Programming Sessional",
    "CE1102": "Computer Aided Engineering Drawing",
    "PHY1101": "Electricity and Magnetism, Modern Physics and Mechanics",
    "PHY1102": "Electricity and Magnetism, Modern Physics and Mechanics Sessional",
    "MATH1101": "Differential & Integral Calculus and Co-ordinate Geometry",
    "GED1101": "English for Technical Communication",
    "EEE1201": "Electrical Circuits II",
    "EEE1202": "Electrical Circuits II Sessional",
    "EEE1203": "Electrical Properties of Materials",
    "PHY1201": "Waves and Oscillations, Optics and Thermal Physics",
    "PHY1202": "Waves and Oscillations, Optics and Thermal Physics Sessional",
    "MATH1201": "Differential Equations and Complex Variables",
    "CHEM1201": "Chemistry",
    "CHEM1202": "Chemistry Sessional",
    "GED1201": "Bangladesh Studies",
    "EEE2101": "Electronics I",
    "EEE2102": "Electronics I Sessional",
    "EEE2103": "Energy Conversion I",
    "EEE2104": "Energy Conversion I Sessional",
    "EEE2108": "Electrical and Electronic Workshop Practice",
    "ME2101": "Basic Mechanical Engineering",
    "ME2102": "Basic Mechanical Engineering Sessional",
    "MATH2101": "Linear Algebra and Vector Analysis",
    "GED2101": "Financial Account & Economic Analysis",
    "EEE2201": "Electronic II",
    "EEE2202": "Electronic II Sessional",
    "EEE2203": "Energy Conversion II",
    "EEE2204": "Energy Conversion II Sessional",
    "EEE2205": "Engineering Electromagnetics",
    "EEE2208": "Electrical Services Design",
    "MATH2201": "Statistics& Probability",
    "GED2201": "Professional Ethics and Moral Thoughts",
    "EEE3101": "Electrical Measurement & Instrumentation",
    "EEE3102": "Electrical Measurement & Instrumentation Sessional",
    "EEE3103": "Digital Electronics",
    "EEE3104": "Digital Electronics Sessional",
    "EEE3105": "Power System I",
    "EEE3106": "Power System I Sessional",
    "EEE3107": "Power Electronics and Industrial Drives",
    "EEE3108": "Power Electronics and Industrial Drives Sessional",
    "GED3101": "Engineering Management",
    "EEE3201": "Communication Engineering Fundamentals",
    "EEE3202": "Communication Engineering Fundamentals Sessional",
    "EEE3203": "Power System II",
    "EEE3205": "Signals and Systems",
    "EEE3207": "Numerical Methods",
    "EEE3208": "Numerical Methods Sessional",
    "CSE3201": "Microprocessor & Microcontroller",
    "CSE3202": "Microprocessor & Microcontroller Sessional",
    "EEE4100": "Project & Thesis",
    "EEE4101": "Digital Signal Processing",
    "EEE4102": "Digital Signal Processing Sessional",
    "EEE4103": "Control System",
    "EEE4104": "Control System Sessional",
    "EEE4105": "VLSI Circuits and Design",
    "EEE4106": "VLSI Circuits and Design Sessional",
    "EEE4111": "Renewable Energy",
    "EEE4113": "High Voltage Engineering",
    "EEE4115": "Optoelectronics",
    "EEE4117": "Mobile Cellular Communication",
    "EEE4119": "Biomedical Engineering",
    "EEE4200": "Project & Thesis",
    "EEE4201": "Power System Protection",
    "EEE4202": "Power System Protection Sessional",
    "EEE4203": "Power Plant Engineering and Economy",
    "EEE4208": "Industrial Attachment",
    "EEE4211": "Smart Grid",
    "EEE4213": "Introduction to Nanotechnology and Nanoelectronics",
    "EEE4215": "Optical Fiber Communication",
    "EEE4217": "Radar and Satellite Communication",
    "EEE4219": "Medical Imaging"
  },
  "CSE": {
    "CSE1101": "Fundamentals of Computers and Computing",
    "CSE1102": "Discrete Mathematics",
    "EEE1103": "Electrical Circuits",
    "CHE1104": "Chemistry",
    "MATH1105": "Differential and Integral Calculus",
    "SS1106": "Government and Public Administration",
    "CSE1111": "Fundamentals of Computers and Computing Lab",
    "EEE1113": "Electrical Circuits Lab",
    "CHE1114": "Chemistry Lab",
    "CSE1201": "Fundamentals of Programming",
    "CSE1202": "Digital Logic Design",
    "PHY1203": "Physics",
    "MATH1204": "Methods of Integration, Differential Equations and Series",
    "ENG1205": "Developing English Language Skills",
    "CSE1211": "Fundamentals of Programming Lab",
    "CSE1212": "Digital Logic Design Lab",
    "PHY1213": "Physics Lab",
    "ENG1215": "Developing English Language Skills Lab",
    "CSE2101": "Data Structures and Algorithms",
    "CSE2102": "Object Oriented Programming",
    "CSE2103": "Digital Electronics and Pulse Technique",
    "EEE2104": "Electronic Devices and Circuits",
    "MATH2105": "Linear Algebra",
    "SS2106": "Bangladesh Studies",
    "CSE2111": "Data Structures and Algorithms Lab",
    "CSE2112": "Object Oriented Programming Lab",
    "CSE2113": "Digital Electronics and Pulse Technique Lab",
    "EEE2114": "Electronic Devices and Circuits Lab",
    "CSE2201": "Database Management Systems-I",
    "CSE2202": "Design and Analysis of Algorithms-I",
    "CSE2203": "Data and Telecommunication",
    "CSE2204": "Computer Architecture and Organization",
    "CSE2205": "Introduction to Mechatronics",
    "CSE2211": "Database Management Systems - I Lab",
    "CSE2212": "Design and Analysis of Algorithms - I Lab",
    "CSE2213": "Data and Telecommunication Lab",
    "CSE2216": "Application Development Lab",
    "CSE3101": "Computer Networking",
    "CSE3102": "Software Engineering",
    "CSE3103": "Microprocessor and Microcontroller",
    "CSE3104": "Database Management Systems -II",
    "MATH3105": "Multivariable Calculus and Geometry",
    "CSE3111": "Computer Networking Lab",
    "CSE3112": "Software Engineering Lab",
    "CSE3113": "Microprocessor and Assembly Language Lab",
    "CSE3116": "Microcontroller Lab",
    "CSE3201": "Operating Systems",
    "CSE3202": "Numerical Methods",
    "CSE3203": "Design and Analysis of Algorithms - II",
    "CSE3204": "Formal Language, Automata and Computability",
    "STAT3205": "Introduction to Probability and Statistics",
    "CSE3211": "Operating Systems Lab",
    "CSE3212": "Numerical Methods Lab",
    "CSE3216": "Software Design Patterns Lab",
    "ENG3217": "Technical Writing and Presentation Lab",
    "CSE4101": "Artificial Intelligence",
    "CSE4102": "Mathematical and Statistical Analysis for Engineers",
    "SS4103": "Entrepreneurship for IT Business",
    "CSE4111": "Artificial Intelligence Lab",
    "CSE4113": "Internet Programming Lab",
    "CSE4114": "Project",
    "ECO4201": "Economics",
    "CSE4202": "Society and Technology",
    "SS4203": "Engineering Ethics",
    "CSE4214": "Project",
    "CSE4121": "Robotics Science and Systems",
    "CSE4123": "Computational Methods in Bio-molecular Sequence & Structure Analysis",
    "CSE4125": "Introduction to Machine Learning",
    "CSE4127": "Information Retrieval",
    "CSE4131": "Introduction to VLSI Design",
    "CSE4133": "Algorithm Engineering",
    "CSE4135": "Software Requirements Specification and Analysis",
    "CSE4137": "Cryptography and Security",
    "CSE4139": "Computer Graphics",
    "CSE4151": "Robotics Science and Systems Lab",
    "CSE4153": "Computational Methods in Bio-molecular Sequence & Structure Analysis Lab",
    "CSE4155": "Introduction to Machine Learning Lab",
    "CSE4157": "Information Retrieval Lab",
    "CSE4161": "Introduction to VLSI Design Lab",
    "CSE4163": "Algorithm Engineering Lab",
    "CSE4165": "Software Requirements Specification and Analysis Lab",
    "CSE4167": "Cryptography and Security Lab",
    "CSE4169": "Computer Graphics Lab",
    "CSE4122": "Mathematics for Robotics",
    "CSE4124": "Introduction to Bioinformatics",
    "CSE4126": "Introduction to Data Science",
    "CSE4128": "Wireless Networks",
    "CSE4130": "Introduction to Quantum Logic",
    "CSE4132": "Graph Theory",
    "CSE4134": "Software Project Management",
    "CSE4136": "Computer Security",
    "CSE4140": "Compiler Design",
    "CSE4221": "Robot Learning",
    "CSE4223": "Fundamentals of Genomics and Proteomics",
    "CSE4225": "Introduction to Data Mining and Warehousing",
    "CSE4227": "Cloud Computing",
    "CSE4229": "Introduction to Reversible Computing",
    "CSE4231": "Computational Geometry",
    "CSE4233": "Software Testing and Verification",
    "CSE4235": "Digital Forensic",
    "CSE4237": "Digital Image Processing",
    "CSE4239": "Parallel and Distributed Systems",
    "CSE4251": "Robot Learning Lab",
    "CSE4253": "Fundamentals of Genomics and Proteomics Lab",
    "CSE4255": "Introduction to Data Mining and Warehousing Lab",
    "CSE4257": "Cloud Computing Lab",
    "CSE4259": "Introduction to Reversible Computing Lab",
    "CSE4261": "Computational Geometry Lab",
    "CSE4263": "Software Testing and Verification Lab",
    "CSE4265": "Digital Forensic Lab",
    "CSE4267": "Digital Image Processing Lab",
    "CSE4269": "Parallel and Distributed Systems Lab",
    "CSE4222": "Human Robot Interaction",
    "CSE4224": "Mobile Robotics",
    "CSE4226": "Aerial Robotics",
    "CSE4228": "Application of Computational Biology",
    "CSE4230": "Human Computer Interaction",
    "CSE4232": "Internet of Things",
    "CSE4234": "Introduction to Multiple-Valued Logic",
    "CSE4236": "VLSI Layout Algorithms",
    "CSE4238": "Concepts of Concurrent Computation",
    "CSE4240": "Applied Cryptography",
    "CSE4242": "Computer Vision",
    "CSE4244": "Computer and Network Security",
    "CSE4246": "Natural Language Processing"
  },
  "Civil": {
    "PHY101": "Physical optics, Heat, Waves and Oscillation",
    "PHY102": "Physics Sessional",
    "CHEM101": "Chemistry-I",
    "CHEM102": "Inorganic Quantitative Analysis",
    "MATH101": "Differential and Integral Calculus",
    "HUM101": "English",
    "HUM102": "Developing English Language Skills",
    "CE101": "Civil Engineering Drawing -I",
    "CE102": "Engineering Mechanics",
    "PHY201": "Structure of Matter, Electricity and Magnetism and Modern Physics",
    "CHEM201": "Chemistry- II",
    "HUM201": "Sociology and Government",
    "MATH201": "Differential Equation and Statistics",
    "CE201": "Civil Engineering Drawing –II",
    "CE202": "Surveying",
    "CE203": "Practical Surveying",
    "EEE201": "Basic Electricity Sessional",
    "HUM301": "Engineering Economics",
    "MATH301": "Matrix, Vectors and Laplace Transform",
    "CE301": "Engineering Materials",
    "CE302": "Details of Constructions",
    "CE303": "Engineering Geology and Geomorphology",
    "CE304": "Materials Sessional",
    "CE305": "Mechanics of Solids- I",
    "CE306": "Structural Mechanics and Materials Sessional",
    "SHOP301": "Workshop (Carpentry shop, Machine shop and Welding shop) sessional",
    "MATH401": "3-D Co-ordinate Geometry, Fourier Analysis, and Harmonic Functions",
    "HUM401": "Principles of Accounting",
    "CE401": "Numerical Methods and Basic Computer Programming",
    "CE402": "Mechanics of Solids- II",
    "CE403": "Quantity Surveying",
    "CE404": "Fluid Mechanics",
    "CE405": "Fluid Mechanics Sessional",
    "CSE401": "Computer Programming Sessional",
    "CE501": "Structural Analysis and Design- I",
    "CE502": "Structural Analysis and Design Sessional- I",
    "CE503": "Design of Concrete Structures- I",
    "CE504": "Environmental Engineering-I",
    "CE505": "Principles of Soil Mechanics",
    "CE506": "Geotechnical Engineering Sessional-I",
    "CE507": "Open Channel Flow",
    "CE508": "Open Channel Flow Sessional",
    "CE601": "Structural Analysis and Design-II",
    "CE602": "Design of Concrete Structures- II",
    "CE603": "Concrete Structures Sessional",
    "CE604": "Principles of Foundation Engineering",
    "CE605": "Transportation Engineering- I: Transport & Traffic Design",
    "CE606": "Transportation Engineering Sessional I",
    "CE607": "Hydrology",
    "CE608": "Environmental Engineering Sessional",
    "CE700": "Project and Thesis",
    "CE701": "Environmental Engineering- II",
    "CE702": "Transportation Engineering- II: Highway Design & Railways",
    "CE703": "Project Planning and Management",
    "CE704": "Structural Analysis and Design-III",
    "CE705": "Structural Analysis and Design Sessional II",
    "CE706": "Irrigation and Flood Control",
    "CE801": "Professional Practice and Communication",
    "CE802": "Socio-Economic Aspects of Development Projects",
    "CE803": "Theory of Elasticity and Elastic Instability of Structures",
    "CE804": "Pre-stressed Concrete",
    "CE805": "Design of Steel Structures",
    "CE806": "Introduction to Finite Element Method",
    "CE807": "Dynamics of Structures",
    "CE808": "Structural Analysis and Design Sessional",
    "CE809": "Solid Hazardous Waste Management",
    "CE810": "Environmental Pollution Management",
    "CE811": "Sustainable Environmental Management",
    "CE812": "Design of Water Supply, Sanitation and Sewerage Systems Sessional",
    "CE813": "Earth Retaining Structures",
    "CE814": "Elementary Soil Dynamics",
    "CE815": "Soil-Water Interaction",
    "CE816": "Geotechnical Engineering Sessional-II",
    "CE817": "Transportation Engineering- III: Traffic Engineering Design and Management",
    "CE818": "Transportation Engineering -IV: Pavement Management, Drainage and Airport",
    "CE819": "Transportation Engineering-V : Urban Transportation Planning and Management",
    "CE820": "Transportation Engineering Sessional- II: Pavement Design and Traffic Studies"
  }
};

// Map HTML dropdown values to JSON keys
const departmentMap = {
    "Electrical and Electronic Engineering": "EEE",
    "Computer Science and Engineering": "CSE",
    "Civil Engineering": "Civil"
};

// Listen for typing in the Course Code field
document.getElementById('course-code').addEventListener('input', function() {
    // 1. Clean the input (remove spaces, dashes, dots, make uppercase)
    const rawInput = this.value;
    const cleanCode = rawInput.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    
    // 2. Figure out which department is currently selected
    const selectedDeptValue = document.getElementById('department').value;
    const shortDept = departmentMap[selectedDeptValue];
    
    const courseNameInput = document.getElementById('course-name');
    let foundName = "";

    // 3. Try to find the course in the specific department FIRST to avoid conflicts!
    if (shortDept && courseData[shortDept][cleanCode]) {
        foundName = courseData[shortDept][cleanCode];
    } else {
        // 4. Fallback: If they haven't picked a department yet, search everywhere
        for (const dept in courseData) {
            if (courseData[dept][cleanCode]) {
                foundName = courseData[dept][cleanCode];
                break;
            }
        }
    }

    // 5. If we found a match, auto-fill it! (But leave it editable)
    if (foundName) {
        courseNameInput.value = foundName;
    }
});

// --- WHATSAPP SHARE LOGIC ---
function shareToPrint() {
    // Get form data
    const formData = new FormData(document.getElementById('cover-page-form'));
    
    // Build URL parameters based on user input
    const params = new URLSearchParams();
    params.set('dp', formData.get('department') || '');
    params.set('cc', formData.get('course-code') || '');
    params.set('cn', formData.get('course-name') || '');
    params.set('cat', formData.get('category') || 'Irregular'); 
    params.set('typ', formData.get('type') || 'Lab Report');     
    params.set('en', formData.get('experiment-no') || '');
    params.set('exm', formData.get('experiment-name') || '');
    params.set('nm', formData.get('name') || '');
    params.set('rl', formData.get('roll') || '');
    params.set('rg', formData.get('registration') || '');
    params.set('ss', formData.get('session') || '');
    params.set('bt', formData.get('batch') || '');
    params.set('ct', formData.get('course-teacher') || '');
    params.set('tne', formData.get('teacher-name') || '');
    params.set('tde', formData.get('teacher-des') || '');
    params.set('sd', formData.get('submission-date') || '');
    params.set('ed', formData.get('experiment-date') || '');

    // Get current website URL
    const baseUrl = window.location.origin + window.location.pathname;
    const shareableLink = `${baseUrl}?${params.toString()}`;

    // Target WhatsApp Number
    const rawNumber = "+8801793560828";
    const waNumber = rawNumber.replace(/\D/g, ''); // Removes the '+' for the URL

    // Construct the message
    const message = `Hello! Please print my cover page from this link:\n\n${shareableLink}\n\nThank you!`;

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}