/* =====================================================
   NOIRÉ AUTH BACKGROUND SLIDESHOW
   ===================================================== */

const authBackgrounds = [
    "images/auth-background.jpg",
    "images/auth-background-2.jpg",
    "images/auth-background-3.jpg",
    "images/auth-background-4.jpg"
];

let currentBackground = 0;

function changeAuthBackground() {

    currentBackground++;

    if (currentBackground >= authBackgrounds.length) {
        currentBackground = 0;
    }

    const authPage = document.querySelector(".auth-page");

    if (authPage) {
        authPage.style.backgroundImage =
            `linear-gradient(
                rgba(0, 0, 0, 0.68),
                rgba(0, 0, 0, 0.78)
            ),
            url("${authBackgrounds[currentBackground]}")`;
    }
}

setInterval(changeAuthBackground, 5000);


/* =====================================================
   PASSWORD SHOW / HIDE
   ===================================================== */

const togglePassword = document.getElementById("togglePassword");
const loginPassword = document.getElementById("loginPassword");

if (togglePassword && loginPassword) {

    togglePassword.addEventListener("click", () => {

        if (loginPassword.type === "password") {
            loginPassword.type = "text";
            togglePassword.textContent = "Hide";
        } else {
            loginPassword.type = "password";
            togglePassword.textContent = "Show";
        }

    });

}


/* =====================================================
   SIGN UP PASSWORD SHOW / HIDE
   ===================================================== */

const toggleSignupPassword =
    document.getElementById("toggleSignupPassword");

const signupPassword =
    document.getElementById("signupPassword");

if (toggleSignupPassword && signupPassword) {

    toggleSignupPassword.addEventListener("click", () => {

        if (signupPassword.type === "password") {
            signupPassword.type = "text";
            toggleSignupPassword.textContent = "Hide";
        } else {
            signupPassword.type = "password";
            toggleSignupPassword.textContent = "Show";
        }

    });

}


/* =====================================================
   FIREBASE CONFIGURATION
   ===================================================== */

const firebaseConfig = {
    apiKey: "AIzaSyATs4TKMSigib941LWeTZv58NBogW8TCRQ",
    authDomain: "noire-boutique.firebaseapp.com",
    projectId: "noire-boutique",
    storageBucket: "noire-boutique.firebasestorage.app",
    messagingSenderId: "410533592392",
    appId: "1:410533592392:web:e26ee22c0970e12ae1877d",
    measurementId: "G-9M6HYEXNWD"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


/* =====================================================
   ACCOUNT MENU — SYNC WITH LOGIN STATE
   ===================================================== */

const accountWelcome = document.getElementById("accountWelcome");
const loggedInItems = document.getElementById("accountLoggedInItems");
const loggedOutItems = document.getElementById("accountLoggedOutItems");
const logoutBtn = document.getElementById("logoutBtn");

auth.onAuthStateChanged((user) => {

    if (!accountWelcome || !loggedInItems || !loggedOutItems) {
        // Account menu isn't on this page — nothing to update.
        return;
    }

    if (user) {

        const displayName = user.displayName || "there";

        accountWelcome.textContent = `Welcome, ${displayName} 👋`;

        loggedInItems.style.display = "block";
        loggedOutItems.style.display = "none";

    } else {

        accountWelcome.textContent = "Welcome 👋";

        loggedInItems.style.display = "none";
        loggedOutItems.style.display = "block";

    }

});

if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

        try {
            await auth.signOut();
        } catch (error) {
            console.error("Sign out error:", error);
        }

    });

}


/* =====================================================
   ACCOUNT MENU — OPEN / CLOSE ON CLICK
   ===================================================== */

const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");

if (accountBtn && accountMenu) {

    accountBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        accountMenu.classList.toggle("active");

    });

    // Close the menu when clicking anywhere outside it.
    document.addEventListener("click", (event) => {

        if (!accountMenu.classList.contains("active")) return;

        const clickedInsideMenu = accountMenu.contains(event.target);
        const clickedButton = accountBtn.contains(event.target);

        if (!clickedInsideMenu && !clickedButton) {
            accountMenu.classList.remove("active");
        }

    });

    // Close the menu after clicking a link/button inside it,
    // except the logout button (which has its own handler above).
    accountMenu.addEventListener("click", (event) => {

        const target = event.target.closest(".account-menu-item");

        if (target && target.id !== "logoutBtn") {
            accountMenu.classList.remove("active");
        }

    });

}


/* =====================================================
   CUSTOMER SIGN UP
   ===================================================== */
const signupForm =
    document.getElementById("signupForm");
if (signupForm) {

    signupForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const name =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("signupMessage");

        const submitButton =
            signupForm.querySelector("button[type='submit']");


        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            return;
        }

        if (submitButton) submitButton.disabled = true;


        try {

            message.textContent =
                "Creating your account...";


            const userCredential =
                await auth.createUserWithEmailAndPassword(
                    email,
                    password
                );


            const user =
                userCredential.user;


            await user.updateProfile({
                displayName: name
            });

            await user.sendEmailVerification();


            message.textContent =
                "Account created! Check your inbox to verify your email.";


            setTimeout(() => {

                window.location.href =
                    "index.html";

            }, 1500);


        } catch (error) {

            console.error("Signup error:", error);

            message.textContent =
                getAuthErrorMessage(error);

        } finally {

            if (submitButton) submitButton.disabled = false;

        }

    });

}


/* =====================================================
   CUSTOMER SIGN IN
   ===================================================== */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");


        try {

            message.textContent =
                "Signing you in...";


            await auth.signInWithEmailAndPassword(
                email,
                password
            );


            message.textContent =
                "Welcome back!";


            setTimeout(() => {

                window.location.href =
                    "index.html";

            }, 1000);


        } catch (error) {

            console.error(error);

            message.textContent =
                getAuthErrorMessage(error);

        }

    });

}


/* =====================================================
   FORGOT PASSWORD
   ===================================================== */

const forgotPassword =
    document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener("click", async (event) => {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const message =
            document.getElementById("loginMessage");


        if (!email) {

            message.textContent =
                "Enter your email address first.";

            return;
        }


        try {

            await auth.sendPasswordResetEmail(email);


            message.textContent =
                "Password reset email sent. Check your inbox.";


        } catch (error) {

            console.error("Password reset error:", error);

            message.textContent =
                getAuthErrorMessage(error);

        }

    });

}


/* =====================================================
   FIREBASE ERROR MESSAGES
   ===================================================== */

function getAuthErrorMessage(error) {

    switch (error.code) {

        case "auth/email-already-in-use":
            return "This email already has an account.";

        case "auth/invalid-email":
            return "Please enter a valid email address.";

        case "auth/weak-password":
            return "Password must be at least 6 characters.";

        case "auth/user-not-found":
            return "No account was found with this email.";

        case "auth/wrong-password":
        case "auth/invalid-credential":
            return "Incorrect email or password.";

        case "auth/too-many-requests":
            return "Too many attempts. Please try again later.";

        default:
            return "Something went wrong. Please try again.";

    }

}