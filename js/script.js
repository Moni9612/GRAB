/* ==========================================
   GRAB VIDEO SOUND CONTROL
   ========================================== */

function toggleGrabSound() {
    const video = document.getElementById("grabExperimentVideo");
    const button = document.getElementById("grabSoundButton");

    if (!video || !button) return;

    video.muted = !video.muted;

    button.textContent = video.muted
        ? "🔊 Enable Sound"
        : "🔇 Mute Sound";

    if (video.paused) {
        video.play().catch(error => {
            console.log("Video playback could not start:", error);
        });
    }
}
