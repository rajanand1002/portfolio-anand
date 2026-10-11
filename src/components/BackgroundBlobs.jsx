// Slow-drifting aurora background (pure CSS animation, no JS).
// Three soft glows move very gradually behind the page content.
export default function BackgroundBlobs() {
  return (
    <div className="background-blobs bg-animated" aria-hidden="true">
      <span className="bg-orb bg-orb-1"></span>
      <span className="bg-orb bg-orb-2"></span>
      <span className="bg-orb bg-orb-3"></span>
    </div>
  );
}