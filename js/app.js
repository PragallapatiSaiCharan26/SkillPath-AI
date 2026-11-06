/**
 * SkillPath AI - Main Application Logic (Vanilla JavaScript)
 * 
 * Responsibilities:
 * 1. Mobile navigation menu toggle and accessibility states.
 * 2. Career Explorer interactive selection (4 careers, card clicks, Explore buttons, footer career links).
 * 3. Dynamic population of rich career details from js/data.js (Overview, Responsibilities, Skills, Tools, Priorities, Projects, Checklist).
 * 4. Interactive Entry-Level Preparation Checklist with localStorage persistence.
 * 5. Student Skill Assessment system (Stage 4):
 *    - Career-specific 6-skill evaluation (Python, Frontend, Data Analyst, Java).
 *    - 3-level rating options (Beginner, Intermediate, Advanced) with single selection per skill.
 *    - Real-time progress tracking (rated count, total count, completion percentage & progress bar).
 *    - Full form validation ensuring all 6 skills are rated with error highlighting.
 *    - Submission handling with localStorage persistence and detailed result summary.
 *    - Retake, update, and clear rating flows.
 * 6. Smooth scrolling, keyboard accessibility (Enter, Space, Escape, Tab), and ScrollSpy.
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("SkillPath AI: Application initialized successfully.");

  // Initialize core modules
  initMobileNav();
  initCareerExplorer();
  initSkillAssessment();
  initSkillGapAnalysis();
  initLearningFinder();
  initPersonalizedRoadmap();
  initFooterCareerLinks();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-cta-btn");

  if (!toggleBtn || !drawer) return;

  function toggleDrawer(open) {
    const shouldOpen = open !== undefined ? open : !drawer.classList.contains("is-open");
    if (shouldOpen) {
      drawer.classList.add("is-open");
      toggleBtn.classList.add("is-active");
      toggleBtn.setAttribute("aria-expanded", "true");
      drawer.setAttribute("aria-hidden", "false");
    } else {
      drawer.classList.remove("is-open");
      toggleBtn.classList.remove("is-active");
      toggleBtn.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
    }
  }

  // Toggle button click
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  // Close drawer when any mobile nav link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleDrawer(false);
    });
  });

  // Close drawer if user clicks outside of header
  document.addEventListener("click", (e) => {
    if (drawer.classList.contains("is-open") && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleDrawer(false);
    }
  });

  // Close drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      toggleDrawer(false);
      toggleBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   2. Career Explorer & Interactive Selection
   -------------------------------------------------------------------------- */
function initCareerExplorer() {
  const cards = document.querySelectorAll(".career-card");
  const detailPanel = document.getElementById("career-detail-panel");
  const closeBtn = document.getElementById("close-detail-btn");
  const backBtns = document.querySelectorAll(".back-to-careers-btn");
  const startAssessmentBtn = document.getElementById("start-assessment-btn");

  if (!cards.length || !detailPanel) return;

  // DOM elements inside detail panel
  const detailCategory = document.getElementById("detail-category");
  const detailTitle = document.getElementById("detail-title");
  const detailOverview = document.getElementById("detail-overview");
  const detailResponsibilitiesList = document.getElementById("detail-responsibilities-list");
  const detailToolsContainer = document.getElementById("detail-tools-container");
  const detailTechSkillsList = document.getElementById("detail-tech-skills-list");
  const detailSoftSkillsList = document.getElementById("detail-soft-skills-list");
  const detailPrioritiesList = document.getElementById("detail-priorities-list");
  const detailProjectsGrid = document.getElementById("detail-projects-grid");
  const detailChecklistContainer = document.getElementById("detail-checklist-container");
  const detailDisclaimer = document.getElementById("detail-disclaimer");

  /**
   * Select a career path and display its full comprehensive details
   * @param {string} careerId - The id matching careerPaths in data.js
   * @param {boolean} shouldScroll - Whether to scroll to the detail panel
   */
  window.selectCareerPath = function(careerId, shouldScroll = true) {
    if (typeof careerPaths === "undefined" || !Array.isArray(careerPaths)) {
      console.error("careerPaths data not loaded from js/data.js");
      return;
    }

    const careerData = careerPaths.find((c) => c.id === careerId);
    if (!careerData) {
      console.warn(`Career path "${careerId}" not found in data store.`);
      return;
    }

    // Save globally for assessment access
    window.currentSelectedCareer = careerData;

    // Update active state on career cards
    cards.forEach((card) => {
      const isTarget = card.getAttribute("data-career-id") === careerId;
      card.classList.toggle("is-selected", isTarget);
      card.setAttribute("aria-expanded", isTarget ? "true" : "false");
    });

    // 1. Category, Title & Overview
    if (detailCategory) detailCategory.textContent = careerData.category || "Career Track";
    if (detailTitle) detailTitle.textContent = careerData.title;
    if (detailOverview) detailOverview.textContent = careerData.overview || careerData.shortDescription;

    // 2. Typical Responsibilities
    if (detailResponsibilitiesList) {
      detailResponsibilitiesList.innerHTML = "";
      if (Array.isArray(careerData.responsibilities)) {
        careerData.responsibilities.forEach((resp) => {
          const li = document.createElement("li");
          li.textContent = resp;
          detailResponsibilitiesList.appendChild(li);
        });
      }
    }

    // 3. Commonly Used Tools & Technologies
    if (detailToolsContainer) {
      detailToolsContainer.innerHTML = "";
      if (Array.isArray(careerData.toolsAndTechnologies)) {
        careerData.toolsAndTechnologies.forEach((toolItem) => {
          const badge = document.createElement("div");
          badge.className = "tool-category-badge";
          
          const iconSpan = document.createElement("span");
          iconSpan.textContent = "🔧";
          iconSpan.setAttribute("aria-hidden", "true");

          const textSpan = document.createElement("span");
          textSpan.textContent = toolItem;

          badge.appendChild(iconSpan);
          badge.appendChild(textSpan);
          detailToolsContainer.appendChild(badge);
        });
      }
    }

    // 4. Technical Skills
    if (detailTechSkillsList) {
      detailTechSkillsList.innerHTML = "";
      if (Array.isArray(careerData.technicalSkills)) {
        careerData.technicalSkills.forEach((skill) => {
          const li = document.createElement("li");
          const icon = document.createElement("span");
          icon.className = "check-icon";
          icon.textContent = "✓";
          icon.setAttribute("aria-hidden", "true");

          const text = document.createElement("span");
          text.textContent = skill;

          li.appendChild(icon);
          li.appendChild(text);
          detailTechSkillsList.appendChild(li);
        });
      }
    }

    // 5. Soft Skills
    if (detailSoftSkillsList) {
      detailSoftSkillsList.innerHTML = "";
      if (Array.isArray(careerData.softSkills)) {
        careerData.softSkills.forEach((softSkill) => {
          const li = document.createElement("li");
          const icon = document.createElement("span");
          icon.className = "check-icon";
          icon.textContent = "✓";
          icon.setAttribute("aria-hidden", "true");

          const text = document.createElement("span");
          text.textContent = softSkill;

          li.appendChild(icon);
          li.appendChild(text);
          detailSoftSkillsList.appendChild(li);
        });
      }
    }

    // 6. Beginner Learning Priorities
    if (detailPrioritiesList) {
      detailPrioritiesList.innerHTML = "";
      if (Array.isArray(careerData.beginnerPriorities)) {
        careerData.beginnerPriorities.forEach((priority) => {
          const card = document.createElement("div");
          card.className = "priority-card";

          const badge = document.createElement("span");
          badge.className = "priority-step-badge";
          badge.textContent = `Step 0${priority.step}`;

          const title = document.createElement("h5");
          title.className = "priority-title";
          title.textContent = priority.title;

          const detail = document.createElement("p");
          detail.className = "priority-detail";
          detail.textContent = priority.detail;

          card.appendChild(badge);
          card.appendChild(title);
          card.appendChild(detail);
          detailPrioritiesList.appendChild(card);
        });
      }
    }

    // 7. Practical Portfolio Projects
    if (detailProjectsGrid) {
      detailProjectsGrid.innerHTML = "";
      if (Array.isArray(careerData.portfolioProjects)) {
        careerData.portfolioProjects.forEach((project) => {
          const card = document.createElement("div");
          card.className = "project-card";

          const levelBadge = document.createElement("span");
          const levelSlug = (project.level || "beginner").toLowerCase().replace(/\s+/g, "-");
          levelBadge.className = `project-level-badge badge-${levelSlug}`;
          levelBadge.textContent = project.level || "Project";

          const title = document.createElement("h5");
          title.className = "project-card-title";
          title.textContent = project.title;

          const problem = document.createElement("p");
          problem.className = "project-problem";
          problem.textContent = project.problemStatement;

          const featuresHeading = document.createElement("div");
          featuresHeading.className = "project-features-title";
          featuresHeading.textContent = "Key Features To Implement:";

          const featuresList = document.createElement("ul");
          featuresList.className = "project-features-list";
          if (Array.isArray(project.keyFeatures)) {
            project.keyFeatures.forEach((feat) => {
              const li = document.createElement("li");
              li.textContent = feat;
              featuresList.appendChild(li);
            });
          }

          const techTags = document.createElement("div");
          techTags.className = "project-tech-tags";
          if (Array.isArray(project.suggestedTech)) {
            project.suggestedTech.forEach((tech) => {
              const tag = document.createElement("span");
              tag.className = "project-tech-tag";
              tag.textContent = tech;
              techTags.appendChild(tag);
            });
          }

          card.appendChild(levelBadge);
          card.appendChild(title);
          card.appendChild(problem);
          card.appendChild(featuresHeading);
          card.appendChild(featuresList);
          card.appendChild(techTags);
          detailProjectsGrid.appendChild(card);
        });
      }
    }

    // 8. Entry-Level Preparation Checklist (with LocalStorage)
    if (detailChecklistContainer) {
      detailChecklistContainer.innerHTML = "";
      const storageKey = `skillpath_checklist_${careerId}`;
      let savedState = {};
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) savedState = JSON.parse(stored);
      } catch (err) {
        console.warn("Could not read localStorage for checklist:", err);
      }

      if (Array.isArray(careerData.preparationChecklist)) {
        careerData.preparationChecklist.forEach((itemText, idx) => {
          const itemDiv = document.createElement("label");
          itemDiv.className = "checklist-item";
          itemDiv.setAttribute("for", `chk-${careerId}-${idx}`);

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.className = "checklist-checkbox";
          checkbox.id = `chk-${careerId}-${idx}`;
          checkbox.checked = !!savedState[idx];

          checkbox.addEventListener("change", () => {
            savedState[idx] = checkbox.checked;
            try {
              localStorage.setItem(storageKey, JSON.stringify(savedState));
            } catch (err) {
              console.warn("Could not write to localStorage:", err);
            }
          });

          const labelSpan = document.createElement("span");
          labelSpan.className = "checklist-label";
          labelSpan.textContent = itemText;

          itemDiv.appendChild(checkbox);
          itemDiv.appendChild(labelSpan);
          detailChecklistContainer.appendChild(itemDiv);
        });
      }
    }

    // 9. Industry Expectations Disclaimer
    if (detailDisclaimer) {
      detailDisclaimer.textContent = careerData.disclaimer || 
        "Skills and tool requirements vary significantly by employer. Completing roadmaps demonstrates initiative, but does not guarantee employment.";
    }

    // Reveal the detailed overview panel
    detailPanel.hidden = false;

    // Smooth scroll down to the detail panel
    if (shouldScroll) {
      detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /**
   * Close the detail panel, deselect active cards, and scroll back up to cards
   */
  function deselectAllCareers(scrollToCards = false) {
    cards.forEach((c) => {
      c.classList.remove("is-selected");
      c.setAttribute("aria-expanded", "false");
    });
    detailPanel.hidden = true;

    if (scrollToCards) {
      const careersSection = document.getElementById("careers");
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Attach click and keyboard events to career cards
  cards.forEach((card) => {
    const careerId = card.getAttribute("data-career-id");

    // Click anywhere on card
    card.addEventListener("click", () => {
      window.selectCareerPath(careerId, true);
    });

    // Keyboard support: Enter or Space
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.selectCareerPath(careerId, true);
      }
    });

    // Explore button inside card
    const btn = card.querySelector(".explore-btn");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        window.selectCareerPath(careerId, true);
      });
    }
  });

  // Top close button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      deselectAllCareers(false);
    });
  }

  // "Back to All Careers" buttons (Top & Bottom)
  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      deselectAllCareers(true);
    });
  });

  // "Start Skill Assessment" button inside Career Detail panel
  if (startAssessmentBtn) {
    startAssessmentBtn.addEventListener("click", () => {
      const targetCareerId = window.currentSelectedCareer ? window.currentSelectedCareer.id : "python-dev";
      if (typeof window.startCareerAssessment === "function") {
        window.startCareerAssessment(targetCareerId, true);
      }
    });
  }

  // Global Escape key handler
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !detailPanel.hidden) {
      deselectAllCareers(true);
    }
  });
}

/* --------------------------------------------------------------------------
   3. Student Skill Assessment System (Stage 4)
   -------------------------------------------------------------------------- */
function initSkillAssessment() {
  const assessmentSection = document.getElementById("assessment");
  const pills = document.querySelectorAll("#assessment-pills .career-select-pill");
  const careerCategory = document.getElementById("assessment-career-category");
  const careerTitle = document.getElementById("assessment-career-title");
  const careerIntro = document.getElementById("assessment-career-intro");
  const ratedCountEl = document.getElementById("assessment-rated-count");
  const totalCountEl = document.getElementById("assessment-total-count");
  const progressPercentEl = document.getElementById("assessment-progress-percent");
  const progressFill = document.getElementById("assessment-progress-fill");
  const progressBar = document.getElementById("assessment-progressbar");
  const validationAlert = document.getElementById("assessment-validation-alert");
  const validationAlertText = document.getElementById("validation-alert-text");
  const form = document.getElementById("assessment-form");
  const skillsList = document.getElementById("assessment-skills-list");
  const resetBtn = document.getElementById("assessment-reset-btn");
  const backToCareersBtn = document.getElementById("assessment-back-to-careers");

  // Result View Elements
  const resultView = document.getElementById("assessment-result-view");
  const resultCareerTitle = document.getElementById("result-career-title");
  const resultTimestamp = document.getElementById("result-timestamp");
  const resultRatingsGrid = document.getElementById("result-ratings-grid");
  const resultRetakeBtn = document.getElementById("result-retake-btn");
  const resultBackCareersBtn = document.getElementById("result-back-careers-btn");
  const resultViewGapBtn = document.getElementById("result-view-gap-btn");
  const resultQuickGapBtn = document.getElementById("result-quick-gap-btn");
  const resultScorePreview = document.getElementById("result-score-preview");

  if (!assessmentSection || !form || !skillsList) return;

  // State
  let activeCareerId = "python-dev";
  let userRatings = {}; // { [skillId]: { levelKey, levelLabel, skillName } }

  /**
   * Load and render assessment for a specific career track
   * @param {string} careerId - Career ID to assess
   * @param {boolean} shouldScroll - Whether to scroll to the assessment section
   */
  window.startCareerAssessment = function(careerId, shouldScroll = true) {
    if (typeof careerPaths === "undefined" || !Array.isArray(careerPaths)) return;

    const career = careerPaths.find((c) => c.id === careerId);
    if (!career) return;

    activeCareerId = career.id;
    userRatings = {};

    // 1. Update selector pills
    pills.forEach((p) => {
      p.classList.toggle("active", p.getAttribute("data-career") === activeCareerId);
    });

    // 2. Update info header
    if (careerCategory) careerCategory.textContent = career.category;
    if (careerTitle) careerTitle.textContent = `${career.title} Skill Assessment`;
    if (careerIntro) {
      careerIntro.textContent = `Rate your proficiency for each of the 6 essential ${career.title} skills below. Be honest—this assessment identifies where to focus your learning journey in your Skill Gap Analysis.`;
    }

    // 3. Clear validation alert
    if (validationAlert) validationAlert.hidden = true;

    // 4. Check for existing saved submission in localStorage
    const storageKey = `skillpath_assessment_${activeCareerId}`;
    let savedSubmission = null;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) savedSubmission = JSON.parse(stored);
    } catch (err) {
      console.warn("Could not read assessment from localStorage:", err);
    }

    // If already submitted and user didn't request edit, show result summary view
    if (savedSubmission && savedSubmission.ratings && Object.keys(savedSubmission.ratings).length >= 6) {
      userRatings = savedSubmission.ratings;
      renderResultView(career, savedSubmission);
      form.hidden = true;
      resultView.hidden = false;
    } else {
      // Show form view
      renderAssessmentForm(career, savedSubmission ? savedSubmission.ratings : null);
      form.hidden = false;
      resultView.hidden = true;
    }

    // 5. Scroll to assessment section
    if (shouldScroll) {
      assessmentSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /**
   * Render the 6 skill cards with 3 rating options each
   */
  function renderAssessmentForm(career, preloadedRatings) {
    skillsList.innerHTML = "";
    userRatings = {};

    const skills = Array.isArray(career.assessmentSkills) ? career.assessmentSkills : [];
    const totalSkills = skills.length;

    skills.forEach((skill, idx) => {
      const card = document.createElement("div");
      card.className = "skill-assessment-card";
      card.id = `skill-card-${skill.id}`;

      // Card Header
      const headerDiv = document.createElement("div");
      headerDiv.className = "skill-card-header";

      const titleGroup = document.createElement("div");
      const nameHeading = document.createElement("h4");
      nameHeading.className = "skill-card-name";
      nameHeading.textContent = skill.name;

      const descP = document.createElement("p");
      descP.className = "skill-card-desc";
      descP.textContent = skill.description;

      titleGroup.appendChild(nameHeading);
      titleGroup.appendChild(descP);

      const badgeSpan = document.createElement("span");
      badgeSpan.className = "skill-card-badge";
      badgeSpan.textContent = `Skill 0${idx + 1} of 0${totalSkills}`;

      headerDiv.appendChild(titleGroup);
      headerDiv.appendChild(badgeSpan);
      card.appendChild(headerDiv);

      // Rating Options Grid (3 Selectable Levels)
      const optionsGrid = document.createElement("div");
      optionsGrid.className = "rating-options-grid";
      optionsGrid.setAttribute("role", "radiogroup");
      optionsGrid.setAttribute("aria-label", `Proficiency level for ${skill.name}`);

      ratingLevels.forEach((level) => {
        const optionLabel = document.createElement("label");
        optionLabel.className = "rating-option-label";
        optionLabel.htmlFor = `rate-${skill.id}-${level.key}`;

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.className = "rating-option-input";
        radioInput.name = `rating_${skill.id}`;
        radioInput.id = `rate-${skill.id}-${level.key}`;
        radioInput.value = level.key;

        // Check if preloaded from previous ratings
        const isPreselected = preloadedRatings && preloadedRatings[skill.id] && preloadedRatings[skill.id].levelKey === level.key;
        if (isPreselected) {
          radioInput.checked = true;
          optionLabel.classList.add("is-selected");
          card.classList.add("is-rated");
          userRatings[skill.id] = {
            levelKey: level.key,
            levelLabel: level.label,
            skillName: skill.name
          };
        }

        // Handle rating change
        radioInput.addEventListener("change", () => {
          // Remove selected styling from siblings
          const siblingLabels = card.querySelectorAll(".rating-option-label");
          siblingLabels.forEach((l) => l.classList.remove("is-selected"));

          // Mark current option
          optionLabel.classList.add("is-selected");
          card.classList.add("is-rated");
          card.classList.remove("has-error");

          // Save rating in state
          userRatings[skill.id] = {
            levelKey: level.key,
            levelLabel: level.label,
            skillName: skill.name
          };

          // Clear validation alert if all errors resolved
          if (validationAlert && !validationAlert.hidden) {
            const unratedCount = skills.filter((s) => !userRatings[s.id]).length;
            if (unratedCount === 0) validationAlert.hidden = true;
          }

          updateProgress(totalSkills);
        });

        // Header inside option
        const optHeader = document.createElement("div");
        optHeader.className = "rating-option-header";

        const optTitle = document.createElement("span");
        optTitle.className = "rating-option-title";
        optTitle.textContent = level.label;

        const customRadio = document.createElement("span");
        customRadio.className = "custom-radio";
        customRadio.setAttribute("aria-hidden", "true");

        optHeader.appendChild(optTitle);
        optHeader.appendChild(customRadio);

        // Description inside option
        const optDesc = document.createElement("p");
        optDesc.className = "rating-option-desc";
        optDesc.textContent = level.description;

        optionLabel.appendChild(radioInput);
        optionLabel.appendChild(optHeader);
        optionLabel.appendChild(optDesc);
        optionsGrid.appendChild(optionLabel);
      });

      card.appendChild(optionsGrid);
      skillsList.appendChild(card);
    });

    updateProgress(totalSkills);
  }

  /**
   * Update the progress bar and stats counter
   */
  function updateProgress(totalSkills = 6) {
    const ratedCount = Object.keys(userRatings).length;
    const percent = Math.round((ratedCount / totalSkills) * 100);

    if (ratedCountEl) ratedCountEl.textContent = ratedCount;
    if (totalCountEl) totalCountEl.textContent = totalSkills;
    if (progressPercentEl) progressPercentEl.textContent = `(${percent}% Complete)`;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressBar) progressBar.setAttribute("aria-valuenow", percent);
  }

  /**
   * Render the submission results view
   */
  function renderResultView(career, submission) {
    if (resultCareerTitle) resultCareerTitle.textContent = `${career.title} Skill Assessment`;

    if (resultTimestamp) {
      const date = submission && submission.timestamp ? new Date(submission.timestamp) : new Date();
      resultTimestamp.textContent = `Submitted on ${date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })}`;
    }

    if (resultRatingsGrid) {
      resultRatingsGrid.innerHTML = "";
      const skills = Array.isArray(career.assessmentSkills) ? career.assessmentSkills : [];

      skills.forEach((skill) => {
        const rating = submission && submission.ratings ? submission.ratings[skill.id] : null;
        const item = document.createElement("div");
        item.className = "result-rating-item";

        const nameSpan = document.createElement("span");
        nameSpan.className = "result-skill-name";
        nameSpan.textContent = skill.name;

        const pillSpan = document.createElement("span");
        const levelKey = rating ? rating.levelKey : "unrated";
        const levelLabel = rating ? rating.levelLabel : "Unrated";
        pillSpan.className = `result-level-pill pill-${levelKey}`;
        pillSpan.textContent = levelLabel;

        item.appendChild(nameSpan);
        item.appendChild(pillSpan);
        resultRatingsGrid.appendChild(item);
      });
    }

    // Calculate and display preview score on Stage 5 Gap Card
    if (resultScorePreview && submission && submission.ratings) {
      let curSum = 0;
      let tgtSum = 0;
      const skills = Array.isArray(career.assessmentSkills) ? career.assessmentSkills : [];
      skills.forEach((s) => {
        const r = submission.ratings[s.id];
        const lvl = (r && typeof levelNumericMap !== "undefined" && levelNumericMap[r.levelKey]) ? levelNumericMap[r.levelKey] : 1;
        curSum += lvl;
        tgtSum += (s.targetLevel || 2);
      });
      const score = Math.min(100, Math.round((curSum / tgtSum) * 100));
      resultScorePreview.textContent = `Match Score: ${score}%`;
    }
  }

  /**
   * Form Submission & Validation Handler
   */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const career = careerPaths.find((c) => c.id === activeCareerId);
    if (!career) return;

    const skills = Array.isArray(career.assessmentSkills) ? career.assessmentSkills : [];
    const missingSkills = [];
    let firstMissingCard = null;

    // Validate every skill is rated
    skills.forEach((skill) => {
      const card = document.getElementById(`skill-card-${skill.id}`);
      if (!userRatings[skill.id]) {
        missingSkills.push(skill.name);
        if (card) {
          card.classList.add("has-error");
          if (!firstMissingCard) firstMissingCard = card;
        }
      } else if (card) {
        card.classList.remove("has-error");
      }
    });

    // If validation fails, display error and scroll to first missing card
    if (missingSkills.length > 0) {
      if (validationAlert && validationAlertText) {
        validationAlert.hidden = false;
        validationAlertText.innerHTML = `Please select a rating for all 6 skills before submitting. <br><strong>Missing (${missingSkills.length}):</strong> ${missingSkills.join(", ")}.`;
      }
      if (firstMissingCard) {
        firstMissingCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Validation Passed: Hide alert
    if (validationAlert) validationAlert.hidden = true;

    // Build submission payload
    const submissionPayload = {
      careerId: career.id,
      careerTitle: career.title,
      category: career.category,
      timestamp: new Date().toISOString(),
      ratings: userRatings
    };

    // Store in localStorage
    try {
      localStorage.setItem(`skillpath_assessment_${career.id}`, JSON.stringify(submissionPayload));
      localStorage.setItem("skillpath_latest_assessment", career.id);
    } catch (err) {
      console.warn("Could not save assessment to localStorage:", err);
    }

    // Update Gap Analysis dashboard
    if (typeof window.updateGapAnalysis === "function") {
      window.updateGapAnalysis(career.id);
    }

    // Transition to result view
    renderResultView(career, submissionPayload);
    form.hidden = true;
    resultView.hidden = false;

    // Smooth scroll to result view
    resultView.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /**
   * Retake / Update Ratings
   */
  if (resultRetakeBtn) {
    resultRetakeBtn.addEventListener("click", () => {
      const career = careerPaths.find((c) => c.id === activeCareerId);
      if (!career) return;

      renderAssessmentForm(career, userRatings);
      resultView.hidden = true;
      form.hidden = false;
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /**
   * Reset / Clear Ratings
   */
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const career = careerPaths.find((c) => c.id === activeCareerId);
      if (!career) return;

      // Clear local state
      userRatings = {};
      try {
        localStorage.removeItem(`skillpath_assessment_${activeCareerId}`);
      } catch (err) {
        console.warn("Could not remove from localStorage:", err);
      }

      // Re-render empty form
      renderAssessmentForm(career, null);

      if (validationAlert) validationAlert.hidden = true;
    });
  }

  /**
   * Pill clicks in Career Selector
   */
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const careerId = pill.getAttribute("data-career");
      if (careerId && careerId !== activeCareerId) {
        window.startCareerAssessment(careerId, false);
      }
    });
  });

  /**
   * Back to Careers / Overview Buttons
   */
  if (backToCareersBtn) {
    backToCareersBtn.addEventListener("click", () => {
      if (typeof window.selectCareerPath === "function") {
        window.selectCareerPath(activeCareerId, true);
      }
    });
  }

  if (resultBackCareersBtn) {
    resultBackCareersBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.selectCareerPath === "function") {
        window.selectCareerPath(activeCareerId, true);
      }
    });
  }

  // View Gap Analysis CTA buttons
  if (resultViewGapBtn) {
    resultViewGapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.showCareerGapAnalysis === "function") {
        window.showCareerGapAnalysis(activeCareerId, true);
      }
    });
  }

  if (resultQuickGapBtn) {
    resultQuickGapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.showCareerGapAnalysis === "function") {
        window.showCareerGapAnalysis(activeCareerId, true);
      }
    });
  }

  // Initialize with default or last assessed career
  let initialCareerId = "python-dev";
  try {
    const lastAssessed = localStorage.getItem("skillpath_latest_assessment");
    if (lastAssessed) initialCareerId = lastAssessed;
  } catch (err) {
    // Ignore error
  }
  window.startCareerAssessment(initialCareerId, false);
}

/* --------------------------------------------------------------------------
   3.5 Section 3.6: Student Skill Gap Analysis Engine & Dashboard (Stage 5)
   -------------------------------------------------------------------------- */
function initSkillGapAnalysis() {
  const gapSection = document.getElementById("gap-analysis");
  if (!gapSection) return;

  const pills = document.querySelectorAll("#gap-career-pills .career-select-pill");
  const emptyState = document.getElementById("gap-empty-state");
  const emptyStateTitle = document.getElementById("empty-state-career-title");
  const emptyStateBtn = document.getElementById("gap-start-assessment-btn");
  const contentContainer = document.getElementById("gap-analysis-content");

  // Overview elements
  const careerCategory = document.getElementById("gap-career-category");
  const careerHeading = document.getElementById("gap-career-heading");
  const evaluatedDate = document.getElementById("gap-evaluated-date");
  const retakeBtn = document.getElementById("gap-retake-btn");
  const bottomRetakeBtn = document.getElementById("gap-bottom-retake-btn");

  // Score Gauge elements
  const scoreValueEl = document.getElementById("gap-score-value");
  const scoreFillCircle = document.getElementById("score-fill-circle");
  const scoreStatusBadge = document.getElementById("gap-score-status");
  const scoreExplanation = document.getElementById("gap-score-explanation");
  const studentPointsEl = document.getElementById("gap-student-points");
  const maxPointsEl = document.getElementById("gap-max-points");
  const targetPointsEl = document.getElementById("gap-target-points");
  const formulaTextEl = document.getElementById("gap-formula-text");
  const findResourcesBtn = document.getElementById("gap-find-resources-btn");

  // 3 Pillar Summary Cards
  const countMetEl = document.getElementById("count-target-met");
  const pillsMetContainer = document.getElementById("pills-target-met");
  const countImprovementEl = document.getElementById("count-improvement");
  const pillsImprovementContainer = document.getElementById("pills-improvement");
  const countPriorityEl = document.getElementById("count-priority");
  const pillsPriorityContainer = document.getElementById("pills-priority");

  // Comparison & Recommendations containers
  const comparisonGrid = document.getElementById("gap-comparison-grid");
  const recommendationsContainer = document.getElementById("gap-recommendations-container");

  let activeGapCareerId = "python-dev";

  /**
   * Main function to render Gap Analysis for a career track
   * @param {string} careerId - Career ID to evaluate
   * @param {boolean} shouldScroll - Whether to scroll to gap analysis section
   */
  window.showCareerGapAnalysis = function(careerId, shouldScroll = false) {
    if (typeof careerPaths === "undefined" || !Array.isArray(careerPaths)) return;

    const career = careerPaths.find((c) => c.id === careerId);
    if (!career) return;

    activeGapCareerId = career.id;

    // Update active tab/pill state
    pills.forEach((pill) => {
      const isTarget = pill.getAttribute("data-career") === activeGapCareerId;
      pill.classList.toggle("active", isTarget);
      pill.setAttribute("aria-selected", isTarget ? "true" : "false");
    });

    // Check for saved assessment in localStorage
    const storageKey = `skillpath_assessment_${activeGapCareerId}`;
    let submission = null;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) submission = JSON.parse(stored);
    } catch (err) {
      console.warn("Could not read assessment from localStorage:", err);
    }

    // Verify submission has completed ratings for all 6 skills
    const skills = Array.isArray(career.assessmentSkills) ? career.assessmentSkills : [];
    const hasFullRatings = submission && submission.ratings && skills.length > 0 && skills.every((s) => submission.ratings[s.id]);

    if (!hasFullRatings) {
      // Show Empty State
      if (contentContainer) contentContainer.hidden = true;
      if (emptyState) {
        emptyState.hidden = false;
        if (emptyStateTitle) emptyStateTitle.textContent = `No Assessment Found for ${career.title}`;
        if (emptyStateBtn) {
          emptyStateBtn.onclick = () => {
            if (typeof window.startCareerAssessment === "function") {
              window.startCareerAssessment(activeGapCareerId, true);
            }
          };
        }
      }
    } else {
      // Show Content Container
      if (emptyState) emptyState.hidden = true;
      if (contentContainer) contentContainer.hidden = false;

      renderAnalysisDashboard(career, submission);
    }

    if (shouldScroll) {
      gapSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /**
   * Internal render function when assessment exists
   */
  function renderAnalysisDashboard(career, submission) {
    const skills = Array.isArray(career.assessmentSkills) ? career.assessmentSkills : [];
    
    // 1. Overview Header
    if (careerCategory) careerCategory.textContent = career.category || "Career Track";
    if (careerHeading) careerHeading.textContent = `${career.title} Gap Analysis`;
    if (evaluatedDate) {
      const date = submission.timestamp ? new Date(submission.timestamp) : new Date();
      evaluatedDate.textContent = `Evaluated on ${date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })}`;
    }

    // 2. Calculations
    let studentSum = 0;
    let targetSum = 0;
    const analyzedSkills = [];

    skills.forEach((skill) => {
      const userRating = submission.ratings[skill.id];
      const curLevel = (userRating && typeof levelNumericMap !== "undefined" && levelNumericMap[userRating.levelKey])
        ? levelNumericMap[userRating.levelKey]
        : 1;
      const curLabel = userRating ? userRating.levelLabel : "Beginner";
      const tgtLevel = skill.targetLevel || 2;
      const tgtLabel = skill.targetLabel || "Intermediate";

      // Formula: Gap = Target Level - Current Level
      const gap = tgtLevel - curLevel;

      studentSum += curLevel;
      targetSum += tgtLevel;

      let classification = "met";
      let statusClass = "status-met";
      let statusLabel = "Target Met";
      let gapText = "";

      if (gap <= 0) {
        classification = "met";
        statusClass = "status-met";
        statusLabel = "Target Met";
        gapText = gap === 0 ? "Gap: 0 (On Track)" : `Gap: ${gap} (Exceeds Target)`;
      } else if (gap === 1) {
        classification = "improvement";
        statusClass = "status-improvement";
        statusLabel = "Needs Improvement";
        gapText = "Gap: +1 (1 Level to Target)";
      } else {
        // gap >= 2
        classification = "priority";
        statusClass = "status-priority";
        statusLabel = "High Priority";
        gapText = "Gap: +2 (Critical Priority)";
      }

      analyzedSkills.push({
        skill,
        curLevel,
        curLabel,
        tgtLevel,
        tgtLabel,
        gap,
        classification,
        statusClass,
        statusLabel,
        gapText
      });
    });

    // Formula: Match Score = (Sum of current skill levels / Sum of target skill levels) * 100
    // Capped at 100%
    const rawMatchScore = Math.round((studentSum / targetSum) * 100);
    const matchScore = Math.min(100, rawMatchScore);

    // 3. Render Match Score Gauge & Statistics
    if (scoreValueEl) scoreValueEl.textContent = `${matchScore}%`;
    if (studentPointsEl) studentPointsEl.textContent = `${studentSum} pts`;
    if (maxPointsEl) maxPointsEl.textContent = `18 pts`;
    if (targetPointsEl) targetPointsEl.textContent = `${targetSum} pts`;
    if (formulaTextEl) {
      formulaTextEl.textContent = `Calculation: (${studentSum} Your Points ÷ ${targetSum} Benchmark Target) × 100 = ${matchScore}% Match (Capped at 100%)`;
    }

    // SVG Radial Ring (Circumference: 2 * PI * 50 ≈ 314.16)
    if (scoreFillCircle) {
      const circumference = 314.16;
      const offset = circumference - (circumference * (matchScore / 100));
      scoreFillCircle.style.strokeDashoffset = offset;

      if (matchScore >= 90) {
        scoreFillCircle.style.stroke = "#10b981";
      } else if (matchScore >= 65) {
        scoreFillCircle.style.stroke = "#2563eb";
      } else {
        scoreFillCircle.style.stroke = "#f59e0b";
      }
    }

    // Status Badge & Explanation Text
    const metSkills = analyzedSkills.filter((s) => s.classification === "met");
    const improvementSkills = analyzedSkills.filter((s) => s.classification === "improvement");
    const prioritySkills = analyzedSkills.filter((s) => s.classification === "priority");

    if (scoreStatusBadge) {
      scoreStatusBadge.className = "score-status-badge";
      if (matchScore >= 90) {
        scoreStatusBadge.classList.add("status-strong");
        scoreStatusBadge.textContent = "Strong Alignment";
      } else if (matchScore >= 65) {
        scoreStatusBadge.classList.add("status-moderate");
        scoreStatusBadge.textContent = "Moderate Foundation";
      } else {
        scoreStatusBadge.classList.add("status-early");
        scoreStatusBadge.textContent = "Early Preparation";
      }
    }

    if (scoreExplanation) {
      scoreExplanation.innerHTML = `Based on your self-reported ratings, you currently meet <strong>${metSkills.length} out of ${skills.length}</strong> benchmark target proficiencies for an entry-level candidate. ${
        prioritySkills.length > 0
          ? `Focus first on the <strong>${prioritySkills.length} high-priority</strong> learning area${prioritySkills.length > 1 ? "s" : ""} below.`
          : improvementSkills.length > 0
          ? `Work through the <strong>${improvementSkills.length} moderate</strong> gap${improvementSkills.length > 1 ? "s" : ""} to reach full preparation.`
          : "Congratulations! You have satisfied all preparation benchmark levels for this track."
      }`;
    }

    // 4. Render 3 Pillars Summary Cards
    if (countMetEl) countMetEl.textContent = metSkills.length;
    if (countImprovementEl) countImprovementEl.textContent = improvementSkills.length;
    if (countPriorityEl) countPriorityEl.textContent = prioritySkills.length;

    renderMetricPills(pillsMetContainer, metSkills);
    renderMetricPills(pillsImprovementContainer, improvementSkills);
    renderMetricPills(pillsPriorityContainer, prioritySkills);

    // 5. Render Detailed Comparison Cards Grid
    if (comparisonGrid) {
      comparisonGrid.innerHTML = "";
      analyzedSkills.forEach((item) => {
        const card = createComparisonCard(item);
        comparisonGrid.appendChild(card);
      });
    }

    // 6. Render Actionable Recommendations
    if (recommendationsContainer) {
      recommendationsContainer.innerHTML = "";

      // Sort: Priority (gap 2) first, then Improvement (gap 1)
      const gapSkills = analyzedSkills
        .filter((s) => s.gap > 0)
        .sort((a, b) => b.gap - a.gap);

      if (gapSkills.length === 0) {
        // Congratulatory card
        const celebCard = document.createElement("div");
        celebCard.className = "rec-all-met-card";
        celebCard.innerHTML = `
          <div class="rec-all-met-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="rec-all-met-content">
            <h4>Outstanding Benchmark Achievement!</h4>
            <p>
              Your self-assessed skill levels meet or exceed all entry-level benchmark targets for <strong>${career.title}</strong>. You are in a prime position to build polished portfolio projects and begin structured mock interview preparation.
            </p>
          </div>
        `;
        recommendationsContainer.appendChild(celebCard);
      } else {
        gapSkills.forEach((item) => {
          const recCard = createRecommendationCard(item);
          recommendationsContainer.appendChild(recCard);
        });
      }
    }
  }

  /**
   * Helper to populate skill pills inside summary metric cards
   */
  function renderMetricPills(container, skillsList) {
    if (!container) return;
    container.innerHTML = "";
    if (skillsList.length === 0) {
      const noneSpan = document.createElement("span");
      noneSpan.className = "mini-skill-pill pill-none";
      noneSpan.textContent = "None in this category";
      container.appendChild(noneSpan);
      return;
    }
    skillsList.forEach((item) => {
      const pill = document.createElement("span");
      pill.className = "mini-skill-pill";
      pill.textContent = item.skill.name;
      container.appendChild(pill);
    });
  }

  /**
   * Helper to create a comparison card for a skill
   */
  function createComparisonCard(item) {
    const card = document.createElement("div");
    card.className = "comparison-card";

    const curPct = Math.round((item.curLevel / 3) * 100);
    const tgtPct = Math.round((item.tgtLevel / 3) * 100);

    let curFillClass = "fill-current-met";
    if (item.classification === "improvement") curFillClass = "fill-current-improvement";
    if (item.classification === "priority") curFillClass = "fill-current-priority";

    let gapTagClass = "gap-met";
    if (item.classification === "improvement") gapTagClass = "gap-improvement";
    if (item.classification === "priority") gapTagClass = "gap-priority";

    card.innerHTML = `
      <div class="comp-card-top">
        <h4 class="comp-skill-title">${item.skill.name}</h4>
        <span class="comp-status-badge ${item.statusClass}">${item.statusLabel}</span>
      </div>
      <p class="comp-skill-desc">${item.skill.description}</p>
      <div class="comp-tracks-wrapper">
        <div class="comp-bar-row">
          <div class="comp-bar-labels">
            <span class="comp-bar-role">Your Current Level:</span>
            <span class="comp-bar-val">${item.curLabel} (Level ${item.curLevel})</span>
          </div>
          <div class="comp-track-outer">
            <div class="comp-track-fill ${curFillClass}" style="width: ${curPct}%" aria-valuenow="${curPct}" role="progressbar" aria-label="Current level for ${item.skill.name}"></div>
          </div>
        </div>
        <div class="comp-bar-row">
          <div class="comp-bar-labels">
            <span class="comp-bar-role">Target Benchmark:</span>
            <span class="comp-bar-val">${item.tgtLabel} (Level ${item.tgtLevel})</span>
          </div>
          <div class="comp-track-outer">
            <div class="comp-track-fill fill-target" style="width: ${tgtPct}%" aria-valuenow="${tgtPct}" role="progressbar" aria-label="Target benchmark for ${item.skill.name}"></div>
          </div>
        </div>
      </div>
      <div class="comp-card-footer">
        <span class="comp-gap-tag ${gapTagClass}">${item.gapText}</span>
        <span class="comp-benchmark-tip">${item.skill.benchmarkReason || "Entry-level preparation expectation."}</span>
      </div>
    `;

    return card;
  }

  /**
   * Helper to create an actionable recommendation card
   */
  function createRecommendationCard(item) {
    const card = document.createElement("div");
    card.className = `rec-card ${item.classification === "priority" ? "rec-priority" : "rec-improvement"}`;

    // Select recommendation text based on current level
    let actionText = "";
    if (item.curLevel === 1 && item.skill.recommendations && item.skill.recommendations.toIntermediate) {
      actionText = item.skill.recommendations.toIntermediate;
    } else if (item.curLevel === 2 && item.skill.recommendations && item.skill.recommendations.toAdvanced) {
      actionText = item.skill.recommendations.toAdvanced;
    } else {
      actionText = `Focus on practical coding exercises and tutorials to bridge the gap from ${item.curLabel} to ${item.tgtLabel}.`;
    }

    const isPriority = item.classification === "priority";
    const iconSvg = isPriority
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`;

    card.innerHTML = `
      <div class="rec-icon-box ${isPriority ? "priority" : "improvement"}">
        ${iconSvg}
      </div>
      <div class="rec-content">
        <div class="rec-top-row">
          <h4 class="rec-skill-name">${item.skill.name}</h4>
          <span class="rec-badge ${isPriority ? "priority" : "improvement"}">${item.statusLabel}</span>
          <span class="rec-levels-span">Current: <strong>${item.curLabel}</strong> &rarr; Target: <strong>${item.tgtLabel}</strong> (Gap: ${item.gap})</span>
        </div>
        <p class="rec-action-text">${actionText}</p>
        <p class="rec-reason-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Why it matters: ${item.skill.benchmarkReason || "Required baseline skill for entry-level preparation."}
        </p>
      </div>
    `;

    return card;
  }

  // Hook up Retake / Update buttons
  const triggerRetake = () => {
    if (typeof window.startCareerAssessment === "function") {
      window.startCareerAssessment(activeGapCareerId, true);
    }
  };

  if (retakeBtn) retakeBtn.addEventListener("click", triggerRetake);
  if (bottomRetakeBtn) bottomRetakeBtn.addEventListener("click", triggerRetake);

  // Hook up "Find Free Learning Resources" button
  if (findResourcesBtn) {
    findResourcesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.showCareerResources === "function") {
        window.showCareerResources(activeGapCareerId, true);
      }
    });
  }

  // Hook up Career Track selector pills
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const careerId = pill.getAttribute("data-career");
      if (careerId) {
        window.showCareerGapAnalysis(careerId, false);
      }
    });
  });

  // Global updater hook so assessment submission can refresh gap analysis & learning finder
  window.updateGapAnalysis = function(careerId) {
    if (careerId) activeGapCareerId = careerId;
    window.showCareerGapAnalysis(activeGapCareerId, false);
    if (typeof window.updateLearningFinder === "function") {
      window.updateLearningFinder(activeGapCareerId);
    }
    if (typeof window.updateRoadmap === "function") {
      window.updateRoadmap(activeGapCareerId);
    }
  };

  // Initial render: use last assessed career or default
  let initialCareer = "python-dev";
  try {
    const last = localStorage.getItem("skillpath_latest_assessment");
    if (last) initialCareer = last;
  } catch (err) {}

  window.showCareerGapAnalysis(initialCareer, false);
}

/* --------------------------------------------------------------------------
   3.7 Section 3.7: Free Learning Resource Finder Engine (Stage 6)
   -------------------------------------------------------------------------- */
function initLearningFinder() {
  const resourceSection = document.getElementById("resources");
  if (!resourceSection) return;

  // Context & Alert elements
  const activeCareerEl = document.getElementById("resource-active-career");
  const gapsSummaryEl = document.getElementById("resource-gaps-summary");
  const toggleGapsBtn = document.getElementById("res-toggle-gaps-btn");
  const showAllBtn = document.getElementById("res-show-all-btn");

  // Controls & Filters
  const searchInput = document.getElementById("resource-search-input");
  const searchClearBtn = document.getElementById("resource-search-clear");
  const careerSelect = document.getElementById("filter-career-select");
  const difficultySelect = document.getElementById("filter-difficulty-select");
  const skillPillsContainer = document.getElementById("resource-skill-pills");
  const resultsCountText = document.getElementById("resource-results-count");
  const resetFiltersBtn = document.getElementById("resource-reset-filters-btn");
  const emptyResetBtn = document.getElementById("empty-reset-filters-btn");

  // Output containers
  const resourcesGrid = document.getElementById("resources-grid");
  const emptyState = document.getElementById("resources-empty-state");

  // State
  let activeCareer = "python-dev";
  let activeSkillCategory = "All";
  let activeDifficulty = "all";
  let searchQuery = "";
  let onlyGapsMode = false;
  let userGaps = {}; // { [skillId]: gapValue }

  // 1. Initialize Skill Category Filter Pills
  function renderSkillCategoryPills() {
    if (!skillPillsContainer) return;
    skillPillsContainer.innerHTML = "";

    const categories = typeof resourceSkillCategories !== "undefined" ? resourceSkillCategories : ["All"];
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `resource-skill-pill ${cat === activeSkillCategory ? "active" : ""}`;
      btn.textContent = cat;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", cat === activeSkillCategory ? "true" : "false");

      btn.addEventListener("click", () => {
        activeSkillCategory = cat;
        // Update pill active classes
        const allPills = skillPillsContainer.querySelectorAll(".resource-skill-pill");
        allPills.forEach((p) => {
          const isAct = p.textContent === activeSkillCategory;
          p.classList.toggle("active", isAct);
          p.setAttribute("aria-selected", isAct ? "true" : "false");
        });
        applyFiltersAndRender();
      });

      skillPillsContainer.appendChild(btn);
    });
  }

  // 2. Compute Gaps for Active Career from localStorage
  function calculateActiveCareerGaps() {
    userGaps = {};
    if (typeof careerPaths === "undefined") return;

    const career = careerPaths.find((c) => c.id === activeCareer);
    if (!career || !Array.isArray(career.assessmentSkills)) return;

    let submission = null;
    try {
      const stored = localStorage.getItem(`skillpath_assessment_${activeCareer}`);
      if (stored) submission = JSON.parse(stored);
    } catch (err) {}

    let priorityCount = 0;
    let improvementCount = 0;

    career.assessmentSkills.forEach((skill) => {
      let curLevel = 1;
      if (submission && submission.ratings && submission.ratings[skill.id]) {
        const key = submission.ratings[skill.id].levelKey;
        curLevel = (typeof levelNumericMap !== "undefined" && levelNumericMap[key]) ? levelNumericMap[key] : 1;
      }
      const tgtLevel = skill.targetLevel || 2;
      const gap = tgtLevel - curLevel;
      userGaps[skill.id] = gap;

      if (submission && submission.ratings && submission.ratings[skill.id]) {
        if (gap >= 2) priorityCount++;
        else if (gap === 1) improvementCount++;
      }
    });

    // Update Context Card Header
    if (activeCareerEl) activeCareerEl.textContent = career.title;

    if (gapsSummaryEl) {
      if (!submission || !submission.ratings || Object.keys(submission.ratings).length < 6) {
        gapsSummaryEl.innerHTML = `<span class="gap-alert-pill pill-none">No assessment yet &bull; Showing full library</span>`;
      } else if (priorityCount === 0 && improvementCount === 0) {
        gapsSummaryEl.innerHTML = `<span class="gap-alert-pill pill-none">All Targets Met &bull; Outstanding Foundation</span>`;
      } else {
        let html = "";
        if (priorityCount > 0) {
          html += `<span class="gap-alert-pill pill-priority">${priorityCount} High-Priority Gap${priorityCount > 1 ? "s" : ""}</span>`;
        }
        if (improvementCount > 0) {
          html += `<span class="gap-alert-pill pill-improvement">${improvementCount} Moderate Gap${improvementCount > 1 ? "s" : ""}</span>`;
        }
        gapsSummaryEl.innerHTML = html;
      }
    }
  }

  // 3. Filter & Sort Resources
  function getFilteredResources() {
    if (typeof learningResources === "undefined" || !Array.isArray(learningResources)) return [];

    let list = learningResources.map((res) => {
      // Determine gap status for this resource
      let maxGap = -99;
      let matchesStudentGap = false;

      if (Array.isArray(res.relatedSkillIds)) {
        res.relatedSkillIds.forEach((sId) => {
          if (typeof userGaps[sId] !== "undefined") {
            if (userGaps[sId] > maxGap) maxGap = userGaps[sId];
            if (userGaps[sId] > 0) matchesStudentGap = true;
          }
        });
      }

      return {
        ...res,
        maxGap,
        matchesStudentGap,
        isPriorityGap: maxGap >= 2,
        isImprovementGap: maxGap === 1
      };
    });

    // A. Filter by Career Track
    if (activeCareer && activeCareer !== "all") {
      list = list.filter((r) => {
        if (!r.careerTracks || r.careerTracks.includes("all")) return true;
        return r.careerTracks.includes(activeCareer);
      });
    }

    // B. Filter by Skill Category Pill
    if (activeSkillCategory && activeSkillCategory !== "All") {
      list = list.filter((r) => r.skillCategory === activeSkillCategory);
    }

    // C. Filter by Difficulty
    if (activeDifficulty && activeDifficulty !== "all") {
      list = list.filter((r) => r.difficulty.toLowerCase().includes(activeDifficulty.toLowerCase()));
    }

    // D. Filter by Only Gaps mode
    if (onlyGapsMode) {
      list = list.filter((r) => r.matchesStudentGap);
    }

    // E. Search query filter
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((r) => {
        return (
          r.title.toLowerCase().includes(q) ||
          r.skillCategory.toLowerCase().includes(q) ||
          r.platform.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          (r.format && r.format.toLowerCase().includes(q))
        );
      });
    }

    // F. Intelligent Ordering: Priority Gap (gap 2) -> Improvement Gap (gap 1) -> Others
    list.sort((a, b) => {
      if (a.maxGap !== b.maxGap) {
        return b.maxGap - a.maxGap;
      }
      return a.title.localeCompare(b.title);
    });

    return list;
  }

  // 4. Render Resource Cards
  function applyFiltersAndRender() {
    const list = getFilteredResources();

    // Update count text
    if (resultsCountText) {
      resultsCountText.textContent = `Showing ${list.length} free resource${list.length === 1 ? "" : "s"}${
        onlyGapsMode ? " (Filtered for your skill gaps)" : ""
      }`;
    }

    // Check if any filter is active
    const hasActiveFilters =
      (activeCareer && activeCareer !== "all" && activeCareer !== "python-dev") ||
      activeSkillCategory !== "All" ||
      activeDifficulty !== "all" ||
      searchQuery.trim().length > 0 ||
      onlyGapsMode;

    if (resetFiltersBtn) {
      resetFiltersBtn.hidden = !hasActiveFilters;
    }

    if (!resourcesGrid) return;

    if (list.length === 0) {
      resourcesGrid.innerHTML = "";
      resourcesGrid.hidden = true;
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;
    resourcesGrid.hidden = false;
    resourcesGrid.innerHTML = "";

    list.forEach((item) => {
      const card = createResourceCard(item);
      resourcesGrid.appendChild(card);
    });
  }

  // 5. Create Individual Resource Card DOM Node
  function createResourceCard(item) {
    const card = document.createElement("article");
    card.className = "resource-card";

    let borderClass = "card-standard";
    let gapBadgeHtml = "";

    if (item.isPriorityGap) {
      borderClass = "card-priority-gap";
      gapBadgeHtml = `
        <div class="card-gap-alert-badge gap-priority">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>Critical Skill Gap (High Priority)</span>
        </div>
      `;
    } else if (item.isImprovementGap) {
      borderClass = "card-improvement-gap";
      gapBadgeHtml = `
        <div class="card-gap-alert-badge gap-improvement">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
          <span>Recommended For Your Gap</span>
        </div>
      `;
    }

    card.classList.add(borderClass);

    const diffClass = item.difficulty.toLowerCase().includes("intermediate") ? "diff-intermediate" : "diff-beginner";

    card.innerHTML = `
      ${gapBadgeHtml}
      <div class="res-card-top-row">
        <span class="res-platform-badge">${item.platform}</span>
        <div class="res-badges-right">
          <span class="res-difficulty-pill ${diffClass}">${item.difficulty}</span>
          <span class="res-format-pill">${item.format}</span>
        </div>
      </div>
      <h3 class="res-title">${item.title}</h3>
      <div class="res-skill-tags-row">
        <span class="res-skill-tag">${item.skillCategory}</span>
      </div>
      <p class="res-desc">${item.description}</p>
      
      <div class="res-free-box">
        <div class="free-feature-line">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${item.freeAvailability}</span>
        </div>
        <p class="free-cert-line">${item.certificateNote}</p>
      </div>

      <div class="res-btn-wrap">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block">
          <span>Open Resource</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `;

    return card;
  }

  // 6. Reset Filters Handler
  function resetAllFilters() {
    activeSkillCategory = "All";
    activeDifficulty = "all";
    searchQuery = "";
    onlyGapsMode = false;

    if (searchInput) {
      searchInput.value = "";
      if (searchClearBtn) searchClearBtn.hidden = true;
    }
    if (difficultySelect) difficultySelect.value = "all";

    // Reset skill pills
    if (skillPillsContainer) {
      const pills = skillPillsContainer.querySelectorAll(".resource-skill-pill");
      pills.forEach((p) => {
        const isAll = p.textContent === "All";
        p.classList.toggle("active", isAll);
        p.setAttribute("aria-selected", isAll ? "true" : "false");
      });
    }

    if (toggleGapsBtn) {
      toggleGapsBtn.classList.remove("btn-primary");
      toggleGapsBtn.classList.add("btn-outline");
    }
    if (showAllBtn) {
      showAllBtn.classList.add("btn-primary");
      showAllBtn.classList.remove("btn-ghost");
    }

    applyFiltersAndRender();
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) searchClearBtn.hidden = searchQuery.length === 0;
      applyFiltersAndRender();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClearBtn.hidden = true;
      searchInput.focus();
      applyFiltersAndRender();
    });
  }

  if (careerSelect) {
    careerSelect.addEventListener("change", (e) => {
      activeCareer = e.target.value;
      calculateActiveCareerGaps();
      applyFiltersAndRender();
    });
  }

  if (difficultySelect) {
    difficultySelect.addEventListener("change", (e) => {
      activeDifficulty = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (toggleGapsBtn) {
    toggleGapsBtn.addEventListener("click", () => {
      onlyGapsMode = true;
      toggleGapsBtn.classList.add("btn-primary");
      toggleGapsBtn.classList.remove("btn-outline");
      if (showAllBtn) {
        showAllBtn.classList.remove("btn-primary");
        showAllBtn.classList.add("btn-ghost");
      }
      applyFiltersAndRender();
    });
  }

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      onlyGapsMode = false;
      showAllBtn.classList.add("btn-primary");
      showAllBtn.classList.remove("btn-ghost");
      if (toggleGapsBtn) {
        toggleGapsBtn.classList.remove("btn-primary");
        toggleGapsBtn.classList.add("btn-outline");
      }
      applyFiltersAndRender();
    });
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener("click", resetAllFilters);

  // Global methods for cross-module integration
  window.showCareerResources = function(careerId, shouldScroll = true) {
    if (careerId) {
      activeCareer = careerId;
      if (careerSelect) careerSelect.value = careerId;
    }
    calculateActiveCareerGaps();
    applyFiltersAndRender();

    if (shouldScroll && resourceSection) {
      resourceSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  window.updateLearningFinder = function(careerId) {
    if (careerId) {
      activeCareer = careerId;
      if (careerSelect) careerSelect.value = careerId;
    }
    calculateActiveCareerGaps();
    applyFiltersAndRender();
  };

  // Initial Load
  try {
    const savedCareer = localStorage.getItem("skillpath_latest_assessment");
    if (savedCareer) activeCareer = savedCareer;
  } catch (err) {}

  if (careerSelect) careerSelect.value = activeCareer;

  renderSkillCategoryPills();
  calculateActiveCareerGaps();
  applyFiltersAndRender();
}

/* --------------------------------------------------------------------------
   3.8 Section 3.8: Personalized Learning Roadmap Engine (Stage 7)
   -------------------------------------------------------------------------- */
function initPersonalizedRoadmap() {
  const roadmapSection = document.getElementById("roadmap");
  if (!roadmapSection) return;

  const careerPillsContainer = document.getElementById("roadmap-career-pills");
  const careerPills = careerPillsContainer ? careerPillsContainer.querySelectorAll(".career-pill-btn") : [];
  const activeCareerNameEl = document.getElementById("roadmap-active-career-name");
  const assessmentStatusEl = document.getElementById("roadmap-assessment-status");
  const contextDescEl = document.getElementById("roadmap-context-desc");
  const retakeAssessmentBtn = document.getElementById("roadmap-retake-assessment-btn");
  const viewGapsBtn = document.getElementById("roadmap-view-gaps-btn");

  const progressHeadline = document.getElementById("roadmap-progress-headline");
  const progressBar = document.getElementById("roadmap-progress-bar");
  const completedCountEl = document.getElementById("roadmap-completed-count");
  const remainingCountEl = document.getElementById("roadmap-remaining-count");
  const currentFocusEl = document.getElementById("roadmap-current-focus");
  const resetBtn = document.getElementById("roadmap-reset-btn");

  const weekTabs = document.querySelectorAll(".week-tab-btn");
  const weeksContainer = document.getElementById("roadmap-weeks-container");

  // Bottom action buttons & cross-module links
  const gapViewRoadmapBtn = document.getElementById("gap-view-roadmap-btn");
  const resToRoadmapBtn = document.getElementById("resources-to-roadmap-btn");

  let activeCareer = "python-dev";
  let activeWeekFilter = "all"; // "all", "1", "2", "3", "4"
  const completedTaskIds = new Set();
  let careerGapMap = {}; // skillId -> gapNumber
  let hasCompletedAssessment = false;

  // Load active career from latest assessment or fallback
  try {
    const savedCareer = localStorage.getItem("skillpath_latest_assessment");
    if (savedCareer && (typeof careerRoadmaps !== "undefined" && careerRoadmaps[savedCareer])) {
      activeCareer = savedCareer;
    }
  } catch (err) {}

  // 1. Calculate Skill Gaps for the active career
  function calculateCareerGaps() {
    careerGapMap = {};
    hasCompletedAssessment = false;

    try {
      const assessmentJson = localStorage.getItem(`skillpath_assessment_${activeCareer}`);
      if (assessmentJson) {
        const assessment = JSON.parse(assessmentJson);
        const ratings = assessment.ratings || {};

        // Find career metadata
        const careerData = (typeof careerPaths !== "undefined")
          ? careerPaths.find((c) => c.id === activeCareer)
          : null;

        if (careerData && Array.isArray(careerData.assessmentSkills)) {
          const skills = careerData.assessmentSkills;
          const hasAllRatings = skills.length > 0 && skills.every((s) => ratings[s.id]);

          if (hasAllRatings) {
            hasCompletedAssessment = true;
            skills.forEach((skill) => {
              const r = ratings[skill.id];
              const levelKey = (typeof r === "object" && r !== null) ? r.levelKey : r;
              const currentLevel = (typeof levelNumericMap !== "undefined" && levelKey && levelNumericMap[levelKey])
                ? levelNumericMap[levelKey]
                : 1;
              const targetLevel = skill.targetLevel || 2;
              const gap = targetLevel - currentLevel;
              careerGapMap[skill.id] = gap;
            });
          }
        }
      }
    } catch (err) {
      console.warn("SkillPath AI: Error loading assessment for roadmap:", err);
    }
  }

  // 2. Load Completed Tasks from localStorage
  function loadCompletedTasks() {
    completedTaskIds.clear();
    try {
      const savedRoadmap = localStorage.getItem(`skillpath_roadmap_${activeCareer}`);
      if (savedRoadmap) {
        const parsed = JSON.parse(savedRoadmap);
        if (Array.isArray(parsed.completedTaskIds)) {
          const validTaskIds = new Set();
          if (typeof careerRoadmaps !== "undefined" && careerRoadmaps[activeCareer]) {
            careerRoadmaps[activeCareer].weeks.forEach((w) => {
              w.tasks.forEach((t) => validTaskIds.add(t.id));
            });
          }
          parsed.completedTaskIds.forEach((id) => {
            if (validTaskIds.has(id)) {
              completedTaskIds.add(id);
            }
          });
        }
      }
    } catch (err) {
      console.warn("SkillPath AI: Error reading roadmap storage:", err);
    }
  }

  // 3. Save Completed Tasks to localStorage
  function saveCompletedTasks() {
    try {
      const payload = {
        careerId: activeCareer,
        completedTaskIds: Array.from(completedTaskIds),
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`skillpath_roadmap_${activeCareer}`, JSON.stringify(payload));
    } catch (err) {
      console.warn("SkillPath AI: Error saving roadmap storage:", err);
    }
  }

  // 4. Update Context Card & Gap Notification
  function updateContextCard() {
    if (typeof careerRoadmaps === "undefined" || !careerRoadmaps[activeCareer]) return;
    const roadmap = careerRoadmaps[activeCareer];

    if (activeCareerNameEl) {
      activeCareerNameEl.textContent = roadmap.careerTitle;
    }

    if (hasCompletedAssessment) {
      let highCount = 0;
      let modCount = 0;
      Object.values(careerGapMap).forEach((gap) => {
        if (gap >= 2) highCount++;
        else if (gap === 1) modCount++;
      });

      if (assessmentStatusEl) {
        assessmentStatusEl.textContent = "Personalized by Assessment";
        assessmentStatusEl.classList.remove("badge-unassessed");
      }

      if (contextDescEl) {
        let summaryText = "";
        if (highCount > 0 && modCount > 0) {
          summaryText = `Based on your assessment, <strong>${highCount} High-Priority Gaps</strong> and <strong>${modCount} Moderate Gaps</strong> are prioritized in your study roadmap below.`;
        } else if (highCount > 0) {
          summaryText = `Based on your assessment, <strong>${highCount} High-Priority Gaps</strong> are prioritized in your study roadmap below.`;
        } else if (modCount > 0) {
          summaryText = `Based on your assessment, <strong>${modCount} Moderate Gaps</strong> are highlighted in your study roadmap below.`;
        } else {
          summaryText = `Outstanding! You have met all preparation targets for this career. Follow this roadmap to build your portfolio and rehearse technical interviews.`;
        }
        contextDescEl.innerHTML = summaryText;
      }
    } else {
      if (assessmentStatusEl) {
        assessmentStatusEl.textContent = "Default Preparation Plan";
        assessmentStatusEl.classList.add("badge-unassessed");
      }

      if (contextDescEl) {
        contextDescEl.innerHTML = `Showing the recommended 4-week preparation plan. <a href="#assessment" style="color: var(--primary-color); font-weight: 700;">Take the Skill Assessment</a> to highlight your personalized skill gap priorities!`;
      }
    }
  }

  // 5. Update Progress Dashboard
  function updateProgressDashboard() {
    if (typeof careerRoadmaps === "undefined" || !careerRoadmaps[activeCareer]) return;
    const roadmap = careerRoadmaps[activeCareer];

    let totalTasks = 0;
    const weekProgress = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const weekTotals = { 1: 0, 2: 0, 3: 0, 4: 0 };

    roadmap.weeks.forEach((week) => {
      const wNum = week.weekNumber;
      weekTotals[wNum] = week.tasks.length;
      totalTasks += week.tasks.length;

      week.tasks.forEach((task) => {
        if (completedTaskIds.has(task.id)) {
          weekProgress[wNum] = (weekProgress[wNum] || 0) + 1;
        }
      });
    });

    const completedTotal = completedTaskIds.size;
    const percent = totalTasks > 0 ? Math.round((completedTotal / totalTasks) * 100) : 0;
    const remainingTotal = Math.max(0, totalTasks - completedTotal);

    if (progressHeadline) {
      progressHeadline.textContent = `${percent}% Complete`;
    }

    if (progressBar) {
      progressBar.style.width = `${percent}%`;
      progressBar.setAttribute("aria-valuenow", percent);
    }

    if (completedCountEl) {
      completedCountEl.textContent = completedTotal;
    }

    if (remainingCountEl) {
      remainingCountEl.textContent = remainingTotal;
    }

    // Determine current focus week (first incomplete week)
    let currentFocusWeek = 1;
    for (let w = 1; w <= 4; w++) {
      if ((weekProgress[w] || 0) < (weekTotals[w] || 4)) {
        currentFocusWeek = w;
        break;
      }
    }

    if (currentFocusEl) {
      if (completedTotal === totalTasks && totalTasks > 0) {
        currentFocusEl.textContent = "All 4 Weeks Complete! 🎉";
        currentFocusEl.style.background = "#dcfce7";
        currentFocusEl.style.color = "#15803d";
      } else {
        const weekObj = roadmap.weeks.find((w) => w.weekNumber === currentFocusWeek);
        const title = weekObj ? weekObj.title : `Week ${currentFocusWeek}`;
        currentFocusEl.textContent = `Week ${currentFocusWeek}: ${title}`;
        currentFocusEl.style.background = "#e0e7ff";
        currentFocusEl.style.color = "#3730a3";
      }
    }

    // Update 4 week mini chips in progress dashboard
    for (let w = 1; w <= 4; w++) {
      const chipRatio = document.getElementById(`week-chip-ratio-${w}`);
      const chipItem = document.getElementById(`week-chip-${w}`);
      const done = weekProgress[w] || 0;
      const tot = weekTotals[w] || 4;

      if (chipRatio) {
        chipRatio.textContent = `${done}/${tot}`;
      }

      if (chipItem) {
        chipItem.classList.toggle("is-complete", done === tot && tot > 0);
        chipItem.classList.toggle("is-current", w === currentFocusWeek && done < tot);
      }

      // Update week card header badge if rendered
      const weekHeaderBadge = document.getElementById(`week-header-badge-${w}`);
      if (weekHeaderBadge) {
        if (done === tot && tot > 0) {
          weekHeaderBadge.textContent = "✓ Week Complete";
          weekHeaderBadge.classList.add("is-week-complete");
        } else {
          weekHeaderBadge.textContent = `${done}/${tot} Completed`;
          weekHeaderBadge.classList.remove("is-week-complete");
        }
      }
    }
  }

  // 6. Render Weekly Cards and Tasks
  function renderWeeks() {
    if (!weeksContainer) return;
    if (typeof careerRoadmaps === "undefined" || !careerRoadmaps[activeCareer]) {
      weeksContainer.innerHTML = `<p style="padding: 2rem; text-align: center; color: var(--text-muted);">Roadmap data not available for this career.</p>`;
      return;
    }

    const roadmap = careerRoadmaps[activeCareer];
    weeksContainer.innerHTML = "";

    const filteredWeeks = roadmap.weeks.filter((week) => {
      if (activeWeekFilter === "all") return true;
      return String(week.weekNumber) === String(activeWeekFilter);
    });

    filteredWeeks.forEach((week) => {
      const weekCard = document.createElement("div");
      weekCard.className = "roadmap-week-card";
      weekCard.id = `week-card-${week.weekNumber}`;

      const totalWeekTasks = week.tasks.length;
      let completedInWeek = 0;
      week.tasks.forEach((t) => {
        if (completedTaskIds.has(t.id)) completedInWeek++;
      });
      const isWeekDone = completedInWeek === totalWeekTasks && totalWeekTasks > 0;

      // Build Tasks HTML
      let tasksHtml = "";
      week.tasks.forEach((task) => {
        const isCompleted = completedTaskIds.has(task.id);
        const gap = careerGapMap[task.relatedSkillId];

        let priorityClass = "";
        let priorityBadge = "";

        if (hasCompletedAssessment && typeof gap === "number") {
          if (gap >= 2) {
            priorityClass = "is-high-priority";
            priorityBadge = `
              <span class="roadmap-gap-badge badge-high-gap" title="Gap = ${gap}: High Priority Focus based on your skill assessment">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>High-Priority Focus</span>
              </span>
            `;
          } else if (gap === 1) {
            priorityClass = "is-mod-priority";
            priorityBadge = `
              <span class="roadmap-gap-badge badge-mod-gap" title="Gap = 1: Target Focus based on your skill assessment">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>Target Focus</span>
              </span>
            `;
          } else {
            priorityBadge = `
              <span class="roadmap-gap-badge badge-met" title="Target Met: Reinforce core concepts">
                <span>Core Practice</span>
              </span>
            `;
          }
        } else {
          priorityBadge = `
            <span class="roadmap-gap-badge badge-met">
              <span>Core Practice</span>
            </span>
          `;
        }

        tasksHtml += `
          <div class="roadmap-task-card ${isCompleted ? "is-completed" : ""} ${priorityClass}" id="task-card-${task.id}">
            <div class="task-checkbox-wrap">
              <input type="checkbox" id="task-chk-${task.id}" class="task-checkbox" data-task-id="${task.id}" ${isCompleted ? "checked" : ""} aria-label="Mark task '${task.title}' as completed">
            </div>
            <div class="task-main-content">
              <div class="task-title-row">
                <label for="task-chk-${task.id}" class="task-main-title">${task.title}</label>
                ${priorityBadge}
              </div>
              <p class="task-description">${task.description}</p>
              <div class="task-meta-row">
                <span class="task-chip time-chip">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>${task.estimatedTime}</span>
                </span>
                <span class="task-chip skill-chip">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span>${task.relatedSkillName}</span>
                </span>
              </div>
            </div>
            <div class="task-action-wrap">
              <a href="${task.resourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-xs task-resource-btn" title="Open verified learning resource: ${task.resourceTitle}">
                <span>Open Resource</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        `;
      });

      weekCard.innerHTML = `
        <div class="week-card-header">
          <div class="week-header-left">
            <div class="week-badge-title-row">
              <span class="week-number-pill">Week ${week.weekNumber}</span>
              <h3 class="week-card-title">${week.title}</h3>
            </div>
            <p class="week-theme-text">${week.theme}</p>
          </div>
          <div class="week-header-right">
            <span class="week-progress-badge ${isWeekDone ? "is-week-complete" : ""}" id="week-header-badge-${week.weekNumber}">
              ${isWeekDone ? "✓ Week Complete" : `${completedInWeek}/${totalWeekTasks} Completed`}
            </span>
          </div>
        </div>
        <div class="roadmap-tasks-list">
          ${tasksHtml}
        </div>
      `;

      weeksContainer.appendChild(weekCard);
    });

    updateProgressDashboard();
  }

  // 7. Full Render Method for Active Career
  function renderRoadmap(careerId) {
    if (careerId) activeCareer = careerId;

    // Sync Career Pills Active State
    careerPills.forEach((pill) => {
      const match = pill.getAttribute("data-career") === activeCareer;
      pill.classList.toggle("active", match);
      pill.setAttribute("aria-selected", match ? "true" : "false");
    });

    calculateCareerGaps();
    loadCompletedTasks();
    updateContextCard();
    renderWeeks();
  }

  // 8. Event Delegation for Task Checkboxes
  if (weeksContainer) {
    weeksContainer.addEventListener("change", (e) => {
      if (e.target && e.target.classList.contains("task-checkbox")) {
        const taskId = e.target.getAttribute("data-task-id");
        if (!taskId) return;

        const card = document.getElementById(`task-card-${taskId}`);
        if (e.target.checked) {
          completedTaskIds.add(taskId);
          if (card) card.classList.add("is-completed");
        } else {
          completedTaskIds.delete(taskId);
          if (card) card.classList.remove("is-completed");
        }

        saveCompletedTasks();
        updateProgressDashboard();
      }
    });
  }

  // 9. Career Selector Pills Event Listeners
  careerPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const careerId = pill.getAttribute("data-career");
      if (careerId && careerId !== activeCareer) {
        activeCareer = careerId;
        renderRoadmap(careerId);
        try {
          localStorage.setItem("skillpath_latest_assessment", careerId);
        } catch (err) {}
      }
    });
  });

  // 10. Week Filter Tabs Event Listeners
  weekTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const weekVal = tab.getAttribute("data-week");
      if (weekVal) {
        activeWeekFilter = weekVal;
        weekTabs.forEach((t) => {
          const isSelected = t.getAttribute("data-week") === weekVal;
          t.classList.toggle("active", isSelected);
          t.setAttribute("aria-selected", isSelected ? "true" : "false");
        });
        renderWeeks();
      }
    });
  });

  // 11. Reset Progress Button
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const roadmap = (typeof careerRoadmaps !== "undefined" && careerRoadmaps[activeCareer])
        ? careerRoadmaps[activeCareer]
        : { careerTitle: "this" };

      const confirmed = window.confirm(
        `Are you sure you want to reset your progress for the ${roadmap.careerTitle} roadmap? This will clear all checked tasks.`
      );

      if (confirmed) {
        completedTaskIds.clear();
        try {
          localStorage.removeItem(`skillpath_roadmap_${activeCareer}`);
        } catch (err) {}

        // Uncheck all visible checkboxes
        const checkboxes = weeksContainer.querySelectorAll(".task-checkbox");
        checkboxes.forEach((chk) => {
          chk.checked = false;
        });

        const cards = weeksContainer.querySelectorAll(".roadmap-task-card");
        cards.forEach((card) => {
          card.classList.remove("is-completed");
        });

        updateProgressDashboard();
      }
    });
  }

  // 12. Retake Assessment & View Gaps Buttons in Context Card
  if (retakeAssessmentBtn) {
    retakeAssessmentBtn.addEventListener("click", () => {
      if (typeof window.startCareerAssessment === "function") {
        window.startCareerAssessment(activeCareer, true);
      }
    });
  }

  if (viewGapsBtn) {
    viewGapsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.showCareerGapAnalysis === "function") {
        window.showCareerGapAnalysis(activeCareer, true);
      }
    });
  }

  // 13. Cross-Module Buttons
  if (gapViewRoadmapBtn) {
    gapViewRoadmapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.showCareerRoadmap(activeCareer, true);
    });
  }

  if (resToRoadmapBtn) {
    resToRoadmapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.showCareerRoadmap(activeCareer, true);
    });
  }

  // 14. Global API Hooks
  window.showCareerRoadmap = function(careerId, shouldScroll = true) {
    if (careerId && (typeof careerRoadmaps !== "undefined" && careerRoadmaps[careerId])) {
      activeCareer = careerId;
    }
    renderRoadmap(activeCareer);

    if (shouldScroll && roadmapSection) {
      roadmapSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  window.updateRoadmap = function(careerId) {
    if (careerId && (typeof careerRoadmaps !== "undefined" && careerRoadmaps[careerId])) {
      activeCareer = careerId;
    }
    renderRoadmap(activeCareer);
  };

  // Initial Render
  renderRoadmap(activeCareer);
}

/* --------------------------------------------------------------------------
   4. Footer Career Quick Links
   -------------------------------------------------------------------------- */
function initFooterCareerLinks() {
  const footerCareerLinks = document.querySelectorAll(".footer-career-link");
  footerCareerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const careerId = link.getAttribute("data-career");
      if (careerId && typeof window.selectCareerPath === "function") {
        const careersSection = document.getElementById("careers");
        if (careersSection) {
          careersSection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            window.selectCareerPath(careerId, true);
          }, 350);
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. ScrollSpy / Active Header Link on Scroll
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 140; // Header offset
    let currentId = "home";

    // Track current section by offset
    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentId}`);
    });
  }, { passive: true });
}
