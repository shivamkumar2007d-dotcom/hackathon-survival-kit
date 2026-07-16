document.addEventListener("DOMContentLoaded", function () {

    console.log("Hackathon Survival Kit JavaScript loaded successfully.");

    // =====================================================
    // 1. TEAM SKILL ANALYSIS
    // =====================================================

    const analyzeTeamBtn = document.getElementById("analyze-team-btn");
    const teamSizeInput = document.getElementById("team-size");
    const strengthList = document.getElementById("strength-list");
    const weaknessesList = document.getElementById("weaknesses-list");

    const allSkills = [
        "HTML/CSS",
        "JavaScript",
        "UI/UX",
        "Database",
        "AI/ML",
        "Presentation"
    ];

    const strengthMessages = {
        "HTML/CSS":
            "Frontend foundation is available for creating responsive web interfaces.",

        "JavaScript":
            "The team can implement dynamic functionality and user interactions.",

        "UI/UX":
            "The team can create attractive and user-friendly layouts.",

        "Database":
            "The team can store, manage and retrieve application data.",

        "AI/ML":
            "The project can include intelligent or recommendation-based features.",

        "Presentation":
            "The team can prepare and deliver a strong final pitch."
    };

    const weaknessMessages = {
        "HTML/CSS":
            "Frontend design may be less polished because HTML/CSS expertise is missing.",

        "JavaScript":
            "Interactive functionality may be limited because JavaScript expertise is missing.",

        "UI/UX":
            "The interface may need improvement in design and usability.",

        "Database":
            "Use Local Storage or Firebase if database expertise is unavailable.",

        "AI/ML":
            "Avoid making AI the main feature unless someone can handle it.",

        "Presentation":
            "The team should assign someone to prepare and practise the final pitch."
    };

    if (analyzeTeamBtn) {

        analyzeTeamBtn.addEventListener("click", function () {

            const selectedSkillInputs = document.querySelectorAll(
                'input[name="skills"]:checked'
            );

            const selectedSkills = Array.from(selectedSkillInputs).map(
                function (input) {
                    return input.value.trim();
                }
            );

            strengthList.innerHTML = "";
            weaknessesList.innerHTML = "";

            if (selectedSkills.length === 0) {

                strengthList.innerHTML =
                    "<li>Please select at least one skill.</li>";

                weaknessesList.innerHTML =
                    "<li>No analysis can be generated without skills.</li>";

                showNotification(
                    "Please select at least one skill.",
                    "error"
                );

                return;
            }

            selectedSkills.forEach(function (skill) {

                const listItem = document.createElement("li");

                listItem.textContent =
                    strengthMessages[skill] ||
                    skill + " is available in the team.";

                strengthList.appendChild(listItem);
            });

            const missingSkills = allSkills.filter(function (skill) {
                return !selectedSkills.includes(skill);
            });

            if (missingSkills.length === 0) {

                const listItem = document.createElement("li");

                listItem.textContent =
                    "No major skill gap detected. Your team has a balanced skill set.";

                weaknessesList.appendChild(listItem);

            } else {

                missingSkills.forEach(function (skill) {

                    const listItem = document.createElement("li");

                    listItem.textContent =
                        weaknessMessages[skill] ||
                        skill + " is missing from the team.";

                    weaknessesList.appendChild(listItem);
                });
            }

            const teamSize = Number(teamSizeInput.value);
            const teamSizeMessage = document.createElement("li");

            if (teamSize === 1) {

                teamSizeMessage.textContent =
                    "Solo team: Keep the project scope small and focus on core features.";

            } else if (teamSize === 2) {

                teamSizeMessage.textContent =
                    "Two-member team: Divide development and presentation responsibilities.";

            } else if (teamSize <= 4) {

                teamSizeMessage.textContent =
                    "Balanced team size: Tasks can be distributed efficiently.";

            } else {

                teamSizeMessage.textContent =
                    "Large team: Assign clear responsibilities to avoid duplicate work.";
            }

            strengthList.appendChild(teamSizeMessage);

            localStorage.setItem(
                "hackathonTeamAnalysis",
                JSON.stringify({
                    teamSize: teamSize,
                    selectedSkills: selectedSkills,
                    missingSkills: missingSkills
                })
            );

            showNotification(
                "Team analysis completed successfully.",
                "success"
            );
        });
    }


    // =====================================================
    // 2. PROJECT RECOMMENDATION ENGINE
    // =====================================================

    const projectIdeas = {

        "Web Developement": {

            "24 Hours": {
                title: "Personal Expense Tracker",
                difficulty: "Easy",
                techStack:
                    "HTML, CSS, JavaScript, Local Storage",

                mustHave: [
                    "Add income and expenses",
                    "Display current balance",
                    "Show transaction history",
                    "Delete transactions"
                ],

                optional: [
                    "Expense category filters",
                    "Charts and reports",
                    "Dark mode",
                    "Export transaction data"
                ]
            },

            "48 Hours": {
                title: "Hackathon Team Management Dashboard",
                difficulty: "Medium",
                techStack:
                    "HTML, CSS, JavaScript, Firebase",

                mustHave: [
                    "Team member management",
                    "Task assignment",
                    "Project progress tracking",
                    "Deadline reminders"
                ],

                optional: [
                    "Team chat",
                    "User authentication",
                    "File sharing",
                    "Real-time notifications"
                ]
            },

            "7 Days": {
                title: "Community Skill Exchange Platform",
                difficulty: "Advanced",
                techStack:
                    "HTML, CSS, JavaScript, Node.js, Express, MongoDB",

                mustHave: [
                    "User registration",
                    "Skill listings",
                    "Search and filters",
                    "User profiles",
                    "Skill request system"
                ],

                optional: [
                    "Real-time messaging",
                    "Ratings and reviews",
                    "Video meeting integration",
                    "Admin dashboard"
                ]
            }
        },

        "Education": {

            "24 Hours": {
                title: "Smart Study Planner",
                difficulty: "Easy",
                techStack:
                    "HTML, CSS, JavaScript, Local Storage",

                mustHave: [
                    "Add subjects",
                    "Create study tasks",
                    "Set deadlines",
                    "Track completed tasks"
                ],

                optional: [
                    "Study timer",
                    "Progress chart",
                    "Daily motivation",
                    "Dark mode"
                ]
            },

            "48 Hours": {
                title: "Smart Attendance System",
                difficulty: "Medium",
                techStack:
                    "HTML, CSS, JavaScript, Firebase",

                mustHave: [
                    "Student registration",
                    "Attendance tracking",
                    "Attendance percentage calculation",
                    "Teacher dashboard"
                ],

                optional: [
                    "Charts and reports",
                    "Export to CSV",
                    "Email notifications",
                    "QR attendance"
                ]
            },

            "7 Days": {
                title: "Personalized Learning Platform",
                difficulty: "Advanced",
                techStack:
                    "HTML, CSS, JavaScript, Node.js, MongoDB, AI API",

                mustHave: [
                    "Student profiles",
                    "Course modules",
                    "Quiz system",
                    "Progress tracking",
                    "Personalized recommendations"
                ],

                optional: [
                    "AI doubt assistant",
                    "Certificates",
                    "Leaderboards",
                    "Instructor dashboard"
                ]
            }
        },

        "Healthcare": {

            "24 Hours": {
                title: "Medicine Reminder Application",
                difficulty: "Easy",
                techStack:
                    "HTML, CSS, JavaScript, Local Storage",

                mustHave: [
                    "Add medicine details",
                    "Set medicine timings",
                    "Display daily schedule",
                    "Mark medicine as taken"
                ],

                optional: [
                    "Browser notifications",
                    "Doctor details",
                    "Dosage history",
                    "Emergency contact"
                ]
            },

            "48 Hours": {
                title: "Emergency Medical Resource Finder",
                difficulty: "Medium",
                techStack:
                    "HTML, CSS, JavaScript, Maps API, Firebase",

                mustHave: [
                    "Search nearby hospitals",
                    "Display blood banks",
                    "Emergency contact information",
                    "Location-based results"
                ],

                optional: [
                    "Live bed availability",
                    "Ambulance request",
                    "Route navigation",
                    "Hospital ratings"
                ]
            },

            "7 Days": {
                title: "Digital Health Monitoring Platform",
                difficulty: "Advanced",
                techStack:
                    "HTML, CSS, JavaScript, Node.js, MongoDB, Chart.js",

                mustHave: [
                    "Patient registration",
                    "Health data tracking",
                    "Doctor dashboard",
                    "Medical report history",
                    "Health trend charts"
                ],

                optional: [
                    "Appointment booking",
                    "AI health suggestions",
                    "Video consultation",
                    "Emergency alerts"
                ]
            }
        },

        "AI": {

            "24 Hours": {
                title: "AI Resume Analyzer",
                difficulty: "Medium",
                techStack:
                    "HTML, CSS, JavaScript, AI API",

                mustHave: [
                    "Resume text input",
                    "Keyword analysis",
                    "Skill identification",
                    "Improvement suggestions"
                ],

                optional: [
                    "Job description matching",
                    "Resume score",
                    "Download report",
                    "Resume templates"
                ]
            },

            "48 Hours": {
                title: "AI-Based Career Recommendation System",
                difficulty: "Medium",
                techStack:
                    "HTML, CSS, JavaScript, AI API, Firebase",

                mustHave: [
                    "User skill input",
                    "Interest analysis",
                    "Career recommendations",
                    "Learning roadmap"
                ],

                optional: [
                    "Course recommendations",
                    "Resume suggestions",
                    "Career comparison",
                    "User accounts"
                ]
            },

            "7 Days": {
                title: "AI Student Support Assistant",
                difficulty: "Advanced",
                techStack:
                    "HTML, CSS, JavaScript, Node.js, MongoDB, AI API",

                mustHave: [
                    "AI chatbot",
                    "Student question answering",
                    "Study resource recommendations",
                    "Conversation history",
                    "Student dashboard"
                ],

                optional: [
                    "Voice input",
                    "Document summarization",
                    "Quiz generation",
                    "Multiple language support"
                ]
            }
        }
    };

    const recommendationBtn =
        document.getElementById("get-recommendation-btn");

    if (recommendationBtn) {

        recommendationBtn.addEventListener("click", function () {

            const selectedDomain =
                document.getElementById("domain").value;

            const selectedTime =
                document.getElementById("time-available").value;

            const domainProjects =
                projectIdeas[selectedDomain];

            const recommendedProject =
                domainProjects &&
                domainProjects[selectedTime];

            if (!recommendedProject) {

                showNotification(
                    "No project recommendation found.",
                    "error"
                );

                return;
            }

            document.getElementById("project-title").textContent =
                recommendedProject.title;

            document.getElementById("project-difficulty").textContent =
                recommendedProject.difficulty;

            document.getElementById("project-tech-stack").textContent =
                recommendedProject.techStack;

            renderList(
                "must-have-features",
                recommendedProject.mustHave
            );

            renderList(
                "optional-features",
                recommendedProject.optional
            );

            localStorage.setItem(
                "recommendedHackathonProject",
                JSON.stringify({
                    domain: selectedDomain,
                    time: selectedTime,
                    project: recommendedProject
                })
            );

            showNotification(
                recommendedProject.title +
                " recommended successfully.",
                "success"
            );
        });
    }


    // =====================================================
    // 3. ROLE ASSIGNMENT
    // =====================================================

    const addMemberBtn =
        document.getElementById("add-member-btn");

    const memberNameInput =
        document.getElementById("member-name");

    const memberSkillInput =
        document.getElementById("member-skill");

    const membersList =
        document.getElementById("members-list");

    const roleList =
        document.getElementById("role-list");

    let teamMembers = [];

    const roleMapping = {
        "HTML/CSS": "Frontend Developer",
        "JavaScript": "JavaScript Developer",
        "UI/UX": "UI/UX Designer",
        "Database": "Database Developer",
        "AI/ML": "AI/ML Developer",
        "Presentation": "Pitch and Presentation Lead"
    };

    const savedMembers =
        localStorage.getItem("hackathonTeamMembers");

    if (savedMembers) {

        try {
            teamMembers = JSON.parse(savedMembers);
            renderMembers();

        } catch (error) {
            teamMembers = [];
        }
    }

    if (addMemberBtn) {

        addMemberBtn.addEventListener("click", function () {

            const memberName =
                memberNameInput.value.trim();

            const memberSkill =
                memberSkillInput.value;

            if (memberName === "") {

                showNotification(
                    "Please enter a member name.",
                    "error"
                );

                memberNameInput.focus();
                return;
            }

            const duplicateMember =
                teamMembers.some(function (member) {

                    return member.name.toLowerCase() ===
                        memberName.toLowerCase();
                });

            if (duplicateMember) {

                showNotification(
                    "This member is already added.",
                    "error"
                );

                return;
            }

            const newMember = {
                id: Date.now(),
                name: memberName,
                skill: memberSkill,
                role:
                    roleMapping[memberSkill] ||
                    "General Team Member"
            };

            teamMembers.push(newMember);

            saveMembers();
            renderMembers();

            memberNameInput.value = "";
            memberNameInput.focus();

            showNotification(
                memberName + " added successfully.",
                "success"
            );
        });
    }

    function renderMembers() {

        membersList.innerHTML = "";
        roleList.innerHTML = "";

        if (teamMembers.length === 0) {

            membersList.innerHTML =
                "<li>No members added yet</li>";

            roleList.innerHTML =
                "<li>Add members to see role suggestions</li>";

            return;
        }

        teamMembers.forEach(function (member, index) {

            const memberListItem =
                document.createElement("li");

            memberListItem.className = "member-item";

            const memberText =
                document.createElement("span");

            memberText.textContent =
                (index + 1) +
                ". " +
                member.name +
                " — " +
                member.skill;

            const removeButton =
                document.createElement("button");

            removeButton.type = "button";
            removeButton.className = "remove-member-btn";
            removeButton.textContent = "Remove";

            removeButton.addEventListener(
                "click",
                function () {
                    removeMember(member.id);
                }
            );

            memberListItem.appendChild(memberText);
            memberListItem.appendChild(removeButton);

            membersList.appendChild(memberListItem);

            const roleListItem =
                document.createElement("li");

            roleListItem.textContent =
                member.name +
                ": " +
                member.role;

            roleList.appendChild(roleListItem);
        });

        addSkillGapSuggestions();
    }

    function addSkillGapSuggestions() {

        const availableSkills =
            teamMembers.map(function (member) {
                return member.skill;
            });

        if (!availableSkills.includes("Presentation")) {

            addRoleWarning(
                "Assign one team member as the presentation and pitch lead."
            );
        }

        if (!availableSkills.includes("UI/UX")) {

            addRoleWarning(
                "Assign someone to manage interface design and user experience."
            );
        }

        if (!availableSkills.includes("Database")) {

            addRoleWarning(
                "Use Local Storage or Firebase if database expertise is unavailable."
            );
        }

        if (!availableSkills.includes("JavaScript")) {

            addRoleWarning(
                "Interactive features may be limited without a JavaScript developer."
            );
        }
    }

    function addRoleWarning(message) {

        const listItem = document.createElement("li");

        listItem.className = "role-warning";
        listItem.textContent = message;

        roleList.appendChild(listItem);
    }

    function removeMember(memberId) {

        teamMembers = teamMembers.filter(
            function (member) {
                return member.id !== memberId;
            }
        );

        saveMembers();
        renderMembers();

        showNotification(
            "Team member removed.",
            "success"
        );
    }

    function saveMembers() {

        localStorage.setItem(
            "hackathonTeamMembers",
            JSON.stringify(teamMembers)
        );
    }


    // =====================================================
    // 4. DEVELOPMENT TIMELINE GENERATOR
    // =====================================================

    const timelines = {

        "24 Hours": [
            "0–2 Hours: Understand the problem and finalize the idea",
            "2–4 Hours: Plan features, divide roles and create wireframes",
            "4–8 Hours: Build HTML structure and user interface",
            "8–15 Hours: Implement core JavaScript functionality",
            "15–18 Hours: Add storage, API or backend if required",
            "18–21 Hours: Test all features and fix bugs",
            "21–23 Hours: Deploy project and update README",
            "23–24 Hours: Prepare and practise presentation"
        ],

        "48 Hours": [
            "0–4 Hours: Research and finalize the project idea",
            "4–8 Hours: Plan features, wireframes and team roles",
            "8–18 Hours: Build frontend and responsive design",
            "18–30 Hours: Implement logic, backend and database",
            "30–36 Hours: Integrate all project modules",
            "36–41 Hours: Test features and fix bugs",
            "41–44 Hours: Improve UI and add optional features",
            "44–46 Hours: Deploy and complete documentation",
            "46–48 Hours: Prepare slides and practise demo"
        ],

        "7 Days": [
            "Day 1: Research the problem and finalize requirements",
            "Day 2: Create wireframes and technical plan",
            "Day 3: Develop frontend pages and components",
            "Day 4: Develop backend and database",
            "Day 5: Connect frontend and backend",
            "Day 6: Test, debug and improve the user experience",
            "Day 7 Morning: Deploy and update README",
            "Day 7 Evening: Prepare and practise presentation"
        ]
    };

    const timelineButton =
        document.getElementById("generate-timeline-btn");

    if (timelineButton) {

        timelineButton.addEventListener("click", function () {

            const selectedDuration =
                document.getElementById(
                    "timeline-duration"
                ).value;

            const selectedTimeline =
                timelines[selectedDuration];

            if (!selectedTimeline) {

                showNotification(
                    "Timeline is not available.",
                    "error"
                );

                return;
            }

            renderList(
                "timeline-schedule",
                selectedTimeline
            );

            localStorage.setItem(
                "generatedHackathonTimeline",
                JSON.stringify({
                    duration: selectedDuration,
                    timeline: selectedTimeline
                })
            );

            showNotification(
                selectedDuration +
                " timeline generated.",
                "success"
            );
        });
    }


    // =====================================================
    // 5. COMMON FUNCTIONS
    // =====================================================

    function renderList(elementId, items) {

        const listElement =
            document.getElementById(elementId);

        if (!listElement) {
            return;
        }

        listElement.innerHTML = "";

        items.forEach(function (item) {

            const listItem =
                document.createElement("li");

            listItem.textContent = item;

            listElement.appendChild(listItem);
        });
    }

    function showNotification(message, type) {

        const oldNotification =
            document.querySelector(
                ".javascript-notification"
            );

        if (oldNotification) {
            oldNotification.remove();
        }

        const notification =
            document.createElement("div");

        notification.className =
            "javascript-notification " +
            (
                type === "error"
                    ? "notification-error"
                    : "notification-success"
            );

        notification.textContent = message;

        document.body.appendChild(notification);

        requestAnimationFrame(function () {
            notification.classList.add(
                "show-notification"
            );
        });

        setTimeout(function () {

            notification.classList.remove(
                "show-notification"
            );

            setTimeout(function () {
                notification.remove();
            }, 300);

        }, 2200);
    }

});