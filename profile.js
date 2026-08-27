/* =====================================================
   NOIRÉ — MY PROFILE PAGE
   ===================================================== */

const profileSubtext = document.getElementById("profileSubtext");
const profileContent = document.getElementById("profileContent");

const profileNameInput = document.getElementById("profileName");
const profileEmailInput = document.getElementById("profileEmail");
const profileVerifiedInput = document.getElementById("profileVerified");
const profileJoinedInput = document.getElementById("profileJoined");

const profileMessage = document.getElementById("profileMessage");
const resendVerificationBtn = document.getElementById("resendVerificationBtn");
const profileLogoutBtn = document.getElementById("profileLogoutBtn");

auth.onAuthStateChanged((user) => {

    if (!user) {
        // Not logged in — send them to sign in instead of showing a blank profile.
        window.location.href = "login.html";
        return;
    }

    profileSubtext.textContent =
        "Here's what we have on file for you.";

    profileNameInput.value = user.displayName || "Not set";
    profileEmailInput.value = user.email || "Not set";
    profileVerifiedInput.value = user.emailVerified ? "Yes ✅" : "Not verified yet";

    if (user.metadata && user.metadata.creationTime) {
        const joined = new Date(user.metadata.creationTime);
        profileJoinedInput.value = joined.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    } else {
        profileJoinedInput.value = "Unknown";
    }

    // Hide the resend-verification button once verified.
    if (user.emailVerified && resendVerificationBtn) {
        resendVerificationBtn.style.display = "none";
    }

    profileContent.style.display = "block";

});

if (resendVerificationBtn) {

    resendVerificationBtn.addEventListener("click", async () => {

        const user = auth.currentUser;

        if (!user) return;

        resendVerificationBtn.disabled = true;

        try {

            await user.sendEmailVerification();

            profileMessage.textContent =
                "Verification email sent — check your inbox.";

        } catch (error) {

            console.error("Resend verification error:", error);

            profileMessage.textContent =
                "Something went wrong. Please try again shortly.";

        } finally {

            resendVerificationBtn.disabled = false;

        }

    });

}

if (profileLogoutBtn) {

    profileLogoutBtn.addEventListener("click", async () => {

        try {

            await auth.signOut();

            window.location.href = "index.html";

        } catch (error) {

            console.error("Sign out error:", error);

        }

    });

}
