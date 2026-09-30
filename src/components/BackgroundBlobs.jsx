import { forwardRef } from "react";

// Renders the ambient corner-glow behind the grid-paper background.
// (Named BackgroundBlobs for backwards-compat with existing imports/CSS class.)
const BackgroundBlobs = forwardRef((props, ref) => {
  return <div className="background-blobs" ref={ref}></div>;
});

export default BackgroundBlobs;
