
// Mock dataset of seller-uploaded items (updated with your universities)
const items = [
    { name: "Calculus Textbook", price: 15, university: "kiu.ac.ug", image: "placeholder", campus: "Kampala International University Western Campus" },
    { name: "Desk Lamp", price: 20, university: "kiu.ac.ug", image: "placeholder", campus: "Kampala International University Main Campus" },
    { name: "Laptop", price: 300, university: "mak.ac.ug", image: "placeholder", campus: "Makerere University Main Campus" },
    { name: "Chair", price: 25, university: "kyu.ac.ug", image: "placeholder", campus: "Kyambogo University Main Campus" },
    { name: "Physics Textbook", price: 10, university: "kyu.ac.ug", image: "placeholder", campus: "Kyambogo University Bushenyi Campus" },
    { name: "Headphones", price: 40, university: "gu.ac.ug", image: "placeholder", campus: "Gulu University Main Campus" },
    { name: "Bed Frame", price: 50, university: "gu.ac.ug", image: "placeholder", campus: "Gulu University Kitgum Campus" },
    { name: "Jacket", price: 30, university: "mu.ac.ug", image: "placeholder", campus: "Mbarara University Main Campus" },
    { name: "Notebook", price: 5, university: "ucu.ac.ug", image: "placeholder", campus: "Uganda Christian University Main Campus" },
    { name: "Table", price: 35, university: "busitema.ac.ug", image: "placeholder", campus: "Busitema University Main Campus" },
];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const universitySelect = document.getElementById('universitySelect');
const advertsGrid = document.getElementById('advertsGrid');

// Dynamically populate university options
const universities = [
    { value: "kiu.ac.ug", text: "Kampala International University Western Campus" },
    { value: "kiu.ac.ug", text: "Kampala International University Main Campus" },
    { value: "mak.ac.ug", text: "Makerere University Main Campus" },
    { value: "kyu.ac.ug", text: "Kyambogo University Main Campus" },
    { value: "kyu.ac.ug", text: "Kyambogo University Bushenyi Campus" },
    { value: "gu.ac.ug", text: "Gulu University Main Campus" },
    { value: "gu.ac.ug", text: "Gulu University Kitgum Campus" },
    { value: "gu.ac.ug", text: "Gulu University Hoima Campus" },
    { value: "gu.ac.ug", text: "Gulu University Kotido Campus" },
    { value: "gu.ac.ug", text: "Gulu University Moroto College" },
    { value: "mu.ac.ug", text: "Mbarara University Main Campus" },
    { value: "mu.ac.ug", text: "Mbarara University Kihumuro Campus" },
    { value: "ucu.ac.ug", text: "Uganda Christian University Main Campus" },
    { value: "ucu.ac.ug", text: "Uganda Christian University Kampala Campus" },
    { value: "ucu.ac.ug", text: "Uganda Christian University Mbale College" },
    { value: "ucu.ac.ug", text: "Uganda Christian University Arua Campus" },
    { value: "ucu.ac.ug", text: "Bishop Barham University College Kabale" },
    { value: "busitema.ac.ug", text: "Busitema University Main Campus" },
    { value: "busitema.ac.ug", text: "Busitema University Nagongera Campus" },
    { value: "busitema.ac.ug", text: "Busitema University Mbale Campus" },
    { value: "busitema.ac.ug", text: "Busitema University Arapai Campus" },
    { value: "busitema.ac.ug", text: "Busitema University Namasagali Campus" },
    { value: "busitema.ac.ug", text: "Busitema University Pallisa Campus" },
    { value: "kab.ac.ug", text: "Kabale University Main Campus" },
    { value: "kab.ac.ug", text: "Kabale University Nyabikoni Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Main Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Lubaga Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Masaka Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Mbale Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Kabale Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Mbarara Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Lira Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Fort Portal Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Nsambya Campus" },
    { value: "umu.ac.ug", text: "Uganda Martyrs University Moyo Campus" },
    { value: "iuiu.ac.ug", text: "Islamic University In Uganda Main Campus" },
    { value: "iuiu.ac.ug", text: "Islamic University In Uganda Kampala Campus" },
    { value: "iuiu.ac.ug", text: "Islamic University In Uganda Female's Campus" },
    { value: "iuiu.ac.ug", text: "Islamic University In Uganda Arua Campus" },
    { value: "mmu.ac.ug", text: "Mountains of the Moon University Lake Saaka Campus" },
    { value: "mmu.ac.ug", text: "Mountains of the Moon University Down Town Campus" },
    { value: "mubs.ac.ug", text: "Makerere University Business School Main Campus" },
    { value: "mubs.ac.ug", text: "Makerere University Business School Arua Campus" },
    { value: "mubs.ac.ug", text: "Makerere University Business School Jinja Campus" },
    { value: "mubs.ac.ug", text: "Makerere University Business School Mbale Campus" },
    { value: "mubs.ac.ug", text: "Makerere University Business School Mbarara Campus" },
    { value: "umi.ac.ug", text: "Uganda Management Institute Main Campus" },
    { value: "umi.ac.ug", text: "Uganda Management Institute Gulu Campus" },
    { value: "umi.ac.ug", text: "Uganda Management Institute Mbarara Campus" },
    { value: "umi.ac.ug", text: "Uganda Management Institute Mbale Campus" },
    { value: "ndu.ac.ug", text: "Ndejje University Main Campus" },
    { value: "ndu.ac.ug", text: "Ndejje University Kampala Campus" },
    { value: "clarke.ac.ug", text: "Clarke International University" },
    { value: "bsu.ac.ug", text: "Bishop Stuart University Main Campus" },
    { value: "bsu.ac.ug", text: "Bishop Stuart University Ruharo Campus" },
    { value: "mu.ac.ug", text: "Muni University" },
    { value: "nkumba.ac.ug", text: "Nkumba University Main Campus" },
    { value: "nkumba.ac.ug", text: "Nkumba University Kampala Campus" },
    { value: "nkumba.ac.ug", text: "Nkumba University Kyegegwa Campus" },
    { value: "utamu.ac.ug", text: "Uganda Technology & Management University" },
    { value: "vu.ac.ug", text: "Victoria University Market Plaza Campus" },
    { value: "vu.ac.ug", text: "Victoria University Main Campus" },
    { value: "iuea.ac.ug", text: "International University of East Africa" },
    { value: "bugema.ac.ug", text: "Bugema University Main Campus" },
    { value: "bugema.ac.ug", text: "Bugema University Kampala Campus" },
    { value: "bugema.ac.ug", text: "Bugema University Arua Campus" },
    { value: "lu.ac.ug", text: "Lira University" },
    { value: "ku.ac.ug", text: "Kumi University Main Campus" },
    { value: "ku.ac.ug", text: "Kumi University Soroti Campus" },
    { value: "cu.ac.ug", text: "Cavendish University Main Campus" },
    { value: "cu.ac.ug", text: "Cavendish University Acacia Law Campus" },
    { value: "cu.ac.ug", text: "Cavendish University Kingsgate Campus" },
    { value: "ku.ac.ug", text: "Kampala University Main Campus" },
    { value: "ku.ac.ug", text: "Kampala University Old Kampala Campus" },
    { value: "ku.ac.ug", text: "Kampala University Luwero Campus" },
    { value: "ku.ac.ug", text: "Kampala University Masaka Campus" },
    { value: "ku.ac.ug", text: "Kampala University Mutundwe Campus" },
    { value: "ldc.ac.ug", text: "Law Development Center Kampala Main Campus" },
    { value: "ldc.ac.ug", text: "Law Development Center Kampala Mbarara Campus" },
    { value: "ldc.ac.ug", text: "Law Development Center Kampala Lira Campus" },
    { value: "mru.ac.ug", text: "Mutesa 1 Royal University Main Campus" },
    { value: "mru.ac.ug", text: "Mutesa 1 Royal University Masaka Campus" },
    { value: "mru.ac.ug", text: "Mutesa 1 Royal University Mengo Campus" },
    { value: "mru.ac.ug", text: "Mutesa 1 Royal University Mubende Campus" },
    { value: "liu.ac.ug", text: "Livingstone International University" },
    { value: "uiit.ac.ug", text: "Uganda Institute of Information and Technology" },
    { value: "su.ac.ug", text: "Soroti University" },
    { value: "aru.ac.ug", text: "African Rural University" },
    { value: "isbat.ac.ug", text: "ISBAT University" },
    { value: "slu.ac.ug", text: "St Lawrence University" },
    { value: "univ-of-kisubi.ac.ug", text: "University of Kisubi" },
    { value: "atsu.ac.ug", text: "African Theological Seminary University" },
    { value: "upu.ac.ug", text: "Uganda Pentecostal University" },
    { value: "itu.ac.ug", text: "Insurance Training University" },
    { value: "kcu.ac.ug", text: "King Ceasor University" },
    { value: "tu.ac.ug", text: "Team University" },
    { value: "uib.ac.ug", text: "Uganda Institute of Banking University" },
    { value: "awu.ac.ug", text: "Ankole Western University" },
    { value: "miu.ac.ug", text: "Metropolitan International University" },
    { value: "iu.ac.ug", text: "Ibanda University" },
    { value: "ips.ac.ug", text: "Institute of Petroleum Studies" },
    { value: "ushg.ac.ug", text: "University of the Sacred Heart Gulu" },
    { value: "iiu.ac.ug", text: "Ivance International University" },
    { value: "asu.ac.ug", text: "All Saints University" },
    { value: "aru.ac.ug", text: "African Renewal University" },
    { value: "vust.ac.ug", text: "Valley University of Science and Technology" },
    { value: "glru.ac.ug", text: "Great Lakes Regional University" },
    { value: "fmu.ac.ug", text: "Fins Medical University" },
    { value: "kiu.ac.ug", text: "Kayiwa International University" }
];

// Dynamically populate the university select
universities.forEach(university => {
    const option = document.createElement('option');
    option.value = university.value;
    option.text = university.text;
    universitySelect.appendChild(option);
});

// Function to show product details
function showProductDetails(item) {
    const productDetails = `
        <div class="product-details">
            <h2>${item.name}</h2>
            <p><strong>Price:</strong> $${item.price}</p>
            <p><strong>University:</strong> ${item.university}</p>
            <p><strong>Campus:</strong> ${item.campus}</p>
            <div class="advert-image">${item.image}</div>
            <p><a href="https://wa.me/${item.whatsappNumber}" target="_blank">Contact Seller on WhatsApp</a></p>
        </div>
    `;
    advertsGrid.innerHTML = productDetails; // Replace the adverts grid with product details
}

// Updated renderAdverts function
function renderAdverts(filteredItems) {
    advertsGrid.innerHTML = ''; // Clear current adverts
    if (filteredItems.length === 0) {
        advertsGrid.innerHTML = '<p>No items found.</p>';
        return;
    }
    filteredItems.forEach(item => {
        const advertDiv = document.createElement('div');
        advertDiv.className = 'advert';
        advertDiv.innerHTML = `
            <div class="advert-image">${item.image}</div>
            <p>${item.name} - $${item.price} (from ${item.campus})</p>
        `;
        advertDiv.addEventListener('click', () => showProductDetails(item)); // Add click event to show details
        advertsGrid.appendChild(advertDiv);
    });
}
// Function to filter items based on search term and selected universities
function filterItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedUniversities = Array.from(universitySelect.selectedOptions).map(option => option.value);

    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        const matchesUniversity = selectedUniversities.length === 0 || selectedUniversities.includes(item.university);
        return matchesSearch && matchesUniversity;
    });

    renderAdverts(filteredItems);
}

// Initial render (show all items)
renderAdverts(items);

// Add event listeners for search and university selection
searchInput.addEventListener('input', filterItems);
universitySelect.addEventListener('change', filterItems);
const exploreBtn = document.getElementById('exploreBtn');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const categories = document.querySelectorAll('.category');
const subcategories = document.querySelectorAll('.subcategory');
const subcategoryPanels = document.querySelectorAll('.subcategory-panel');
const subcategoryBacks = document.querySelectorAll('.subcategory-back');

// Toggle sidebar
exploreBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    // Close any open subcategory panels
    subcategoryPanels.forEach(panel => panel.classList.remove('active'));
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    subcategoryPanels.forEach(panel => panel.classList.remove('active'));
});

// Toggle subcategories on category click
categories.forEach(category => {
    category.addEventListener('click', (e) => {
        const hasSub = category.getAttribute('data-has-sub');
        if (hasSub === 'true') {
            // Close other subcategory panels
            subcategoryPanels.forEach(panel => panel.classList.remove('active'));
            const subPanel = category.querySelector('.subcategory-panel');
            subPanel.classList.toggle('active');
            e.stopPropagation();
        } else {
            filterItems(category.textContent.trim());
            sidebar.classList.remove('active');
        }
    });
});

// Handle subcategory selection
subcategories.forEach(subcategory => {
    subcategory.addEventListener('click', (e) => {
        const category = subcategory.closest('.category').textContent.trim();
        const subCategoryText = subcategory.textContent.trim();
        filterItems(subCategoryText.includes('All ') ? category : subCategoryText);
        sidebar.classList.remove('active');
        subcategoryPanels.forEach(panel => panel.classList.remove('active'));
        e.stopPropagation();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navProfile = document.getElementById('navProfile');
    const navContactUs = document.getElementById('navContactUs');
    const navSettings = document.getElementById('navSettings');
    const navPostAd = document.getElementById('navPostAd');
    const navFAQs = document.getElementById('navFAQs');
    const profileSection = document.getElementById('profileSection');
    const contactUsSection = document.getElementById('contactUsSection');
    const settingsSection = document.getElementById('settingsSection');
    const postAdSection = document.getElementById('postAdSection');
    const faqsSection = document.getElementById('faqsSection');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const resetCodeForm = document.getElementById('resetCodeForm');
    const userInfo = document.getElementById('userInfo');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    const registerLink = document.getElementById('registerLink');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const registerUsername = document.getElementById('registerUsername');
    const registerEmail = document.getElementById('registerEmail');
    const registerPassword = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const registerBtn = document.getElementById('registerBtn');
    const backToLogin = document.getElementById('backToLogin');
    const forgotEmail = document.getElementById('forgotEmail');
    const sendResetCode = document.getElementById('sendResetCode');
    const resetCode = document.getElementById('resetCode');
    const newPassword = document.getElementById('newPassword');
    const resetPassword = document.getElementById('resetPassword');
    const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');
    const rememberPassword = document.getElementById('rememberPassword');
    const loginHere = document.getElementById('loginHere');
    const logoutBtn = document.getElementById('logoutBtn');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const postAdForm = document.getElementById('postAdForm');
    let currentUser = null;
    let resetCodeSent = null;

    // Function to show top-level sections
    function showSection(sectionId) {
        [profileSection, contactUsSection, settingsSection, postAdSection, faqsSection].forEach(sec => {
            if (sec) sec.style.display = 'none';
        });
        const section = document.getElementById(sectionId);
        if (section) section.style.display = 'block';
    }

    // Function to show specific forms within profileSection
    function showProfileForm(formId) {
        [loginForm, registerForm, forgotPasswordForm, resetCodeForm, userInfo].forEach(form => {
            if (form) form.style.display = 'none';
        });
        const form = document.getElementById(formId);
        if (form) form.style.display = 'block';
    }
    // Navigation handlers
    if (navProfile) {
        navProfile.addEventListener('click', () => {
            showSection('profileSection');
            if (currentUser) {
                showProfileForm('userInfo');
                if (welcomeMessage) welcomeMessage.textContent = `Welcome ${currentUser.name}!`;
                if (userName) userName.textContent = currentUser.name;
                if (userEmail) userEmail.textContent = currentUser.email || 'N/A';
            } else {
                showProfileForm('loginForm');
                if (welcomeMessage) welcomeMessage.textContent = 'Welcome! Please log in or register.';
            }
        });
    }

    if (navContactUs) navContactUs.addEventListener('click', () => showSection('contactUsSection'));
    if (navSettings) navSettings.addEventListener('click', () => showSection('settingsSection'));
    if (navPostAd) navPostAd.addEventListener('click', () => showSection('postAdSection'));
    if (navFAQs) navFAQs.addEventListener('click', () => showSection('faqsSection'));

    if (backToLogin) backToLogin.addEventListener('click', () => showProfileForm('loginForm'));

    // Forgot Password
    if (forgotPasswordLink) forgotPasswordLink.addEventListener('click', () => showProfileForm('forgotPasswordForm'));
    if (sendResetCode) {
        sendResetCode.addEventListener('click', () => {
            const emailOrWhatsApp = forgotEmail?.value.trim() || '';
            if (!emailOrWhatsApp) {
                alert('Please enter your email or WhatsApp number.');
                return;
            }
            resetCodeSent = Math.floor(1000 + Math.random() * 9000);
            alert(`Verification code ${resetCodeSent} sent to ${emailOrWhatsApp}`);
            if (forgotEmail) forgotEmail.style.display = 'none';
            if (sendResetCode) sendResetCode.style.display = 'none';
            if (resetCodeForm) resetCodeForm.style.display = 'block';
        });
    }
    if (resetPassword) {
        resetPassword.addEventListener('click', () => {
            const code = resetCode?.value.trim() || '';
            const newPass = newPassword?.value.trim() || '';
            if (!code || !newPass) {
                alert('Please enter the reset code and new password.');
                return;
            }
            if (parseInt(code) === resetCodeSent) {
                currentUser.password = newPass;
                showProfileForm('userInfo');
                if (welcomeMessage) welcomeMessage.textContent = `Congratulations ${currentUser.name}, your password has been reset!`;
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 2000);
            } else {
                alert('Invalid code!');
            }
            if (resetCode) resetCode.value = '';
            if (newPassword) newPassword.value = '';
        });
    }
    if (backToLoginFromForgot) backToLoginFromForgot.addEventListener('click', () => showProfileForm('loginForm'));
    if (rememberPassword) {
        rememberPassword.addEventListener('click', () => {
            if (loginHere) loginHere.style.display = 'block';
        });
    }
    if (loginHere) loginHere.addEventListener('click', () => showProfileForm('loginForm'));

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            currentUser = null;
            showProfileForm('loginForm');
            if (welcomeMessage) welcomeMessage.textContent = 'Welcome! Please log in or register.';
        });
    }

    // Dark Mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode', darkModeToggle.checked);
            localStorage.setItem('darkMode', darkModeToggle.checked);
        });
    }
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (darkModeToggle) darkModeToggle.checked = savedDarkMode;
    document.body.classList.toggle('dark-mode', savedDarkMode);
});

document.addEventListener('DOMContentLoaded', () => {
    const nexusAIFloatingIcon = document.getElementById('nexusAIFloatingIcon');
    const nexusAiSection = document.getElementById('nexusAiSection');
    const nexusAIChatLog = document.getElementById('nexusAIChatLog');
    const nexusAIInput = document.getElementById('nexusAIInput');
    const nexusAISubmit = document.getElementById('nexusAISubmit');
    const nexusAILoading = document.getElementById('nexusAILoading');

    // Toggle Nexus AI Chat Section
    nexusAIFloatingIcon.addEventListener('click', () => {
        nexusAiSection.style.display = nexusAiSection.style.display === 'none' ? 'block' : 'none';
    });

    // Handle Nexus AI Input
    nexusAISubmit.addEventListener('click', async () => {
        const userInput = nexusAIInput.value.trim();
        if (!userInput) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Nexus: Please enter a question or message. 😅';
            nexusAIChatLog.appendChild(errorMessage);
            nexusAIChatLog.scrollTop = nexusAIChatLog.scrollHeight;
            return;
        }

        // Add user message to chat log
        const userMessage = document.createElement('p');
        userMessage.textContent = `You: ${userInput}`;
        userMessage.style.backgroundColor = '#d1e7dd';
        userMessage.style.padding = '10px';
        userMessage.style.borderRadius = '5px';
        nexusAIChatLog.appendChild(userMessage);

        // Clear input field
        nexusAIInput.value = '';

        // Show loading indicator
        nexusAILoading.style.display = 'block';

        try {
            // Fetch response from DeepSeek API
            const response = await fetch('https://api.deepseek.com/v1/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer sk-b7a344df58ef4400a1de2c7bafffc888`, // Replace with your DeepSeek API key
                },
                body: JSON.stringify({
                    query: userInput, // The user's input
                }),
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            const aiMessage = document.createElement('p');
            aiMessage.textContent = `Nexus: ${data.answer}`; // Adjust based on DeepSeek API response structure
            aiMessage.style.backgroundColor = '#f1f1f1';
            aiMessage.style.padding = '10px';
            aiMessage.style.borderRadius = '5px';
            nexusAIChatLog.appendChild(aiMessage);
        } catch (error) {
            console.error('Error:', error); // Log the error for debugging
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Nexus: Oops! Something went wrong. Please try again later. 😓';
            errorMessage.style.color = 'red';
            nexusAIChatLog.appendChild(errorMessage);
        } finally {
            // Hide loading indicator
            nexusAILoading.style.display = 'none';
            nexusAIChatLog.scrollTop = nexusAIChatLog.scrollHeight;
        }
    });

    // Allow pressing Enter to submit
    nexusAIInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            nexusAISubmit.click();
        }
    });
});